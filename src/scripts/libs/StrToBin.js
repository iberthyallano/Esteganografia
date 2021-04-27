function StrToBin(text){
    return(
        text.split('')
            .map(letra => {
                return letra.charCodeAt(0).toString(2).padStart(8,'0');
            })
            .reduce((previus, current) => {
                return previus + current;
            }, '')
    );
}

module.exports = StrToBin;