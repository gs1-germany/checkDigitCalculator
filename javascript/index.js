"use strict"

/**
 * Returns check digit for GTIN-8, GTIN-12, GTIN-13, GLN, GTIN-14, SSCC, GSIN, GSRN, GDTI, GCN
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
    
console.log(checkDigit('401234512345')) /* Expected result: 6 */
console.log(checkDigit('0401234512345')) /* Expected result: 6 */
console.log(checkDigit('34012345111111111')) /* Expected result: 1 */
console.log(checkDigit('0123456')) /* Expected result: 5 */
console.log(checkDigit('0000000000000')) /* Expected result: 0 */
console.log(checkDigit('9999999999999')) /* Expected result: 7 */
console.log(checkDigit('06141415555')) /* Expected result: 7 */
console.log(checkDigit('4023333987654000'))  /* Expected result: 9 */
console.log(checkDigit('12345567876543123'))  /* Expected result:  4 */
console.log(checkDigit('401234566666'))  /* Expected result:  3 */
console.log(checkDigit('1234'))  /* Expected result: null */
console.log(checkDigit('12345678910a'))  /* Expected result: null */
console.log(checkDigit('ab'))  /* Expected result: null */
console.log(checkDigit('11111111111111111111'))  /* Expected result: null */