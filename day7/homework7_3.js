let result = '';

axios.get("homework1-4.json").then(function(response) {
    //Variable Data_Api
    let Data_Api = response.data;
    console.log(Data_Api);

    //Variable Male Filter
    let MaleFilter = Data_Api.filter(obj => obj.gender === "male")
    console.log(MaleFilter);

    //Variable Friend Filter
    let FriendFilter = Data_Api.filter(obj => obj.friends.length >= 2)
    console.log(FriendFilter);

    //Variable Filter_Request_friend
    let Filter_Request_friend = FriendFilter.filter(f => f.name);

    //Map fine Filter Request details
    const Filter_Request_details = map.Filter_Request_friend(obj => {
        const mainDetail = { name: obj.name, gender: obj.gender, company: obj.company, email: obj.email, friends: obj.friends, balance: obj.balance };
        return mainDetail;
    })

    //Test Filter_Request_details
    console.log(Filter_Request_details);


    //callbackFunction reduce_money
    const callbackFT_reduce_money = (obj) => {
        return obj.balance % 10
    };

    //Chaining reduce_money
    const Result_reduce_money = Filter_Request_details.reduce(callbackFT_reduce_money, 0);

    //Test Result_reduce_money
    console.log(Result_reduce_money);


    //Setup <tag table bootstrap>
    result += `<table class="table">
    <thead><tr>
    <th scope="col">name</th>
    <th scope="col">gender</th>
    <th scope="col">company</th>
    <th scope="col">friends</th>
    <th scope="col">balance</th>
    </tr></thead><tbody><tr>`;


    //Loop Filter_Request_details show in <tag table bootstrap>
    for (i in Filter_Request_details) {
        console.log(i);

        //Col 1  
        result += `<th scope="row">${Filter_Request_details[i].name}</th>`;

        //Col 2
        result += `<td>${Filter_Request_details[i].gender}</td>`;

        //Col 3
        result += `<td>${Filter_Request_details[i].company}</td>`;

        //Col 4
        result += `<td>${Filter_Request_details[i].email}</td>`;

        //Col 5
        result += `<td>'$'+ ${Result_reduce_money[i]}</td>`;

        //End 
        result += `</tr><tr>`;
    }

    //Show result in "id = display"
    result += `</tr></tbody></table>`;
    document.getElementById("display").innerHTML = result;
});