// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Willba doc",
  tagline: "Willba doc",
  favicon: "img/willba.png",

  // Set the production url of your site here
  url: "https://ioansolovastru.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IoanSolovastru", // Usually your GitHub org/user name.
  projectName: "docusaurus-willba-documentation", // Usually your repo name.
  // deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fi"],
    localeConfigs: {
      en: { label: "English" },
      fi: { label: "Finnish" },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      forceDarkMode: true,
      darkMode: true,
      colorMode: {
        // "light" | "dark"
        defaultMode: "dark",
      },
      // Replace with your project's social card
      image: "img/willba.png",
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      navbar: {
        // title: "Docs",
        logo: {
          alt: "Willba logo",
          src: "img/willba.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsBefore: [],
            className: "icon-link language navbar__item",
          },
          // versioning
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Willba documentation.`,
      },
      prism: {
        theme: { plain: {}, styles: [] },
      },
    }),
};

module.exports = config;
