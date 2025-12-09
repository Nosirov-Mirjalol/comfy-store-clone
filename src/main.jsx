import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster position='bottom-right' />
  </Provider>,
)
