<template>
  <div>
    <div class="mb-10 flex flex-row justify-center items-center"> 
      <label class="text-gray-700 mx-1">
          <select class="block w-40 md:w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="hour">
              <option value="3h" @click="getCoinInfoHandler">
                  3 Hours
              </option>
              <option value="24h" @click="getCoinInfoHandler">
                  24 Hours
              </option>
              <option value="7d" @click="getCoinInfoHandler">
                  7 Days
              </option>
              <option value="30d" @click="getCoinInfoHandler">
                  30 Days
              </option>
              <option value="3m" @click="getCoinInfoHandler">
                  3 Months
              </option>
              <option value="1y" @click="getCoinInfoHandler">
                  1 Year
              </option>
              <option value="3y" @click="getCoinInfoHandler">
                  3 Years
              </option>
              <option value="5y" @click="getCoinInfoHandler">
                  5 Years
              </option>
          </select>
      </label>

      <label class="text-gray-700 mx-1">
          <select class="block w-40 md:w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="currency" >
              <option value="yhjMzLPhuIDl" @click="getCoinInfoHandler">
                  USD 
              </option>
              <option value="5k-_VTxqtCEI" @click="getCoinInfoHandler">
                  EUR
              </option>
          </select>
      </label>
    </div>
    <div class="chart-wrapper">
      <apexchart type="line" :options="options" :series="series">
      </apexchart>
    </div>
  </div>
</template>

<script>
import CoinsMixin from "../mixins/CoinsMixin";

export default {
  name: "Chart",
  mixins: [CoinsMixin],
  data: () => ({
    coin: null,
    hour: '24h',
    currency: 'yhjMzLPhuIDl',
    coinHistoryIndex: null,
    coinHistoryValue: null,
    coinHistorySeries: [],
    options: {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        labels: {
          formater: function (date) {
              var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

              if (month.length < 2) month = "0" + month;
              if (day.length < 2) day = "0" + day;

              return [month, day, year].join("/");
            },
          }
        },
      yaxis: {
        labels: {
          formatter: function (number) {
          const abbrev = ["", "K", "M", "B", "T"];
          const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
          const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
          const suffix = abbrev[order];

          return (number / Math.pow(10, order * 3)).toFixed(4) + suffix;
        },
        },
        title: {
          text: 'Price'
        },
      },
      title: {
        text: "Graph",
        align: "center",
        style: {
          fontSize: "20px",
        },
      },
      colors: ["#3B82F6"],
    },
     series: [
      {
        name: "Price",
        data: [],
      },
    ],
  }),
  methods: {
    getCoinInfoHandler() {
      let coinId = this.$route.params.id;
      this.getSingleCoin(coinId).then((res) => {
        this.coin = res.data.data.coin;
      });
      // price history
      this.getSingleCoinHistory(coinId, this.hour, this.currency).then((res) => {
        // this.coinHistorySeries = res.data.data.history;
        this.coinHistoryIndex = res.data.data.history.map(
          // (a) => new Date(a.timestamp)
          (a) => a.timestamp
        );
        this.coinHistoryValue = res.data.data.history.map((a) => a.price);

        let history = [];

        for (let i = 0; i < res.data.data.history.length; i++) {
          history.push({
            x: this.coinHistoryIndex[i],
            y: this.coinHistoryValue[i],
          });
        }
        this.coinHistorySeries = history;

        this.series = [{
          data: history
        }]

        // console.log(this.coinHistoryIndex);
        // console.log(this.coinHistoryValue);
        console.log(this.coinHistorySeries);
      });
    },
    pluck(array, key) {
      return array.map((o) => o[key]);
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [month, day, year].join("/");
    },
  },
  filters: {
    formatToUnits: function (number) {
      const abbrev = ["", "K", "M", "B", "T"];
      const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
      const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
      const suffix = abbrev[order];

      return (number / Math.pow(10, order * 3)).toFixed(4) + suffix;
    },
  },
  mounted() {
    this.getCoinInfoHandler();
    this.updateChart()
  },
};
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>