module.exports = {
  presets: [
    [
     '@babel/preset-env', {
        "modules": false
     } 
    ],
  ],
  plugins: [
    'transform-vue-jsx', 
    '@babel/plugin-syntax-dynamic-import', 
    '@babel/plugin-transform-runtime',
    ['import', { 
      'libraryName': 'ant-design-vue', 
      'libraryDirectory': 'es', 
      'style': true,
     }
    ],
  ]
}
