import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Components/utils/AuthContext';
import { Provider } from 'react-redux'
import store from './Components/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <Provider store={store}>
    <App />
    </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
