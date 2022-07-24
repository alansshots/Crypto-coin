<template>
  <div class="coin-page">
    <div class="container">
      <h4>Coins > {{coin.name}}</h4>
      <div>
        <div>
          <span>
             <img alt="profil" :src="coin.iconUrl" class=" object-cover rounded-full h-10 w-10 "/>
          </span>
          <h1>{{coin.name}}</h1>
          <span>{{coin.rank}}</span>
          <div>
            <h1>${{coin.price}}</h1>
          </div>
        </div>
        
        <!-- Price chart-->
        <!-- price chart header -->
        <div>
          <h2>Price chart</h2>
          <p>24h <span>{{coin.change}}</span></p>
          <p>High <span>${{coin.change}}</span></p>
          <p>Low <span>${{coin.change}}</span></p>
          <p>Average <span>${{coin.change}}</span></p>
        </div>

        <Chart/>

        <area-chart :data="chartData"></area-chart>

        <line-chart :data="coinHistory"></line-chart>

      </div>
    </div>
  </div>
</template>

<script>
import CoinsMixin from '../mixins/CoinsMixin'
import Chart from '../components/Chart.vue'

export default {
  name:'CoinView',
  components: {
    Chart
  },
  mixins: [CoinsMixin],
  data() {
    return {
      coin:null,
      coinHistory:null,
      chartData: [["10:00", 2.59], ["10:30", 2.67], ["11:00", 3.00], ["11:30", 1.46], ["12:00", 1.20]]
    }
  },
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
            this.coinHistory = res.data.data.history
            console.log(this.coinHistory)
        })
     }
  },
  mounted() {
    this.getCoinInfoHandler()
    // this.getSingleCoin()
    // .then( res => {
    //         console.log(res.data)
    //     })
  }
}
</script>

<style>

</style>
