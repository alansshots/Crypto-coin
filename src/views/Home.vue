<template>
  <div class="home">
    <div class="container mx-auto px-4 sm:px-8 coin-table">
    
    <div class="flex flex-row justify-center items-center">
    <div>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="mx-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{{period}}<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
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
        <button id="dropdownDefault" data-dropdown-toggle="dropdown-two" class="mx-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">USD <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown-two" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
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
        <button id="dropdownDefault" data-dropdown-toggle="dropdown-three" class="mx-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize" type="button">{{orderBy}} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown-three" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
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

    <div class="py-8 coin-table">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                Coin Name
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                Price
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                Market Cap
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                {{period}}
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody v-if="coins">
                            
                        <tr v-for="(coin,index) in coins"
                        :key="index">
                        <!-- <router-link :to="'/coin/'+ coin.uuid"> -->
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <router-link :to="'/coin/'+ coin.uuid">
                                <div class="flex items-center justify-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="block relative">
                                            <img alt="coin" :src="coin.iconUrl" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {{coin.symbol}}
                                        </p>
                                    </div>
                                </div>
                                </router-link>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <router-link :to="'/coin/'+ coin.uuid">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                   <span> {{currencySymbl}} {{coin.price}}</span>      
                                </p>
                                </router-link>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <router-link :to="'/coin/'+ coin.uuid">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                   <!-- <span>$</span> {{coin.marketCap}} -->
                                   <span> {{currencySymbl}} {{coin.marketCap}}</span>                                 
                                </p>
                                </router-link>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <router-link :to="'/coin/'+ coin.uuid">
                                <p v-if="coin.change < 0" class="text-red-500 whitespace-no-wrap text-center font-bold">{{coin.change}} </p>
                                <p v-if="coin.change > 0" class="text-green-500 whitespace-no-wrap text-center font-bold">+{{coin.change}} </p>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                    <div class="flex items-center">
                        <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                        <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-blue-500 bg-white hover:bg-gray-100 ">
                            1
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                            2
                        </button>
                        <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                            3
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                            4
                        </button>
                        <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import CoinsMixin from '../mixins/CoinsMixin'

export default {
  name: 'Home',
  mixins: [CoinsMixin],
  data() {
    return {
        coins: null,
        period: '24h',
        currency: null,
        currencySymbl: '$',
        orderBy: 'marketCap'
    }
  },
  methods: {
    getCoinsHandler() {
        this.getCoins(this.period, this.currency, this.orderBy)
        .then( res => {
            this.coins = res.data.data.coins
        })
    }
  },
  mounted() {
    this.getCoinsHandler()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  filters: {
        // redOrGreen: function (value) {
        //     if(value < 0) {
        //         return  '<p class="text-red-500 whitespace-no-wrap text-center"> {{coin.change}} </p>'
        //     } else {
        //         return  '<p class="text-green-500 whitespace-no-wrap text-center"> {{coin.change}} </p>'
        //     }
        // }
    }
}
</script>
