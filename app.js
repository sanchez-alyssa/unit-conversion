let convertBtn = document.getElementById('convert-btn')
let inputEl = document.getElementById('input-el')
let lengthEl = document.getElementById('length-el')
let volumeEl = document.getElementById('volume-el')
let massEl = document.getElementById('mass-el')
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
round to 3 decimal places
*/
let meter = 3.281
let liter = 0.264
let kilogram = 2.204

// let value = inputEl.value

convertBtn.addEventListener('click', function () {
	let valueOfInput = inputEl.value
	if (valueOfInput) {
		// Length Meter/Feet
		let lengthStr = ''
		let meterToFeet = (valueOfInput * meter).toFixed(3) // feet
		let feetToMeter = (valueOfInput / meter).toFixed(3) // feet to meter
		lengthStr = `<p> ${valueOfInput} meters = ${meterToFeet} feet | ${valueOfInput} feet = ${feetToMeter} meters </p>`
		lengthEl.innerHTML = lengthStr

		// Volume Liters/Gallons
		let volumeStr = ''
		let literToGallons = (valueOfInput * liter).toFixed(3)
		let gallonsToMeter = (valueOfInput / liter).toFixed(3)
		volumeStr = `<p> ${valueOfInput} liters = ${literToGallons} gallons | ${valueOfInput} gallons = ${gallonsToMeter} liters </p>`
		volumeEl.innerHTML = volumeStr

		// Mass Kilograms/Pounds
		let massStr = ''
		let kilosToPounds = (valueOfInput * kilogram).toFixed(3)
		let poundsToKilos = (valueOfInput / kilogram).toFixed(3)
		massStr = `<p> ${valueOfInput} kilos = ${kilosToPounds} pounds | ${valueOfInput} pounds = ${poundsToKilos} kilos </p>`
		massEl.innerHTML = massStr

		// clear input field
		inputEl.value = ''
	}
})
