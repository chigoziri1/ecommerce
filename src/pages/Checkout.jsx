import { useContext } from "react";
import Layout from "../shared/Layout";
import ProductContext from "../context/ProductProvider";

function Checkout() {
  const { CartItems, UpdateCart, DeleteCartItem } = useContext(ProductContext);

  // Calculate the subtotal of all products
  const subtotal = CartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Checkout</h1>

          <p className="mb-8 text-gray-500">
            Review your products and update your order.
          </p>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Cart products */}
            <div className="space-y-5 lg:col-span-2">
              {CartItems?.length === 0 ? (
                <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Your cart is empty
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Add some products to continue shopping.
                  </p>
                </div>
              ) : (
                CartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                  >
                    {/* Product image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-full rounded-lg object-cover sm:w-32"
                    />

                    {/* Product details */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h2>

                      <p className="mt-1 font-medium text-blue-600">
                        ₦{item.price.toLocaleString("en-NG")}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        {/* Size selector */}
                        <div>
                          <label
                            htmlFor={`size-${item.id}`}
                            className="mb-1 block text-sm text-gray-500"
                          >
                            Size
                          </label>

                          <select
                            id={`size-${item.id}`}
                            value={item.size}
                            onChange={(e) => {
                              UpdateCart(item, item?.quantity, e.target.value);
                            }}
                            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                          >
                            {["S", "M", "L", "XL"].map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Quantity selector */}
                        <div>
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="mb-1 block text-sm text-gray-500"
                          >
                            Quantity
                          </label>

                          <div className="flex items-center rounded-lg border border-gray-300">
                            <button
                              type="button"
                              onClick={() => {
                                if (Number(item?.quantity) === 1) {
                                  DeleteCartItem(item?.id);
                                } else {
                                  UpdateCart(
                                    item,
                                    item?.quantity - 1,
                                    item?.defaultSize,
                                  );
                                }
                              }}
                              // disabled={item.quantity <= 1}
                              className="px-3 py-2 text-lg disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              −
                            </button>

                            <input
                              id={`quantity-${item.id}`}
                              type="number"
                              min="1"
                              value={item?.quantity}
                              onChange={(e) => {
                                UpdateCart(
                                  item,
                                 Number(e.target.value),
                                  item?.defaultSize,
                                );
                              }}
                              className="w-12 text-center outline-none"
                            />

                            <button
                              type="button"
                              onClick={() => {
                                UpdateCart(
                                  item,
                                  item?.quantity + 1,
                                  item?.defaultSize,
                                );
                              }}
                              className="px-3 py-2 text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item total and remove button */}
                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <p className="font-bold text-gray-900">
                        ₦{(item.price * item.quantity).toLocaleString("en-NG")}
                      </p>

                      <button
                        type="button"
                        onClick={() => DeleteCartItem(item?.id)}
                        className="text-sm font-medium text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Order summary */}
            <div className="rounded-xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-4 border-b border-gray-200 pb-5">
                <div className="flex justify-between text-gray-600">
                  <span>Products</span>
                  <span>
                    {CartItems?.reduce(
                      (total, item) => total + item.quantity,
                      0,
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString("en-NG")}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>Calculated later</span>
                </div>
              </div>

              <div className="flex justify-between py-5 text-lg font-bold">
                <span>Total</span>
                <span>₦{subtotal.toLocaleString("en-NG")}</span>
              </div>

              <button
                type="button"
                disabled={CartItems?.length === 0}
                onClick={() => alert("Proceeding to checkout!")}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-xs text-gray-500">
                Review your size and quantity before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
