








//let firstName = document.getElementById("firstName");

/* document.getElementById("response").innerHTML = nameUser + " " + km + " " + ageGroup;
 */





function submitForm() {
    
    let nameUser = document.getElementById("nameUser").value;
    let km = parseInt(document.getElementById("km").value);
    let ageGroup = document.getElementById("ageGroup").value;
    let ranodmNumSmall = Math.floor(Math.random() * 10) +1;
    let randomNumBig = Math.floor(Math.random() * 89999) +1;

    let ticketPrice = 0.21 * km;
    let tPriceDiscount20 = (ticketPrice * 0.8).toFixed(2);
    let tPriceDiscount40 = (ticketPrice * 0.6).toFixed(2);

    document.getElementById("nameBro").innerHTML = nameUser;
    document.getElementById("numeroacaso1").innerHTML = ranodmNumSmall;
    document.getElementById("numeroacaso2").innerHTML = randomNumBig;

    if (ageGroup == "minor"){
        
        document.getElementById("response").innerHTML = tPriceDiscount20 + "€";
    } else if (ageGroup == "senior"){
        
        document.getElementById("response").innerHTML = tPriceDiscount40 + "€";
    } else{
        
        document.getElementById("response").innerHTML = ticketPrice + "€";
    }
    
}

