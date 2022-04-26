let result = '';

axios.get(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CTSLA%2CFB%2CNFLX%2CAMZN%2CSPOT%2CTWTR%2CGOOG%2CNVDA%2CJPM`).then(function(response) {
    //Variable Data_Api
    let Data_Api = response.data;
    console.log(Data_Api);
})