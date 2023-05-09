import React, { useEffect, useState } from 'react'
import App from './App'
import Loader from '../components/Loader/loader';
import LoaderText from '../components/Loader/loaderText';


export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [loading])

  return (
    <>
    {loading ? (
    <div className='main-loader'>
      <Loader />
      <LoaderText />

    </div>
    )
     :
  
    <main>
      <App />
    </main>
  
  }
</>
  )
}
