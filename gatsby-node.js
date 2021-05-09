exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // node: {
    //   fs: "empty",
    //   // net: "empty",
    // },
    resolve: {
      fallback: {
        crypto: false,
        "crypto-browserify": require.resolve("crypto-browserify"),
      },
    },
  })
}
