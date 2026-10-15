import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // Set SITE_URL to the actual deployment origin before publishing.
    url: import.meta.env.SITE_URL || "https://example.com/",
    title: "Summer 的个人空间",
    description: "记录研究中的思考、仿真中的发现，以及旅途中的片段。",
    author: "Summer",
    profile: "https://github.com/Blocksummer",
    ogImage: "summer-og.svg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: { perPage: 6, perIndex: 4 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Blocksummer/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/Blocksummer",
      linkTitle: "Summer 的 GitHub",
    },
  ],
  shareLinks: [],
});
