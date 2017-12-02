<template>
<div>
<div>
<button v-on:click="refreshCharts()">refresh</button>
<div class="line" id="line"></div>
</div>
</div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'

export default {
  name: 'ChartLine',
  computed: {
    opt () {
      return {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            data: []
          }
        ],
        yAxis: [{
          type: 'value'
        }],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            data: []
          }
        ]
      }
    }
  },

  methods: {
    async refreshCharts () {
      const res = await axios.get('http://112.64.32.191:8899/v1/line')
      this.myChart.setOption({
        xAxis: {
          data: res.data.legend_data
        },
        series: {
          data: res.data.xAxis_data
        }
      })
    }
  },

  mounted () {
    this.myChart = echarts.init(document.getElementById('line'))
    this.myChart.setOption(this.opt) //
    return {refreshCharts()}
    window.addEventListener('resize', this.myChart.resize)
  }
}
</script>

<style>
.line {
width: 400px;
height: 200px;
margin: 20px auto;
}
</style>
