# Hi-PPO 

### **A Bold, Neo-Brutalist Visual Micro-Blogging Experience.**

Hi-PPO is a full-stack social platform designed with a high-energy **Neo-Brutalist / Retro-Pop** aesthetic. It focuses on visual storytelling, allowing creators to share snapshots and artistic designs with punchy captions in a distraction-free, high-impact environment.

---

## 🎨 Design Philosophy
Unlike typical minimalist apps, Hi-PPO embraces **Neo-Brutalism**:
- **High Contrast**: Thick black borders and deep shadows.
- **Vibrant Palettes**: Playful cream backgrounds paired with bold action colors.
- **Raw Typography**: Use of *Fraunces* for heavy headers and *Outfit* for clean UI.
- **Tacit Feedback**: Every interaction has a "bouncy" reactive feel.

---

## 🚀 Features
- **Visual Feed**: A scrollable, production-ready feed of high-quality posts.
- **Neo-Brutalist Creator**: A bold post-creation form with dashed upload zones and interactive UI.
- **Unified Harmony**: Seamless design language across Home, Feed, and About pages.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Production Level**: Integrated with Cloud storage and managed Databases.

---

## 🛠️ Tech Stack
### **Frontend**
- **React 19**: Modern component-based architecture.
- **Vite**: Ultra-fast build tool and dev server.
- **React Router 7**: Intelligent client-side routing.
- **Axios**: Promised-based HTTP client for API communication.
- **Vanilla CSS**: Custom design system built from scratch (no generic frameworks).

### **Backend**
- **Node.js & Express**: Scalable server-side logic.
- **MongoDB & Mongoose**: NoSQL database for flexible data modeling.
- **Multer**: Multi-part form data handling.
- **ImageKit.io**: High-performance cloud storage and CDN for images.
- **CORS**: Secure cross-origin resource sharing.

---

## 📦 Installation & Setup

### **Pre-requisites**
- Node.js (v16+)
- MongoDB Atlas account
- ImageKit.io account

### **1. Clone the repository**
```bash
git clone https://github.com/Kanishkverma777/Hi-PPO.git
cd Hi-PPO
```

### **2. Backend Setup**
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
MONGO_URI=your_mongodb_uri
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
PORT=3000
```
Run the server:
```bash
node server.js
```

### **3. Frontend Setup**
```bash
cd ../frontend
npm install
```
Run the development server:
```bash
npm run dev
```

---

## 🌎 Deployment

### **Backend (Render/Railway)**
Deployed successfully at: `https://hi-ppo.onrender.com`
- Set root directory to `backend`.
- Configure Environment Variables in the platform dashboard.

### **Frontend (Vercel)**
- Set root directory to `frontend`.
- Set Environment Variable: `VITE_API_URL` to your live backend link.

---

## 🎓 Interview Context & Technical Deep Dive

If you are reviewing this for an interview, here are the key architectural decisions and challenges I tackled:

### **1. System Architecture & Communication**
- implemented a clear separation of concerns with a **decoupled Frontend and Backend**.
- Used **Axios** for asynchronous API communication, handling lifecycle methods and state updates within React's `useEffect`.
- Configured a central `config.js` to manage **Environment-Specific Endpoints**, enabling seamless transitions between development and production.

### **2. Data Handling & Security**
- **Multipart Form Data**: Leveraged **Multer** on the server-side to handle binary image streams and metadata simultaneously.
- **Cloud Integration**: Integrated **ImageKit.io** for real-time image processing and optimized delivery, reducing database load by storing only CDN URLs.
- **Environment Protection**: Implemented strict `.gitignore` patterns and platform-level Environment Variable management to protect sensitive API keys and DB credentials.

### **3. UI/UX Strategy**
- Developed a **custom CSS Design System** from scratch to achieve a Neo-Brutalist aesthetic.
- Optimized for **Cumulative Layout Shift (CLS)** by providing fixed aspect-ratio containers for images in the feed.
- Implemented **Responsive Breakpoints** to maintain layout integrity from extreme mobile widths up to 4K displays.

### **4. Key Learnings**
- Mastered the **MERN** flow: From Schema definition in Mongoose to rendering dynamic data in React.
- Learned to handle **CORS policies** and cross-origin resource sharing specifically for decoupled deployments.
- Understood the importance of **User Feedback** (Confirmation dialogs, loading states, and error handling).

---

## 👨‍💻 Author
**Kanishk Verma**
*First Full-Stack Project - Built with passion and learning.*

---

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

