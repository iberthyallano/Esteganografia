const {Transform} = require('stream');

const bytesToInt = require('./libs/BytesToInt');
const strToBin = require('./libs/StrToBin');

function HideMessage(message, messageBreak){
    return new Transform({
        transform: function(chunk, encoding, callback){
            if(!this.offset){
                this.offset = 0;
            }

            if(this.offset == 0){
                const id = (String.fromCharCode(chunk[0], chunk[1]));
                if(id == 'BM'){
                    console.log('isso é uma imagem bitmap');
                }
                
                let totalBytes = bytesToInt([chunk[5],chunk[4],chunk[3],chunk[2]]);
                console.log('Bitmap size: ', totalBytes);
        
                let initBytesUsable = bytesToInt([chunk[13],chunk[12],chunk[11],chunk[10]]);
                console.log('Bitmap initial chunk: ', initBytesUsable);
                
                this.initBytesUsable = initBytesUsable;

                let totalBytesUsable = totalBytes - initBytesUsable;
                console.log('Bitmap total chunk: ', totalBytesUsable);
        
                let messageBin = strToBin(message + messageBreak);

                if(messageBin.length <= totalBytesUsable){
                    messageBin.split('')
                    .forEach(bit => {
                      chunk[this.initBytesUsable] -= chunk[this.initBytesUsable]%2;
                      chunk[this.initBytesUsable] += parseInt(bit);
                      this.initBytesUsable++;
                    });
                    console.log('O texto foi inserido');
                }else{
                    console.log('imagem muito pequena,o texto nao pode ser inserido');
                }       
            }

            this.push(chunk)
            this.offset += chunk.length;

            callback();
        }
    });
}

module.exports = HideMessage;