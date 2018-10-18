<style scoped>
    @import 'assets/styles/common.css';

    .i-row{
            height:40px;
            font-size:14px;
            line-height:40px;
            text-align: center;
            color: #4d555d;
            
        }
</style>
<template>
    <div>
       <v-header :seller="seller"></v-header>
        <Row class='i-row'>
            <Col span="8">
                <router-link to="/">商品</router-link>
            </Col>
            <Col span="8">
                <router-link to="/ratings">评论</router-link>
            </Col>
            <Col span="8">
                <router-link to="/seller">商家</router-link>
            </Col>
        </Row>
        <router-view></router-view>
    </div>
</template>
<script>

    import header from './pages/header/header.vue'
    export default {
        data () {
            return {
                seller: {}
            }
        },
        created() {
            // 请求成功状态码
            const ERR_OK = 0;

            const sellerUrl='http://localhost/api/seller'
            // 发送请求  获取数据
            this.axios.get(sellerUrl).then((response)=>{
                if(response.data.errno===ERR_OK){
                    this.seller = response.data.data;
                // console.log(this.seller)
                }
            })
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        },
        components:{
            'v-header':header
        }
    }
</script>
