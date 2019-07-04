/**
 * 本文件用于覆盖掉个别 ES5 与 ES6 不同的规则
 */

module.exports = {
  rules: {
    // 逗号风格
    // ES5 中不加最后一个逗号
    // @unessential
    'comma-dangle': ['error', 'never'],

    // 不要在声明前就使用变量
    // ES5 中降级为 warn
    'no-use-before-define': ['warn', { functions: false, classes: false, variables: false }],
  },
};
