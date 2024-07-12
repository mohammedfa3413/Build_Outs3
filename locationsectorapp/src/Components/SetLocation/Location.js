import React, { useEffect, useState } from 'react'
import styles from "./Location.module.css"
import axios from "axios"

function Location() {
    const [country, setcountry] = useState([]);
    const [state,setstate] = useState([]);
    const [city,setcity]=useState([]);
    const [selectedcountry, setselectedcountry] = useState("")
    const [selectedstate,setselectedstate] = useState("");
    const [selectedcity,setselectedcity] = useState("");

    //country
    const handelcountry = (e) =>{
        setselectedcountry(e.target.value);
    }

    useEffect(()=>{
        axios.get("https://crio-location-selector.onrender.com/countries")
        .then((res)=>{
            setcountry(res.data);
        })
        .catch((err)=>{
            console.error("Error fetching the countries" , err);
        })
    },[])


    //state
    const handelstate = (e)=>{
        setselectedstate(e.target.value)
    }

    useEffect(()=>{
     if(selectedcountry){
        axios.get(`https://crio-location-selector.onrender.com/country=${selectedcountry}/states`)
        .then((res)=>{
          setstate(res.data)
          setselectedstate("")
          setcity([])
          setselectedcity("")
          
        })
        .catch((err)=>{
          console.error("Error Fetching State" ,err);
        })
     }
    }, [selectedcountry]);


    //city
    const handelcity = (e)=>{
        setselectedcity(e.target.value)
    }

    useEffect(()=>{
       if(selectedcountry && selectedstate){
        axios.get(` https://crio-location-selector.onrender.com/country=${selectedcountry}/state=${selectedstate}/cities`)
        .then((res)=>{
            setcity(res.data);
            setselectedcity("")
        })
        .catch((err)=>{
            console.error("Error fetching city" ,err);
        })
       }
    },[selectedcountry, selectedstate])

  return (
    <div>
        <h1>Select Location</h1>

        <div className={styles.inputs}>
           <select value={selectedcountry}  onChange={handelcountry} className={styles.select}>
            <option value="" disabled>Select Country</option>
            {country.map((country)=> (
                <option key={country}  value={country}>{country}</option>
            ))}
           </select>


            <select value={selectedstate} onChange={handelstate} disabled={!selectedcountry} className={styles.select}>
                <option value="" disabled>Select State</option>
                {state.map((state)=> (
                    <option key={state} value={state}>{state}</option>
                ))}
            </select>


            <select value={selectedcity} onChange={handelcity} disabled={!selectedcountry && !selectedstate} className={styles.select}>
                <option value="" disabled>Select City</option>
                {city.map((city)=>(
                    <option value={city} key={city} >{city}</option>
                ))}

            </select>

        </div>
    </div>
  )
}

export default Location
