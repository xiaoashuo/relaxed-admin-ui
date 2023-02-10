import PageSearch from '@/components/page-search'
import ProTable from "@/components/table/src/ProTable";
import YiProTable from '@/components/table/src/YiProTable.vue'
import YiForm from '@/components/form/src/YiForm.vue'
import YiFormModal from '@/components/form/src/YiFormModal.vue'
import {DictRadioGroup,DictSelect,DictCheckBoxGroup,DictText,DictTag} from "@/components/dict";
export function registerComponents(Vue) {

  Vue.component('DictRadioGroup',DictRadioGroup)
  Vue.component('DictSelect',DictSelect)
  Vue.component('DictCheckBoxGroup',DictCheckBoxGroup)
  Vue.component('DictText',DictText)
  Vue.component('DictTag',DictTag)

  Vue.component('YiForm',YiForm)
  Vue.component('YiFormModal',YiFormModal)
  Vue.component('ProTable',ProTable)
  Vue.component('YiProTable',YiProTable)

  Vue.component('PageSearch',PageSearch)
}
