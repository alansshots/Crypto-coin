<template>
  <div class="coin-page">
    <!-- <div class="flex justify-between">
      <div class="flex flex-col justify-center items-center">
        <h4 class=""><router-link to="/">Coins</router-link> > {{coin.name}}</h4>
        <div class="flex flex-row justify-center items-center">
          <span>
             <img alt="profil" :src="coin.iconUrl" class=" object-cover rounded-full h-16 w-16 "/>
          </span>
          <h1 class="text-3xl">{{coin.name}}</h1>
          <span class="px-4 py-2  text-base rounded-full text-blue-500 border border-blue-500 undefined ">{{coin.rank}}</span>
          <div>
            <h1>${{coin.price}}</h1>
          </div>
        </div> -->
        
        <!-- Price chart-->
        <!-- price chart header -->
        <!-- <div>
          <h2>Price chart</h2>
          <p>24h <span>{{coin.change}}</span></p>
          <p>High <span>${{coin.change}}</span></p>
          <p>Low <span>${{coin.change}}</span></p>
          <p>Average <span>${{coin.change}}</span></p>
        </div> -->
        <!-- <area-chart :data="chartData"></area-chart>
        <line-chart :data="coinHistoryFull"></line-chart> -->
      <!-- </div>
      <Chart/>
    </div> -->

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">

<div class="flex flex-row justify-center items-center">
    <div>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown-1" class="mx-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{{period}}<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown-1" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '3h', getCoinsHandler()">3h</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '24h', getCoinsHandler()">24h</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '7d', getCoinsHandler()">7d</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '30d', getCoinsHandler()">30d</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '3m', getCoinsHandler()">3m</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '1y', getCoinsHandler()">1y</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '3y', getCoinsHandler()">3y</a>
              </li>
              <li>
                <a  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="period = '5y', getCoinsHandler()">5y</a>
              </li>
            </ul>
        </div>
    </div>

    <div>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown-2" class="mx-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">USD <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown-2" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="currency = 'yhjMzLPhuIDl',currencySymbl = '$', getCoinsHandler()">USD</a>
              </li>
              <li>
                <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="currency = '5k-_VTxqtCEI',currencySymbl = '#' , getCoinsHandler()">EUR</a>
              </li>
            </ul>
        </div>
      </div>
    
    <div>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown-3" class="mx-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize" type="button">{{orderBy}} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown-3" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="orderBy = 'marketCap', getCoinsHandler()">Market Cap</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="orderBy = '24hVolume', getCoinsHandler()">24hVolume</a>
              </li>
            </ul>
        </div>
      </div>

    </div>


      <div class="w-full sm:p-4 px-4 mb-6">
        <h4 class=""><router-link to="/">Coins</router-link> > {{coin.name}}</h4>
        <div class="flex flex-row items-center title-font font-medium text-xl mb-2">
          <div class="mt-2">
            <img alt="profil" :src="coin.iconUrl" class=" object-cover rounded-full h-12 w-12"/>
            <p class="text-center">{{coin.symbol}}</p>
          </div>
          <p class="ml-2 text-3xl">{{coin.name}} </p>
        </div>
        <div class="leading-relaxed" >
        <!-- {{coin.description}} -->
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam enim harum deserunt esse in architecto debitis repellat? Ad, mollitia ipsam?
        </div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-red-500 text-center">{{coin.change | formatToUnits}}</h2>
        <p class="leading-relaxed text-center">24H</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900 text-center">{{coin.marketCap | formatToUnits}}</h2>
        <p class="leading-relaxed text-center">Market Cap</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900 text-center">{{coin.allTimeHigh.price | formatToUnits}}</h2>
        <p class="leading-relaxed text-center">All Time High</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900 text-center">{{coin.rank}}</h2>
        <p class="leading-relaxed text-center">Rank</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
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
      // --------------
      coin:null,
      coinHistory:null,
      coinHistoryFull:null,
      // chartData: [["10:00", 2.59], ["10:30", 2.67], ["11:00", 3.00], ["11:30", 1.46], ["12:00", 1.20]]
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
            // console.log(this.coinHistory)
            // console.log(this.coinHistoryFull)
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
