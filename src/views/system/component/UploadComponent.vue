<template>

  <div>

    <!--文件自动上传,及拖拽后自动上传-->
    <p>自动上传</p>
    <yi-upload
      :limit="UploadAutoUpload.limit"
      :upload-url="UploadAutoUpload.uploadUrl"
      :drag="UploadAutoUpload.drag"
      :file-type="UploadAutoUpload.fileType"
      :data="UploadAutoUpload.data"
      :delete-request="UploadAutoUpload.deleteFileRequest"
    >

    </yi-upload>
    <!--文件手动上传,及拖拽后自动上传-->
    <p>手动上传</p>
    <yi-upload v-model="formData.file"
               :limit="UploadClickUpload.limit"
               :drag="UploadClickUpload.drag"
               :file-type="UploadClickUpload.fileType"
               :auto-upload="UploadClickUpload.autoUpload"
    >

    </yi-upload>
    <el-button @click="handleClickUpload">上传</el-button>
    <!--文件自动上传,取消拖拽-->
    <p>自动上传,图片形式</p>
    <yi-upload
      :limit="UploadImageAutoUpload.limit"
      :upload-url="UploadImageAutoUpload.uploadUrl"
      :list-type="UploadImageAutoUpload.listType"
      :file-type="UploadImageAutoUpload.fileType"
      :drag="UploadImageAutoUpload.drag"
      :data="UploadImageAutoUpload.data"
      :delete-request="UploadImageAutoUpload.deleteFileRequest"
    >

    </yi-upload>
  </div>

</template>

<script>
import { YiUpload } from '@/components/upload'
const FILE_UPLOAD_URL=process.env.VUE_APP_BASE_API+'/common/file/upload'
export default {
  name: 'UploadComponent',
  components:{
    YiUpload
  },
  data(){
    return {
      UploadAutoUpload:{
        limit:1,
        drag:true,
        uploadUrl:FILE_UPLOAD_URL,
        fileType:['txt','docx','xlsx'],
        deleteFileRequest: this.deleteFile,
        data:{
          //指定上传基础目录下的相对路径
          relatedPath:"profile/annex",
          //是否按日期分割
          splitDate:false
        },
      },
      UploadImageAutoUpload:{
        limit:1,
        drag:false,
        listType:'picture-card',
        uploadUrl:FILE_UPLOAD_URL,
        fileType:['png','jpeg','gif'],
        deleteFileRequest: this.deleteFile,
        data:{
          //指定上传基础目录下的相对路径
          relatedPath:"profile/annex",
          //是否按日期分割
          splitDate:false
        },
      },
      formData:{
        file:[]
      },
      UploadClickUpload:{
        limit:1,
        drag:true,
        fileType:['txt','docx','xlsx'],
        autoUpload: false
      },
    }

  },
  methods:{
    deleteFile(){
      //自动上传删除文件方法
      console.log("当前文件点击删除了")
      return Promise.resolve()
    },
    handleClickUpload(){
      let formData=new FormData()
      formData.append("test","123456");
      formData.append("file",this.formData.file[0]?.raw,this.formData.file[0]?.name)
      //执行文件上传
      console.log("当前文件表单",formData.get("test"),formData.get("file"))
    }
  }
}
</script>

<style scoped>

</style>
