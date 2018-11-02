import Stage from 'src/components/Stage.vue'
import Shape from 'src/components/Shape.vue'

export default {
    install(Vue, opts = {}) {
        // register stage
        Vue.component('can-vue', Stage)

        // register shapes
        Vue.component('draw-shape', Shape)
    }
}
