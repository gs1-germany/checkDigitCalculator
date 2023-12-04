import checkDigit from './index.js'

const test_cases = {
    '0123456': 5,
    '06141415555': 7,
    '401234512345': 6,
    '404711100000': 6,
    '0404711100000': 6,
    '0401234512345': 6,
    '401234500000': 9,
    '34012345111111111': 1,
    '4023333987654000': 9,
    '40123450000000987': 9,
    '40233330000000123': 4
}

function run_tests() {
    console.log('⏳️ Testing check digit calculation...')
    for (const [key, value] of Object.entries(test_cases)) {
        if (checkDigit(key) !== value) {
            console.error("❌ Wrong check digit for " + key)
            throw new Error("Wrong check digit for " + key)
        }
        console.log("✔️  " + key + value)
    }
    console.log("🆗 All tests passed.")
}


run_tests()
