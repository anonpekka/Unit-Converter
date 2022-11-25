// THIS CODE FOR BUTTON OF THEME 
// OUR GOAL IS WHEN BUTTON WAS CLICKED THE ENTIRE THEME WILL CHANGE DARK TO LIGHT.

// HERE FOOTER!!

const modeBtn = document.getElementById("mode-btn")
const listContent = document.getElementById("list-content")
const listContent2 = document.getElementById("list-content-two")
const listContent3 = document.getElementById("list-content-three")
modeBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "#1F2937"
    modeBtn.style.backgroundColor = "white"
    modeBtn.style.color =  "#1F2937"
    modeBtn.textContent = "Light Theme"
    listContent.style.backgroundColor = "#273549"
    listContent2.style.backgroundColor = "#273549"
    listContent3.style.backgroundColor = "#273549"
    valueLe.style.color = "white"    
    valueVo.style.color = "white"    
    valueMas.style.color = "white" 
    document.getElementById("tips").textContent = "DOUBLE CLICK TO LIGHT MODE"
})

modeBtn.addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "#e9ecef"
    modeBtn.style.backgroundColor = "#22223b"
    modeBtn.style.color =  "#FFFFFF"
    modeBtn.textContent = "Dark Theme"
    listContent.style.backgroundColor = "#FFFFFF"
    listContent2.style.backgroundColor = "#FFFFFF"
    listContent3.style.backgroundColor = "#FFFFFF"
    valueLe.style.color = "#353535"    
    valueVo.style.color = "#353535"    
    valueMas.style.color = "#353535"
    document.getElementById("tips").textContent = ""

})
// WORKED✅

// THIS CODE FOR CALCULATION

/*
1 meter = 3.281 feet
1 feet = 0.3048 meter
1 liter = 0.264 gallon
1 gallon = 3.78541
1 kilogram = 2.204 pound
1 pound = 0.453592
*/


const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let valueLe = document.getElementById("value-length")
let valueVo = document.getElementById("value-volume")
let valueMas = document.getElementById("value-mass")

const MtrtoFeet = 3.281
const FeettoMtr = 0.3048
const LtrtoGallon = 0.264
const GallontoLtr = 3.78541
const kgtopound = 2.204
const poundtokg = 0.453502


convertBtn.addEventListener("click", function () {
    let Value = inputEl.value

    valueLe.textContent =  `${Value} meters = ${Value * MtrtoFeet.toFixed(5)} feet | ${Value} feet = ${Value * FeettoMtr.toFixed(5)} meters `
    valueVo.textContent = `${Value} liters = ${Value * LtrtoGallon.toFixed(5)} gallons | ${Value} gallons = ${Value * GallontoLtr.toFixed(5)} liters`
    valueMas.textContent = `${Value} kilos = ${Value * kgtopound.toFixed(5)} pounds | ${Value} pounds = ${Value * poundtokg.toFixed(5)} kilos`
})

// THIS CODE FOR AUTHOR NAME 
// OUR GOAL IS WHEN THIS CONTENT WAS CLICKED THEN SHOW AUTHOR NAME AS ME 😂😂😂


const author = document.getElementById("Author")
const authorCtn = document.getElementById("author-content")

author.addEventListener("click", function(){
    author.textContent = "Meganathan"
    setTimeout(() => {
        authorCtn.style.visibility = "hidden"
    }, 2000);
})