<template>
<el-dialog :title="title" :visible.sync="outerVisible">
    <span v-html="content"></span>
    <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">close</el-button>
    </div>
</el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            content: '',
            title: '',
            outerVisible: false,
            innerVisible: false
        };
    },
    created() {
        this.$nuxt.$on('showDetailsEvent', (data) => {
          this.outerVisible = true
            console.log(data);
            this.title = data.title
            this.content = data.content

        })

    },
}
</script>
