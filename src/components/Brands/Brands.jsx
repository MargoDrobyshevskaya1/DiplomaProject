import React, {useState, useEffect} from "react" 


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
    <ul>
      {brands.map((brand) => (
        <li>
          <button>{brand.name}</button>
        </li>
      ))}
    </ul>
   
    </>
  )
}

export default Brands;