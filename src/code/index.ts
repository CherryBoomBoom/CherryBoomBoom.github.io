export default {
	init: `npm i -g krabby-patty\nkrabby-patty init demo\ncd demo\nnpm run dev`,
	app: `import {krabbyPatty} from "krabby-patty"\n\nkrabbyPatty({config:{baseDir:__dirname,port:3000}})`,
	controller: `
import {Controller,Router,Get} from 'krabby—patty'
import BaseModule from '../base.module'

@Router('')
export default class DemoController extends BaseModule{

   readonly middleware=[testFunction]
	 
   @Get('/service')
   [new Symbol()](){
      return this.service.demo.dodo()
   }
	 
   @Get({path:'/service',middleware:[]})
   [new Symbol()](){
      return this.service.demo.dodo()
   }
}`
}