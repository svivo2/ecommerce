module.exports = {
  projectId: 'uhslvf2r', // you can find this in the Sanity manage dashboard
  dataset: 'production', // or whatever name you want to give to your dataset
  // a list of plugin names that should be included in the deployed Sanity Studio
  plugins: [
    '@sanity/base',
    '@sanity/components',
    '@sanity/default-layout',
    '@sanity/default-login',
    '@sanity/desk-tool',
  ],
  env: {
    development: {
      plugins: ['@sanity/webpack-loader']
    },
    production: {
      plugins: []
    }
  }
}
