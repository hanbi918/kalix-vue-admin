<!--
描述：系统应用-模板管理-模板添加
开发人：yangz
开发日期：2018年01月31日
-->
<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="template" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="模板名称" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
        el-input(v-model="formModel.name")
      el-form-item(label="模板描述" prop="desc" v-bind:label-width="labelWidth")
        el-input(type="textarea" v-model="formModel.desc" v-bind:rows="3")
</template>

<script type="text/ecmascript-6">
  import FormModel from './templateModel'
  import {templateURL} from '../../config.toml'

  export default {
    name:'AdminTemplateAdd',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '140px',
        rules: {
          name: [{required: true, message: '请输入模板名称', trigger: 'blur'}]
        },
        targetURL: templateURL
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
