<template>
  <div class="app data">
    <div class="data-title">
      <div class="title-center">疫情大数据看板</div>
    </div>
    <div class="data-content">
      <div class="con-left fl">
        <div class="right-top boxstyle">
          <div class="title">感染人数top5</div>
          <div id="echarts_1"
               class="charts">
            <china-bar></china-bar>
          </div>
        </div>
        <div class="right-center boxstyle">
          <div class="title">报表2</div>
          <div id="echarts_2"
               class="charts"></div>
        </div>
        <div class="right-bottom boxstyle">
          <div class="title">报表3</div>
          <div id="echarts_3"
               class="charts"></div>
        </div>
      </div>
      <div class="con-center fl">
        <div class="map-num">
          <p>感染总人数</p>
          <div class="num">
            <span v-for="(item,index) in totalCount"
                  :key="index">{{item}}</span>
          </div>
        </div>
        <div class="cen-top map">
          <Map></Map>
        </div>
        <div class="cen-bottom boxstyle">
          <div class="title">最近一周人数统计</div>
          <div id="echarts_3"
               class="charts">

          </div>
        </div>
      </div>
      <div class="con-right fr">
        <div class="right-top boxstyle">
          <div class="title">报表4</div>
          <div id="echarts_4"
               class="charts"></div>
        </div>
        <div class="right-center boxstyle">
          <div class="title">报表5</div>
          <div id="echarts_5"
               class="charts"></div>
        </div>
        <div class="right-bottom boxstyle">
          <div class="title">报表6</div>
          <div id="echarts_6"
               class="charts"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import ChinaBar from './components/ChinaBar.vue'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalCount'])
  },
  created () {
    this.$store.dispatch('getAllCity')
  },
  components: {
    Map,
    ChinaBar
  },
}
</script>

<style></style>
