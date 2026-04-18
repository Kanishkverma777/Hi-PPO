const ImageKit =  require('@imagekit/nodejs');

const imagekit = new ImageKit({

    privateKey : process.env.IMAGEKIT_PRIVATE_KEY, 

});

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({ // ye function imagekit ke files upload method ko call karta hai jisme hume file ka data dena hota hai jo ki buffer ke form me hume multer ke memoryStorage se milta hai

        file : buffer.toString('base64'), // ye buffer hume multer ke memoryStorage se milega jo ki app.js me receive ho raha hai
        // base64 me convert karna isliye zaruri hai kyunki imagekit ke upload method me file data base64 format me dena hota hai
        fileName : 'image.jpg', // ye file name hume apne hisab se dena hai
        
    });
    
    return result;
}

module.exports = uploadFile;