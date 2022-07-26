<script>
import axios from "axios";

export default {
    name:'CoinsMixin',
    methods: {
        // Load all coins
        getCoins(period, currency, orderBy, offset) {
            return new Promise((resolve, reject) => {
             axios('https://coinranking1.p.rapidapi.com/coins', {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                },
                params: {
                  referenceCurrencyUuid: currency,
                  timePeriod: period,
                  'tiers[0]': '1',
                  orderBy: orderBy,
                  orderDirection: 'desc',
                  limit: '15',
                  offset: `${15 * offset}`
                }
             })
             .then(res => {
                resolve(res)
             })   
             .catch(err => {
                reject(err)
             }) 
            })
        },
      
        // Search Coin
        searchCoin(keyWord) {
            return new Promise((resolve, reject) => {
             axios(`https://coinranking1.p.rapidapi.com/search-suggestions?query=${keyWord}`, {
                method: 'GET',
                params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
                headers: {
                  'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
             })
             .then(res => {
                resolve(res)
             })   
             .catch(err => {
                reject(err)
             }) 
            })
        },

        // Get single coin info
         getSingleCoin(coinId) {
            return new Promise((resolve, reject) => {
             axios(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, {
                method: 'GET',
                params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
                headers: {
                  'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                },
             })
             .then(res => {
                resolve(res)
             })   
             .catch(err => {
                reject(err)
             }) 
            })
        },

        // Get single coin history
         getSingleCoinHistory(coinId, hour, currency) {
            return new Promise((resolve, reject) => {
             axios(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history`, {
                method: 'GET',
                params: {referenceCurrencyUuid: currency, timePeriod: hour},
                headers: {
                  'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                },
             })
             .then(res => {
                resolve(res)
             })   
             .catch(err => {
                reject(err)
             }) 
            })
        }

    //     getIncompleteTickets() {
    //         return new Promise((resolve, reject) => {
    //          axios('http://taskapi.digitalsliven.com/api/tickets?status=0', {
    //             method: 'GET'
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     addTicket(data) {
    //        return new Promise((resolve, reject) => {
    //         axios('http://taskapi.digitalsliven.com/api/tickets', {
    //            method: 'POST',
    //            data: data
    //         })
    //         .then(res => {
    //            resolve(res)
    //         })   
    //         .catch(err => {
    //            reject(err)
    //         }) 
    //        })
    //     },

    //     editTicketStatus(ticketId, data) {
    //        return new Promise((resolve, reject) => {
    //         axios(`http://taskapi.digitalsliven.com/api/tickets/complete/${ticketId}`, {
    //            method: 'POST',
    //            data: data
    //         })
    //         .then(res => {
    //            resolve(res)
    //         })   
    //         .catch(err => {
    //            reject(err)
    //         }) 
    //        })
    //     },


    //   // Ticket types requests 

    //     getTicketTypes() {
    //         return new Promise((resolve, reject) => {
    //          axios('http://taskapi.digitalsliven.com/api/ticket-types', {
    //             method: 'GET'
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     addTicketType(data) {
    //         return new Promise((resolve, reject) => {
    //          axios('http://taskapi.digitalsliven.com/api/ticket-types', {
    //             method: 'POST',
    //             data: data
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     updateTicketType(typeId, data) {
    //         return new Promise((resolve, reject) => {
    //          axios(`http://taskapi.digitalsliven.com/api/ticket-types/${typeId}`, {
    //             method: 'PATCH',
    //             data: data
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     deleteTicketType(ticketTypeId) {
    //         return new Promise((resolve, reject) => {
    //          axios(`http://taskapi.digitalsliven.com/api/ticket-types/${ticketTypeId}`, {
    //             method: 'DELETE'
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //   // Categories requests

    //     getCategories() {
    //         return new Promise((resolve, reject) => {
    //          axios('http://taskapi.digitalsliven.com/api/categories', {
    //             method: 'GET'
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     addCategory(data) {
    //         return new Promise((resolve, reject) => {
    //          axios('http://taskapi.digitalsliven.com/api/categories', {
    //             method: 'POST',
    //             data: data
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     editCategory(categoryId, data) {
    //         return new Promise((resolve, reject) => {
    //          axios(`http://taskapi.digitalsliven.com/api/categories/${categoryId}`, {
    //             method: 'PATCH',
    //             data: data
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    //     deleteCategory(categoryId) {
    //         return new Promise((resolve, reject) => {
    //          axios(`http://taskapi.digitalsliven.com/api/categories/${categoryId}`, {
    //             method: 'DELETE'
    //          })
    //          .then(res => {
    //             resolve(res)
    //          })   
    //          .catch(err => {
    //             reject(err)
    //          }) 
    //         })
    //     },

    }
}

</script>