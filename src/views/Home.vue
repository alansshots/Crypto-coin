<template>
  <div class="home">
    <div class="container mx-auto px-4 sm:px-8 coin-table">
    
    <div class="flex flex-row justify-center items-center">
    
    <div class="mb-6 flex flex-col md:flex-row justify-center items-center"> 
      <label class="text-gray-700 mx-1 mb-2">
          <select class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="period" @change="getCoinsHandler">
              <option value="3h">
                  3 Hours
              </option>
              <option value="24h">
                  24 Hours
              </option>
              <option value="7d">
                  7 Days
              </option>
              <option value="30d">
                  30 Days
              </option>
              <option value="3m">
                  3 Months
              </option>
              <option value="1y">
                  1 Year
              </option>
              <option value="3y">
                  3 Years
              </option>
              <option value="5y">
                  5 Years
              </option>
          </select>
      </label>

      <label class="text-gray-700 mx-1 mb-2">
          <select class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="currency" @change="getCoinsHandler">
              <option value="yhjMzLPhuIDl" @click="currencySymbl = '$'">
                  USD 
              </option>
              <option value="5k-_VTxqtCEI" @click="currencySymbl = '€'">
                  EUR
              </option>
          </select>
      </label>

       <label class="text-gray-700 mx-1 mb-2">
          <select class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="orderBy" >
              <option value="marketCap" @click="getCoinsHandler">
                  Market Cap 
              </option>
              <option value="24hVolume" @click="getCoinsHandler">
                  24 Hour Volume
              </option>
          </select>
      </label>
    </div>

    </div>

    <div class="coin-table">
        <div class="-mx-4 sm:-mx-8 px-1 sm:px-8 py-1 overflow-x-auto">
            <div class="inline-block min-w-full rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                Coin Name
                            </th>
                            <th scope="col" class="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                Price
                            </th>
                            <th scope="col" class="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                Market Cap
                            </th>
                            <th scope="col" class="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                {{period}}
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody v-if="coins">
                        <tr v-for="(coin,index) in coins"
                        :key="index">
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
                                   <span class="text-md font-semibold"> {{currencySymbl}} {{coin.price | formatToUnits}}</span>      
                                </p>
                                </router-link>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <router-link :to="'/coin/'+ coin.uuid">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                   <!-- <span>$</span> {{coin.marketCap}} -->
                                   <span class="text-md font-semibold"> {{currencySymbl}} {{coin.marketCap | formatToUnits}}</span>                                 
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
                        <button type="button" @click="pageOffset = (pageOffset - 1)* 1, getCoinsHandler()" class="w-full p-4 border text-base rounded-l-xl text-blue-500 bg-white hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                        <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-blue-500 bg-white hover:bg-gray-100" @click="pageOffset = 0, getCoinsHandler()">
                            1
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-blue-500 bg-white hover:bg-gray-100" @click="pageOffset = 1, getCoinsHandler()">
                            2
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-blue-500 bg-white hover:bg-gray-100" @click="pageOffset = 2, getCoinsHandler()">
                            3
                        </button>
                        <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-blue-500 bg-white hover:bg-gray-100 cursor-not-allowed">
                            <!-- <input type="number"> -->
                            ...
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-blue-500 bg-white hover:bg-gray-100" @click="pageOffset = 61, getCoinsHandler()">
                            62
                        </button>
                        <button type="button" @click="pageOffset = pageOffset + 1, getCoinsHandler()" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-blue-500 bg-white hover:bg-gray-100">
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
        timer: null,
        coins: null,
        period: '24h',
        currency: 'yhjMzLPhuIDl',
        currencySymbl: '$',
        orderBy: 'marketCap',
        keyWord:null,
        pageOffset: 0,
    }
  },
  methods: {
    getCoinsHandler() {
        this.getCoins(this.period, this.currency, this.orderBy, this.pageOffset)
        .then( res => {
            this.coins = res.data.data.coins
            document.querySelector('.coin-table').classList.add('update-pulse')
            setTimeout(function(){ document.querySelector('.coin-table').classList.remove('update-pulse'); }, 2000);
        })
    },
  },
  mounted() {
    this.getCoinsHandler(),
    this.timer = setInterval(() => {
        this.getCoinsHandler()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  filters: {
        formatToUnits: function(number) {
            const abbrev = ['', 'K', 'M', 'B', 'T'];
            const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
            const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
            const suffix = abbrev[order];

            return (number / Math.pow(10, order * 3)).toFixed(4) + suffix;
        }
  }
}
</script>

<style  scoped>
.update-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) ;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

</style>
