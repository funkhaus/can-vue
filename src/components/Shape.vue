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
            opacity: this.filterPercentage(this.opacity)
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
        }
    },
    watch: {
        x(newVal) {
            this.$parent.updateShape(
                this.id,
                'x',
                this.filterPercentage(newVal)
            )
        },
        y(newVal) {
            this.$parent.updateShape(
                this.id,
                'y',
                this.filterPercentage(newVal, false)
            )
        },
        width(newVal) {
            this.$parent.updateShape(
                this.id,
                'width',
                this.filterPercentage(newVal)
            )
        },
        height(newVal) {
            this.$parent.updateShape(
                this.id,
                'height',
                this.filterPercentage(newVal, false)
            )
        },
        fill(newVal) {
            this.$parent.updateShape(this.id, 'fill', newVal)
        },
        opacity(newVal) {
            this.$parent.updateShape(this.id, 'opacity', newVal)
        },
        '$parent.cmpWidth'(newVal) {
            // recalculate horizontal dimensions & positions
            this.$parent.updateShape(
                this.id,
                'width',
                this.filterPercentage(this.width)
            )

            this.$parent.updateShape(
                this.id,
                'x',
                this.filterPercentage(this.x)
            )
        },
        '$parent.cmpHeight'(newVal) {
            // recalculate vertical dimensions & positions
            this.$parent.updateShape(
                this.id,
                'height',
                this.filterPercentage(this.height, false)
            )

            this.$parent.updateShape(
                this.id,
                'y',
                this.filterPercentage(this.y, false)
            )
        }
    }
}
</script>
