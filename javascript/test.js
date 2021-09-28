const { describe } = require('mocha')

const assert = require('assert')

const checkdigit = require('./')

var test_cases = {
  '0123456': 5,
  '06141415555': 7,
  '401234512345': 6,
  '0401234512345': 6,
  '401234500000': 9,
  '34012345111111111': 1,
  '4023333987654000': 9,
  '40123450000000987': 9,
  '40233330000000123': 4
}

describe('Check Digit Examples:', function () {
  for (const [key, value] of Object.entries(test_cases)) {
    it(key + ' has check digit ' + value, function () {
      assert(checkdigit(key) === value)
    })
  }
})
