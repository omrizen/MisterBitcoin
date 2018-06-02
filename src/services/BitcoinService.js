import axios from 'axios'

function getRate()  {
    console.log ('getRate' ,getRate )
    return axios.get(
    "https://blockchain.info/tobtc?currency=usd&value=1")
    .then (res => {
        console.log (res.data)
        return 1/res.data
    })
} 

export default {
    getRate
}
 
 