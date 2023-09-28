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
    setCart([...cart, {...book, quantity: 1}])




    // setCart( prevCart => [...prevCart, book])

    // const dupItem = cart.find(item => +item.id === +book.id)
    // console.log(dupItem)
    // if (dupItem){
    //   setCart(cart.map(item => {
    //     if (+item.id === +dupItem.id){
    //       return {
    //         ...item,
    //         quantity: item.quantity + 1
    //       }
    //     }
    //     else {
    //       return item
    //     }
    //   }))
    // }
    // else {
    //   setCart([...cart, {...book, quantity: 1}]) // we are adding a new property quantity
    //   //setCart([...cart, [book]])
    // }
  }

  function changeQuantity(book, quantity){
    setCart(cart.map(item => {
    //   if (+item.id === +book.id){
    //     return {
    //       ...item,
    //       quantity: +quantity
    //     }
    //   }
    //   else {
    //     return item
    //   }
    // }))
    return +item.id === book.id ? {...item, quantity: +quantity} : item
  }))
}

  function removeBook(book){
    setCart(cart.filter(item => item.id !== book.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    });
    return counter
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
      <Nav numberOfItems={numberOfItems()}/> 
      {/* without paranthesis it passes the function now it executes and passes the return  */}
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/books" element={<Books books={books}/>}/>
            <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
            <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}/>}/>
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
