export const searchFormConfig={

  showHeader:true,
  showFooter: true,
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
              label: '菜单id',
              field:'id',
              placeholder:'请输入菜单id'
            },
            {
              type:'text',
              label: '菜单名称',
              field:'title',
              placeholder:'请输入菜单名称'
            },

          ],
        }
      ]
    }
  ]

}
