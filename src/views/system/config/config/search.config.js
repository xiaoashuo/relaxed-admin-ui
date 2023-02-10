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
              label: '配置键',
              field:'confKey',
              placeholder:'请输入配置键'
            },

          ],
        },
        {
          formItems:[

            {
              type:'text',
              label: '配置名称',
              field:'name',
              placeholder:'请输入配置名称'
            },

          ],
        }
      ]
    }
  ]

}
