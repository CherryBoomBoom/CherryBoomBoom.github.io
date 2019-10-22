import * as lodash from 'lodash'
import Vue from 'vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 全局变量设置
declare global {
  const _: typeof lodash
}
export declare class MessageParam {
  type: string;
  message: string
}

export declare interface Message {
  (messageParam: MessageParam):void;
}
// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: Message,
    $Modal: any,
    $store: any,
    $Spin:any,
    $axios:any
  }
}
