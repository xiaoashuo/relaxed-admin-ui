import { YiTable,YiProTable } from '@/components/table'
import { YiForm,YiFormModal } from '@/components/form'
import PageSearch from '@/components/page-search'
import {DictRadioGroup,DictSelect,DictCheckBoxGroup,DictText,DictTag} from "@/components/dict";
export function registerComponents(Vue) {

  Vue.component('DictRadioGroup',DictRadioGroup)
  Vue.component('DictSelect',DictSelect)
  Vue.component('DictCheckBoxGroup',DictCheckBoxGroup)
  Vue.component('DictText',DictText)
  Vue.component('DictTag',DictTag)

  Vue.component('YiForm',YiForm)
  Vue.component('YiFormModal',YiFormModal)
  Vue.component('YiTable',YiTable)
  Vue.component('YiProTable',YiProTable)

  Vue.component('PageSearch',PageSearch)
}
