import React from 'react';

// Komponen Cart menerima dua props: cartItems dan removeFromCart
const Cart = ({ cartItems, removeFromCart }) => {
    
    // Menghitung jumlah setiap item dalam keranjang berdasarkan ID produk
    const itemCounts = cartItems.reduce((counts, item) => {
        // Jika item dengan ID tertentu sudah ada dalam counts, tambahkan jumlahnya (count)
        counts[item.id] = (counts[item.id] || 0) + item.count; 
        return counts;
    }, {});

    // Membuat daftar item unik dengan jumlah (count) yang sesuai
    const uniqueItems = Object.keys(itemCounts).map(id => {
        // Temukan item dalam cartItems yang memiliki ID yang sesuai
        const item = cartItems.find(item => item.id === parseInt(id));
        return {
            // Gabungkan item asli dengan properti count yang diperbarui
            ...item,
            count: itemCounts[id]
        };
    });

    // Render tampilan komponen Cart
    return (
        <div className="bg-green-200 p-4 text-black max-h-56 overflow-y-auto">
            {/* Judul keranjang */}
            <h2 className="text-black">Keranjang🧺</h2>
            <ul>
                {/* Tampilkan setiap item unik dalam keranjang */}
                {uniqueItems.map(item => (
                    <li key={item.id} className="flex justify-between items-center mb-2">
                        {/* Tampilkan nama item, harga, dan jumlah */}
                        <span>{item.name} - ${item.price.toFixed(2)} x {item.count}</span>
                        {/* Tombol untuk mengurangi jumlah item atau menghapusnya dari keranjang */}
                        <button 
                            className="bg-transparent text-green-900 px-2 py-1 rounded hover:bg-gray-200"
                            onClick={() => removeFromCart(item.id)}
                        >
                            -
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
