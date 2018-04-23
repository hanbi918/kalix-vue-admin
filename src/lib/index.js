// 权限管理
import User from './auth/user'
import Role from './auth/role'
import WorkGroup from './auth/workgroup'
import DataAuth from './auth/dataauth'

// 组织结构
import Org from './organize/org'
import OrgChart from './organize/orgchart'
import OrgUser from './organize/orguser'
import Duty from './organize/duty'

// 系统管理
// import AdminDict from './system/admindict'
// import Application from './system/application'
// import Audit from './system/audit'
// import AuditConfig from './system/auditconfig'
// import Config from './system/config'
// import Function from './system/function'
// import Template from './system/template'

const components = {
  install(Vue) {
    User.install(Vue)
    Role.install(Vue)
    WorkGroup.install(Vue)
    DataAuth.install(Vue)

    Org.install(Vue)
    OrgChart.install(Vue)
    OrgUser.install(Vue)
    Duty.install(Vue)

    // AdminDict.install(Vue)
    // Application.install(Vue)
    // Audit.install(Vue)
    // AuditConfig.install(Vue)
    // Config.install(Vue)
    // Function.install(Vue)
    // Template.install(Vue)
  }
}

export default components