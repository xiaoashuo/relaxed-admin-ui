export const searchFormConfig={
  showHeader:true,
  showFooter: true,
  rows:[
    {
      cols:[
        {
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


          ],
        },
        {
          formItems:[

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

}
