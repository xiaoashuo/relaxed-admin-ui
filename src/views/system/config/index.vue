<template>
  <div class="app-container">
    <!--搜索组件-->
    <page-search ref="pageSearchRef" :searchFormConfig="searchFormConfig"
                 @resetBtnClick="handleResetClick" @queryBtnClick="handleSearchClick"></page-search>
    <!--表格组件-->
    <yi-pro-table  ref="pageContentRef" :content-table-config="contentTableConfig" :request="tableRequest"
                   @addBtnClick="showNewModal" @editBtnClick="showEditModal"
                   @delBtnClick="handleDelClick">

    </yi-pro-table>

    <!--模态表单组件-->
    <yi-form-modal ref="formModal" :modal-config="modalConfig"
                :req-function="reqFunction"
                @submitSuccess="handleSubmit"
    ></yi-form-modal>


  </div>
</template>

<script>

  //页面配置参数
  import {contentTableConfig} from "./config/content.config";
  import {searchFormConfig} from "./config/search.config";
  import {modalConfig} from "./config/modal.config";
  //页面相关请求方法
  import {getPageListData, addObj, putObj, delObj} from "@/api/config";

  export default {
    name: "config",
    data() {
      return {
        //页面相关配置
        contentTableConfig: contentTableConfig,
        searchFormConfig: searchFormConfig,
        modalConfig: modalConfig,
        //表格请求
        tableRequest: getPageListData,
        //表单请求
        reqFunction: {
          create: addObj,
          update: putObj
        },
      }
    },
    methods: {
      //表格相关
      showNewModal() {
        this.$refs.formModal.add({title: '新增配置'})
      },
      showEditModal(item) {
        this.$refs.formModal.update({title: '编辑配置', item})
      },
      //删除数据
      handleDelClick(item) {
        delObj(item.id).then(res => {
          this.$refs.pageContentRef.refreshTable(false)
        })
      },
      //模态框相关 提交成功后刷新表格
      handleSubmit(res) {
        this.$refs.pageContentRef.refreshTable(false)
      },
      //搜索框相关 搜索数据
      handleSearchClick(formData) {
        this.$refs.pageContentRef.searchTable(formData)
      },
      //重置搜索
      handleResetClick() {
        this.$refs.pageContentRef.resetTable()
      },

    }

  }
</script>

<style lang="scss" scoped>

</style>
