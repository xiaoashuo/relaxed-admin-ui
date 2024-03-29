import {getRoleSelectData} from "@/api/role";

export const modalAuthConfig= {
  title: '授权角色',
  colLayout:{
    span: 24
  },
  nativeFormProps:{
    'label-width': '80px'
  },
  rows:[
    {
      cols:[
        {
          formItems:[
            {
              type:'text',
              label: '用户id',
              field:'userId',
              isHidden: true
            },
            {
              type:'text',
              label: '用户名',
              field:'username',
              config:{
                disabled: true
              }
            },
            {
              type:'select',
              label: '角色',
              field:'roleCodes',
              placeholder:'请选择角色',
              config:{

                remoteLoad: true,
                request: getRoleSelectData,
                nativeProps:{
                  multiple: true,
                }
              }
            },
          ]
        }
      ]
    }
  ],

}
