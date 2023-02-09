const { resolve } = require('path');
const fs = require('fs-extra');
const handlebars = require('handlebars');

const getTplFilePath = (meta) => ({
  // docs 目录
  readme: {
    from: '.template/docs/README.md.tpl',
    to: `../../packages/components/${meta.compName}/docs/README.md`,
  },
  demo: {
    from: '.template/docs/demo.vue.tpl',
    to: `../../packages/components/${meta.compName}/docs/demo.vue`,
  },
  // src 目录
  vue: {
    from: '.template/src/index.vue.tpl',
    to: `../../packages/components/${meta.compName}/src/index.vue`,
  },
  // 根目录
  install: {
    from: '.template/index.ts.tpl',
    to: `../../packages/components/${meta.compName}/index.ts`,
  },
});

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta);
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8');
    const fileContent = handlebars.compile(fileTpl)(meta);
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
      if (err) console.log(err);
    });
  });
};

// 读取 packages/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../packages/components/list.json';
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
  const listFileContent = JSON.parse(listFileTpl);
  listFileContent.push(meta);
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, (err) => {
    if (err) console.log(err);
  });
  return listFileContent;
};

// 更新 router.ts
const routerTplReplacer = (listFileContent) => {
  const routerFileFrom = './.template/router.ts.tpl';
  const routerFileTo = '../../src/router.ts';
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8');
  const routerMeta = {
    routes: listFileContent.map((comp) => {
      return `{
        title: '${comp.compZhName}',
        name: '${comp.compName}',
        path: '/components/${comp.compName}',
        component: () => import('packages/components/${comp.compName}/docs/README.md'),
      }`;
    }),
  };
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta);
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, (err) => {
    if (err) console.log(err);
  });
};

// 更新 install.ts
const installTsTplReplacer = (listFileContent) => {
  const installFileFrom = '.template/install.ts.tpl';
  const installFileTo = '../../packages/components/index.ts'; // 这里没有写错，别慌
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8');
  const textimportPlugin = `\nimport { YcolPlugin } from './Ycol';\nimport { YrowPlugin } from './Yrow';\n`;
  const textinstallPlugins = `\nYcolPlugin.install?.(app);\nYrowPlugin.install?.(app);\n`;
  const textexportPlugins = `\nexport * from './Ycol'\nexport * from './Yrow'\n`;
  const installMeta = {
    importPlugins: listFileContent
      .map(({ compName }) => {
        if (compName === 'Layout') {
          return ``;
        } else {
          return `import { ${compName}Plugin } from './${compName}';`;
        }
      })
      .join('\n')
      .concat(textimportPlugin),
    installPlugins: listFileContent
      .map(({ compName }) => {
        if (compName === 'Layout') {
          return ``;
        } else {
          return `${compName}Plugin.install?.(app);`;
        }
      })
      .join('\n')
      .concat(textinstallPlugins),
    exportPlugins: listFileContent
      .map(({ compName }) => {
        if (compName === 'Layout') {
          return ``;
        } else {
          return `export * from './${compName}'`;
        }
      })
      .join('\n')
      .concat(textexportPlugins),
  };
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta);
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, (err) => {
    if (err) console.log(err);
  });
};

module.exports = (meta) => {
  compFilesTplReplacer(meta);
  const listFileContent = listJsonTplReplacer(meta);
  // 遍历listFileContent,并打印
  listFileContent.forEach((comp) => {
    // 如果comp.compName是layout,从listFileContent中删除
    if (comp.compName === 'layout') {
      listFileContent.splice(listFileContent.indexOf(comp), 1);
    }
  });
  routerTplReplacer(listFileContent);
  installTsTplReplacer(listFileContent);

  console.log(`组件新建完毕，请前往 packages/components/${meta.compName} 目录进行开发`);
};
