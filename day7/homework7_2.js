axios.get(`https://corona.lmao.ninja/v2/countries/`).then(function(response) {

    debugger;
    //API
    let allCovidData = response.data;
    console.log(allCovidData);
    //test
    console.log(allCovidData[0].todayRecovered);

    //callbackFunction Sum
    const callbackFunction = (sum, obj) => {
        return sum + obj.todayRecovered
    };

    //Sum_TodayRecovered_all_country
    const Sum_todayRecovered_all_country = allCovidData.reduce(callbackFunction, 0)
    console.log(Sum_todayRecovered_all_country);


    //Filter todayDeaths_Api
    const Result_todayDeaths_and_population_Filter =
        //API

        allCovidData
        .filter(obj => obj.todayDeaths < 10 && obj.population > 100000000)
        .map(obj => obj.country);

    console.log(Result_todayDeaths_and_population_Filter);
});