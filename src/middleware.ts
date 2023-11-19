import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
