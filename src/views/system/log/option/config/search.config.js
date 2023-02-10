export const searchFormConfig={

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
              label: '追踪id',
              field:'traceId',
              placeholder:'请输入traceId'
            },
            {
              type:'text',
              label: 'ip',
              field:'ip',
              placeholder:'请输入ip'
            },
          ],
        }
      ]
    }
  ]

}
