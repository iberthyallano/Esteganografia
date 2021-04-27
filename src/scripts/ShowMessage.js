const {Transform} = require('stream');

const bytesToInt = require('./libs/BytesToInt');
const binToStr = require('./libs/BinToStr');
const strToBin = require('./libs/StrToBin');

function ShowMessage(messageBreak){
    return new Transform({
        transform: function(chunk, encoding, callback){
            if(!this.offset){
                this.offset = 0;
            }

            if(this.offset === 0){
                const id = (String.fromCharCode(chunk[0], chunk[1]));
                if(id == 'BM'){

                    let initBytesUsable = bytesToInt([chunk[13],chunk[12],chunk[11],chunk[10]]);

                    this.initBytesUsable = initBytesUsable;
    
                    let messageBin = '';
                    let messageBreakBin = strToBin(messageBreak);
    
                    for(let i = initBytesUsable; i < chunk.length; i++){
                        messageBin += chunk[i]%2;
    
                        if(messageBin.length%8 === 0){
                            if(messageBin.indexOf(messageBreakBin) >= 0){
                                messageBin = messageBin.substring(0, messageBin.indexOf(messageBreakBin));
                                break;
                            }
                        }
                    }
    
                    let message = binToStr(messageBin);
                    console.log(message);   
                    
                }else{
                    console.log('isso nao e uma imagem bitmap');
                }   
            }
            this.offset += chunk.length;
            callback();
        }
    });
}

module.exports = ShowMessage;