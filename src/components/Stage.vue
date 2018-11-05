<template>

    <div class="can-vue wrapper">

        <canvas
            class="canvas"
            :width="cmpWidth"
            :height="cmpHeight"
            ref="canvas"></canvas>

        <slot />

    </div>

</template>

<script>
import rect from 'fh-components/mixins/rect'
import Konva from 'konva/src/Core'
import 'konva/src/shapes/rect'
import 'konva/src/shapes/circle'

let layer = null

export default {
    mixins: [rect],
    props: {
        height: {
            type: [String, Number],
            default: -1
        },
        width: {
            type: [String, Number],
            default: -1
        }
    },
    data() {
        return {
            stage: null,
            stageReady: false,
            shapeCount: 0,
            shapes: []
        }
    },
    mounted() {
        if (!this.stageReady) {
            this.setupStage()
        }
    },
    computed: {
        cmpWidth() {
            return this.clientRect && this.width == -1
                ? this.clientRect.width
                : this.width
        },
        cmpHeight() {
            return this.clientRect && this.height == -1
                ? this.clientRect.height
                : this.height
        }
    },
    methods: {
        addShape(opts = {}) {
            if (!this.stageReady) {
                this.setupStage()
            }

            const shape = new Konva[opts.shape]({
                ...opts
            })
            this.shapes.push(shape)

            if (!layer) {
                layer = new Konva.Layer()
                this.stage.add(layer)
            }

            layer.add(shape)
            layer.draw()

            return this.shapeCount++
        },
        setupStage() {
            this.stage = new Konva.Stage({
                container: this.$el,
                width: this.cmpWidth,
                height: this.cmpHeight
            })
            this.stageReady = true
        },
        updateShape(id, prop, newVal) {
            this.shapes[id][prop](newVal)
            requestAnimationFrame(this.masterUpdate)
        },
        masterUpdate() {
            layer.draw()
        }
    },
    watch: {
        cmpWidth(newVal) {
            if (this.stageReady && this.stage) {
                this.stage.setWidth(newVal)
            }
        },
        cmpHeight(newVal) {
            if (this.stageReady && this.stage) {
                this.stage.setHeight(newVal)
            }
        }
    }
}
</script>

<style lang="scss">
.can-vue {
    .canvas {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
}
</style>
