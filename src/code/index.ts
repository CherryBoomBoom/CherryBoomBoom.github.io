export default {
	init: `npm i -g krabby-patty\nkrabby-patty init demo\ncd demo\nnpm run dev`,
	app: `import {krabbyPatty} from "krabby-patty"\n\nkrabbyPatty()`,
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
			`,
  },
  model:
  `import { Schema } from 'mongoose';
  
  export default {
    mobile: {type: String, required: true, label: '手机号'},
    password: {type: Boolean, required: true, label: '密码'},
    name: {type: Array, label: '用户名'},
    nickName: {type: Number, label: '昵称'},
    avatar: {type: Date, label: '头像'},
    email: {type: Buffer, label: '邮箱'},
    esdsmail: {type: Object, label: '邮箱'},
    asdd:[{type: Object, label: '邮箱555'}],
    sd: {type: Schema.Types.Mixed, label: '邮箱'},
    _company: {type: Schema.Types.ObjectId, ref: 'Company', label: '主公司'}
  }`,
  modelLoad:
  `
  import {mongooseModel,mongooseTsHelper} from 'krabby—patty'
  export default class BaseModule extends Module {
    readonly ingredients = {
      model: {
        loadDir: "model",
        processed: mongooseModel,
        customPrompt: mongooseTsHelper
      }
    };
  }
  `,
  ingredients:
  `
  export default class BaseModule extends Module {
    readonly ingredients = {
      model: {
        loadDir: "model", // 模型使用的文件夹名称 必填
        processed: mongooseModel, // 加工处理后的数据将加载在module上 可选
        customPrompt: mongooseTsHelper // 自定义声明文件，将直接生成index.d.ts 可选
      }
    };
    readonly tt = "ss"; // 自定义装载的变量
  }
  `,
  config:
  `
  export default {
    port: 3002,
    baseDir: path.join(__dirname, '..'),
    db: {
      mongo:{
        uri: '',
        options:{}
      }
    }
  }
  `
}