<template>
  <div id="krabby_patty_document">
    <div>
      <div class="logo">
        <img src="../../img/humber.svg" />
        <h1>krabby patty</h1>
        <h3>蟹黄堡web框架原型机</h3>
      </div>
    </div>
    <Divider />

    <div class="content">
      <div class="left">
        <div v-for="v in content" :key="v.id">
          <h1 :id="v.id">{{ v.title }}</h1>
          <p v-if="v.introduction">{{ v.introduction }}</p>
          <div class="code" v-if="v.code">
            <pre>{{ v.code }}</pre>
          </div>
          <div v-for="vv in v.children" :key="vv.id">
            <h2 :id="vv.id">{{ vv.title }}</h2>
            <p v-if="vv.introduction">{{ vv.introduction }}</p>
            <div class="code" v-if="vv.code">
              <pre>{{ vv.code }}</pre>
            </div>
			<tree :data="vv.tree" v-if="vv.tree"></tree>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="catalog">
          <anchor show-ink :offset-top="76">
            <anchor-link :href="'#' + v.id" v-for="v in content" :key="v.id" :title="v.title">
              <anchor-link :href="'#' + vv.id" :title="vv.title" v-for="vv in v.children" :key="vv.id" />
            </anchor-link>
          </anchor>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from '../../interface/vue'
import history from './history.vue'
import code from '../../code'

@IComponent({ components: { history } })
export default class Document extends IVue {
  code = code
  content = [
    {
      title: '写在前面',
      id: 'preface',
      introduction: `- 这是我自己开发的框架.在此之前我一直使用的是koa/egg框架进行开发,但是过程中发现有很多不尽我意的地方,为了能够更顺手的开发web程序,我决定自己开发\n- 名字的来源是两个朋友的名字联合,因此我称它为 蟹黄堡\n- 开发的中心思想是完全符合 我的开发习惯,以及尽可能的 模块化和附带 智能提示\n`
    },
    {
      title: '优势',
      id: 'advantage',
      introduction: `# 组件\\请求\\工具Load在上下文中\n# 可以自定义loader及typings\n# 非常夸张的深层嵌套洋葱圈模型\n# 企图可拆分微服务模块\n# 自动重启以及更多的开放性api\n# 以约束定义规则`
    },
    {
      title: '安装及快速开始',
      id: 'init',
      code: code.init
    },
    {
      title: '目录树',
      id: 'tree',
      children: [
        {
          title: '标准目录',
          id: 'common_tree',
          introduction: '常用的目录结构',
          tree: [
            {
              title: '├module_1',
              expand: true,
              children: [{ title: '├controller' }, { title: '├service' }, { title: '├module_1.module.ts' }]
            },
            {
              title: '├module_2',
              expand: true,
              children: [{ title: '├controller' }, { title: '├service' }, { title: '├module_2.module.ts' }]
            },
            { title: '├base.module.ts' },
            { title: '├package.json' }
          ]
        },
        {
          title: '子模块目录',
          id: 'module_tree',
          introduction: '业务需要有嵌套模块的目录结构,此时中间件也是嵌套的',
          tree: [{ title: '├controller' }, { title: '├service' }, { title: '├base.module.ts' }, { title: '├package.json' }]
        }
      ]
    },
    {
      title: '入口文件',
      id: 'enter',
      introduction: `项目从这里开始,并启动一个蟹黄堡实例\n这里默认引入./config/base.config,你也可以传入一个合法的参数替换它`,
      code: code.app
    },
    {
      title: 'Module',
      id: 'module',
      introduction: `这里是面包片,功能都在这里组合`,
      code: code.module
    },
    {
      title: 'Controller',
      id: 'controller',
      introduction: `这里是路由和功能组合文件\n我是用 [new Symbol()]作为 Function名称.因为我认为这里的索引是路由的地址,方法不应该被其他形式的调用`,
      code: code.controller
    },
    {
      title: 'Service',
      id: 'service',
      introduction: `这里是业务功能模块\n这里可以在上下文拿到请求的 body, file, query, header`,
      code: code.service
    },
    {
      title: 'Middleware',
      id: 'middleware',
      introduction: `中间件的加载顺序为底层base.module -> controller -> router\n多模块的中间件的加载顺序base.module -> 子模块base.module,往下与基本顺序对齐`,
      children: [
        {
          title: 'module级别中间件',
          id: 'module_middleware',
          code: code.middleware.module
        },
        {
          title: 'controller及router级别中间件',
          id: 'controller_middleware',
          code: code.middleware.controller
        }
      ]
    },
    {
      title: 'Model',
      id: 'model',
      introduction: `目前只支持mongoose的类型提醒`,
      code: code.model
    },
    {
      title: 'Ingredient',
      id: 'ingredient',
      introduction: `这里是装载器，你可以把任何变量装载在上下文中并获得代码提示,子模块同样可以获得父类的成员`,
      code: code.ingredients
    },
    {
      title: 'Config',
      id: 'config',
      introduction: `这里是配置,默认配置为base.config,当你启动dev.config时,dev.config会替代base.config相同Key的字段`,
      code: code.config
    }
  ]
  mounted() {
    console.log(1)
  }
}
</script>
<style scoped>
#krabby_patty_document .logo {
  text-align: center;
}
#krabby_patty_document .logo img {
  height: 260px;
  width: auto;
}
#krabby_patty_document .logo h1 {
  font-size: 60px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #f5f7f9;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.common-tree {
  min-height: 252px;
}
.code pre {
  background: url(../../img/code-block-bg.png) #f5f6f7;
  width: 775px;
  border-left: 3px solid black;
  line-height: 24px;
  font-size: 16px;
}
.catalog {
  padding: 16px;
}
.content {
  padding: 16px;
  display: flex;
}
.left {
  flex: 1;
  padding-right: 200px;
  white-space: pre-line;
}
.right {
  width: 200px;
}
</style>
