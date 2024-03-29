// Composables
import {createRouter, createWebHistory} from 'vue-router'

// const routess = [
//     {
//         path: '/',
//         // component: () => import('@/layouts/default/Default.vue'),
//         children: [
//             {
//                 path: '',
//                 // route level code-splitting
//                 // this generates a separate chunk (Home-[hash].js) for this route
//                 // which is lazy-loaded when the route is visited.
//                 // component: () => import('@/views/Home.vue'),
//                 component: () => import('@/views/user/login.vue'),
//             },
//
//         ],
//     },
//     {
//         path: '/user/login',
//         component: () => import('@/views/user/login.vue'),
//     },
//     {
//         path: '/center',
//         component: () => import('@/views/center.vue'),
//     },
//     {
//         path: '/v1/bot',
//         component: () => import('@/views/v1/bot.vue'),
//     },
//     {
//         path: '/v1/group',
//         component: () => import('@/views/v1/group.vue'),
//     },
//     {
//         path: '/v1/index',
//         component: () => import('@/views/v1/index.vue'),
//     },
//     {
//         path: '/v1/user',
//         component: () => import('@/views/v1/user.vue'),
//     },
//     {
//         path: '/v1/bot/detail',
//         component: () => import('@/views/v1/bot/subpage/detail.vue'),
//     },
//     {
//         path: '/v1/bot/edit',
//         component: () => import('@/views/v1/bot/subpage/edit.vue'),
//     },
//     {
//         path: '/v1/bot/setting',
//         component: () => import('@/views/v1/bot/subpage/setting.vue'),
//     },
//     {
//         path: '/v1/group/edit',
//         component: () => import('@/views/v1/group/subpage/edit.vue'),
//     },
//     {
//         path: '/v1/index/botrequest/edit',
//         component: () => import('@/views/v1/index/botRequest/add.vue'),
//     },
// ]

const routes = [
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/router/superRouter.vue'), // 假设您有一个布局组件用于渲染页面
    }
]

const MainRouter = createRouter({
    history: createWebHistory(),
    routes,
})

MainRouter.beforeEach((to, from, next) => {
    importer(to.params.pathMatch)
        .then(component => {
            to.meta.component = component.default; // 将加载的组件保存到路由元信息中
            next();
        })
        .catch(() => {
            // 如果无法加载页面组件，则重定向到 404 页面或其他默认页面
            next('/404');
        });
});

function importer(pagePath) {
    switch (pagePath.length) {
        case 1:
            return import(`@/views/${pagePath[0].toLowerCase()}.vue`);
        case 2:
            return import(`@/views/${pagePath[0].toLowerCase()}/${pagePath[1].toLowerCase()}.vue`);
        case 3:
            return import(`@/views/${pagePath[0].toLowerCase()}/${pagePath[1].toLowerCase()}/${pagePath[2].toLowerCase()}.vue`);

        default:
            return import(`@/views/user/login.vue`);
    }

}

export default MainRouter
