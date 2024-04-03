import CartDetails from "../components/CartDetails";
import OrderSummary from "../components/OrderSummary";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  // const products = getAllProducts();

  const products = useAppSelector((store) => store.cart.products);
  console.log(products);

  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {/* {products.map((product) => (
            <CartDetails product={product} />
          ))} */}
          {products.length ? (
            products.map((product) => (
              <CartDetails key={product._id} product={product}></CartDetails>
            ))
          ) : (
            <p className="text-2xl text-red text-center">
              product is not found
            </p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
