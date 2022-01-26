const submit_btn=document.getElementById("submit_btn")
const cityName=document.getElementById("cityName")
const city_name=document.getElementById("city_name")
const temp_status=document.getElementById("temp_status")
const temp=document.getElementById("temp")
const data_hide=document.querySelector(".middle_layer")

const getInfo=async (e)=>{
    e.preventDefault()
    
    let cityVal=cityName.value
    console.log(cityVal)
    if(cityVal===""){
        city_name.innerText="Plz Write the Name of City!!!"
        data_hide.classList.add('data_hide')
    }
    else{
        try{
            let  url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&APPID=dbd3b02d8958d62185d02e944cd5f522`
            const response=await fetch(url)
            const data=await response.json()
            const arrData=[data]
            data_hide.classList.remove('data_hide')
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText=arrData[0].main.temp
            // temp_status.innerText=arrData[0].weather[0].main
            if(arrData[0].weather[0].main=="Haze"){
                temp_status.innerHTML='<i class="fa fa-sun"></i>'
            }
            else if(arrData[0].weather[0].main=="Clouds"){
                temp_status.innerHTML='<i class="fa fa-cloud"></i>'
            }
            else if(arrData[0].weather[0].main=="Rain"){
                temp_status.innerHTML='<i class="fa fa-rain"></i>'
            }
            else{
                temp_status.innerHTML='<i class="fa fa-cloud"></i>'
            }
            // console.log(arrData[0].weather[0].main)
            
        }
        catch{
            city_name.innerText="Plz Write correct Name of City!!!"
            data_hide.classList.add('data_hide')
        }
    }
    
}
submit_btn.addEventListener("click",getInfo)

const day =document.getElementById("day")
const date =document.getElementById("date")

const Day=new Date()
const d=Day.getDay()
console.log(d)
if(d==0){
    toDays_Day="Sun"
}
else if(d==1){
    toDays_Day="Mon"
}
else if(d==2){
    toDays_Day="Tue"
}
else if(d==3){
    toDays_Day="Wed"
}
else if(d==4){
    toDays_Day="Thus"
}
else if(d==5){
    toDays_Day="Fri"
}
else if(d==6){
    toDays_Day="Sat"
}



D=Day.getDate()
M=Day.getMonth()
Y=Day.getFullYear()
ToDays_Date=D+"/"+M+"/"+Y
// console.log(ToDays_Date)

day.innerText=toDays_Day
date.innerText=ToDays_Date




// register