<template>

    <div/>

</template>

<script>
export default {
    props: {
        fill: {
            type: String,
            default: 'blue'
        },
        height: {
            type: [String, Number],
            default: 100
        },
        shape: {
            type: String,
            default: 'Rect'
        },
        width: {
            type: [String, Number],
            default: 100
        },
        x: {
            type: [String, Number],
            default: 0
        },
        y: {
            type: [String, Number],
            default: 0
        }
    },
    data() {
        return {
            id: -1
        }
    },
    mounted() {
        const opts = {
            shape: this.cmpShape,
            x: parseInt(this.x),
            y: parseInt(this.y),
            width: parseInt(this.width),
            height: parseInt(this.height),
            fill: this.fill
        }

        this.id = this.$parent.addShape(opts)
    },
    computed: {
        cmpShape() {
            return this.shape.charAt(0).toUpperCase() + this.shape.slice(1)
        }
    },
    watch: {
        x(newVal) {
            this.$parent.updateShape(this.id, 'x', parseInt(newVal))
        },
        y(newVal) {
            this.$parent.updateShape(this.id, 'y', parseInt(newVal))
        },
        width(newVal) {
            this.$parent.updateShape(this.id, 'width', parseInt(newVal))
        },
        height(newVal) {
            this.$parent.updateShape(this.id, 'height', parseInt(newVal))
        },
        fill(newVal) {
            this.$parent.updateShape(this.id, 'fill', newVal)
        }
    }
}
</script>
