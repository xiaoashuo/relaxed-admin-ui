export const modalConfig= {
  colLayout:{
    span: 24
  },
  rows:[
    {
      cols:[
        {
          formItems:[
            {
              type:'text',
              label: '用户id',
              field:'id',
              isHidden: true
            },
            {
              type:'text',
              label: '角色名称',
              field:'name',
              placeholder:'请输入角色名称',
              rules:[
                { required: true, message: '请输入角色名称', trigger: 'change' },
              ]
            },
            {
              type:'text',
              label: '标识',
              field:'code',
              placeholder:'请输入角色标识',
              rules:[
                { required: true, message: '请输入角色标识', trigger: 'change' },
              ]
            },
            {
              type:'text',
              label: '描述',
              field:'remarks',
              placeholder:'请输入描述'
            },

          ],
        }
      ]
    }
  ],

}
