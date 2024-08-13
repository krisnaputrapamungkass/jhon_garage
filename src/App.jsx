import React, { useState } from 'react';
import ProductList from './components/pages/ProductList';
import Cart from './components/ui/Cart';
import Checkout from './components/ui/Checkout';
import LinkAjaReceipt from './components/ui/LinkAjaReceipt';
const App = () => { 
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Jika item sudah ada, tingkatkan jumlahnya
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                // Jika item baru, tambahkan ke keranjang dengan jumlah 1
                return [...prevItems, { ...product, count: 1 }];
            }
        });
    };

    const removeFromCart = (productId)  => {
        setCartItems(prevItems => {
            const itemToRemove = prevItems.find(item => item.id === productId);
            if (itemToRemove) {
                if (itemToRemove.count > 1) {
                    // Kurangi jumlah item jika lebih dari satu
                    return prevItems.map(item =>
                        item.id === productId
                            ? { ...item, count: item.count - 1 }
                            : item
                    );
                } else {
                    // Hapus item jika jumlahnya satu
                    return prevItems.filter(item => item.id !== productId);
                }
            }
            return prevItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <h1>Toko Sperpart motor Online 24jam Non Stop</h1>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <Checkout cartItems={cartItems} clearCart={clearCart} />
        </div>
    );
};

export default App; 