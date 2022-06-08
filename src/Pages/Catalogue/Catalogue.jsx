import Sidebar from '../../components/Sidebar/Sidebar'
import Products from "../../components/Products/Products"
import './Catalogue.css'


const Catalogue = () => {

  
  return (
    <main>
      <section className="section-sidebar">
    <h1>Catalogue</h1>
    
    <Sidebar />
    <Products />
    
    
    </section>
    </main>
  )
}

export default Catalogue;