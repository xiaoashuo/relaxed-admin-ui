<template>

  <el-form-item
    class="yi-form-item"
    :label="item.label"
    :prop="item.field"
    :rules="item.rules"
    v-bind="item.itemProps"
  >
    <template v-if="item.type === 'text' || item.type === 'password'">
      <el-input
        :value="modelValue[`${item.field}`]"
        v-bind="item.config"
        style="height:30px"
        :placeholder="item.placeholder"
        :show-password="item.type === 'password'"
        @input="handleValueChange($event, item.field)"
      />
    </template>
    <template v-if="item.type === 'number'">
      <el-input-number
        :value="modelValue[`${item.field}`]"
        v-bind="item.config"
        @input="handleValueChange($event, item.field)"
      />
    </template>
    <template v-else-if="item.type === 'select'">
      <yi-select
        :placeholder="item.placeholder"
        v-bind="item.config"
        :value="modelValue[`${item.field}`]"
        @input="handleValueChange($event, item.field)"
      />
    </template>
    <template v-else-if="item.type === 'dict-select'">
      <dict-select
        :placeholder="item.placeholder"
        :value="modelValue[`${item.field}`]"
        v-bind="item.config"
        @input="handleValueChange($event, item.field)"
      />
    </template>

    <template v-else-if="item.type === 'tree-select'">
      <yi-tree-select
        :value="modelValue[`${item.field}`]"
        v-bind="item.config"
        @input="handleValueChange($event, item.field)"
      />
    </template>
    <template v-else-if="item.type === 'cascader-select'">
      <cascader-select
        :placeholder="item.placeholder"
        v-bind="item.config"
        :value="modelValue[`${item.field}`]"
        @input="handleValueChange($event, item.field)"
      >
      </cascader-select>
    </template>
    <template v-else-if="item.type === 'dict-radio-group'">
      <dict-radio-group
        :placeholder="item.placeholder"
        :value="modelValue[`${item.field}`]"
        v-bind="item.config"
        @input="handleValueChange($event, item.field)"
      />
    </template>
    <template v-else-if="item.type === 'radio-group'">
      <yi-radio-group  v-bind="item.config"  :value="modelValue[`${item.field}`]" @input="handleValueChange(value, item.field)" >

      </yi-radio-group>
    </template>
    <template v-else-if="item.type === 'datepicker'">
      <el-date-picker
        style="width: 100%"
        :placeholder="item.placeholder"
        v-bind="item.config"
        :value="modelValue[`${item.field}`]"
        @input="handleValueChange($event, item.field)"
      />
    </template>
    <template v-else-if="item.type === 'upload'">
      <yi-upload  v-bind="item.config"  :value="modelValue[`${item.field}`]"
                  @input="handleValueChange($event, item.field)"></yi-upload>

    </template>
  </el-form-item>

</template>

<script>
import {YiRadioGroup} from '@/components/radio'
import { YiSelect, YiTreeSelect ,CascaderSelect} from '@/components/select'
import {YiUpload} from '@/components/upload'
export default {
  name: 'YiCol',
  components:{
    YiRadioGroup,
    YiSelect,
    YiTreeSelect,
    CascaderSelect,
    YiUpload
  },
  props:{
    modelValue: {
      type: Object,
      required: true
    },
    item:{
      type: Object,
      required: true
    }
  },
  methods:{
    handleValueChange(value, field) {
      this.$emit('itemChange',  value,field)
    },


  }
}
</script>

<style scoped>

</style>
