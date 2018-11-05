<template>

    <div/>

</template>

<script>
// TODO: computed dimensions and position, in order to allow percentage values

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
        opacity: {
            type: [String, Number],
            default: 1
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
            x: parseFloat(this.x),
            y: parseFloat(this.y),
            width: parseFloat(this.width),
            height: parseFloat(this.height),
            fill: this.fill,
            opacity: parseFloat(this.opacity)
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
        },
        opacity(newVal) {
            this.$parent.updateShape(this.id, 'opacity', newVal)
        }
    }
}
</script>
