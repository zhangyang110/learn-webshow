const path = require('path')
const { version } = require('./package.json')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, '')
]

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  theme: "./theme.config.js",
  publicPath: `/${version}/`,
  outputPath: `./dist/${version}`,
  // 接口代理示例
  // proxy: {
  //   "/api/v2": {
  //     "target": "http://192.168.1.244",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v2": "/api/v2" }
  //   },
  //   "/res": {
  //     "target": "http://192.168.1.244",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/res": "/res" }
  //   }
  // },
  proxy: {
    "/api/v3": {
      "target": "http://192.168.1.244",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v3": "/api/v3" }
    },
    "/res": {
      "target": "http://192.168.1.244",
      "changeOrigin": true,
      "pathRewrite": { "^/res": "/res" }
    }
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    }
  },
  dllPlugin: {
    exclude: ["babel-runtime", "roadhog", "cross-env"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  }
}
