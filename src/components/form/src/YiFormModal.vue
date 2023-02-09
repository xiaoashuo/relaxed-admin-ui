<template>
  <div class="form-modal">
    <el-dialog
      :title="title"
      :visible.sync="visible"
      :append-to-body="appendToBody"
      :width="width"
      center
      :before-close="dialogClose"
    >
      <yi-form ref="formModalRef" v-model="formData" v-bind="modalConfig">

      </yi-form>

      <div slot="footer" class="dialog-footer">
        <slot name="footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
        </slot>

      </div>
    </el-dialog>
  </div>
</template>

<script>
import YiForm from '@/components/form/src/YiForm.vue'

import formModalActionMixin from '@/mixins/form/formModalActionMixin'
export default {
  name: 'YiFormModal',
  components: {
    YiForm
  },
  mixins: [formModalActionMixin],
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    width:{
      type: String,
      default: '40%'
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      formData: {}
    }
  },
  computed: {

  },
  methods: {
    dialogClose(done) {
      this.close()
      done()
    },
    beforeClose() {
      this.formData = {}
      this.$refs.formModalRef.getCurrentForm().resetFields()
    },
    createdFormCallback(payload) {
      this.formData = payload.item ? payload.item : {}
    },
    updatedFormCallback(payload) {
      this.formData = { ...payload.item }
    },
    handleConfirmClick() {
      console.log(this.$refs.formModalRef.getCurrentForm())
      this.$refs.formModalRef.getCurrentForm().validate((valid, invalidFields) => {
        if (!valid) {
          return
        } else {
          this.handleSubmit({ ...this.formData })
        }
      })
    }

  }
}
</script>

<style scoped>

</style>
