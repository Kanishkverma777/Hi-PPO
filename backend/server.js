require("dotenv").config(); // Load environment variables from .env file before other imports
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(3000 ,()=>{
    console.log( 'Server is running on port 3000');
});

// pehle npm init -y se package.json banao
// npm install express mongoose se dependencies install karo 
// phir src folder banao uske andar app.js banao use express se setup karo phir server.js banao jisme app ko import karke listen karvao

// ab src me db folder banao uske andar db.js banao jisme mongoose se mongodb se connect karvao phir use server.js me import karke connectDB() call karvao taki server start hone se pehle database se connect ho jaye

// ab src me models folder banao uske andar post.model.js banao jisme mongoose se ek schema banao jisme image aur caption fields ho phir us schema se ek model banao aur export kar do taki use app.js me import karke use kar sako

// app.js me ek POSt api banegi jo client se image aur caption receive karegi , route hoga /create-post aur postman pr test ke lye http://localhost:3000/create-post aur method hoga POST aur body me form-data select karke image aur caption fields bhejo aur dekho console me data receive ho raha hai ya nahi

// ab is api me multer middleware ka use karke file upload handle karo taki client se image receive kar sako aur usko console me dekh sako 

// image buffer ke form me receive hoga jo ki multer ke memoryStorage se aayega aur usko console me dekhna hai

// ab is buffer ko cloudinary ya kisi aur image hosting service me upload karna hai taki hume image ka url mil jaye aur us url ko apne database me save kar sako

// hum use kr rhe h imagekit cloud storage service  

// imagekit ke liye npm install @imagekit/nodejs se dependency install karo phir services folder me storage.service.js banao jisme imagekit ko configure karo aur ek function banao jisme image buffer receive karke usko imagekit me upload kar sako aur url return kar sako taki us url ko apne database me save kar sako

// backend ko frontend se integration ke liye hum package axios ka use karenge jisse hum frontend se backend ko request bhej sakte hain aur response receive kar sakte hain

// npm install axios se dependency install karo phir frontend me jaha se bhi post create karna hai waha se axios ka use karke backend ke /create-post api ko call karo aur image aur caption bhejo taki post create ho jaye

// CORS policy ka matlb hai ki ek domain se dusre domain ke resources ko access karne par restrictions hoti hain jese ki frontend localhost:5173 se backend localhost:3000 ke resources ko access karne par CORS error aata hai is problem ko solve karne ke liye hum backend me cors middleware ka use karenge jisse hum apne backend ke resources ko frontend se access karne ki permission de sakte hain

// for fix .... npm install cors se dependency install karo phir app.js me cors middleware ko import kro

// uske baad app.use(cors()) se cors middleware ko use kro taki frontend se backend ke resources ko access karne ki permission de sakte hain

