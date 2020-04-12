<template>
  <div class="china-bar"
       ref="bar">
    <!-- 中国感染城市top5 -->
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('123')
    this.draw()
  },
  methods: {
    draw () {
      this.$chart = this.$echarts.init(this.$refs.bar)
      this.$chart.setOption({
        series: [
          {
            name: '排名',
            type: 'pie',
            color: ['#33b565', '#20cc98', '#20b9cf', '#2089cf', '#205bcf'],
            radius: [20, 70],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              { value: 70, name: 'NO.4' },
              { value: 90, name: 'NO.3' },
              { value: 110, name: 'NO.2' },
              { value: 150, name: 'NO.1' },
              { value: 40, name: 'NO.5' },
            ],
          },
        ],
      })
    }
  }
}
</script>

<style lang="less" scoped>
.china-bar {
  width: 100%;
  height: 100%;
}
</style>