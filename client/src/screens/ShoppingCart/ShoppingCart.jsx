import "./ShoppingCart.css";
import Layout from '../../components/shared/Layout/Layout';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ShoppingCart(props) {
  const { user, onChange, cart, setCart } = props;
  console.log(cart);
  let total = 0;

  const shoppingTotal = cart.map((adventure, index) => {
    console.log(total);
    total += parseInt(adventure.price);
  })

  const shoppingList = cart.map((adventure, index) => (
    <div className="adventure-shop">
      <img className="adventure-shop-image" src={adventure.imgURL[0]} alt={adventure.title} />
      <div className="shop-content">
        <div className="shop-title">{adventure.title}</div>
        <div className="shop-location"><i class="fa fa-map-marker" aria-hidden="true"></i> {adventure.location}</div>
      </div>
      <div className="shop-price-block">
        <div className="shop-price"><i class="fa fa-rub" aria-hidden="true"></i> {adventure.price}</div>
      </div>
    </div>
  ));

  return (
    <Layout className="shop-layout" onChange={ onChange } user={props.user}>
      <div className="fake-nav"></div>
      <div className="shopping-title" style={{paddingTop: "5vh"}} >Shopping Cart</div>
      <div className="shop-container">
        {shoppingList}
        <div className="total-price">
          Total Price:
          <div>
            <i class="fa fa-rub total-logo" aria-hidden="true"></i>
            {total}
          </div>
        </div>
      </div>
      <div className="fake-footer"></div>
    </Layout>
  )
};

export default ShoppingCart;