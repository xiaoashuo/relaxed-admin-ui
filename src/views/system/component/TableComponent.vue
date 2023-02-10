<template>

  <div>
     <yi-pro-table  ref="pageContentRef"
                    :show-title="true"
                    :show-tools="true"
                    :content-table-config="contentTableConfig"
                   :request="tableRequest"
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
      contentTableConfig:{
        title: '角色列表',
        showSelectColumn:false,
        showHeader:true,
        showFooter: false,
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
            slotName: 'createdTime'
          },
          {
            prop: 'updatedTime',
            label:'更新时间',
            minWidth:'250',
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
  }
}
</script>

<style scoped>

</style>
