const config = {
  // Site info
  siteTitle: "thedakale", // Site title.
  siteTitleShort: "thedakale", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "blog website", // Alternative site title for SEO.
  siteLogo: "../content/images/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://jolly-wozniak-617472.netlify.app", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "thedakale official website", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "399626517562189", // FB Application ID for using app insights
  googleAnalyticsID: "G-7G95M7TCR8", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "https-thedarkale-com", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  pathPrefixAuthor: "/author", // Prefix path for author
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Top Songs this Week",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "Fade To Black - Metallica",
      url: "https://open.spotify.com/track/5nekfiTN45vlxG0eNJQQye?si=XKWTsXRLQ4mKegGWMv7KEg"
    },
    {
      label: "Flagpole Sitta - Harvey Danger",
      url: "https://open.spotify.com/track/7cz70nyRXlCJOE85whEkgU?si=whQtZhArRju0ELh3XsbjMw"
    },
    {
      label: "Rock And Roll Part 2 - The Glitter Band",
      url: "https://open.spotify.com/track/7KkStID9wWJz2YawocOh5r?si=DBXNrJ8dS-aNF7YEjwQbJA"
    },
    {
      label: "Dreams - Fleetwood Mac",
      url: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz?si=THC1oF1aStCXEeIIUBqARQ"
    },
  ],
  // Use for user info
  userName: "Aniruddha Pandey", // Username to display in the author segment.
  userEmail: "anirudh.pandev@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "thedarkale", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Indore, India", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "contact.thedarkale@gmail.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://thedarkale.com",
      iconClassName: "fas globe"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/",
      iconClassName: "fab twitter"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/", 
      iconClassName: "fab facebook-f" 
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/", 
      iconClassName: "fab linkedin-in"
    }
  ],
  // Use for navigation
  navTitle: "thedarkale",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    { 
      label: "GitHub",
      url: "https://github.com/thedarkale",
      iconClassName: "fab github"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/Thedarkale-103790038368321", 
      iconClassName: "fab facebook-f"
    },
    { 
      label: "Instagram", 
      url: "https://www.instagram.com/thedarkale", 
      iconClassName: "fab facebook-f"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/thedarkaleblog",
      iconClassName: "fab twitter"
    },
    {
      label: "RSS",
      url: "https://thedarkale.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://thedarkale.com/sitemap.xml" },
  ],
  copyright: "© 2021 thedarkale, All rights reserved.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF8FA" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
