
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } =
    useContext(CartContext);

  const { token } = useContext(UserContext);

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío 🍕</p>
      ) : (
        cart.map((pizza) => (
          <div className="cart-item" key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />

            <span className="cart-name">{pizza.name}</span>

            <strong>
              ${pizza.price.toLocaleString("es-CL")}
            </strong>

            <button
              onClick={() => removeFromCart(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              onClick={() => addToCart(pizza)}
            >
              +
            </button>
          </div>
        ))
      )}

      <h2>
        Total: ${total.toLocaleString("es-CL")}
      </h2>

      <button
        className="pay-button"
        disabled={!token}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
