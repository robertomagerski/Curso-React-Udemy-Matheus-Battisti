import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderCounterContext } from './context/CounterContext.jsx'
import { TitleColorProvider } from './context/TitleColorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3- Envolvendo a aplicação com o Provider */}
    <ProviderCounterContext>
      <TitleColorProvider>
        <App />
      </TitleColorProvider>
    </ProviderCounterContext>
  </StrictMode>
)
