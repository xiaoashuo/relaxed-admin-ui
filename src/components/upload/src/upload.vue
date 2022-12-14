<template>
    <div class="upload">
      <el-upload
        class="upload-demo"
        :multiple="multiple"
        :drag="drag"
        :limit="limit"
        :file-list="fileList"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-exceed="handleExceed"
        :on-error="handleUploadError"
        :on-success="handleUploadSuccess"
        >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
</template>

<script>
  export default {
    name: 'upload',
    props:{
      // 值
      value: [String, Object, Array],
      //上传地址
      uploadUrl:{
        type: String ,
        required: true
      },
      multiple:{
        type: Boolean ,
        default: false
      },
      drag:{
        type: Boolean ,
        default: false
      },
      // 数量限制
      limit: {
        type: Number,
        default: 5,
      },
      // 文件类型, 例如['png', 'jpg', 'jpeg']
      fileType: {
        type: Array,
        default: () => ["doc", "xls", "ppt", "txt", "pdf"],
      },
    },
    data(){
      return {
        uploadList: [],
        fileList: [],
      }
    },
    methods:{
      // 文件个数超出
      handleExceed() {
        this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`);
      },
      // 上传失败
      handleUploadError(err) {
        this.$message.error("上传文件失败，请重试");
      },
      // 上传成功回调
      handleUploadSuccess(res, file) {
        console.log(res)
      },
    }
  }
</script>

<style scoped>

</style>
