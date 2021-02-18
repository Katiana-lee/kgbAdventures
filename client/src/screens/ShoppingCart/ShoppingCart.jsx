import "./ShoppingCart.css";
import Layout from '../../components/shared/Layout/Layout';
import { Link } from "react-router-dom";

function ShoppingCart(props) {
  const { user, onChange, cart, setCart } = props;
  console.log(cart);

  const shoppingList = cart.map((adventure, index) => (
    <div className="adventure-shop">
      <div className="shop-content">
        <div className="shop-title">{adventure.title}</div>
        <div className="shop-location"><i class="fa fa-map-marker" aria-hidden="true"></i> {adventure.location}</div>
        <br></br>
        <div className="shop-price-block">
          <div className="shop-price"><i class="fa fa-rub" aria-hidden="true"></i> {adventure.price}</div>
          {/* <div className="add-to-cart" onClick={(e) => buildCart(e)}>ADD TO CART</div> */}
        </div>
      </div>
      <div className="shop-center-divider"></div>
      <div className="shop-images">
        <img className="adventure-shop-image" src={adventure.imgURL[0]} alt={adventure.title} />
      </div>
    </div>
  ));

  return (
    <Layout onChange={ onChange } user={props.user}>
      <div>Shopping Cart</div>
      <div>
        {shoppingList}
      </div>
      <div className="fake-footer"></div>
    </Layout>
  )
};

export default ShoppingCart;