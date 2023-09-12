// console.log('DTI......');
// statment

console.log(111)
console.log(222);
console.log(333); console.log(444); console.log(555)
//  veriaBle ตัวแปร 
var a = 100
let b = 200

console.log(a + b)
console.log('------------------------')
//Seope /Block Scope --> มันคือ (????) มันคือขอบเขตการทำงาน

{
    let e = 999
    {
        var c = 300
        let d = 400
        // console.log(a)
        // console.log(b)
        // console.log(c)
        // console.log(d)
        console.log(e)// no error

    }
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)
    console.log(e) // no error
}
console.log(a)
console.log(b)
console.log(c)
//console.log(d)
//console.log(e) // error

// constant ค่าคงที่ (มาตรฐานเขาให้เปิดตัวใหญ่หมด )

const DATA_A1 = 52
const INFO1 = "Wow"
const INFO2 = "Woo"
// INFO01 = "Wee" error

console.log(INFO1 + '@@@' + INFO2)
console.log('SAU\nDTI\t\t2023')
console.log('I love "SAU" ')
console.log("I love 'SAU' ")
console.log('สวัสดี %&', INFO1 , DATA_A1) 

{
    {
        const INFO03 = 'Wee'
        console.log(INFO03)


    }
    //console.log(INFO03) : error
}
//console.log(INFO03) : error

console.log(`Welcome........ `)
let yourname = "สมชาย"
let year = 2000
let age = 15

console.log('สวัสดี '+ yourname + ' คุณเกิดปี ' + year +' อายุ ' + age + ' ปี ' + (20*5))

console.log(`สวัสดี ${yourname} คุณเกิดปี ${year} อายุ ${age} ปี ${20*5} `)

//string method

let date = '     Southeast Asia University     ' 

console.log(date)
console.log(date.length)
console.log(date.trim())
console.log(date.trim().length)
console.log(date.toLowerCase())
console.log(date.toLowerCase())
console.log(date.substring(10)) //จะตัดข้อความตั้งแต่ index 10

let date2 = 'Welcome To'
console.log(date2.substring(5))
console.log(date2.substring(3,9))
console.log(date2.repeat(5)) //ทำซ้ำ
console.log(date2.replace('To','To Thailand')) //แทนที่
console.log(date.replace('e','xxx'))
console.log(date.replaceAll('e','xxx'))