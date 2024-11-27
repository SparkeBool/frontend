function getData(){
    fetch(endpoint).
    then((data)=>{
        return data.json();
    })
    .then((response) =>{
        console.log(response);

        response.map((items)=>{
            displa.innHTML +=
            `<p> ${items.id}</p>
            `
        });
    })
    .catch((err)=>{
        console.log(err);
        display.innerHTML = err
    })
}