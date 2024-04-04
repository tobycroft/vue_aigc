// Composables
import {createRouter, createWebHistory} from 'vue-router'


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

MainRouter.beforeEach(async (to, from, next) => {
    await importer(to.params.pathMatch)
        .then(component => {
            to.meta.component = component.default; // 将加载的组件保存到路由元信息中
            next();
        })
        .catch(() => {
            // 如果无法加载页面组件，则重定向到 404 页面或其他默认页面
            next('/');
        });
});

function importer(pagePath) {
    switch (pagePath.length) {
        case 1:
            return import(`@/app/${pagePath[0].toLowerCase()}.vue`);
        case 2:
            return import(`@/app/${pagePath[0].toLowerCase()}/${pagePath[1].toLowerCase()}.vue`);
        case 3:
            return import(`@/app/${pagePath[0].toLowerCase()}/${pagePath[1].toLowerCase()}/${pagePath[2].toLowerCase()}.vue`);
        case 4:
            return import(`@/app/${pagePath[0].toLowerCase()}/${pagePath[1].toLowerCase()}/${pagePath[2].toLowerCase()}/${pagePath[3].toLowerCase()}.vue`);
        case 5:
            return import(`@/app/${pagePath[0].toLowerCase()}/${pagePath[1].toLowerCase()}/${pagePath[2].toLowerCase()}/${pagePath[3].toLowerCase()}/${pagePath[4].toLowerCase()}.vue`);

        default:
            return import(`@/app/index.vue`);
    }

}

export default MainRouter
