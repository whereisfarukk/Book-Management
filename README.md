# Book Management Application

---

## 🧰 Features

- 📚 Add, update, and delete books
- 🔍 Search books by title or author
- 🎛️ Sort books by publish date, title, or author
- 🏷️ Filter books by category or genre
- 🔐 User authentication with **Firebase Authentication** (Email/Password, Google Sign-In)
- 📄 Detailed view for each book
- 🖥️ Responsive design for mobile and desktop
- ⚛️ Built with React for fast, interactive UI
- 🗺️ React Router for smooth navigation
- 🌐 RESTful API integration with backend

---

## 🧱 Technologies Used

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| React             | Frontend framework             |
| React Router v6   | Navigation between pages       |
| Fetch             | API request handling           |
| Context API       | Global state management        |
| TailwindCSS / CSS | Styling                        |
| MongoDB           | Storing data                   |
| Firebase          | Authentication & Authorization |

---

## 🗂️ Folder Structure

```
Book-Management/
├── Clinet/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── ...
│   ├── src/
│   │   ├── assets/
│   │   │   ├── banner-books
│   │   │   ├── profilePic.jpg
│   │   │   └── ...
│   │   ├── components/
│   │   │   ├── Admin-dashboard
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── EditBooks.jsx
│   │   │   │   ├── ManageBooks.jsx
│   │   │   │   ├── SideBar.jsx
│   │   │   │   └── UploadBook.jsx
│   │   │   ├── Home
│   │   │   │   ├── Banner
│   │   │   │   ├── BestSellerBooks.jsx
│   │   │   │   ├── BookCards.jsx
│   │   │   │   ├── FavouriteBooks.jsx
│   │   │   │   ├── OtherBooks.jsx
│   │   │   │   ├── PromoBanner.jsx
│   │   │   │   └── Review.jsx
│   │   │   ├── Ui
│   │   │   │   └── Loader.jsx
│   │   │   ├── MyFooter.jsx
│   │   │   └── Navbar.jsx
│   │   ├── contexts/
│   │   │   └── AuthProvider.jsx
│   │   ├── firebase/
│   │   │   └── firebase.config.js
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Logout.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── SingleBook.js
│   │   ├── routers/
│   │   │   ├── guards # private route
│   │   │   │   └── PrivateRoutes.jsx
│   │   │   └── router.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── Server/
│   ├── index.js
│   └── package.json
├── .gitignore
├── LICENSE
└── README.md

```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

#### Make sure you have installed the following:

- Node.js (Recommended version: >= 18)
- npm or yarn package manager
- MongoDB or other database, if required by serve

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/whereisfarukk/Book-Management.git
cd Book-Management
```

### 3️⃣ Setting Up the Server (Backend)

1.  Navigate to the server directory:

```
cd Server
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

The backend should now be running at: http://localhost:3000 (or your configured port)

### 4️⃣ Setting Up the Client (Frontend)

1. Navigate to the client directory:

```
cd Client
```

2. Install dependencies:

```
npm install
```

3. Start the React development server:

```
npm run dev
```

The frontend should now be running at: http://localhost:5173

## 📂 Available Scripts

In `/client`:

- `npm run dev` → Starts React frontend

- `npm run build` → Builds production-ready frontend

In `/server`:

- `npm start` → Starts backend

- `npm run dev` → Starts backend with hot reload (if using `nodemon`)

## 🤝 Contribution

1. Fork the repo

2. Create your feature branch (git checkout -b feature/your-feature)

3. Commit your changes (git commit -m 'Add your feature')

4. Push to the branch (git push origin feature/your-feature)

5. Create a Pull Request
