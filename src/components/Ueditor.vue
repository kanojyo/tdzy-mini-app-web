<template>
    <div>
        <script :id="id" type="text/plain"></script>
    </div>
</template>
<script>
// import { imgMatch } from '@/utils/validate.js'

export default {
    name: "UE",
    data() {
        return {
            // imgNum: 0, //  图片数量
            // id: 'id',
            editor: null,
            config: {
                //  文本编辑器配置
                initialFrameWidth: null,
                initialFrameHeight: 500
            }
        };
    },
    props: {
        defaultMsg: {
            type: String
        },
        id: {
            type: String
        }
    },
    watch: {
        defaultMsg(val) {
            this.editor.setContent(val);
        }
    },
    destroyed() {
        this.editor.destroy();
    },
    mounted() {
        UE.delEditor(this.id);
        this.editor = UE.getEditor(this.id, this.config); // 初始化UE
        this.editor.ready(() => {
            this.editor.setContent(this.defaultMsg); // 确保UE加载完成后，放入内容。
            this.editor.addListener("contentChange", () => {
                //    监听编辑器里面的内容变化
                // if (imgMatch(this.editor.getContent()) === null) {
                //     this.imgNum = 0;
                // } else {
                //     this.imgNum = imgMatch(this.editor.getContent()).length;
                // }
                // this.$emit("imgNum", this.imgNum);
            });
        });
    },
    methods: {
        getUEContent() {
            // 获取内容方法
            return this.editor.getContent();
        },
        getUEContentTxt() {
            // 获取纯文本内容方法
            return this.editor.getContentTxt();
        }
    },
    destroyed() {
        this.editor.destroy();
    }
};
</script>
