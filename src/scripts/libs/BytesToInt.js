function BytesToInt(bytes){
    let result = 0;
    result = result | (0xFF000000 & parseInt(bytes[0]) << 24);
    result = result | (0x00FF0000 & parseInt(bytes[1]) << 16);
    result = result | (0x0000FF00 & parseInt(bytes[2]) << 8);
    result = result | (0x000000FF & parseInt(bytes[3]) << 0);
    return result;
}

module.exports = BytesToInt;