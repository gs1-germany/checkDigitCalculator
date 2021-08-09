# GS1 Key Check Digit Calculator

![GS1 Check Digit Calculator Demo Tool ](images/checkDigitCalculatorIllustration.png)

Returns the check digit for all GS1 Keys requiring a Modulo 10 check digit, i.e.
 * Global Trade Item Number (GTIN) in all applicable formats, i.e. GTIN-8, GTIN-12, GTIN-13, GTIN-14
 * Global Trade Item Number (GLN)
 * Serial Shipping Container Code (SSCC)
 * Global Shipment Identification Number (GSIN)
 * Global Service Relationship Number (GSRN)

Returns **null** if input (GS1 key without check digit) is invalid.

## Demo

An interactive demo is available at https://ralphtro.github.io/checkDigitCalculator/

## Algorithm

 For details, see GS1 GenSpecs, section 7.9.1: Standard check digit calculations for GS1 data structures.

## License

<img alt="MIT" style="border-width:0" src="https://opensource.org/files/OSIApproved_1.png" width="150px;"/><br />

Copyright 2021 | Ralph Tröger <ralph.troeger@gs1.de>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.