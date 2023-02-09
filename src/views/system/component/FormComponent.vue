<template>
   <div style="width: 50%">
      <p>form单行单列</p>
      <yi-form v-model="form" v-bind="FormRowCol">
        <template #header>
           表单项
        </template>
        <template #footer>
          <div>尾部工具</div>
        </template>
        <template #description="scope">
          <el-form-item :label="scope.row.item.label">
            <el-input
              :placeholder="scope.row.item.placeholder"
              v-model="scope.row.data[`${scope.row.item.field}`]"
            />
          </el-form-item>
        </template>
      </yi-form>
      <p>form单行多列</p>
     <yi-form v-model="form" v-bind="FormRowMultiCol"></yi-form>
      <p>form多行单列</p>
     <yi-form v-model="form" v-bind="FormMultiRowCol"></yi-form>
      <p>form多行多列</p>
     <yi-form v-model="form" v-bind="FormMultiRowMultiCol"></yi-form>

      <p>弹窗Form</p>
     <el-button @click="showFormModal">点击展示</el-button>
     <yi-form-modal
       ref="yiFormModal"
       :modal-config="FormRowCol"
                     :req-function="reqFunction"
                     @submitSuccess="AfterSubmitSuccess"></yi-form-modal>
   </div>
</template>

<script>
import YiForm from '@/components/form/src/YiForm.vue'
import YiFormModal from '@/components/form/src/YiFormModal.vue'
export default {
  name: 'FormComponent',
  components:{
    YiForm,
    YiFormModal
  },
  data(){
    return{
       form:{
         contractNo:"123",
         age:18,
         name:'张三',
         description:'不知道'
       },
      reqFunction: {
        create: (payload)=>Promise.resolve(),
        update: (payload)=>Promise.resolve()
      },
       FormRowCol:{
         showHeader: true,
         showFooter: true,
         nativeFormProps:{
           "label-width":'100px'
         },
         //全局列布局
         colLayout:{
           xl: 6, // >1920 显示4个
           lg: 8,
           md: 12,
           sm: 24,
           xs: 24
         },
         rows:[
           {
             layout:{},
             cols:[
               {
                 colLayout: {

                 },
                 formItems:[
                   {
                     type:'text',
                     label: '合同编号',
                     field:'contractNo',
                     placeholder:'请输入合同编号',
                   },
                   {
                     type:'slot',
                     label: '描述',
                     field:'description',
                     placeholder:'请输入描述',
                     slotName:'description'
                   },
                 ]
               }
             ]
           }
         ]


       },
      //单行多列
      FormRowMultiCol:{
        showHeader: true,
        showFooter: true,
        nativeFormProps:{
          "label-width":'100px'
        },
        //全局列布局
        colLayout:{
          xl: 6, // >1920 显示4个
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        },
        rows:[
          {
            layout:{},
            cols:[
              {
                colLayout: {

                },
                formItems:[
                  {
                    type:'text',
                    label: '合同编号',
                    field:'contractNo',
                    placeholder:'请输入合同编号',
                  },
                  {
                    type:'upload',
                    label: '上传文件',
                    field:'uploadData',
                    rules:[
                      { required: true, message: '请选择文件', trigger: 'blur' },
                    ],
                    config: {

                      limit:1,
                      drag:true,
                      uploadUrl:"#",
                      fileType:['txt','docx','xlsx'],
                      data:{
                        relatedPath:"profile/annex",
                        splitDate:false
                      },
                    }
                  },
                ]
              }
            ]
          }
        ]


      },
      FormMultiRowCol:{
        showHeader: true,
        showFooter: true,
        nativeFormProps:{
          "label-width":'100px'
        },
        //全局列布局
        colLayout:{
          xl: 6, // >1920 显示4个
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        },
        rows:[
          {
            layout:{},
            cols:[
              {
                colLayout: {

                },
                formItems:[
                  {
                    type:'text',
                    label: '合同编号',
                    field:'contractNo',
                    placeholder:'请输入合同编号',
                  },

                ]
              }
            ]
          },
          {
            layout:{},
            cols:[
              {
                colLayout: {

                },
                formItems:[
                  {
                    type:'text',
                    label: '姓名',
                    field:'name',
                    placeholder:'请输入用户姓名',
                  },

                ]
              }
            ]
          }
        ]


      },
      FormMultiRowMultiCol:{
        showHeader: true,
        showFooter: true,
        nativeFormProps:{
          "label-width":'100px'
        },
        //全局列布局
        colLayout:{
          xl: 6, // >1920 显示4个
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        },
        rows:[
          {
            layout:{},
            cols:[
              {
                colLayout: {
                  span:6
                },
                formItems:[
                  {
                    type:'text',
                    label: '合同编号',
                    field:'contractNo',
                    placeholder:'请输入合同编号',
                  },
                ]
              },
              {
                colLayout: {
                  span:6
                },
                formItems:[
                  {
                    type:'text',
                    label: '年龄',
                    field:'age',
                    placeholder:'请输入年龄',
                  },
                ]
              }
            ]
          },
          {
            layout:{},
            cols:[
              {
                colLayout: {

                },
                formItems:[
                  {
                    type:'text',
                    label: '姓名',
                    field:'name',
                    placeholder:'请输入用户姓名',
                  },

                ]
              }
            ]
          }
        ]


      },
    }
  },
  methods:{
    showFormModal(){
      this.$refs.yiFormModal.add({ title: '新增角色', item:{} })
    },
    AfterSubmitSuccess(){
      console.log("提交表单成功")
    }
  }
}
</script>

<style scoped>

</style>
