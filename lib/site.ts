export const siteUrl = (() => {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) throw new Error();
    return url.origin;
  } catch { throw new Error("NEXT_PUBLIC_SITE_URL deve ser uma URL pública HTTPS válida."); }
})();
