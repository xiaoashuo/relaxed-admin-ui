<template>
  <div class="yi-form">
    <div v-if="showHeader" class="header">
      <slot name="header" />
    </div>
    <el-form
      ref="inner-form"
      class="content"
      :model="value"
      v-bind="nativeFormProps"
    >
      <el-row  v-for="row in rows" v-bind="row.layout">
        <template v-for="col in row.cols">
          <el-col v-bind="col.colLayout?col.colLayout:colLayout">
            <template v-for="item in col.formItems">
              <template v-if="!item.isHidden && item.type === 'slot'">
                <slot
                  :name="item.slotName"
                  :row="{ item, data: value }"
                />
              </template>
              <yi-form-item    v-if="!item.isHidden && item.type !== 'slot'"
                              :item="item" :model-value="value"   @itemChange="handleValueChange" ></yi-form-item>
            </template>
          </el-col>

        </template>
      </el-row>
    </el-form>
    <div  v-if="showFooter" class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import YiFormItem from '@/components/form/src/YiFormItem.vue'
export default {
  name: 'YiForm',
  components:{
    YiFormItem
  },
  props:{
    value:{
      type:Object,
      required: true
    },
    //是否展示表单头
    showHeader: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: false
    },
    nativeFormProps: {
      type: Object,
      default: () => ({
        "label-width":'100px'
      })
    },
    //全局列布局
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920 显示4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    /**
     * [{
     *  layout:{},
     *  cols:[
     *  {
     *      colLayout:{},
     *      formItems:[
     *
     *      ]
     *  }
     *
     *  ]
     * }]
     */
    rows: {
      type: Array,
      default: () => []
    },
  },
  data(){
    return{

    }
  },
  methods: {
    handleValueChange(value, field) {
      this.$emit('input', { ...this.value, [field]: value })
    },
    getCurrentForm() {
      return this.$refs['inner-form']
    }
  }
}
</script>

<style scoped>

</style>
