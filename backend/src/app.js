const express = require('express');
const multer = require('multer'); // ye bhi ek middleware hai jo file upload ke liye use hota hai
const uploadFile = require('./services/storage.service'); 
const PostModel = require('./models/post.model');
const cors = require('cors'); // ye middleware CORS policy ko handle karne ke liye use hota hai

const app = express();

app.use(cors()); // CORS middleware ko use karo taki frontend se backend ke resources ko access karne ki permission de sakte hain

app.use(express.json()); // middleware to parse JSON bodies ( matlb ki jo bhi data hum client se bhejenge usko JSON format me parse karne ke liye ye middleware use karte hain )

const upload = multer({ storage : multer.memoryStorage() }); // Configure multer to save uploaded files to the 'uploads' directory

app.post('/create-post', upload.single("image"), async (req, res) => {

    console.log(req.body);   // ye req.body me caption aayega jo client se bheja jayega
    console.log(req.file);   // ye req.file me image aayega jo client se bheja jayega aur multer ke memoryStorage me save hoga            
    const result = await uploadFile(req.file.buffer); 

    const post = await PostModel.create({

        image : result.url, // ye url hume imagekit se milega jab hum file upload karenge aur us url ko apne database me save karna hai
        caption : req.body.caption, // ye caption hume client se req.body me milega
    })

    
    res.status(201).json({
        message : 'Post created successfully',
        post 
    })  

});


// ye ban gyi Post api jisme hum image aur caption dono receive kar rahe hain client se aur file upload ke liye multer ka use kar rahe hain

// upload.single me key ka naam dena hai jo client se bheja jayega jisme file hogi

app.get('/posts', async (req, res) => {

    const posts = await PostModel.find(); // ye function database se sare posts ko find karke laayega aur usko posts variable me store kar dega

    return res.status(200).json({
        message : 'Posts fetched successfully',
        posts 
    })
});

// ye ban gyi ek aur api jisme hum database se sare posts ko fetch kar rahe hain aur client ko bhej rahe hain

app.delete('/posts/:_id', async (req, res) => {

    const { _id } = req.params; // ye _id hume url me bhejna hoga jab hum delete request bhejenge jese http://localhost:3000/posts/12345 jaha 12345 post ka id hai jise hum delete karna chahte hain
    await PostModel.findByIdAndDelete(_id); // ye function database se post ko find karke delete kar dega jiska id hum url me bhejenge

    return res.status(200).json({
        message : 'Post deleted successfully'
    })
});

// ye ban gyi delete api jisme hum url me post ka id bhejenge aur us id ke basis par database se post ko delete kar denge

module.exports = app;