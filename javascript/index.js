"use strict"

/**
 * Returns check digit for GTIN-8, GTIN-12, GTIN-13, GLN, GTIN-14, SSCC, GSIN, GSRN, GSRN-P
 * Returns null if input (GS1 key without check digit) is invalid
 * For further details, see GS1 GenSpecs, section 7.9.1: Standard check digit calculations for GS1 data structures
 * @param {string} keyWoCD - GS1 key without check digit
 * @returns {string | none} - Check digit for GS1 key or 'none' if keyWoCD is invalid
 */

 let checkDigit = (keyWoCD) => {
    /* Check that input string conveys number of digits that correspond to a given GS1 key */
    if (/(^\d{7}$)|(^\d{11}$)|(^\d{12}$)|(^\d{13}$)|(^\d{16}$)|(^\d{17}$)/.test(keyWoCD) === false){
        return null
    }else{
    /* Reverse string */  
    keyWoCD = [...keyWoCD].reverse().join('')
    /* Alternatively fetch digits, multiply them by 3 or 1, and sum them up */
    let multipliedByThree = 0
    let multipliedByOne = 0
    for (let i = keyWoCD.length -1; i >= 0; i-- ){
        if (parseInt(keyWoCD[i]) === 0 ){
            continue
        }else{
            if (i%2 !== 0){
                multipliedByOne += parseInt(keyWoCD[i])*1
            }
            else{
                multipliedByThree += parseInt(keyWoCD[i])*3
            }
        }
    }
    let sum = multipliedByThree + multipliedByOne
    /* Subtract sum from nearest equal or higher multiple of ten */
    let checkDigit = Math.ceil(sum/10)*10 - sum
    return checkDigit
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const calcButton = document.getElementById("calculate")
    const clearButton = document.getElementById("clear")
    let inputString = document.getElementById("input")
    let outputValue = document.getElementById("output")
    let outputKey = document.getElementById("keyWithCD")
    let feedback = document.getElementById("feedback")
    /* Make sure that user only inserts digits in input field */
    inputString.addEventListener("keydown", (e) => {
        console.log('e.key: ', e.key)
        if (e.key.match(/[\d]/)){ 
            feedback.value = ""
        }else{
            feedback.value = "Only digits permitted. Remove invalid characters."
        }
    })
    /* Display check digit/complete GS1 key when clicking calculate-button */
    calcButton.addEventListener("click", (event) => {
        event.preventDefault()      
        if (checkDigit(inputString.value) === null) {
            outputKey.value = ""
            outputValue.value = ""
            alert("Please insert a valid input string length")
        }else{
            outputValue.value = checkDigit(inputString.value)
            outputKey.value = inputString.value + checkDigit(inputString.value)
        }
      })
    /* Enable user to clear input field */
    clearButton.addEventListener("click"), () => {
        inputString.value = ""
    }
    /* Enable user to get demo values for each GS1 key */
    const gtin8Button = document.getElementById("gtin8")
    const gtin8Demo = "0123456"
    gtin8Button.addEventListener("click", () => {
        inputString.value = gtin8Demo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const gtin12Button = document.getElementById("gtin12")
    const gtin12Demo = "06141415555"
    gtin12Button.addEventListener("click", () => {
        inputString.value = gtin12Demo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const gtin13Button = document.getElementById("gtin13")
    const gtin13Demo = "401234512345"
    gtin13Button.addEventListener("click", () => {
        inputString.value = gtin13Demo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const gtin14Button = document.getElementById("gtin14")
    const gtin14Demo = "0401234512345"
    gtin14Button.addEventListener("click", () => {
        inputString.value = gtin14Demo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const glnButton = document.getElementById("gln")
    const glnDemo = "401234500000"
    glnButton.addEventListener("click", () => {
        inputString.value = glnDemo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const ssccButton = document.getElementById("sscc")
    const ssccDemo = "34012345111111111"
    ssccButton.addEventListener("click", () => {
        inputString.value = ssccDemo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const gsinButton = document.getElementById("gsin")
    const gsinDemo = "4023333987654000"
    gsinButton.addEventListener("click", () => {
        inputString.value = gsinDemo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const gsrnButton = document.getElementById("gsrn")
    const gsrnDemo = "40123450000000987"
    gsrnButton.addEventListener("click", () => {
        inputString.value = gsrnDemo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
    const gsrnpButton = document.getElementById("gsrnp")
    const gsrnpDemo = "40233330000000123"
    gsrnpButton.addEventListener("click", () => {
        inputString.value = gsrnpDemo
        outputKey.value = ""
        outputValue.value = ""
    }
    )
})

