//Write your pseduo code first! 

document.getElementById("feharnhit").addEventListener("click", celciusToFeharnhit)
document.getElementById("kelvin").addEventListener("click", celciusToKelvin)

function celciusToFeharnhit() {
    let celcius = document.getElementById("celcius").value
    const fer = (celcius * 9/5) + 32
    document.getElementById("placeToYell").innerText = `Temprature is ${fer} Feheranhit`
}

function celciusToKelvin() {
    let celcius = document.getElementById("celcius").value
    const kel = parseInt(celcius) + 273.15
    document.getElementById("placeToYell").innerText = `Temprature is ${kel} Kelvin `
}