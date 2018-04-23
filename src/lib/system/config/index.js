import Config from './config.vue'
import ConfigureView from './configureView.vue'

const components = [
  Config,
  ConfigureView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main