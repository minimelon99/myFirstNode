// const { msg } = require('./module');
// //const { msg } = myModule;
// console.log( msg);

const fs = require('fs');
const path = require('path');
const resizeImg = require('resize-img');

console.log(__dirname);
const origDir = path.join(__dirname, '/images/orig/')
const distDir = path.join(__dirname, '/images/dist/')


if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const fileName = 'pic1.jpeg';
 
resizeImg(fs.readFileSync(origDir + fileName), {width: 128, height: 128})
    .then(buf => {
        fs.writeFileSync(distDir + fileName, buf);
    });


    //1. resize image base on the original dimension NOTE: use package image-size
    //2. resize all images in the original folder NOTE use array forEach or for loop
    //3. 