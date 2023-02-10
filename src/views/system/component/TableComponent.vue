<template>

  <div>
    <page-search  ref="pageSearchRef" :search-form-config="searchFormConfig"
                  @resetBtnClick="handleResetClick" @queryBtnClick="handleSearchClick"
    ></page-search>
     <yi-pro-table  ref="pageContentRef"
                    :show-title="true"
                    :show-tools="true"
                    multi-sort
                    :content-table-config="contentTableConfig"
                   :request="tableRequest"
                    @addBtnClick="handleCreateBtnClick"
                    @editBtnClick="handleEditBtnClick"
                    @delBtnClick="handleDelBtnClick"
                    @row-dblclick="handleRowDbClick"
     >

<!--       <template #userTools></template>-->
     </yi-pro-table>

  </div>
</template>

<script>
import YiProTable from '@/components/table/src/YiProTable.vue'
import { getPageList } from '@/api/role'
export default {
  name: 'TableComponent',
  components:{
    YiProTable
  },
  data(){
    return{
      tableRequest: getPageList,
      searchFormConfig:{

        showHeader:true,
        showFooter:true,
        rows:[
          {
            cols:[
              {
                colLayout:{
                  span:24,
                  style: 'display:flex'
                },
                formItems:[
                  {
                    type:'text',
                    label: '角色名称',
                    field:'name',
                    placeholder:'请输入角色名称',
                    config:{
                      clearable: true
                    }
                  },
                  {
                    type:'text',
                    label: '标识',
                    field:'code',
                    placeholder:'请输入标识',
                    config:{
                      clearable: true
                    }

                  },
                ],
              }
            ]
          }
        ]

      },
      contentTableConfig:{
        title: '角色列表',
        showSelectColumn:false,
        showHeader:true,
        showFooter: true,
        headerProps:{

           leftVisible:true,
          rightVisible:true
        },
        tableProps:{

          'cell-style':{
            padding: '5px 0'
          }


        },
        propList:[

          {
            prop: 'name',
            label:'角色名称',
            minWidth: 180,
          },
          {
            prop: 'code',
            label:'标识',
            minWidth: 200,
          },
          {
            prop: 'remarks',
            label:'描述',
            minWidth: 180
          },
          {
            prop: 'createdTime',
            label:'创建时间',
            minWidth:'250',
            sortable: 'custom',
            slotName: 'createdTime'
          },
          {
            prop: 'updatedTime',
            label:'更新时间',
            minWidth:'250',
            sortable: 'custom',
            slotName: 'updatedTime'
          },
          {

            label:'操作',
            minWidth:'200',
            slotName:'handler'
          }
        ]
      }

    }
  },
  methods:{
    handleCreateBtnClick(){
      console.log("新建按钮被点击了")
    },
    handleEditBtnClick(item){
      console.log("编辑按钮被点击了",item)
    },
    handleDelBtnClick(){
      console.log("删除按钮被点击了")
    },
    handleRowDbClick(item){
      console.log("当前行被双击了",item)
    },
    handleSearchClick(formData) {
      this.$refs.pageContentRef.searchTable(formData)
    },
    handleResetClick(){
      this.$refs.pageContentRef.resetTable()
    }
  }
}
</script>

<style scoped>

</style>
