import Template from './template.vue'
import TemplateAdd from './templateAdd.vue'
import TemplateConfigAdd from './templateConfigAdd.vue'
import TemplateConfigEdit from './templateConfigEdit.vue'
import TemplateConfigView from './templateConfigView.vue'
import TemplateContentAdd from './templateContentAdd.vue'
import TemplateContentEdit from './templateContentEdit.vue'
import TemplateContentView from './templateContentView.vue'
import TemplateEdit from './templateEdit.vue'
import TemplatePopTable from './templatePopTable.vue'
import TemplatePreview from './templatePreview.vue'
import TemplateSearch from './templateSearch.vue'
import TemplateView from './templateView.vue'

const components = [
  Template,
  TemplateAdd,
  TemplateConfigAdd,
  TemplateConfigEdit,
  TemplateConfigView,
  TemplateContentAdd,
  TemplateContentEdit,
  TemplateContentView,
  TemplateEdit,
  TemplatePopTable,
  TemplatePreview,
  TemplateSearch,
  TemplateView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main