const add = ((a,b)=>{
    return a+b
})
const subtract = ((a,b)=>{
    return a-b
})
const divide = ((a,b)=>{
    if(b === 0)return 'error'
    return a/b
})
const multiply = ((a,b)=>{
    return a*b
})
module.exports = {
    add,subtract,divide,multiply
}