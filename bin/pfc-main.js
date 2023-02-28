#!/usr/bin/env node
import inquirer from 'inquirer';
import shellJS from 'shelljs';

inquirer.prompt([
  // 应用名称
  {
    type: "input",
    message: "",
    name: "appName",
    default: "pngc-app"
  },
  // 应用前缀
  {
    type: "input",
    message: "",
    name: "appPrefix",
    default: "app"
  },
  // 严格模式
  {
    type: "rawlist",
    "message": "",
    "name": "appStrictMode",
    default: "true",
    choices: [
      "true",
      "false"
    ]
  },
  // css 风格
  {
    type: "rawlist",
    "message": "",
    "name": "appCssStyle",
    default: "css",
    choices: [
      "css",
      "scss",
      "sass",
      "less"
    ]
  },
  // 包管理器
  {
    type: "rawlist",
    "message": "",
    "name": "appPackageManager",
    default: "npm",
    choices: [
      "npm",
      "pnpm",
      "cnpm",
      "yarn"
    ]
  },
  // 是否跳过测试文件
  {
    type: "rawlist",
    "message": "",
    "name": "appSkipTests",
    "default": "false",
    choices: [
      "true",
      "false"
    ]
  },
  {
    type: "input",
    "message":"please confirm info ( Y / N )",
    "name": "appConfirmInfo",
    "default": "Y"
  }
]).then(answer => {

  if (answer.appConfirmInfo.toUpperCase() == "N") {
    return;

  } else if ( answer.appConfirmInfo.toUpperCase() == "Y" ) {

    var ngCommand = "ng new " + answer.appName
      + ' --prefix ' + answer.appPrefix
      + " --strict " + answer.appStrictMode
      + " --style " + answer.appCssStyle
      + " --package-manager " + answer.appPackageManager
      + " --skip-tests " + answer.appSkipTests

    shellJS.exec(ngCommand, { silent: false }).stdout;

  } else {
    return;
  }
})