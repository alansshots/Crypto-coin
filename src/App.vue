<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>  -->
    <!-- Header -->
<div class="w-full flex flex-col items-center p-2 justify-between nav">

    <div class="mb-2 flex flex-col justify-center items-center text-3xl font-bold text-blue-600">
        <router-link to="/">Cryptocoin.com </router-link>
        <span class="text-sm font-semibold text-gray-400">
          Making cryptocurrency stats useful.
        </span>
    </div>

    <form class="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex" @submit.prevent="searchCoinsHandler">
        <input  v-model="keyWord" type="search" name="serch" placeholder="Search" class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
    </form>
    <!-- Search suggestions dropdown -->
<div v-if="coins" class="relative inline-block text-left">
    <div class="absolute z-10 -ml-4 mt-0.5 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8 divide-y divide-gray-100">
                <router-link :to="'/coin/'+ coin.uuid" v-for="(coin,index) in coins" :key="index"  class="-m-3 p-3 flex items-center hover:bg-gray-50">
                    <img v-if="coins" alt="coin" :src="coin.iconUrl" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    <div class="ml-4">
                        <p v-if="coins" class="text-base font-medium text-gray-900 dark:text-white">
                            {{coin.name}}
                        </p>
                        <p v-if="coins" class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Current Price: {{coin.price | formatToUnits}}
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</div>
  <!-- Main App -->
    <router-view/>

    <!-- Footer -->
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span class="ml-3 text-xl">Cryptocoin</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
          <a href="#" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Made by @alengospodinov</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>

  </div>
</template>

<script>
import CoinsMixin from '../src/mixins/CoinsMixin.vue'

export default {
  name: 'Home',
  mixins: [CoinsMixin],
  data() {
    return {
        coins: null,
        keyWord:null,
    }
  },
  methods: {
    getCoinsHandler() {
        this.getCoins(this.period, this.currency, this.orderBy)
        .then( res => {
            this.coins = res.data.data.coins
        })
    },
      // Search coin
      searchCoinsHandler() {
        this.searchCoin(this.keyWord)
        .then( res => {
            this.coins = res.data.data.coins
            console.log(res.data.data.coins)
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
    // this.getCoinsHandler()
  }
}
</script>

<style>
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
