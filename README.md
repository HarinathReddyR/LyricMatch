# 🎵 Lyric Match - AI-Powered Song Guessing Game  

## 📌 Project Overview  
**Lyric Match** is a web application that challenges users to guess the title of an English song based on a short snippet of its lyrics, provided by an AI. The application is built with:  
- **Frontend**: React (Vite) with TypeScript  
- **Backend**: Express.js with TypeScript  
- **AI Integration**: Gemini AI for generating lyrics  

---

## 🛠️ Features  
- ✅ Generate a lyric snippet using AI  
- ✅ Input a song title as a guess  
- ✅ Check if the guess is correct  
- ✅ Reveal the correct answer if the guess is incorrect  

---

## 🔧 Tech Stack  
### Frontend  
- React (Vite)  
- TypeScript  
- Axios (for API requests)  

### Backend  
- Node.js (Express.js)  
- TypeScript  
-  Gemini AI

---


## 🛠️ Installation and Setup  

### 📌 Prerequisites  
Ensure you have the following installed:  
- ✅ [Node.js (LTS)](https://nodejs.org/)  
- ✅ npm

---

### 🚀 Backend Setup (Express.js)  

1. **Navigate to the backend folder**  
```bash
cd backend
```

2. **Install dependencies**  
```bash
npm install 
```

3. **Set up environment variables**  
Create a `.env` file in the `backend/` directory:  
```env
PORT=5000
GEMINI_API_KEY = your_gemini_api_key
```

4. **Run the backend server**  
```bash
npm run dev
```
Your backend will start at `http://localhost:5000/` 🚀  

---

### 🎨 Frontend Setup (React + Vite)  

1. **Navigate to the frontend folder**  
```bash
cd frontend
```

2. **Install dependencies**  
```bash
npm install 
```

3. **Run the frontend server**  
```bash
 npm run dev 
```
Your frontend will start at `http://localhost:5173/` 🚀  

---

## 🔗 API Endpoints  

| Method | Endpoint               | Description                           |
|--------|------------------------|---------------------------------------|
| GET    | `/api/lyrics/generate` | Generates a lyric snippet using AI    | 
| POST   | `/api/lyrics/guess`    | Checks if the user’s guess is correct |

---



