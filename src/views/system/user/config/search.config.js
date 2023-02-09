export const searchFormConfig={
   // labelWidth: '80px',
  showHeader:true,
  showFooter: true,
  rows:[
    {
      cols:[

        {
          colLayout:{
            span:8
          },
          formItems:[
            {
              type:'text',
              label: '昵称',
              field:'nickname',
              placeholder:'请输入昵称'
            },


          ],
        },
        {
          colLayout:{
            span:8
          },
          formItems:[


            {
              type:'text',
              label: '登录账号',
              field:'username',
              placeholder:'请输入登录账号'
            },


          ],
        },
        {
          colLayout:{
            span:8
          },
          formItems:[

            {
              field: 'phone',
              type: 'text',
              label:'电话号码',
              rules:[],
              placeholder:'请输入电话号码'
            },

          ],
        },
      ]
    },
    {
      cols:[

        {
          colLayout:{
            span:8
          },
          formItems:[

            {
              type:'dict-select',
              label: '状态',
              field:'status',
              placeholder:'请选择状态',
              config:{
                dictCode: 'status',
                clearable: true
              }
            },

          ],
        },
        {
          colLayout:{
            span:8
          },
          formItems:[

            {
              field: 'createdTime',
              type: 'datepicker',
              label:'创建日期',
              rules:[],
              config:{
                "start-placeholder":'开始日期',
                'end-placeholder':'结束日期',
                'value-format':'yyyy-MM-dd HH:mm:ss',
                type: 'daterange',
                'picker-options':{
                  shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    }
                  }]
                }
              }

            }
          ],
        },
      ]
    }
  ]

}
