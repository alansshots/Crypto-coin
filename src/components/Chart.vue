<template>
   <div>  
    <!-- <div class="chart-wrapper">
      <apexchart 
        width="800" type="bar" 
        :options="options" :series="series">
      </apexchart>
    </div>
    <hr> -->
    <div class="chart-wrapper">
      <apexchart 
        width="800" type="line" 
        :options="options" :series="series">
      </apexchart>
    </div>
  </div>
</template>

<script>
import CoinsMixin from '../mixins/CoinsMixin'

export default {
  name: 'Chart',
  mixins: [CoinsMixin],
  data: () => ({
      coin:null,
      coinHistoryRaw:null,
      coinHistoryFull:null,
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
        ]
      },
      title: {
        text: 'Current Price',
        align: 'center',
        style: {
          fontSize:  '20px',
        },
      },
      colors: ['#00897b']
    },
    series: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
    }]
  }),
  methods: {
      getCoinInfoHandler() { 
       let coinId = this.$route.params.id
       this.getSingleCoin(coinId)
        .then( res => {
            this.coin = res.data.data.coin
        })
        // price history
        this.getSingleCoinHistory(coinId)
        .then( res => {
            this.coinHistoryRaw = res.data.data.history[2]
            this.coinHistoryFull = Object.values(this.coinHistoryRaw).reverse()
            console.log(this.coinHistoryRaw)
            console.log(this.coinHistoryFull)
        })
     }    
  },
  mounted() {
    this.getCoinInfoHandler()
  }
}
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center
}

</style>