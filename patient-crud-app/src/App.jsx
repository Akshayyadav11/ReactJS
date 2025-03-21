import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Navbar } from './navbar/Navbar'


export let Context = createContext();


function App() {
  const [count, setCount] = useState(0)
  const mainHeading = 'PATIENT MANAGEMENT'
  //const libraryName = 'NeoSoft'
  const [libraryName, setLibName] = useState('NeoSoft')

  setTimeout(()=>{
    setLibName('Neosoft Pvt Ltd')
  }, 3000)
  
  return (
    <>
       <div className="d-flex flex-column min-v-100 mt-4">
        <Context value={libraryName}>
          <Header mainHeading={mainHeading}></Header>

          <Footer mainHeading={mainHeading}></Footer>
        </Context>
      </div>
    </>
  )
}

export default App
