const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.aceternity.com" }, // Aceternity Avatar
      { protocol: "https", hostname: "pbs.twimg.com" }, // Twitter Profile Picture
      { protocol: "https", hostname: "api.microlink.io" }, // Microlink Image Preview
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/boxshadows",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/playground",
        destination: "/",
        permanent: true,
      },

      {
        source: "/resources",
        destination: "/",
        permanent: true,
      },
      {
        source: "/links",
        destination: "/",
        permanent: true,
      },

      {
        source: "/api/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed.xml",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
