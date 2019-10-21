<template>
  <div class="layout" id="app">
    <div>
			<Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            文档
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            DEMO
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
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
            <Icon type="ios-construct" />
            历史改进
        </MenuItem>
    </Menu>
		</div>
		<div>
			<div class="logo">
				<img src="https://i2.tiimg.com/700479/5ae4ce384fd00748.png">
											<h1>krabby patty</h1>
							<p>蟹黄包web框架原型机</p>
			</div>
		</div>
  </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from './interface/vue'

@IComponent({ components: {} })
export default class App extends IVue {
	mounted() {
		console.log(1)
	}
}
</script>
<style scoped>
#app .logo {
	text-align: center;
	background: #fff
}
#app .logo img {
	height: 360px;
	width: auto;
}
#app .logo h1 {
	font-size: 60px
}
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #f5f7f9;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
</style>