<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from './interface/vue'
// import krabbyPatty from './components/krabby-patty/App'

@IComponent({ components: {} })
export default class App extends IVue {

	mounted() {
		console.log(1)
		this.$router.push({path:'krabby-patty/document'})
	}
}
</script>