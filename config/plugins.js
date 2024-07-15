module.exports = ({ env }) => ({
  // "vercel-deploy": {
  //   enabled: true,
  //   config: {
  //     deployHook:
  //       "https://api.vercel.com/v1/integrations/deploy/prj_qTabb3tfAgpno6YcVaUIydhhiA6L/xROW6TDJd5",
  //     apiToken: "XPyRbZfYO20ZLasC3bVWJVY7",
  //     appFilter: "headless-portfolio-frontend",
  //   },
  // },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
