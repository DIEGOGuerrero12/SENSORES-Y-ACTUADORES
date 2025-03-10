function getDatos(){
    console.log("Si funciona");
    const url = "https://diego-50c40-default-rtdb.firebaseio.com/sensores.json";
    const requests =  new XMLHttpRequest();

    requests.open("GET", url);

    requests.onload = function(){
        const data = JSON.parse(this.responseText)

        const temperatura = data.temperatura;
        const humedad = data.humedad;

        console.log(data);

        document.getElementById("tempeatura").innerText = ` ${temperatura} °C` ;
        document.getElementById("humedad").innerText =`  ${humedad} %` ;
    }

    requests.send();
};