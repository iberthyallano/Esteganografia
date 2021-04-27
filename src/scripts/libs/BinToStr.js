function BinToStr(binary){
    let text = '';
    for(let i = 0; i < binary.length; i += 8){
        text += String.fromCharCode(parseInt(binary.substring(i, i+8), 2));
    }
    return text;
}

module.exports = BinToStr;