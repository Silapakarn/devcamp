/*axios.get("homework1-4.json").then(function(response) {
    let Data_Api = response.data;
    console.log(Data_Api);


    //Male Filter
    let MaleFilter = Data_Api.filter(obj => obj.gender === "male")
    console.log(MaleFilter);


    //Friend Filter
    let FriendFilter = Data_Api.filter(obj => obj.friends.length >= 2)
    console.log(FriendFilter);


    //FilterReques
    let FilterReques = FriendFilter.filter(f => f.name);


});*/


axios.get('./homework1-4.json').then(function(response) {

    let data = response.data

    // check gender
    let maleFilters = data.filter(x => x.gender = "male")
        // console.log(maleFilters); 

    let friendsFilters = maleFilters.filter(y => y.friends.length >= 3)
        // console.log(friendsFilters);

    const filterFriends = friendsFilters.filter(z => z.name)
    const details = filterFriends.map(obj => {
        const mainDetail = { name: obj.name, gender: obj.gender, company: obj.company, email: obj.email, friends: obj.friends, balance: obj.balance };
        return mainDetail;

    })
    console.log(details);
})