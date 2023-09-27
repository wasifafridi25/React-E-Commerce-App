import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book){
    // setCart( prevCart => [...prevCart, book])
    const dupItem = cart.find(item => +item.id === +book.id)
    console.log(dupItem)
    if (dupItem){
      setCart(cart.map(item => {
        if (+item.id === +dupItem.id){
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        else {
          return item
        }
      }))
    }
    else {
      setCart([...cart, {...book, quantity: 1}]) // we are adding a new property quantity
      //setCart([...cart, [book]])
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
      <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/books" element={<Books books={books}/>}/>
            <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}/>}/>
            <Route path="/cart" element={<Cart books={books}/>}/>
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
