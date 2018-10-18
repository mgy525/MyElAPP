const routers = [
    {
        path: '/',
        meta: {
            title: '商品页面'
        },
        component: (resolve) => require(['./pages/goods/goods.vue'], resolve)
    },
    {
        path: '/ratings',
        meta: {
            title: '评论'
        },
        component: (resolve) => require(['./pages/ratings/ratings.vue'], resolve)
    },
    {
        path: '/seller',
        meta: {
            title: '商家'
        },
        component: (resolve) => require(['./pages/seller/seller.vue'], resolve)
    }
];
export default routers;