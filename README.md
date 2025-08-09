# ✨ Modern Todo Web Application

A full-stack todo application built with **Spring Boot** and **React + Tailwind CSS**, featuring a beautiful modern UI with dark mode support and production-ready cloud deployment.

## 🎯 Live Demo

- **🌐 Frontend**: [https://to-do-web-app-ivory-eight.vercel.app/](https://to-do-web-app-ivory-eight.vercel.app/)
- **⚡ Backend API**: [https://todo-web-app-352m.onrender.com/api/todos](https://todo-web-app-352m.onrender.com/api/todos)

## 🛠️ Tech Stack

### Backend
- **Spring Boot 3.5.4** - Modern Java framework
- **Spring Data JPA** - Database abstraction layer
- **H2 Database** - In-memory database for development
- **Spring Web** - RESTful API development
- **Maven** - Dependency management
- **Docker** - Containerization

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **Axios** - HTTP client for API calls
- **Modern CSS3** - Animations and responsive design

### Deployment & DevOps
- **Render** - Backend hosting (free tier)
- **Vercel** - Frontend hosting (free tier)
- **Docker Multi-stage Build** - Optimized container images
- **Git** - Version control

## ✨ What Makes This Todo App Stand Out?

### 🎨 **Modern Design Philosophy**
- **Stunning Gradients**: Eye-catching blue-to-purple gradient backgrounds
- **Glass Morphism**: Modern card-based layout with rounded corners and soft shadows
- **Micro-interactions**: Smooth fade-in, slide-up, and hover animations
- **Fully Responsive**: Perfect experience on desktop, tablet, and mobile devices

### 🌙 **Advanced Dark Mode**
- **Instant Toggle**: Seamless switching between light and dark themes
- **System-wide Consistency**: Every component responds to theme changes
- **Smooth Transitions**: Beautiful color transitions when switching modes
- **Accessible Design**: High contrast ratios for better readability

### 🚀 **Production-Grade Architecture**
- **RESTful API**: Proper HTTP methods, status codes, and response patterns
- **CORS Configured**: Seamless cross-origin requests handling
- **Multi-stage Docker**: Optimized builds with reduced image sizes
- **Cloud-Native**: Deployed on modern cloud platforms with CI/CD

### 📊 **Smart Statistics Dashboard**
- **Real-time Metrics**: Live counts for total, completed, and pending todos
- **Color-coded Stats**: Visual progress tracking with meaningful colors
- **Instant Updates**: Statistics refresh immediately with every action

### 💎 **Enterprise-Level Features**
- **Input Validation**: Client-side and server-side data validation
- **Error Handling**: Graceful error management with user feedback
- **Loading States**: Smooth loading indicators for better UX
- **Clean Architecture**: Well-structured, maintainable codebase

## 📁 Project Structure

```
ToDo-Web-App/  
├── backend/ # Spring Boot Application  
│ ├── src/  
│ │ ├── main/  
│ │ │ ├── java/com/app/  
│ │ │ │ ├── controller/ # REST API Controllers  
│ │ │ │ ├── entity/ # JPA Data Models  
│ │ │ │ ├── repository/ # Data Access Layer  
│ │ │ │ ├── service/ # Business Logic Layer  
│ │ │ │ └── TodoWebApplication.java  
│ │ │ └── resources/  
│ │ │ └── application.properties  
│ │ └── test/ # Unit & Integration Tests  
│ ├── Dockerfile # Multi-stage Docker build  
│ ├── pom.xml # Maven dependencies  
│ └── mvnw # Maven wrapper  
│  
├── frontend/ # React Application  
│ ├── public/  
│ │ ├── index.html  
│ │ └── favicon.ico  
│ ├── src/  
│ │ ├── components/  
│ │ │ └── TodoApp.jsx # Main Todo Component  
│ │ ├── App.js # Root Component  
│ │ ├── index.js # Application Entry Point  
│ │ └── index.css # Tailwind CSS Styles  
│ ├── tailwind.config.js # Tailwind Configuration  
│ ├── package.json # Node.js dependencies  
│ └── package-lock.json  
│  
├── .gitignore # Git ignore rules  
├── .DS_Store  
└── README.md # This file
```


## 🚀 Quick Start Guide

### Prerequisites
Before you begin, ensure you have:
- ☕ **Java 17** or higher
- 📦 **Node.js 16** or higher  
- 🔨 **Maven 3.6** or higher (or use included Maven wrapper)
- 🐳 **Docker** (optional, for containerization)

### 🏃‍♂️ Running Locally

#### Step 1: Clone the Repository

```bash
git clone [https://github.com/madhav2928/ToDo-Web-App.git](https://github.com/madhav2928/ToDo-Web-App.git)  
cd ToDo-Web-App
```
#### Step 2: Start the Backend

##### Navigate to backend directory

```bash
cd backend
```
##### Run using Maven wrapper (recommended)

```bash
./mvnw spring-boot:run
```
##### Alternative: using installed Maven

```bash
mvn spring-boot:run
```

**✅ Backend will be running on:** `http://localhost:8080`

**🔧 API Endpoints:**
- GET/POST `http://localhost:8080/api/todos` - Todo operations
- H2 Console: `http://localhost:8080/h2-console` (username: `sa`, password: empty)

#### Step 3: Start the Frontend

##### Open new terminal and navigate to frontend
```bash
cd frontend
```
##### Install dependencies
```bash
npm install
```
##### Start development server
```bash
npm start
```


**✅ Frontend will open automatically at:** `http://localhost:3000`

