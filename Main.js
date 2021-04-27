const ManipulateFiles = require('./src/scripts/ManipulateFiles');

const hideMessage = require('./src/scripts/HideMessage');
const showMessage = require('./src/scripts/ShowMessage');

const files = new ManipulateFiles();
const caminho_input = './src/images/input/';
const caminho_output = './src/images/output/';
const input_image = 'input.bmp';
const input_text = 'arquivo.txt';
const output_image = 'output.bmp';
const messageBreak = '<<<';

// -----------------------------------------------------------------

// DESCOMENTAR PARA CARREGAR A FOTO & ADD MENSAGEM SECRETA

// const readStream = files.getImage(caminho_input,input_image);
// const writeStream = files.setImage(caminho_output, output_image);

// const message = files.getText(input_text);

// readStream.pipe(hideMessage(message, messageBreak)).pipe(writeStream) // ADD MENSAGEM + IMG

// -----------------------------------------------------------------

// DESCOMENTAR PARA SABER A MENSANGEM

// const readStream = files.getImage(caminho_output,output_image);
// readStream.pipe(showMessage(messageBreak));

// -----------------------------------------------------------------