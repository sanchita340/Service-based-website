import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function closeBookingForm() {
    setShowBookingForm(false);
    setBookingSubmitted(false);
  }

  return (
    <section className="min-h-[70vh] bg-[#f1e7da] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">

        
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#AC6049]">
            Your Daywell Experience
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#172A3A] sm:text-5xl">
            Your Cart<span className="text-[#CD785E]">.</span>
          </h1>

          <p className="mt-3 text-base text-gray-600">
            Your selected services, all in one place.
          </p>
        </div>

        {cartItems.length === 0 ? (
        
          <div className="rounded-3xl border border-[#E6DDD0] bg-white px-6 py-16 text-center shadow-sm sm:px-12">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F0E8] text-4xl">
              🛒                                                          
            </div>

            <h2 className="text-2xl font-bold text-[#30495f]">
              Your cart is waiting
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              You haven't selected any home services yet.
              Explore our services and find the right help for your home.
            </p>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#CD785E] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#AC6049] hover:shadow-lg"
            >
              Explore Services →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">

          
            <div>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#172A3A]">
                  Selected Services
                </h2>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600">
                  {totalQuantity} {totalQuantity === 1 ? "service" : "services"}
                </span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-2xl border border-[#E8DFD3] bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                      
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#F7F3ED]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-2"
                        />
                      </div>

                      
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-[#172A3A]">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Professional home care service
                        </p>

                        <p className="mt-2 font-semibold text-[#AC6049]">
                          ₹{item.price}
                          <span className="ml-1 text-sm font-normal text-gray-500">
                            per service
                          </span>
                        </p>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.name)}
                          className="mt-3 text-sm font-medium text-gray-500 transition hover:text-red-600"
                        >
                          Remove item
                        </button>
                      </div>

                    
                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                        <div className="flex items-center gap-4 rounded-full border border-[#E6DDD0] px-3 py-2">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.name)}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-semibold text-[#172A3A] transition hover:bg-[#F4F0E8]"
                          >
                            −
                          </button>

                          <span className="min-w-4 text-center font-semibold text-[#172A3A]">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.name)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-semibold text-[#172A3A] transition hover:bg-[#F4F0E8]"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-xl font-bold text-[#172A3A]">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            
            <aside className="rounded-3xl bg-[#172A3A] p-6 text-white shadow-lg sm:p-8 lg:sticky lg:top-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E8B29E]">
                Your Order
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Order Summary
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                A little help goes a long way toward a happier home.
              </p>

              <div className="my-7 space-y-4 border-y border-white/15 py-6">
                <div className="flex justify-between gap-3 text-sm text-gray-300">
                  <span>Services selected</span>
                  <span>{totalQuantity}</span>
                </div>

                <div className="flex justify-between gap-3 text-sm text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="flex justify-between gap-3 text-sm text-gray-300">
                  <span>Booking fee</span>
                  <span>₹0</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-3xl font-bold text-[#E8B29E]">
                  ₹{totalPrice}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setBookingSubmitted(false);
                  setShowBookingForm(true);
                }}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#CD785E] px-5 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B96D53] hover:shadow-lg"
              >
                Confirm Booking
                <span aria-hidden="true">→</span>
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                Your home deserves thoughtful care.
              </p>
            </aside>
          </div>
        )}
      </div>
      {showBookingForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={closeBookingForm}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-form-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#AC6049]">
                  Daywell
                </p>
                <h2
                  id="booking-form-title"
                  className="mt-2 text-2xl font-bold text-[#172A3A]"
                >
                  Complete Your Booking
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Enter your details to schedule your service.
                </p>
              </div>
              <button
                type="button"
                onClick={closeBookingForm}
                aria-label="Close booking form"
                className="rounded-full px-3 py-1 text-2xl leading-none text-gray-500 hover:bg-gray-100"
              >
                &times;
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="rounded-2xl bg-[#F4F0E8] p-5 text-[#172A3A]">
                <p className="font-semibold">Your booking details have been submitted.</p>
                <p className="mt-2 text-sm text-gray-600">
                  Total: ₹{totalPrice}
                </p>
                <button
                  type="button"
                  onClick={closeBookingForm}
                  className="mt-5 rounded-full bg-[#CD785E] px-6 py-3 font-semibold text-white hover:bg-[#AC6049]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                 className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setBookingSubmitted(true);
                }}
              >
                <label className="block text-sm font-medium text-[#172A3A]">
                  Full name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-1 w-full rounded-xl border border-[#E6DDD0] px-4 py-3"
                  />
                </label>
                <label className="block text-sm font-medium text-[#172A3A]">
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="mt-1 w-full rounded-xl border border-[#E6DDD0] px-4 py-3"
                  />
                </label>
                <label className="block text-sm font-medium text-[#172A3A]">
                  Service address
                  <textarea
                    name="address"
                    autoComplete="street-address"
                    required
                    rows="3"
                    className="mt-1 w-full rounded-xl border border-[#E6DDD0] px-4 py-3"
                  />
                </label>
                <label className="block text-sm font-medium text-[#172A3A]">
                  Preferred date
                  <input
                    name="date"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1 w-full rounded-xl border border-[#E6DDD0] px-4 py-3"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#CD785E] px-5 py-4 font-bold text-white transition hover:bg-[#B96D53]"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;

  