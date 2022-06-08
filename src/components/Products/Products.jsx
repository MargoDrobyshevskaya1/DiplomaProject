import {  useSelector } from "react-redux";


const Products = () => {
  const productsShow = useSelector(state => state.productsShow);
 
  
  

  return (
    <>
      { productsShow.length !=0 ? productsShow.map((product) => (
        <div key={product.id}>{product.name}</div>
      )) : (<></>)
      
      }
      
    {/* {this.props.productsShow.length > 1 ? this.props.productsShow[0] : (<></>)}  */}
   
    </>
  )
}

export default Products;