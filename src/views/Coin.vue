<template>
  <div class="coin-page">
<section class="text-gray-600 body-font">
  <div class="px-2 py-5 flex flex-col justify-center items-center flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-2/3 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 pl-4 md:px-4 mb-6">
        <h4 class="mb-1"><router-link to="/">Coins</router-link> > {{coin.name}}</h4>
        <div class="flex flex-row items-center title-font font-medium text-xl mb-2">
          <div class="mt-2">
            <img alt="profil" :src="coin.iconUrl" class=" object-cover rounded-full h-12 w-12"/>
            <p class="text-center">{{coin.symbol}}</p>
          </div>
          <p class="ml-2 text-3xl">{{coin.name}} </p>
        </div>
        <div class="leading-relaxed" >
        Website: <a :href="coin.websiteUrl" target="_blank"> {{coin.websiteUrl}} </a>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 v-if="coin.change < 0" class="title-font font-medium text-3xl text-red-500 text-center">{{coin.change}}%</h2>
        <h2 v-if="coin.change > 0" class="title-font font-medium text-3xl text-green-500 text-center">+{{coin.change}}%</h2>
        <p class="leading-relaxed text-center">24H</p>
      </div>
      <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900 text-center">{{coin.marketCap | formatToUnits}}</h2>
        <p class="leading-relaxed text-center">Market Cap (USD)</p>
      </div>
      <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900 text-center">{{coin.allTimeHigh.price | formatToUnits}}</h2>
        <p class="leading-relaxed text-center">All Time High (USD)</p>
      </div>
      <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900 text-center">{{coin.rank}}</h2>
        <p class="leading-relaxed text-center">Rank</p>
      </div>
    </div>
    <div class="lg:w-2/3 w-full mt-6 sm:mt-0">
      <Chart/>
    </div>
  </div>
</section>

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
      // filters
      coins: null,
      period: '24h',
      currency: null,
      currencySymbl: '$',
      orderBy: 'marketCap',
      coin:null,
      coinHistory:null,
      coinHistoryFull:null,
    }
  },
  methods: {
     getCoinInfoHandler() { 
       let coinId = this.$route.params.id
       this.getSingleCoin(coinId)
        .then( res => {
            this.coin = res.data.data.coin
            console.log(res.data.data.coin)
        })
        // price history
        this.getSingleCoinHistory(coinId)
        .then( res => {
            this.coinHistory = res.data.data.history[2]
            this.coinHistoryFull = Object.values(this.coinHistory).reverse()
        })
     },

    //  Filters
     getCoinsHandler() {
        this.getCoins(this.period, this.currency, this.orderBy)
        .then( res => {
            this.coins = res.data.data.coins
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

<style>

</style>
