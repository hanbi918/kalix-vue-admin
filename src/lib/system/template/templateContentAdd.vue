<!--
描述：系统应用-模板管理-模板内容添加
开发人：yangz
开发日期：2018年02月09日
-->
<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="templateContent" ref="kalixBizDialog"
    v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      input(v-model="formModel.templateId" type="hidden")
      el-form-item(label="模板类型" prop="templateType" v-bind:rules="rules.templateType" v-bind:label-width="labelWidth")
        kalix-dict-select(v-model="formModel.templateType" appName="admin" dictType="模板类型" v-on:input="change($event)" style="width:100%")
      el-form-item(label="模板内容" prop="content" v-bind:label-width="labelWidth")
        tinymce(v-model="formModel.content" ref="editor" v-bind:showCustomButton="true"
          bizPop = "AdminTemplatePopTable"
          v-bind:popData="popTableData" v-bind:tinymcePlugins="tinymcePlugins"
          v-on:popoverData="getPopoverTableRow" v-on:contentClick="onContentClick")
</template>

<script type="text/ecmascript-6">
  import FormModel from './templateConfigModel'
  import {templateContentURL, templateConfigURL} from '../../config.toml'

  export default {
    name:'AdminTemplateContentAdd',
    data() {
      let validateExistTemplate = (rule, value, callback) => {
        if (value === undefined) {
          callback(new Error('请选择模板类型'))
        } else {
          let isExist = false
          for (let i = 0; i < this.templateTypes.length; i++) {
            if (value === this.templateTypes[i]) {
              isExist = true
              break
            }
          }
          if (isExist === true) {
            callback(new Error('模板类型已存在，请选择其他类型的模板添加'))
          } else {
            callback()
          }
        }
      }
      return {
        formModel: Object.assign({}, FormModel),
        templateId: '-1',
        labelWidth: '140px',
        rules: {
          templateType: [
            {required: true, validator: validateExistTemplate, trigger: 'change', type: 'number'}
          ]
        },
        targetURL: templateContentURL,
        tinymcePlugins: 'advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount,imagetools,fullpage',
        templateTypes: []
      }
    },
    computed: {
      popTableData() {
        return {
          buttonName: '模板属性',
          placement: 'right',
          width: '300px',
          trigger: 'click',
          targetUrl: templateConfigURL,
          tableFields: [
            {prop: 'fieldName', label: '属性名', width: '100px'},
            {prop: 'fieldDesc', label: '属性描述', width: '100px'}
          ],
          bizKey: 'templateAttr',
          jsonStr: `{'templateId': '` + this.templateId + `', '%fieldName%': ''}`
        }
      }
    },
    methods: {
      init(dialogOption) {
        this.formModel.templateId = dialogOption.templateId
        this.templateId = dialogOption.templateId
        this.templateTypes = dialogOption.templateTypes
      },
      change(event) {
        this.$refs.kalixBizDialog.$refs.dialogForm.clearValidate()
      },
      kalixDialogOpen() {
        this.$nextTick(() => {
          this.$refs.editor.initTinymce()
        })
      },
      kalixDialogClose() {
        this.$refs.editor.destroyTinymce()
      },
      getPopoverTableRow(row) {
        let attrVal = '${' + row.fieldName + '}'
        this.$refs.editor.setInsertContent(attrVal)
      },
      onContentClick() {
        this.$refs.editor.getKalixPop((_kalixPop) => {
          let kalixPop = _kalixPop
          setTimeout(() => {
            kalixPop.$refs.kalixPopTable.closePopover()
          }, 20)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
