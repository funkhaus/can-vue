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
        offsetX: {
            type: [String, Number],
            default: 0
        },
        offsetY: {
            type: [String, Number],
            default: 0
        },
        opacity: {
            type: [String, Number],
            default: 1
        },
        scaleX: {
            type: [String, Number],
            default: 1
        },
        scaleY: {
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
            id: -1,
            opts: null
        }
    },
    mounted() {
        this.opts = {
            shape: this.cmpShape,
            x: this.filterPercentage(this.x),
            y: this.filterPercentage(this.y, false),
            width: this.filterPercentage(this.width),
            height: this.filterPercentage(this.height, false),
            fill: this.fill,
            opacity: this.filterPercentage(this.opacity),
            offsetX: this.filterPercentage(this.offsetX),
            offsetY: this.filterPercentage(this.offsetY),
            scaleX: this.scaleX,
            scaleY: this.scaleY
        }

        this.id = this.$parent.addShape(this.opts)
    },
    computed: {
        cmpShape() {
            return this.shape.charAt(0).toUpperCase() + this.shape.slice(1)
        }
    },
    methods: {
        filterPercentage(val, isHorizontal = true) {
            // ignore if we're a number or we don't have a percent sign
            if (typeof val === 'number' || !val.includes('%')) {
                return parseInt(val)
            }

            const percentage = parseInt(val) / 100
            return (
                percentage *
                (isHorizontal ? this.$parent.cmpWidth : this.$parent.cmpHeight)
            )
        },
        filterLocalPercentage(val, isHorizontal = true) {
            // ignore if we're a number or we don't have a percent sign
            if (typeof val === 'number' || !val.includes('%')) {
                return parseInt(val)
            }

            const percentage = parseInt(val) / 100
            return (
                percentage *
                (isHorizontal
                    ? this.filterPercentage(this.width)
                    : this.filterPercentage(this.height, true))
            )
        },
        updateHorizontal() {
            // get values
            const x = this.filterPercentage(this.x)
            const width = this.filterPercentage(this.width) * this.scaleX
            const offsetX = this.filterPercentage(this.offsetX)

            // update shape values
            this.$parent.updateShape(this.id, 'x', x)
            this.$parent.updateShape(this.id, 'width', width)
            this.$parent.updateShape(this.id, 'offsetX', offsetX)
        },
        updateVertical() {
            // get values
            const y = this.filterPercentage(this.y, false)
            const height =
                this.filterPercentage(this.height, false) * this.scaleY
            const offsetY = this.filterPercentage(this.offsetY, false)

            // update shape values
            this.$parent.updateShape(this.id, 'y', y)
            this.$parent.updateShape(this.id, 'height', height)
            this.$parent.updateShape(this.id, 'offsetY', offsetY)
        }
    },
    watch: {
        x(newVal) {
            this.updateHorizontal()
        },
        y(newVal) {
            this.updateVertical()
        },
        width(newVal) {
            this.updateHorizontal()
        },
        height(newVal) {
            this.updateVertical()
        },
        fill(newVal) {
            this.$parent.updateShape(this.id, 'fill', newVal)
        },
        offsetX(newVal) {
            this.updateHorizontal()
        },
        offsetY(newVal) {
            this.updateVertical()
        },
        opacity(newVal) {
            this.$parent.updateShape(this.id, 'opacity', newVal)
        },
        scaleX(newVal) {
            this.updateHorizontal()
        },
        scaleY(newVal) {
            this.updateVertical()
        },
        '$parent.cmpWidth'() {
            this.updateHorizontal()
        },
        '$parent.cmpHeight'() {
            this.updateVertical()
        }
    }
}
</script>
