<template>
    <!-- <div v-if="data"> -->
    <div>
        <h1>upload</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="美食名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="美食评价">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit()">上传</el-button>
                <el-button @click="Cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "upload",
    data: () => ({
        form: {
            name: "name",
            desc: "desc"
        }
    }),
    methods: {
        onSubmit() {
            console.log('submit!')
            console.log(this.form.name)
            console.log('submit_over!')
            console.log(this.form.desc)
        },
        Cancel() {
            console.log('cancel!')
            this.data.form.name = ""
            this.data.form.desc = "abaaba"
            console.log(this.form.desc)
        }
    }
  }
</script>