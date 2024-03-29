export const contentTableConfig = {
  title: '操作日志',
  showSelectColumn: false,
  headerProps: {
    visible: true,
    leftVisible: true,
    rightVisible: false
  },
  propList: [
    {

      label: '',
      minWidth: 180,
      type: 'expand',
      slotName: 'expandHandle'
    },
    {
      prop: 'traceId',
      label: '追踪id',
      minWidth: 180
    },
    {
      prop: 'uri',
      label: '地址',
      minWidth: 180
    },
    {
      prop: 'ip',
      label: 'ip',
      minWidth: 180
    },
    {
      prop: 'method',
      label: '方法',
      minWidth: 180
    },
    {
      prop: 'status',
      label: '状态码',
      minWidth: 180,
      slotName: 'extStatus'
    },
    {
      prop: 'createdTime',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createdTime'
    }
  ]
}
