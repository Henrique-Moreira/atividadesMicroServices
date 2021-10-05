$(document).ready(() => {
    var url = "https://api.darksky.net/forecast/",
        key = "8eeafa93fa171bb970bfac9b03caa3a3",
        lati = "-18.9127749",
        longi = "-48.2755227",
        opcoes = "?exclude=minutely,hourly,daily,flags,alerts";

    call_api = url + key + "/" + lati + "," + longi + opcoes;

    $.get(call_api, function (data) {
        var clima = data;
        console.log(clima)
        var colunas = [
            "Local",
            "Latitude",
            "Longitude",
            "Data/Hora",
            "Resumo",
            "Intensidade de precipitação",
            "Probabilidade de precipitação",
            "Temperatura",
            "Sensação térmica",
            "Ponto de orvalho",
            "Umidade",
            "Pressão",
            "Velocidade do vento",
            "Rajada de vento",
            "Direção do vento",
            "Cobertura de nuvens",
            "Índice UV",
            "Visibilidade",
            "Ozônio",
            "Deslocamento"
        ]

        var valores = [
            clima.timezone,
            clima.latitude,
            clima.longitude,
            new Date(),
            clima.currently.summary,
            clima.currently.precipIntensity,
            clima.currently.precipProbability,
            ((clima.currently.temperature -32)/1.8).toFixed(2) + " C°",
            ((clima.currently.apparentTemperature -32)/1.8).toFixed(2) + " C°",
            clima.currently.dewPoint + " C°",
            clima.currently.humidity + " kg/m³",
            clima.currently.pressure + " N/m²",
            clima.currently.windSpeed + " km/h",
            clima.currently.windGust + " km/h",
            clima.currently.windBearing,
            clima.currently.cloudCover,
            clima.currently.uvIndex,
            clima.currently.visibility,
            clima.currently.ozone,
            clima.offset,
        ]

        let tabela = $("#tabela");

        let tr = $("<tr>");
        let th = $("<th>");
        let td = $("<td>");

        th.text("Descrição");
        td.text("Valor");
        th.addClass("bg-info");
        td.addClass("bg-info");
        tr.append(th);
        tr.append(td);
        tabela.append(tr);

        for (let i = 0; i < colunas.length; i++) {
            tr = $("<tr>");
            th = $("<th>");
            th.text(colunas[i]);
            td = $("<td>");
            th.addClass("bg-primary");
            td.text(valores[i]);
            td.addClass("bg-primary");
            tr.append(th);
            tr.append(td);
            tabela.append(tr);
        }
        tabela.addClass("table-bordered table-hover");
    })




    // let clima = axios.get("")
    //     .then(function (clima) {
    //         console.log(clima);
    //         console.log(clima.data.latitude);
    //         console.log(clima.data.offset);
    // })
})