/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

let instance = null

function render(props) {
    console.log('render props:', props)
    instance = new Vue({
            router: [],
            render: h => h(App),
        }).$mount('#app') // 挂载到自己的html中，基座项目会拿到挂在之后的html，插入父应用中去
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
    render();
} else {
    // 动态添加 publicPath

    // eslint-disable-line [no-undef]
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 子应用协议
export async function bootstrap(props) {
    console.log('bootstrap：', props)
}

export async function mount(props) {
    console.log('mount', props)
    render(props)
}

export async function unmount(props) {
    console.log('unmount', props)
    instance.$destroy()
}