import { useState } from 'react'
import './App.css'

//1 - React router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//CSS
import './App.css'

// Pages 
import Home from './pages/Home';
import About from './pages/About'
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search'
import SearchPage from './pages/SearchPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        <Navbar/>
        {/* 3 - Busca de Parametros */}
        <SearchForm/>
        {/* 2 - Links com React Router*/}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            {/*4- Rotas dinâmicas */}
            <Route path='/products/:id' element={<Product/>}/>
            {/*6- Nested Routes */}
            <Route path='/products/:id/info' element={<Info/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path="/search" element ={<Search/>}/>
            <Route path="/searchPage" element ={<SearchPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
