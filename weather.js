window.addEventListener("load", function () {
        let weather = [
                {
                        city: "New York City",
                        Temperature: "30'C",
                        Humidity: "Humidity:20g/m3",
                        windspeed: "Windspeed:40m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Jerusalem",
                        Temperature: "40'C",
                        Humidity: "Humidity:30g/m3",
                        windspeed: "Windspeed:20m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Lagos",
                        Temperature: "25'C",
                        Humidity: "Humidity:10g/m3",
                        windspeed: "Windspeed:35m/s",
                        weatherDescription: "Harmattan"
                },
                {
                        city: "Abuja",
                        Temperature: "56'C",
                        Humidity: "Humidity:80g/m3",
                        windspeed: "Windspeed:27m/s",
                        weatherDescription: "Harmattan"
                },
                {
                        city: "Paris",
                        Temperature: "35'C",
                        Humidity: "Humidity:35g/m3",
                        windspeed: "Windspeed:45m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Berlin",
                        Temperature: "20'C",
                        Humidity: "12g/m3",
                        windspeed: "30m/s",
                        weatherDescription: "winter"
                },
                {
                        city: "Singapore",
                        Temperature: "45'C",
                        Humidity: "43g/m3",
                        windspeed: "58m/s",
                        weatherDescription: "winter"
                },
                {
                        city: "Amsterdam",
                        Temperature: "65'C",
                        Humidity: "12g/m3",
                        windspeed: "30m/s",
                        weatherDescription: "winter"
                },
                {
                        city: "Seoul",
                        Temperature: "75'C",
                        Humidity: "Humidity:45g/m3",
                        windspeed: "Windspeed:12m/s",
                        weatherDescription: "Winter"

                },
                {
                        city: "Tokyo",
                        Temperature: "47'C",
                        Humidity: "Humidity:45g/m3",
                        windspeed: "Windspeed:130m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Port-Novo",
                        Temperature: "74'C",
                        Humidity: "27g/m3",
                        windspeed: "25m/s",
                        weatherDescription: "Harmattan"
                },
                {
                        city: "Hong Kong",
                        Temperature: "53'C",
                        Humidity: "40g/m3",
                        windspeed: "60m/s",
                        weatherDescription: "winter"
                },
                {
                        city: "Shanghai",
                        Temperature: "75'C",
                        Humidity: "Humidity:56g/m3",
                        windspeed: "Windspeed:45m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "London",
                        Temperature: "25'C",
                        Humidity: "Humidity:20g/m3",
                        windspeed: "Windspeed:45m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Washington,D.C.",
                        Temperature: "57'C",
                        Humidity: "Humidity:80g/m3",
                        windspeed: "Windspeed:25m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "California",
                        Temperature: "41'C",
                        Humidity: "Humidity:13g/m3",
                        windspeed: "Windspeed:80m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Chicago",
                        Temperature: "15'C",
                        Humidity: "Humidity:43g/m3",
                        windspeed: "Windspeed:450m/s",
                        windspeed: "30m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Los Angeles",
                        Temperature: "23'C",
                        Humidity: "Windspeed:80g/m3",
                        windspeed: "45m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Toronto",
                        Temperature: "45'C",
                        Humidity: "Humidity:34g/m3",
                        windspeed: "Windspeed:20m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Hong-Kong",
                        Temperature: "85'C",
                        Humidity: "Humidity:30g/m3",
                        windspeed: "Windspeed:20m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Sydney",
                        Temperature: "40'C",
                        Humidity: "Humidity:20g/m3",
                        windspeed: "Windspeed:20m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Johannesbourg",
                        Temperature: "40'C",
                        Humidity: "Humidty: 45g/m3",
                        windspeed: "Windspeed:40m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Port Harcourt",
                        Temperature: "35'C",
                        Humidity: "Humidity:45g/m3",
                        windspeed: "Windspeed:50m/s",
                        weatherDescription: "Harmattan"
                },
                {
                        city: "Umuahia",
                        Temperature: "35'C",
                        Humidity: "Humidity:40g/m3",
                        windspeed: "Windspeed:20m/s",
                        weatherDescription: "Harmattan"

                },
                {
                        city: "Warri",
                        Temperature: "40'C",
                        Humidity: "Humidity:45g/m3",
                        windspeed: "Windspeed:35m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Kano",
                        Temperature: "85'C",
                        Humidity: "Humidity:40g/m3",
                        windspeed: "Windspeed:20m/s",
                        weatherDescription: "Harmattan"
                },
                {
                        city: "Tel Aviv",
                        Temperature: "65'C",
                        Humidity: "Humidity:35g/m3",
                        windspeed: "Windspeed:49m/s",
                        weatherDescription: "Winter"

                },
                {
                        city: "Beinjin",
                        Temperature: "45'C",
                        Humidity: "Humidity:15g/m3",
                        windspeed: "Windspeed:30m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "New-Delhi",
                        Temperature: "53'C",
                        Humidity: "Humidity:45g/m3",
                        windspeed: "Windspeed:30m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Cairo",
                        Temperature: "85'C",
                        Humidity: "Humidity:56g/m3",
                        windspeed: "Windspeed:30m/s",
                        weatherDescription: "Winter"
                },
                {
                        city: "Athens",
                        Temperature: "25'C",
                        Humidity: "Humidity:34g/m3",
                        windspeed: "Windspeed:27m/s",
                        weatherDescription: "Winter"
                },
                {
                        city:"Washington D.C.",
                        Temperature:"30'C",
                        Humidity:"Humidity:60g/m3",
                        windspeed:"Windspeed:12m/s",
                        weatherDescription:"winter"
                },
                {
                        city:"Kaduna",
                        Temperature:"60'C",
                        Humidity:"Humidity:30g/m3",
                        windspeed:"Windspeed:20m/s",
                        weatherDescription:"Harmattan"

                }
        ]
             let Go = document.getElementById("searchBtn")
        Go.addEventListener("click", function () {
                let Display = document.getElementById("searchInput")
       
                let City= document.getElementById("cityHeader")
                  let Temperature=document.getElementById("temperature")
                  let Humidity=document.getElementById("humidity")
                  let windspeed=document.getElementById("windSpeed")
                  Description=document.getElementById("weatherDescription")
                const result = weather.filter(function (element) 
                { if (element.city === Display.value) { return true }
               
                 })
                 City.innerHTML=result[0].city
                 Temperature.innerHTML=result[0].Temperature
                 windspeed.innerHTML=result[0].windspeed
                 Humidity.innerHTML=result[0].Humidity
                 Description.innerHTML=result[0].weatherDescription

        })



});
