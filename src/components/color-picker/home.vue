<style scoped>
.header {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.title {
	text-align: center;
	margin: 32px;
}
.color-div {
	clear: both;
}
.color-picker {
	display: flex;
	justify-content: center;
}
.color-picker .d {
	width: 200px;
	height: 200px;
}
.color-picker .d .picker {
	position: absolute;
	top: 8px;
	right: 8px;
}
.color-card {
	height: 100px;
	width: 100px;
	float: left;
}
.tag-div {
	margin: 16px auto;
	display: flex;
	flex-wrap: wrap;
}
.header .color-body {
	min-width: 400px;
}
.demo {
	border: 1px solid #e9e9e9;
}
.demo_1 {
	width: 400px;
	height: 225px;
	display: flex;
}
.demo_1 .demo-header {
	flex-shrink:0
}
.demo_1 .demo-slider {
	width: 80px;
	flex-grow:1;
	background: red;
}
.demo_1 .demo-body {
	margin-left: 80px;
	background: blue;
}
.demo_2 {
	width: 200px;
	height: 200px;
}
</style>
<template>
  <div>
    <div class="header">
      <div class="demo demo_1">
        <div class="demo-header"></div>
        <div class="demo-slider"></div>
        <div class="demo-body"></div>
      </div>
      <div class="color-body">
        <div class="title">
          <h1>选择主色调</h1>
        </div>
        <div class="color-picker">
          <Card class="d" :style="{background:colorDefault}">
            <ColorPicker
              v-model="colorDefault"
              recommend
              class="picker"
              size="small"
              :colors="recommendColors"
              @on-active-change="changeActiveColor"
              @on-open-change="changeOpenColor"
            />
          </Card>
        </div>
        <div class="tag-div">
          <Tag
            size="large"
            v-for="(v,i) in tags"
            :key="i"
            :color="i===clickedTagIndex?'#C1C2C1':'default'"
            @click.native="clickTag(i)"
          >{{v}}</Tag>
        </div>
      </div>
      <div class="demo demo_2"></div>
    </div>
    <Divider />
    <div v-for="(v,i) in colorList" :key="i" class="color-div">
      <Card :style="{background:`#${sv}`}" v-for="(sv,si) in v" :key="si" class="color-card"></Card>
    </div>
  </div>
</template>

<script lang="ts">
import { IVue, IComponent, IWatch } from '../../interface/vue'
import baseColors from './colors'

@IComponent({ components: {} })
export default class App extends IVue {
	private colorDefault = ''
	private clickedTagIndex = -1
	private recommendColors = []
	private colorList = []
	private tags = []
	private color: any[] = baseColors
	private clickTag(index) {
		let judge = this.clickedTagIndex === index
		this.clickedTagIndex = judge ? -1 : index
		let tag = judge ? '' : this.tags[index]
		this.colorDefault = ''
		this.getColor({ tag })
	}
	private changeActiveColor(color) {
		this.colorDefault = color
	}
	private changeOpenColor(judge) {
		if (!judge) this.getColor({ activeColor: this.colorDefault.replace('#', '') })
	}
	private getRecommendColor(colors, groupQuantity = 24) {
		let { group, focus } = this.getKmeansGroup(colors, groupQuantity, 5)
		focus = this.duplicateRemovalrecommendColor(focus)
		this.recommendColors = focus.map(i => {
			let item = i.toString(16)
			item = 'ffffff'.slice(item.length) + item
			return `#${item}`
		})
	}
	private getPointdDistance(a, b) {
		let len = a.length
		let sum = 0
		for (let i = 0; i < len; i++) sum += Math.pow(parseInt(a[i], 16) - parseInt(b[i], 16), 2)
		return Math.sqrt(sum)
	}
	private getKmeansGroup(sample, k, threshold) {
		let groupJson = {}
		let quantity = sample.length
		let focus = []
		let judge = true
		for (let i of Array(k)) {
			let itemIndex = ~~(Math.random() * quantity)
			let itemKey = sample[itemIndex].toString()
			groupJson[itemKey] = []
		}
		sample.map(i => {
			let minNumber = void 0
			let itemKey = void 0
			Object.keys(groupJson).map(j => {
				this.getPointdDistance(i, j)
				if (!itemKey) itemKey = j
				let distance = this.getPointdDistance(i, j)
				if (!minNumber) minNumber = distance
				if (minNumber > distance) {
					minNumber = distance
					itemKey = j
				}
			})
			groupJson[itemKey].push(i)
		})
		Object.keys(groupJson).map(i => {
			if (!groupJson[i].length) return
			let average = this.getFocus(groupJson[i])
			let distance = this.getPointdDistance(average, i)
			if (distance > threshold) judge = false
			focus.push(i)
		})
		if (!judge) return this.getKmeansGroup(sample, k, threshold)
		else return { focus, group: groupJson }
	}
	private getFocus(pointArray) {
		let focus = ''
		let pointLenth = pointArray.length
		let len = pointArray[0].length
		for (let i = 0; i < len; i++) {
			let sum = 0
			pointArray.map(j => (sum += parseInt(j[i], 16)))
			focus += (~~(sum / pointLenth)).toString(16)
		}
		return focus
	}
	private duplicateRemovalrecommendColor(colors: string[]) {
		let data = []
		let cacheArray = colors
		colors.map(i => {
			let judge = true
			for (let j of cacheArray.filter(k => k !== i)) {
				let distance = this.getPointdDistance(i, j)
				if (distance < 7) {
					cacheArray = cacheArray.filter(k => k !== j)
					judge = false
					break
				}
			}
			if (judge) data.push(i)
		})
		return data
	}
	private getDistancePower(colorArray: string[], activeColor: string) {
		let maxDistance = 0
		let focus = this.getFocus(colorArray)
		let distance_1 = this.getPointdDistance(focus, activeColor)
		let distance_2
		colorArray.map(i => {
			let item_distance = this.getPointdDistance(i, activeColor)
			if (distance_2 === void 0) distance_2 = item_distance
			else distance_2 = Math.min(distance_2, item_distance)
		})
		maxDistance = 5 * distance_1 + 3 * distance_2
		return maxDistance
	}
	private getColor(param: any = {}) {
		let { tag = '', activeColor = '' } = param
		let colors = []
		let powerSort = {}
		this.color.map(i => {
			if (tag) if (!i.tag || !i.tag.includes(tag)) return
			if (activeColor) powerSort[i.data.join()] = this.getDistancePower(i.data, activeColor)
			colors.push(i.data)
		})
		if (Object.keys(powerSort).length) {
			colors = colors.sort((a, b) => (powerSort[a.join()] > powerSort[b.join()] ? 1 : -1))
			colors = colors.slice(0, 10)
		}
		colors = colors.sort((a, b) => (a.length > b.length ? 1 : -1))
		this.colorList = colors
	}
	private getTags() {
		let tags = new Set()
		this.color.map(i => {
			if (i.tag) i.tag.map(j => tags.add(j))
		})
		this.tags = [...tags]
	}
	mounted() {
		this.getTags()
		this.getColor()
		this.getRecommendColor([].concat.apply([], this.colorList))
	}
}
</script>
<style>
</style>