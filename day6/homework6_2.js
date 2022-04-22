let sum = "";

function myFunc(i) {
    axios.get(`https://swapi.dev/api/people/${i}`).then(function(response) {
        debugger;

        let m = response.data;
        console.log(m);
        document.getElementById("modal-name").innerHTML += m.name;
        document.getElementById("modal-gender").innerHTML += m.gender;
        document.getElementById("modal-height").innerHTML += m.height;

    });
}


sum += `<table class="table">
    <thead><tr>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col"></th>
    </tr></thead><tbody><tr>`;
axios.get("https://swapi.dev/api/people/ ").then(function(response) {


    // debugger;
    console.log(response);
    let r = response.data.results;


    //firstname
    for (i in r) {
        console.log(i);
        sum += `<th scope="row">${parseInt(i)+1}</th>`;
        sum += `<td>${r[i].name}</td>`;
        sum += `<td>${r[i].gender}</td>`;
        sum += `<td><button id="btn-${i}" onclick="myFunc(${parseInt(i)+1})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">view</button></td>`;
        sum += `</tr><tr>`;
    }
    sum += `</tr></tbody></table>`;

    document.getElementById("display").innerHTML = sum;

});