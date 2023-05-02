import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Axios.scss'

const Feched = () => {
  const [loader,setLoader] = useState(false);
  const [save,saveData] = useState([]);
  const [saveProperty,setSavePropery] = useState('https://restcountries.com/v3.1/all')



  function handleClickUzb() {
    setSavePropery('https://restcountries.com/v3.1/name/uzbekistan')
  }

  function handleClickGermany() {
    setSavePropery('https://restcountries.com/v3.1/name/germany')
  }

  function handleClickAll() {
    setSavePropery('https://restcountries.com/v3.1/all')
  }

   async function  fetchetData() {    
       try {
        const response = await axios.get(saveProperty);
        saveData(response.data);
        setLoader(true)
       } catch (error) {
        console.log(error);
       }
    }
    
       useEffect(() => {
        fetchetData()
       },[saveProperty])
    
  return (
    <>
    <div className="container">
    <div className={`ring${loader ? ' none' : ''}`}>Loading
  <span></span>
</div>
      <div className="buttons">
        <button onClick={handleClickUzb}>uzbekistan</button>
        <button onClick={handleClickGermany}>germany</button>
        <button onClick={handleClickAll}>All</button>
      </div>
     <div className='flags_wrapper'>
     {       
        save.map((data,index) => (
          <div key={index}>
            {console.log(data)}
            <img src={data.flags.png} alt="" />
            <h2>{data.name.common}</h2>
            <h3>Poytaxti: {data.capital}</h3>
            <p>xaritadan ko'rish: <a href={`${data.maps.googleMaps}`}>google map</a></p>
          </div>
        ))

      }
     </div>
    </div>
    </>
  )
}

export default Feched