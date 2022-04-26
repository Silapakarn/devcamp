let result = '';

axios.get("homework1-4.json").then(function(response) {
    //Variable Data_Api
    let Data_Api = response.data;
    console.log(Data_Api);

    /*
    let dataFilter_gender_and_friends = Data_Api.filter( obj => {
        return obj.gender == 'male' && obj.friends.length >= 2 
    });
    console.log(dataFilter_gender_and_friends);*/


    //Variable Male Filter
    let MaleFilter = Data_Api.filter(obj => obj.gender === "male")
    console.log(MaleFilter);

    //Variable Friend Filter
    let FriendFilter = MaleFilter.filter(obj => obj.friends.length >= 2)
    console.log(FriendFilter);


    //Variable Filter_Request_friend
    let Filter_Request_friend = FriendFilter.filter(f => f.name);
    console.log(Filter_Request_friend);



    //Map fine Filter Request details
    let Filter_Request_details = Filter_Request_friend.map(obj => {
        return {
            name: obj.name,
            gender: obj.gender,
            company: obj.company,
            email: obj.email,
            friends: obj.friends,
            //reduce_money
            balance: parseFloat(obj.balance.replace("$", "").replace(",", "") / 10).toFixed(2).toString()

        }
    })
    console.log(Filter_Request_details);


    ///Setup <tag table bootstrap>
    result += `<table class="table">
    <thead><tr>
    <th scope="col">name</th>
    <th scope="col">gender</th>
    <th scope="col">company</th>
    <th scope="col">Email</th>
    <th scope="col">friend</th>
    <th scope="col">balance</th>
    </tr></thead><tbody><tr>`;


    //Data_friends_details
    let Data_friends_details = (index_friends) => {
        let result = "";
        for (let i = 0; i < Filter_Request_details[index_friends].friends.length; i++) {
            result += `<li>${Filter_Request_details[index_friends].friends[i].name}</li>`;
        }
        return `<ol>` + result + `</ol>`;
    }


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
        result += `<td><ul>${Data_friends_details(i)}</ul></td>`;

        //Col 6
        result += `<td>$${Filter_Request_details[i].balance}</td>`;

        //End 
        result += `</tr><tr>`;
    }

    //Show result in "id = display"
    result += `</tr></tbody></table>`;

    document.getElementById("display").innerHTML = result;
});