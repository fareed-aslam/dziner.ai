const imageCache = new Map<string, string>();

/**
 * Resolves Unsplash search placeholders and dead `source.unsplash.com` URLs
 * in generated HTML into real, high-resolution image URLs using the Unsplash API,
 * with reliable fallback to Picsum Photos.
 */
export async function resolveImagesInHTML(html: string): Promise<string> {
  if (!html) return html;

  const accessKey =
    process.env.UNSPLASH_ACCESS_KEY || process.env.UNSPLASH_API_KEY;

  async function getPhotoUrl(query: string, orientation = "landscape"): Promise<string> {
    const cleanQuery = query
      .replace(/['"\\]/g, "")
      .replace(/[^a-zA-Z0-9\s-]/g, " ")
      .trim() || "modern mobile app";

    const cacheKey = `${cleanQuery}-${orientation}`;
    if (imageCache.has(cacheKey)) {
      return imageCache.get(cacheKey)!;
    }

    if (accessKey) {
      try {
        const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          cleanQuery,
        )}&orientation=${orientation}&per_page=1&client_id=${accessKey}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          const photoUrl = data?.results?.[0]?.urls?.regular;
          if (photoUrl) {
            imageCache.set(cacheKey, photoUrl);
            return photoUrl;
          }
        }
      } catch (err) {
        console.warn("Unsplash API fetch failed:", err);
      }
    }

    // Fallback: Picsum Photos with deterministic seed (always reliable, high-res)
    const seed = encodeURIComponent(cleanQuery.toLowerCase().replace(/\s+/g, "-"));
    const fallbackUrl = `https://picsum.photos/seed/${seed}/800/600`;
    imageCache.set(cacheKey, fallbackUrl);
    return fallbackUrl;
  }

  let processedHtml = html;

  // 1. Match `${searchUnsplash(query='...', orientation='...')}` or `searchUnsplash(...)`
  const toolCallRegex = /(?:\$\{)?searchUnsplash\(\s*(?:query\s*=\s*)?['"]([^'"]+)['"](?:\s*,\s*(?:orientation\s*=\s*)?['"]([^'"]+)['"])?\s*\)(?:\})?/gi;
  const toolMatches = Array.from(processedHtml.matchAll(toolCallRegex));

  for (const match of toolMatches) {
    const rawMatch = match[0];
    const query = match[1];
    const orientation = match[2] || "landscape";
    const realUrl = await getPhotoUrl(query, orientation);
    processedHtml = processedHtml.replace(rawMatch, realUrl);
  }

  // 2. Match deprecated `source.unsplash.com/...` (matches until next closing quote/bracket)
  const sourceUnsplashRegex = /https?:\/\/source\.unsplash\.com\/[^"'`)\s>]+(?:\s+[^"'`)\s>]+)*/gi;
  const sourceMatches = Array.from(processedHtml.matchAll(sourceUnsplashRegex));

  for (const match of sourceMatches) {
    const rawUrl = match[0];
    let query = "mobile app";
    const queryMatch =
      rawUrl.match(/[?&](?:query=)?([^&"'`>]+)/i) ||
      rawUrl.match(/\/random\/?\??([^"'`>]+)/i) ||
      rawUrl.match(/\/([a-zA-Z0-9_-]+)$/i);

    if (queryMatch) {
      query = decodeURIComponent(queryMatch[1]).replace(/[,_+]/g, " ").trim();
    }
    const realUrl = await getPhotoUrl(query, "landscape");
    processedHtml = processedHtml.replace(rawUrl, realUrl);
  }

  // 3. Match generic placeholder services (via.placeholder.com, placeholder.com, dummyimage.com, etc.)
  const placeholderRegex = /https?:\/\/(?:via\.placeholder\.com|placeholder\.com|dummyimage\.com)\/[^"'`\s>]+/gi;
  const placeholderMatches = Array.from(processedHtml.matchAll(placeholderRegex));
  for (const match of placeholderMatches) {
    const rawUrl = match[0];
    const realUrl = await getPhotoUrl("mobile app screen", "landscape");
    processedHtml = processedHtml.replace(rawUrl, realUrl);
  }

  // 4. Match local placeholder paths like src="/placeholder.png" or src="placeholder.svg"
  processedHtml = processedHtml.replace(
    /src=["'](?:\/|\.\/)?placeholder(?:\.[a-zA-Z]+)?["']/gi,
    'src="https://picsum.photos/seed/app-preview/800/600"',
  );

  // 5. Match any leftover broken/empty src: `src=""` or `src="undefined"` or `src="null"`
  processedHtml = processedHtml.replace(
    /src=["'](?:undefined|null)?["']/gi,
    'src="https://picsum.photos/seed/app-preview/800/600"',
  );

  return processedHtml;
}
