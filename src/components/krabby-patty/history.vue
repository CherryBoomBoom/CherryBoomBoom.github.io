<template>
    <div id="krabby_patty_history">
			1
    </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from '../../interface/vue'

@IComponent({ components: {} })
export default class History extends IVue {

	mounted() {
		console.log(1)
	}
}
</script>
<style scoped>

</style>