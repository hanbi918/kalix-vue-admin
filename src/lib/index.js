import User from './user/user.vue'
import userSearch from './user/userSearch.vue'
import userAdd from './user/userAdd.vue'
import userEdit from './user/userEdit.vue'
import userView from './user/userView.vue'

// import Role from './role/index.vue'

const components = [
  User,
  userSearch,
  userAdd,
  userEdit,
  userView
]

const admin = {
  install(Vue) {
    // Vue.component(User.name, User)
    // Vue.component(userSearch.name, userSearch)
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(admin)
}

export default admin
