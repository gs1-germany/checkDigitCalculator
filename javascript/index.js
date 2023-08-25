/**
 * Returns check digit for GTIN-8, GTIN-12, GTIN-13, GLN, GTIN-14, SSCC, GSIN, GSRN, GSRN-P
 * Returns null if input (GS1 key without check digit) is invalid
 * For further details, see GS1 GenSpecs, section 7.9.1: Standard check digit calculations for GS1 data structures
 * @param {string} keyWoCD - GS1 key without check digit
 * @returns {string | none} - Check digit for GS1 key or 'none' if keyWoCD is invalid
 */

/*jshint esversion: 6 */


"use strict";

export default function checkDigit (keyWoCD) {
    "use strict";
    /* Check that input string conveys number of digits that correspond to a given GS1 key */
    if (/(^\d{7}$)|(^\d{11}$)|(^\d{12}$)|(^\d{13}$)|(^\d{16}$)|(^\d{17}$)/.test(keyWoCD) === false) {
        return null;
    } else {
        /* Reverse string */
        keyWoCD = [...keyWoCD].reverse().join('');
        /* Alternatingly multiply the digits by 3 or 1, and sum them up */
        let sum = 0;
        for (let i = keyWoCD.length - 1; i >= 0; i--) {
            if (parseInt(keyWoCD[i]) === 0) {
                continue;
            } else {
                if (i % 2 !== 0) {
                    sum += parseInt(keyWoCD[i]) * 1;
                }
                else {
                    sum += parseInt(keyWoCD[i]) * 3;
                }
            }
        }
        /* Subtract sum from nearest equal or higher multiple of ten */
        let checkDigit = Math.ceil(sum / 10) * 10 - sum;
        return checkDigit;
    }
};