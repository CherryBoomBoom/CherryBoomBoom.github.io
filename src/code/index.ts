export default {
	init: `npm i -g krabby-patty\nkrabby-patty init demo\ncd demo\nnpm run dev`,
	app: `import {krabbyPatty} from "krabby-patty"\n\nkrabbyPatty({config:{baseDir:__dirname,port:3000}})`,
	module:
		`import {Module} from 'krabby—patty
export default class BaseModule extends Module{}`,
	controller: 
	`import {Router,Get} from 'krabby—patty'
import BaseModule from '../base.module'

@Router('')
export default class DemoController extends BaseModule{
	 
   @Get('/service')
   [new Symbol()](){
      return this.service.demo.dodo()
   }
}`,
	service:
		`import BaseModule from '../base.module';

export default class DemoService extends BaseModule{
  public async dodo(){
    console.log('成功');
    return true
  }		
}`,
	middleware: {
		module:
			`
import {Module} from 'krabby—patty'

function testFunction(req, res, next) {
  console.log("中间件2");
  next();
  console.log("中间件2s");
}

export default class BaseModule extends Module{

  readonly middleware = [testFunction]
}`,
		controller:
			`import {Get,Router} from 'krabby—patty'
import BaseModule from '../base.module'

function testFunction3(req,res,next){
  console.log('中间件3');
  next()
  console.log('中间件3s');
}

function testFunction4(req,res,next){
  console.log('中间件4');
  next()
  console.log('中间件4s')
}

@Router('/user')
export default class DemoController extends BaseModule {

  readonly middleware=[testFunction3]

  @Get({ path: '/create', middleware:[testFunction4]})
  [Symbol()]() {return}
}
			`
	}
}