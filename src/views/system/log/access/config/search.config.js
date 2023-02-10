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
              label: '追踪id',
              field:'traceId',
              placeholder:'请输入traceId'
            },

          ],
        },
        {
          formItems:[

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
