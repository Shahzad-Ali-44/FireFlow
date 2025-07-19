# 🔥 FireFlow

A modern, responsive React application that demonstrates real-time data management with Firebase Firestore. FireFlow provides a clean, intuitive interface for managing user data with full CRUD operations.

##  Features

- **Real-time Data Management**: Add, edit, and delete user records with instant updates
- **Modern UI/UX**: Beautiful, responsive design with smooth animations and loading states
- **Firebase Integration**: Seamless connection to Firebase Firestore for data persistence
- **TypeScript**: Full type safety and better development experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Loading States**: Visual feedback during data operations


## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Backend**: Firebase Firestore
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Code Quality**: ESLint with TypeScript support

##  Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project with Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FireFlow.git
   cd FireFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.



## 🎯 Usage

### Adding a User
1. Enter the user's name in the "Name" field
2. Enter the user's age in the "Age" field
3. Click "Add" to save the user to Firebase

### Editing a User
1. Click the "Edit" button next to any user
2. The form will populate with the user's current data
3. Modify the name or age as needed
4. Click "Update" to save changes

### Deleting a User
1. Click the "Delete" button next to any user
2. The user will be immediately removed from the database


## 🔒 Environment Variables

Make sure to set up the following environment variables in your `.env` file:

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Your Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Your Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Your Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Your Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Your Firebase app ID |



## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


