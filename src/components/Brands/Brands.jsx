import React, {useState, useEffect} from "react" 
import Options from './Options/Options'
import './Brands.css'

const Brands = () => {
  const [brands, setBrands] = useState([])
  useEffect(() => {
    request();
  }, [])
  const request = () => {
    const response =  fetch('http://localhost:8000/brands/', {
    method: 'GET',
      headers: {
      'Accept': 'application/json'
  }
  }).then((resp) => {
    return resp.json()}
  ).then((data) => {
    setBrands(data)
  } );
  }

  return (
    <>
    <select className="select" name="" id="">
      <Options options={brands}/>
    </select>
    </>
  )
}

export default Brands;