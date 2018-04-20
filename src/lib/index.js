import User from './user'
import Role from './role'
import WorkGroup from './workgroup'
import DataAuth from './dataauth'

const components = {
  install(Vue) {
    User.install(Vue)
    Role.install(Vue)
    WorkGroup.install(Vue)
    DataAuth.install(Vue)
  }
}

export default components