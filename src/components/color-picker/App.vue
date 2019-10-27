<template>
  <div id="color-picker">
    <div class="top-nav">
      <Menu mode="horizontal" active-name="1">
        <MenuItem name="1" to="/color-picker/home">
          <Icon/>主页
        </MenuItem>
        <MenuItem name="2">
          <Icon/>历史改进
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon />其他开源项目
          </template>
          <MenuItem name="3-1" to="/krabby-patty">krabby patty框架</MenuItem>
          <MenuItem name="3-2">拉比vue组件库</MenuItem>
          <MenuItem name="3-3">自动化测试框架</MenuItem>
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

@IComponent({ components: {} })
export default class App extends IVue {
	mounted() {
	}
}
</script>
<style scoped>
#color-picker{
	padding: 16px
}
</style>