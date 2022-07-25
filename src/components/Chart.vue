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
        text: 'Graph',
        align: 'center',
        style: {
          fontSize:  '20px',
        },
      },
      colors: ['#3B82F6']
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
  filters: {
        formatToUnits: function(number) {
            const abbrev = ['', 'K', 'M', 'B', 'T'];
            const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
            const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
            const suffix = abbrev[order];

            return (number / Math.pow(10, order * 3)).toFixed(4) + suffix;
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