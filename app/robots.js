export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://crave-close.vercel.app/sitemap.xml",
    host: "https://crave-close.vercel.app",
  };
}
