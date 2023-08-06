const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');

const email = document.getElementById('email');
const credit = document.getElementById('credit');
const month = document.getElementById('month');
const year = document.getElementById('year');
const security = document.getElementById('security');

const form = document.getElementById("form");

let fnameError = false, lnameError = false, addressError = false, cityError = false, stateError = false,
zipError = false, emailError = false, creditError = false, monthError = false, yearError = false, securityError = false;

form.addEventListener('submit', (e) => {
    let missingError = 0, invalidError = 0;
    
    if(fname.value === '') {
        fnameError = true;
        missingError += 1;
        fname.style.borderBottomColor = "red";
        document.getElementById("fname-err").innerText = "First name is required";
        document.getElementById("fname-err").style.display = "block";
    } else if(!fname.value.match(/^[a-zA-Z]+$/)) {
        fnameError = true;
        invalidError += 1;
        fname.style.borderBottomColor = "red";
        document.getElementById("fname-err").innerText = "Enter a valid first name";
        document.getElementById("fname-err").style.display = "block";
    } else if(fnameError) {
        fnameError = false;
        missingError -= 1;
        invalidError -= 1;
        fname.style.borderBottomColor = "#C1F7D5";
        document.getElementById("fname-err").style.display = "none";
    }

    if(lname.value === '') {
        lnameError = true;
        missingError += 1;
        lname.style.borderBottomColor = "red";
        document.getElementById("lname-err").innerText = "Last name is required";
        document.getElementById("lname-err").style.display = "block";
    } else if(!lname.value.match(/^[a-zA-Z]+$/)) {
        lnameError = true;
        invalidError += 1;
        lname.style.borderBottomColor = "red";
        document.getElementById("lname-err").innerText = "Enter a valid last name";
        document.getElementById("lname-err").style.display = "block";
    } else if(lnameError){
        lnameError = false;
        missingError -= 1;
        invalidError -= 1;
        lname.style.borderBottomColor = "#C1F7D5";
        document.getElementById("lname-err").style.display = "none";
    }

    if(address.value === '') {
        addressError = true;
        missingError += 1;
        address.style.borderBottomColor = "red";
        document.getElementById("address-err").style.display = "block";
    } else if(addressError){
        addressError = false;
        missingError -= 1;
        address.style.borderBottomColor = "#C1F7D5";
        document.getElementById("address-err").style.display = "none";
    }

    if(city.value === '') {
        cityError = true;
        missingError += 1;
        city.style.borderBottomColor = "red";
        document.getElementById("city-err").innerText = "City is required";
        document.getElementById("city-err").style.display = "block";
    } else if(!city.value.match(/^[a-zA-Z]+$/)) {
        cityError = true;
        invalidError += 1;
        city.style.borderBottomColor = "red";
        document.getElementById("city-err").innerText = "Enter a valid city";
        document.getElementById("city-err").style.display = "block";
    } else if(cityError){
        missingError -= 1;
        invalidError -= 1;
        city.style.borderBottomColor = "#C1F7D5";
        document.getElementById("city-err").style.display = "none";
    }

    if(state.value === '') {
        stateError = true;
        missingError += 1;
        state.style.borderBottomColor = "red";
        document.getElementById("state-err").style.display = "block";
    } else if(stateError){
        stateError = false;
        missingError -= 1;
        state.style.borderBottomColor = "#C1F7D5";
        document.getElementById("state-err").style.display = "none";
    }

    if(zip.value === '') {
        zipError = true;
        missingError += 1;
        zip.style.borderBottomColor = "red";
        document.getElementById("zip-err").innerText = "Zip code is required";
        document.getElementById("zip-err").style.display = "block";
    } else if(!zip.value.match(/^[0-9]+$/)) {
        zipError = true;
        invalidError += 1;
        zip.style.borderBottomColor = "red";
        document.getElementById("zip-err").innerText = "Enter a valid zip code";
        document.getElementById("zip-err").style.display = "block";
    } else if(zipError){
        zipError = false;
        missingError -= 1;
        invalidError -= 1;
        zip.style.borderBottomColor = "#C1F7D5";
        document.getElementById("zip-err").style.display = "none";
    }

    
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    if(email.value === '') {
        emailError = true;
        missingError += 1;
        email.style.borderBottomColor = "red";
        document.getElementById("email-err").innerText = "Email is required";
        document.getElementById("email-err").style.display = "block";
    } else if(!email.value.match(emailPattern)) {
        emailError = true;
        invalidError += 1;
        email.style.borderBottomColor = "red";
        document.getElementById("email-err").innerText = "Enter a valid email";
        document.getElementById("email-err").style.display = "block";
    } else if(emailError){
        emailError = false;
        missingError -= 1;
        invalidError -= 1;
        email.style.borderBottomColor = "#C1F7D5";
        document.getElementById("email-err").style.display = "none";
    }

    if(credit.value === '') {
        creditError = true;
        missingError += 1;
        credit.style.borderBottomColor = "red";
        document.getElementById("credit-err").innerText = "Card number is required";
        document.getElementById("credit-err").style.display = "block";
    } else if(!credit.value.match(/^[0-9]+$/)) {
        creditError = true;
        invalidError += 1;
        credit.style.borderBottomColor = "red";
        document.getElementById("credit-err").innerText = "Enter a valid card number";
        document.getElementById("credit-err").style.display = "block";
    } else if(creditError){
        creditError = false;
        missingError -= 1;
        invalidError -= 1;
        credit.style.borderBottomColor = "#C1F7D5";
        document.getElementById("credit-err").style.display = "none";
    }

    if(month.value === '') {
        monthError = true;
        missingError += 1;
        month.style.borderBottomColor = "red";
        document.getElementById("month-err").innerText = "Month is required";
        document.getElementById("month-err").style.display = "block";
    } else if(month.value < 0 || month.value > 12) {
        monthError = true;
        invalidError += 1;
        month.style.borderBottomColor = "red";
        document.getElementById("month-err").innerText = "Enter a valid month";
        document.getElementById("month-err").style.display = "block";
    } else if(monthError){
        monthError = false;
        missingError -= 1;
        invalidError -= 1;
        month.style.borderBottomColor =  "#C1F7D5";
        document.getElementById("month-err").style.display = "none";
    } 

    if(year.value === '') {
        yearError = true;
        missingError += 1;
        year.style.borderBottomColor = "red";
        document.getElementById("year-err").innerText = "Year is required";
        document.getElementById("year-err").style.display = "block";
    } else if(year.value < 2021) {
        yearError = true;
        invalidError += 1;
        year.style.borderBottomColor = "red";
        document.getElementById("year-err").innerText = "Enter a valid year";
        document.getElementById("year-err").style.display = "block";
    } else if(yearError){
        yearError = false;
        missingError -= 1;
        invalidError -= 1;
        year.style.borderBottomColor =  "#C1F7D5";
        document.getElementById("year-err").style.display = "none";
    } 

    if(security.value === '') {
        securityError = true;
        missingError += 1;
        security.style.borderBottomColor = "red";
        document.getElementById("security-err").innerText = "CVC is required";
        document.getElementById("security-err").style.display = "block";
    } else if(!security.value.match(/^[0-9]+$/) && (security.value > 999 || security.value < 100)) {
        securityError = true;
        invalidError += 1;
        security.style.borderBottomColor = "red";
        document.getElementById("security-err").innerText = "Enter a valid CVC";
        document.getElementById("security-err").style.display = "block";
    } else if(securityError){
        securityError = false;
        missingError -= 1;
        invalidError -= 1;
        security.style.borderBottomColor =  "#C1F7D5";
        document.getElementById("security-err").style.display = "none";
    }

    if(missingError > 0 || invalidError > 0) {
        e.preventDefault();
    }
});