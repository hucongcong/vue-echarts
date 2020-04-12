<template>
  <div class="china-map"
       ref="map">
    <!-- 渲染地图组件 -->
  </div>
</template>

<script>
// 指定图表数据
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['cityList']),
    data () {
      return this.cityList.map((item) => ({
        name: item.provinceShortName,
        value: item.confirmedCount,
        curedCount: item.curedCount,
        deadCount: item.deadCount,
      }))
    },
  },
  mounted () {
    this.draw()

    // 注册resize事件
    window.addEventListener('resize', this.handleSize)

    this.$myChart.on('click', function (param) {
      console.log(param);//这里根据param填写你的跳转逻辑
    });
  },
  methods: {
    draw () {
      this.$myChart = this.$echarts.init(this.$refs.map)
      this.$myChart.setOption({
        // 配置map
        series: [
          {
            type: 'map',
            map: 'china',
            label: {
              show: true,
              color: '#fff',
            },
            itemStyle: {
              borderColor: '#fff',
            },
            emphasis: {
              itemStyle: {
                areaColor: '#006be4',
              },
              label: {
                color: '#000',
              },
            },
            data: this.data,
          },
        ],
        tooltip: {
          formatter: function (params) {
            return `
              地区：${params.name}<br/>
              确诊人数：${params.value || 0}<br>
              治愈人数：${params?.data?.curedCount || 0}<br>
              死亡人数：${params?.data?.deadCount || 0}<br>
            `
          },
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 10000, color: '#5d0f0e' }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 1000, max: 9999, color: '#811d17' },
            { min: 100, max: 999, color: '#bc3932' },
            { min: 10, max: 99, color: '#ef826f' },
            { min: 1, max: 9, color: '#f3ad8b' },
            { min: 0, max: 0, color: '#fff' },
          ],
          textStyle: {
            color: '#fff',

          }
        },
      })
    },
    handleSize () {
      console.log('重新初始化')
      this.$myChart.resize()
    }
  },
  watch: {
    // 监听data的变化，重新渲染地图
    data () {
      this.draw()
    },
  },
  beforeDestory () {
    window.removeEventListener('resize', this.handleSize)
  }
}
</script>

<style lang="less" scoped>
.china-map {
  width: 100%;
  height: 90%;
}
</style>
