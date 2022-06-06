import React, { useEffect, useState } from "react";

const Type = () => {
 const [types, setTypes] = useState([]);
 useEffect(() => {
   request();
 }, []);
 const request = () => {
   const response = fetch('http://localhost:8000/product_types/', {
     method: 'GET',
     headers: {
       'Accept': 'application/json'
     }
   }).then((resp) => {
    return resp.json()}
  ).then((data) => {
    setTypes(data)
  } );
 }

 return (
   <>
   <ul>
      {types.map((type) => (
        <li>
          <button>{type.name}</button>
        </li>
      ))}
    </ul>
   </>
 )
}

export default Type;