<!--
描述：系统应用-模板管理-模板属性修改
开发人：yangz
开发日期：2018年02月01日
-->
<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="templateConfig" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      input(v-model="formModel.templateId" type="hidden")
      el-form-item(label="属性名称" prop="fieldName" v-bind:label-width="labelWidth" v-bind:rules="rules.fieldName")
        el-input(v-model="formModel.fieldName")
      el-form-item(label="属性值" prop="fieldValue" v-bind:label-width="labelWidth" v-bind:rules="rules.fieldValue")
        el-input(v-model="formModel.fieldValue")
      el-form-item(label="属性描述" prop="fieldDesc" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.fieldDesc")
</template>

<script>
  import FormModel from './templateConfigModel'
  import {templateConfigURL} from '../../config.toml'

  export default {
    name:'AdminTemplateConfigEdit',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '140px',
        rules: {
          fieldName: [{required: true, message: '请输入属性名称', trigger: 'blur'}],
          fieldValue: [{required: true, message: '请输入属性值', trigger: 'blur'}]
        },
        targetURL: templateConfigURL
      }
    }
  }
</script>

<style scoped>

</style>
