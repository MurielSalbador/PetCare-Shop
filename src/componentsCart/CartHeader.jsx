import Cart from "../componentsCart/Cart.jsx";
import { FiltersProvider } from "../context/filters.jsx";
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from "react-router-dom";




const CartHeader = () => {
const navigate = useNavigate();

  return (
 <FiltersProvider>
  
  <main className="main">
        <CloseButton aria-label="Cerrar formulario" onClick={() => navigate('/shop')} />
    <div className="container">
      <h1 className="page-title">🛒 Mi Carrito</h1>

      <Cart />

 
    </div>
  </main>
</FiltersProvider>
  );
};

export default CartHeader;
