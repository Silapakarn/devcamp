let result = '';

axios.get('./Data_API/response_API_yahoofinanc.json').then(function(response) {
    //Variable Data_Api
    let Data_Api = response.data.quoteResponse.result;
    console.log(Data_Api);


    //Variable Data_ Filter
    let Data_Filter = Data_Api.map(obj => {
        return {
            symbol: obj.symbol,
            longName: obj.longName,
            regularMarketOpen: obj.regularMarketOpen,
            bid: obj.bid.toLocaleString(),
            ask: obj.ask.toLocaleString(),
            averageDailyVolume10Day: obj.averageDailyVolume10Day.toLocaleString(),
            twoHundredDayAverageChange: obj.twoHundredDayAverageChange.toFixed(2),
        }
    })
    console.log(Data_Filter);


    ///Setup <tag table bootstrap>
    result += `<table class="col-md col-sm col-xs table" id="table_API">
    <thead><tr>
    <th scope="col">Symbol</th>
    <th scope="col">Stock Name</th>
    <th scope="col">Market Price Open</th>
    <th scope="col">Bid</th>
    <th scope="col">Ask</th>
    <th scope="col">Average Volume 10 Day</th>
    <th scope="col">200 Day Average Change</th>
    </tr></thead><tr>`

    //Loop Data_Filter show in <tag table bootstrap>
    for (i in Data_Filter) {
        console.log(i);

        //Col 1
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].symbol}</a></td>`;

        //Col 2
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].longName}</a></td>`;

        //Col 3
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].regularMarketOpen}</a></td>`;

        //Col 4
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].bid}</a></td>`;

        //Col 5
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].ask}</a></td>`;

        //Col 6
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].averageDailyVolume10Day}</a></td>`;

        //Col 7
        result += `<td id="LoopDataApi"><a type="button">${Data_Filter[i].twoHundredDayAverageChange}</a></td>`;

        //End 
        result += `</tr><tr>`;
    }
    result += `</tr></table>`;
    document.getElementById("Display_API").innerHTML = result;

})