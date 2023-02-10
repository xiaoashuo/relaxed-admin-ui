export const searchFormConfig = {

  showHeader:true,
  showFooter: true,
  rows:[
    {
      cols:[
        {
          formItems: [
            {
              type: 'text',
              label: '标识',
              field: 'code',
              placeholder: '请输入标识'
            },
          ]
        },
        {
          formItems: [
            {
              type: 'text',
              label: '标题',
              field: 'title',
              placeholder: '请输入标题'
            }
          ]
        }
      ]
    }
  ]

}
