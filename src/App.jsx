
import { Suspense } from 'react'
import './App.css'
import Countries from './components/counties/Countries'



const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())

function App() {


  return (
    <>

      <h1>React World on the go..</h1>

      <Suspense fallback={<p>Nadir is going...</p>}>
        <Countries promiseOfCountries={countriesPromise}></Countries>
      </Suspense>


    </>
  )
}

export default App
