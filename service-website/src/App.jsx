import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Services from '../components/Services';
import Login from '../components/Login';
import About from '../components/About';
import Blog from '../components/Blog';
import Cart from '../components/Cart';
import Signup from '../components/Signup';

function getSavedCart() {
  const storedCart = window.localStorage.getItem('daywell-cart');
  if (!storedCart) {
    return [];
  }

  try {
    const savedCart = JSON.parse(storedCart);
    if (Array.isArray(savedCart)) {
      return savedCart;
    }
  } catch (error) {
    console.error('Unable to read the saved cart:', error);
  }

  console.error('Saved cart data is invalid and has been cleared.');
  window.localStorage.removeItem('daywell-cart');
  return [];
}

function isAdminUser() {
  const storedUser = window.localStorage.getItem('user');
  if (!storedUser) {
    return false;
  }

  try {
    return JSON.parse(storedUser)?.role === 'admin';
  } catch (error) {
    console.error('Unable to read the saved user:', error);
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    return false;
  }
}

function App() {
  const [cartItems, setCartItems] = useState(getSavedCart);
  const pathname = useLocation().pathname.replace(/\/+$/, '') || '/';
  const isLoginPage = pathname === '/login';
  const isServicesPage = pathname === '/services';
  const isAboutPage = pathname === '/about';
  const isBlogPage = pathname === '/blog';
  const isCartPage = pathname === '/cart';
  const isSignup = pathname === '/signup';
  
  useEffect(() => {
    window.localStorage.setItem('daywell-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(service) {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.name === service.name);

      if (existingItem) {
        return items.map((item) =>
          item.name === service.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { ...service, quantity: 1 }];
    });
  }

  function updateQuantity(serviceName, change) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.name === serviceName
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(serviceName) {
    setCartItems((items) => items.filter((item) => item.name !== serviceName));
  }

  return (
    <>
      {!isLoginPage && !isSignup &&  (
        <Navbar />
      )}
      {isLoginPage ? (
        <Login />
      ) : isSignup ? (
        <Signup />
      ) : isServicesPage ? (
        <Services addToCart={addToCart} />
      ) : isAboutPage ? (
    <About />
  ) : isBlogPage?(
    <Blog/>
  ) : isCartPage ? (
    <Cart
      cartItems={cartItems}
      increaseQuantity={(serviceName) => updateQuantity(serviceName, 1)}
      decreaseQuantity={(serviceName) => updateQuantity(serviceName, -1)}
      removeFromCart={removeFromCart}
    />
  ): (
        <>
          <Home />
          <Services addToCart={addToCart} />
        </>
      )}
    </>
  );
}

export default App;