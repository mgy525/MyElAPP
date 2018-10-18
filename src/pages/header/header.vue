<template>
    <div class='content'>
        <div class="index">
            <div class='i-he'>
                <div class='header'>
                    <img class='index-img' :src="seller.avatar" alt="">
                </div>
                <div class='header-text'>
                    <p class='text1'>
                        <img class='header-img' :src="imgurl" alt="">
                            {{seller.name}}
                    </p>  
                    <p class='text2'>
                        {{seller.description}}/{{seller.deliveryTime}}分钟送达
                    </p>  
                    <p class='text3'>
                        <img class='text3-img' src="../../assets/images/decrease_1@2x.png" alt="">
                        {{ huodong }}，满50减10
                        
                    </p>
                </div>
                <div class="text3-btn">
                    <span class="count" @click="showDetail">5个&emsp;></span> 
                </div>
            </div>
            
            <div class="i-bottom" @click="showDetail">
                <img class='i-b-img' src="../../assets/images/bulletin@2x.png" alt="">
                <span class="i-b-text">
                    {{ seller.bulletin }}
                </span> 
                <span class="i-b-i">&emsp;> </span>
            </div>
        </div>
        <div v-show="detailShow" class='modal'>
            <div class='modal-b'>
                <div class='modal-h'>
                    {{ seller.name }}
                    
                </div>
                
                <div class='modal-vip'>
                    <p class='modal-vip-text'>
                        优惠信息
                    </p>
                </div>
                <div class='modal-call'>
                    <p class='modal-call-text'>
                        商家公告
                    </p>


                    <Card style="width:350px">
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>
                            Classic film
                        </p>
                        <a href="#" slot="extra" @click.prevent="changeLimit">
                            <Icon type="ios-loop-strong"></Icon>
                            Change
                        </a>
                        <ul>
                            <li v-for="item in randomMovieList">
                                <a :href="item.url" target="_blank">{{ item.name }}</a>
                                <span>
                                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                                    {{ item.rate }}
                                </span>
                            </li>
                        </ul>
                    </Card>


                </div>

                <div class="detail-close" @click="hideDetail">
                    <i class="icon-close">xxx</i>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                huodong:"",
                imgurl:'',
                detailShow: false,



                 movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: []


            }
        },
            methods: {
                showDetail() {
                    this.detailShow = true;
                },
                hideDetail() {
                    this.detailShow = false;
                },

                changeLimit () {
                    function getArrayItems(arr, num) {
                        const temp_array = [];
                        for (let index in arr) {
                            temp_array.push(arr[index]);
                        }
                        const return_array = [];
                        for (let i = 0; i<num; i++) {
                            if (temp_array.length>0) {
                                const arrIndex = Math.floor(Math.random()*temp_array.length);
                                return_array[i] = temp_array[arrIndex];
                                temp_array.splice(arrIndex, 1);
                            } else {
                                break;
                            }
                        }
                        return return_array;
                    }
                    this.randomMovieList = getArrayItems(this.movieList, 5);
                },



            },
            mounted () {
                this.changeLimit();
            },
       
        props:{
            seller:{
                type:Object,
        
            }
        },
        watch:{
               seller(v){
                   this.huodong=v.supports[0].description,
                   this.imgurl=v.pics[0],
                   
                    console.log('v',v);
                   
                   
               } 
        }
    }
</script>
<style scoped lang="less">
.content{
    position: relative;
    overflow: hidden;
    .index{
        background-color: rgba(7, 17, 27, 0.5);
        
        .i-he{
            height:96px;
            display:flex;
            padding-left: 24px;
            padding-top: 24px;
            .header{
                        

                .index-img{
                    width:64px;
                    height:64px;
                    
                    
                }
            }
            .header-text{
                padding-left: 16px;
                .text1{
                    line-height: 20px;
                    margin-bottom: 8px;
                    
                    .header-img{
                        height:16px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 6px;
                        
                    }
                    
                        color: rgb(255, 255, 255);
                        font-size: 16px;
                        font-weight: bold;
                        
                        
                    
                }
                .text2{
                    font-size: 12px;
                    color: rgb(255, 255, 255);
                    font-weight: 100;
                    line-height: 12px;
                    margin-bottom: 10px;
                    
                    }
                .text3{
                    font-size:10px;
                    color: rgb(255, 255, 255);
                    font-weight: 100;               
                    line-height: 12px;
                    display:flex;
                    .text3-img{
                        height:16px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 6px;
                    }
                }
                
            }   
            .text3-btn{
                color: rgb(255, 255, 255);
                position: absolute;
                right: 12px;
                top: 68px;
                padding: 0 8px;
                height: 24px;
                line-height: 24px;
                border-radius: 14px;
                background: rgba(0,0,0,0.2);
                text-align: center;
            } 
        }

        .i-bottom{
            margin-top: 13px;
            position: relative;
            height: 28px;
            line-height: 28px;
            padding: 0 22px 0 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: #07111b1a;
            color: rgb(255, 255, 255);

            .i-b-img{
                display: inline-block;
                vertical-align: top;
                margin-top: 8px;
                width: 22px;
                height: 12px;
            }
            .i-b-text{
                vertical-align: top;
                margin: 0 4px;
                font-size: 10px;
            }
            .i-b-i{
                position: absolute;
                font-size: 10px;
                right: 12px;
                top: 1px;
            }
        }
    }
    .modal{ 
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        opacity: 1;
        background: rgba(7,17,27,0.8);

        .modal-b{
            color: white;
            margin: 64px 46px 0px 46px;
            
            .modal-h{
                font-size: 16px;
                font-weight: 350;
                line-height: 16px;
                text-align: center;
            }

            .modal-vip{
                .modal-vip-text{
                    text-align: center;
                    font-size: 14px;
                    font-weight: 350;
                    line-height: 14px;
                }
            }
            .modal-call{
                .modal-call-text{
                    text-align: center;
                    font-size: 14px;
                    font-weight: 350;
                    line-height: 14px;

                }
                    
            }

            .detail-close{
                text-align: center;
                font-size: 16px;
            }
        }
    }
}
     
</style>
