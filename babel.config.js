module.exports = {
  presets: [
    //'env',
    // ['env', {
    //   "modules": false,
    //   "targets": {
    //     "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
    //   },
    // }]
    [
     '@babel/preset-env', {
        "modules": false
     } 
    ],
  ],
  //plugins: ['transform-vue-jsx', '@babel/plugin-syntax-dynamic-import', 'transform-runtime']
  plugins: ['transform-vue-jsx', '@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime']
  //plugins: ['transform-vue-jsx', 'transform-runtime']
}
