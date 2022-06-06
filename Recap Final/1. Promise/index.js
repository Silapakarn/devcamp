const Event = new Promise((resolve, reject) => {
    const name = 'Kan'
    if(name == 'Kan'){
        resolve(name)
    }else{
        reject('Name not Kan' + name)
    }
})

Event
    .then(() => {
        console.log(name)
    })
    .catch((err) =>{
        console.log(err)
    })

