function stringLength(string){
    let length = string.length
    if(length>=1 && length<10){
        return length
    }else{
        return 'Error'
    }
}
module.exports = stringLength;