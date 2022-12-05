async function foo(){
    let cc = document.getElementById("text").value
    let res = await fetch(`https://api.covid19api.com/live/country/${cc}/status/confirmed`)
    let res1 = await res.json();
    console.log(res1);
    for(var i=0;i<res1.length;i++){

        var ele = document.createElement("div");
        ele.style.color = "#4d0000"
        ele.style.fontSize = "25px";
        ele.style.textAlign = "center";
        ele.style.background = "transparent";
        ele.style.width = "950px";
        ele.style.marginLeft = "250px";
        ele.style.borderRadius = "2"
        ele.innerHTML =`<span>Active: </span>${res1[i].Active}   
        <span> Confirmed: </span>${res1[i].Confirmed}    
        <span>  Deaths: </span>${res1[i].Deaths}     
        <span>Recovered: </span>${res1[i].Recovered}`
        document.body.append(ele);
        
    }
    
}