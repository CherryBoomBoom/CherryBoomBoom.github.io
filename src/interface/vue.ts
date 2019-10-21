import { Vue, Component, Watch,Prop } from 'vue-property-decorator'
import axios from './axios'
import config from '../config/config.default'
export class IVue extends Vue {
  public $Message: any
  public $store: any
  public $router: any
  public $Spin:any
  public config: typeof config = JSON.parse(JSON.stringify(config))
  
  public async sendRequest(
    url: string,
    data: any,
    method: string = 'POST',
    headers?: { [key: string]: string }
  ): Promise<any> {
    return await new Promise(res => {
      axios
        .request({ url, method, data, headers })
        .then(response => {
          res(response.data)
        })
        .catch(e => {
          res(false)
        })
    })
  }
}
export function IComponent(config: { components: { [keys: string]: any } }) {
  return Component(config)
}
export function IWatch(key: string) {
  return Watch(key)
}
export function IProp(...args) {
  return Prop(...args)
}
