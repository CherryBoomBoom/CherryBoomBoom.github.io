<template>
  <div id="krabby_patty">
    <div class="top-nav">
      <Menu mode="horizontal" active-name="1">
        <MenuItem name="1" to="/krabby-patty/document">
          <Icon/>文档
        </MenuItem>
        <MenuItem name="2">
          <Icon/>历史改进
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon />其他开源项目
          </template>
          <MenuItem name="3-1">拉比vue组件库</MenuItem>
          <MenuItem name="3-2">自动化测试框架</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div id="content">
			<router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from '../../interface/vue'
import code from '../../code'

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
		this.$router.push({path:'document'})
	}
}
</script>
<style scoped>
#krabby_patty {
	background: #4aa598;
}
#krabby_patty .top-nav {
	position: fixed;
	top: 0;
	width: 100%;
	background: #fff;
	z-index: 2;
}
#krabby_patty #content {
	background: #fff;
	width: 86%;
	min-height: calc(100vh - 60px);
	margin: 0 auto;
	padding: 32px;
	font-size: 14px;
}
#krabby_patty #content h1,
h2,
h3 {
	margin: 16px 0;
}
#krabby_patty #content p {
	margin-left: 8px;
}
</style>