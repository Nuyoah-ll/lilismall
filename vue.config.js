module.exports = {
  configureWebpack: {
    resolve: {
      // extensions:[]   用于配置后缀名的
      // 今后，在项目中直接使用assets、common之类的即可
      // 注意，在dom里使用别名应该添加一个~
      alias: {
        // '@':'src'       这个脚手架已经帮我们配好了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}