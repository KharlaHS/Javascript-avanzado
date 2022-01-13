/*
Buenos dias 6 - 11
Buenas tardes 12 -18 
Buenas noches 19 - 23
Dejame dormir 0 - 5

evaluar hora */

let hora = parseInt(prompt(" ¿Qué hora tienes?"));


if(hora >= 6 && hora <= 11){
    console.log(" Buenos Dias ")
}
else if(hora >= 12 && hora <= 18){
    console.log(" Buenas tardes ")
}
else if(hora >= 19 && hora <= 23){
    console.log(" Buenas Noches ")
}
else if(hora >= 0 && hora <= 5){
    console.log(" Dejame dormir ")
}

