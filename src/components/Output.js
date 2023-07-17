import React, { useEffect } from 'react'
import icon from '../images/cloudy.png'
import {useState} from 'react'

function Output(props) {
  const [data, setData] = useState()


  useEffect(()=>{
    const apiKey = "3437fe8d84d8af7d32406c96cb70acba"

    const fetchAPI = async (cityName) =>{
      const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
      const res = await fetch(APIurl)
      const APIdata = await res.json()
      if(typeof(res) == "undefined"){
        console.log("Unndefined")
      }
      else{setData(APIdata)}
    }
    fetchAPI(props.search)
  }, [props.search])
  

  if(!data){
    return(<></>)
  }

  else{
    return (
      <div className='outputContainer'>
          <div className="outputBox">
              <img src={icon} alt="Weather Icon" className='weatherIcon'/>
              <p className="celciusText">{((data.main.temp)-273.15).toFixed(1)}°C</p>
              <p className="cityName">{data.name}, {data.sys.country}</p>
          </div>
      </div>
    )
  }
}

export default Output