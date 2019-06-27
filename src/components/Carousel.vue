<template>
    <div class="model" >
        <div class="icon" @click="iconChange">
            <i class="el-icon-close"></i>
        </div>
        <el-carousel :initial-index="carouselIndex" :autoplay="false" :height="height">
            <el-carousel-item v-for="(item, index) in carouselArray" :key="index">
                <div :style="'width: ' + item.width + 'px;max-width: 980px; margin: 0 auto;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);'">
                    <img :src="item.url" alt >
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: "carousel",
    data() {
        return {
            height: '',
            scrollHeight: document.body.scrollHeight,
        };
    },
    props: {
        carouselArray: {
            type: Array
        },
        carouselIndex: {
            type: Number
        },
        carouselShow: {
            type: Boolean
        }
    },
    mounted() {
        this.carouselArray.forEach((item, index) => {   //  计算图片高度，超多屏幕高度按比例缩小
            item.i = this.scrollHeight/item.height;
            if(item.height > this.scrollHeight){
                item.height = this.scrollHeight;
                item.width = item.width*item.i;
            }
            this.height = this.height > item.height ? this.height : item.height + 'px'; //  取高度最大值
        });
    },
    methods: {
        iconChange(){
            this.$emit('iconChange', false);
        },
    }
};
</script>
<style type="text/css" scoped lang="less">
    .model{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 1000000;
        .el-carousel{
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .icon{
            position: absolute;
            top: 20px;
            right: 25px;
            color: #fff;
            font-size: 50px;
            z-index: 1000001;
        }
    }
</style>
