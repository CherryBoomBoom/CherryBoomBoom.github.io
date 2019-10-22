module.exports = {
  tabWidth: 2, //tab两位
  printWidth: 160, //单行最大长度
  eslintIntegration: true,
  singleQuote: true, //使用单引号
  semi: false, //句尾分号
  bracketSpacing: true, //在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid'
  //最后一个对象使用逗号
  // trailingComma: 'none'
}
