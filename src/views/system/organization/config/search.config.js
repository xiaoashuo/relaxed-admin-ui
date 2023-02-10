export const searchFormConfig={


  showHeader:true,
  showFooter:true,
  rows:[
    {
      cols:[
        {
          formItems:[
            {
              type:'text',
              label: '组织名称',
              field:'name',
              placeholder:'请输入组织名称',

              itemProps:{
                "label-width":'70px'
              },
              config:{
                size:"small",

              }
            },

          ],
        },

      ]
    }
  ]

}
