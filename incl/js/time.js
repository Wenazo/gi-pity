function updateTime(){
    let serverAmerica = new Date();
    let serverAsia = new Date();
    let serverEurope = new Date();
    let txtTimeAmerica;
    let txtTimeAsia;
    let txtTimeEurope;
    
    serverAmerica.setHours(serverAmerica.getHours() - 5);
    serverAsia.setHours(serverAsia.getHours() + 1);
    serverEurope.setHours(serverEurope.getHours() + 8);

    txtTimeAmerica = serverAmerica.getUTCHours() + ":" + serverAmerica.getUTCMinutes() + ":" + serverAmerica.getUTCSeconds();
    txtTimeAsia = serverAsia.getUTCHours() + ":" + serverAsia.getUTCMinutes() + ":" + serverAsia.getUTCSeconds();
    txtTimeEurope = serverEurope.getUTCHours() + ":" + serverEurope.getUTCMinutes() + ":" + serverEurope.getUTCSeconds();

    document.getElementById("serverAmerica").textContent = txtTimeAmerica;
    document.getElementById("serverAsia").textContent = txtTimeAsia;
    document.getElementById("serverEurope").textContent = txtTimeEurope;

    setTimeout(updateTime, 1000);
}

updateTime();