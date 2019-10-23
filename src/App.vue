<template>
  <div id="app">
    <div class="top-nav">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
          <Icon type="ios-paper" />文档
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />DEMO
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
          <Icon type="ios-construct" />历史改进
        </MenuItem>
      </Menu>
    </div>
    <div id="content">
      <div>
        <div class="logo">
          <img src="https://i2.tiimg.com/700479/5ae4ce384fd00748.png" />
          <h1>krabby patty</h1>
          <h3>蟹黄堡web框架原型机</h3>
        </div>
      </div>
      <Divider />

      <Row>
        <Col span="18">
          <div style="border-right:1px solid #e8eaec">
            <h1>写在前面</h1>
            <p>- 这是我自己开发的框架.在此之前我一直使用的是koa/egg框架进行开发,但是过程中发现有很多不尽我意的地方,为了能够更顺手的开发web程序,我决定自己开发</p>
            <p>
              - 名字的来源是两个朋友的名字联合,因此我称它为
              <b>蟹黄堡</b>
            </p>
            <p>
              - 开发的中心思想是完全符合
              <b>我</b>的开发习惯,以及尽可能的
              <b>模块化</b>和附带
              <b>智能提示</b>
            </p>
            <h1>优势</h1>
            <p># 组件\请求\工具Load在上下文中</p>
            <p># 可以自定义loader及typings</p>
            <p># 非常夸张的深层嵌套洋葱圈模型</p>
            <p># 企图可拆分微服务模块</p>
            <p># 自动重启以及更多的开放性api</p>
            <p># 以约束定义规则</p>
            <h1>安装及快速开始</h1>
            <div class="code">
              <pre>{{code.init}}</pre>
            </div>
            <h1>目录树</h1>
            <h2>标准目录</h2>
            <p>常用的目录结构</p>
            <div class="common-tree">
              <Tree :data="fileTree_1"></Tree>
            </div>
            <h2>子模块目录</h2>
            <p>业务需要有嵌套模块的目录结构,此时中间件也是嵌套的</p>
            <div>
              <Tree :data="fileTree_2"></Tree>
            </div>
						<h1>入口文件</h1>
						<p>项目从这里开始,并启动一个蟹黄堡实例</p>
						<div class="code">
              <pre>{{code.app}}</pre>
            </div>
						<h1>Controller</h1>
						<p>这里是路由和功能组合文件</p>
						<p>我是用<b>[new Symbol()]</b>作为<b>Function</b>名称.因为我认为这里的索引是路由的地址,方法不应该被其他形式的调用</p>
						<div class="code">
              <pre>{{code.controller}}</pre>
            </div>
          </div>
        </Col>
        <Col span="6">
          <div style="padding:0 16px">这里是目录</div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from './interface/vue'
import code from './code'

@IComponent({ components: {} })
export default class App extends IVue {
	code = code
	fileTree_1 = [
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
	fileTree_2 = [{ title: '├controller' }, { title: '├service' }, { title: '├base.module.ts' }, { title: '├package.json' }]
	mounted() {
		console.log(1)
	}
}
</script>
<style scoped>
#app {
	background: #4aa598;
}
#app .top-nav {
	position: fixed;
	top: 0;
	width: 100%;
	background: #fff;
	z-index: 2;
}
#content {
	background: #fff;
	width: 86%;
	min-height: calc(100vh - 60px);
	margin: 0 auto;
	padding: 32px;
	font-size: 14px;
}
#content h1,
h2,
h3 {
	margin: 16px 0;
}
#content p {
	margin-left: 8px;
}
#app .logo {
	text-align: center;
	margin-top: 60px;
}
#app .logo img {
	height: 260px;
	width: auto;
}
#app .logo h1 {
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
	background: url(./img/code-block-bg.png) #f5f6f7;
	width: 775px;
	border-left: 3px solid black;
	line-height: 24px;
	font-size: 16px;
}
</style>