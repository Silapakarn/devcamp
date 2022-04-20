let student = [
    { "id": "01", "name": "Tom", "lastname": "Price" },
    { "id": "02", "name": "Nick", "lastname": "Thameson" },
    { "id": "03", "name": "Kelly", "lastname": "Massica" },
]

console.log(student[0].name);
console.log(student[1].name);
console.log(student[2].name);

console.log(student[2].lastname = "Doe");

let strStudent = JSON.stringify(student);
console.log('')
console.log('change strStudent to string')
console.log(strStudent);
console.log(strStudent.length);


let json = JSON.parse(strStudent);
console.log('')
console.log('change strStudent to Json object')
console.log(json);


json[3] = { "id": "04", "name": "Karn", "lastname": "Saniskosai" };
console.log(json);