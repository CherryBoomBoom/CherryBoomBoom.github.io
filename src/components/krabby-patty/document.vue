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

      <Row>
        <Col span="18">
          <div style="border-right:1px solid #e8eaec">
            <h1 id="preface">写在前面</h1>
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
            <h1 id="advantage">优势</h1>
            <p># 组件\请求\工具Load在上下文中</p>
            <p># 可以自定义loader及typings</p>
            <p># 非常夸张的深层嵌套洋葱圈模型</p>
            <p># 企图可拆分微服务模块</p>
            <p># 自动重启以及更多的开放性api</p>
            <p># 以约束定义规则</p>
            <h1 id="init">安装及快速开始</h1>
            <div class="code">
              <pre>{{code.init}}</pre>
            </div>
            <h1 id="tree">目录树</h1>
            <h2 id="common_tree">标准目录</h2>
            <p>常用的目录结构</p>
            <div class="common-tree">
              <Tree :data="fileTree_1"></Tree>
            </div>
            <h2 id="module_tree">子模块目录</h2>
            <p>业务需要有嵌套模块的目录结构,此时中间件也是嵌套的</p>
            <div>
              <Tree :data="fileTree_2"></Tree>
            </div>
            <h1 id="enter">入口文件</h1>
            <p>项目从这里开始,并启动一个蟹黄堡实例</p>
            <div class="code">
              <pre>{{code.app}}</pre>
            </div>
            <h1 id="module">Module</h1>
            <p>这里是面包片,功能都在这里组合</p>
            <div class="code">
              <pre>{{code.module}}</pre>
            </div>
            <h1 id="controller">Controller</h1>
            <p>这里是路由和功能组合文件</p>
            <p>
              我是用
              <b>[new Symbol()]</b>作为
              <b>Function</b>名称.因为我认为这里的索引是路由的地址,方法不应该被其他形式的调用
            </p>
            <div class="code">
              <pre>{{code.controller}}</pre>
            </div>

            <h1 id="service">Service</h1>
            <p>这里是业务功能模块</p>
            <p>
              这里可以在上下文拿到请求的
              <b>body</b>,
              <b>file</b>,
              <b>query</b>,
              <b>header</b>
            </p>
            <div class="code">
              <pre>{{code.service}}</pre>
            </div>

            <h1 id="middleware">Middleware</h1>
            <p>这里是请求中间件</p>
            <p>中间件的加载顺序为底层base.module -> controller -> router</p>
            <p>多模块的中间件的加载顺序base.module -> 子模块base.module,往下与基本顺序对齐</p>
            <h2 id="module_middleware">module级别中间件</h2>
            <div class="code">
              <pre>{{code.middleware.module}}</pre>
            </div>
            <h2 id="controller_middleware">controller及router级别中间件</h2>
            <div class="code">
              <pre>{{code.middleware.controller}}</pre>
            </div>
          </div>

					<h1 id="model">Model</h1>
					<p>这里是数据库实体</p>
					<p>目前只支持mongoose的类型提醒</p>
					<div class="code">
              <pre>{{code.middleware.model}}</pre>
            </div>
        </Col>
        <Col span="6">
          <div class="catalog">
            <Anchor show-ink :offset-top="76">
              <AnchorLink href="#preface" title="写在前面" />
              <AnchorLink href="#advantage" title="优势" />
              <AnchorLink href="#init" title="安装及快速开始" />
              <AnchorLink href="#tree" title="目录树">
                <AnchorLink href="#common_tree" title="标准目录" />
                <AnchorLink href="#module_tree" title="子模块目录" />
              </AnchorLink>
              <AnchorLink href="#enter" title="入口文件" />
              <AnchorLink href="#module" title="Module" />
              <AnchorLink href="#controller" title="Controller" />
              <AnchorLink href="#service" title="Service" />
              <AnchorLink href="#middleware" title="Middleware">
                <AnchorLink href="#module_middleware" title="module级别中间件" />
                <AnchorLink href="#controller_middleware" title="controller及router级别中间件" />
              </AnchorLink>
            </Anchor>
          </div>
        </Col>
      </Row>
    </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from '../../interface/vue'
import code from '../../code'

@IComponent({ components: {} })
export default class Document extends IVue {
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
</style>