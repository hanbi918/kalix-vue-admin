<template lang="pug">
  Kalix-Search(:searchFields="searchFields" title="模板查询" bizKey="template")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AdminTemplateSearch',
    data() {
      return {
        searchFields: [
          {label: '模板名称', prop: 'name'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
