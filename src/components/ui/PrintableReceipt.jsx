import React from 'react';
import Swal from 'sweetalert2';

const PrintableReceipt = ({ cartItems, totalItems, total, paymentMethod, onClose }) => {
    const handleOk = () => {
        Swal.fire({
            title: 'Pesan',
            text: "Kadang, kita harus merelakan sesuatu yang kita cintai untuk menemukan kebahagiaan sejati.",
            icon: 'success', // Anda bisa memilih 'info', 'success', 'warning', 'error', atau 'question'
            confirmButtonText: 'OK'
        }).then(() => {
            // Lakukan tindakan tambahan setelah tombol OK ditekan jika diperlukan
            onClose();
        });
    };
  
    return (  
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out opacity-100">
            <div className="relative bg-white text-black p-4 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-500 ease-in-out translate-y-0">
                <button 
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    onClick={onClose}
                >
                    X
                </button>
                {/* Alamat di bagian atas nota dengan teks tengah */}
                <div className="text-sm text-gray-600 mb-4 text-center">
                    <p>Jhon Garage🏍🤙</p>
                    <p>Alamat Toko: Jln. Veteran No.64, KOTA Nganjuk</p>
                    <p>Telepon: (133) 456-867590</p>
                </div>
                <h2 className="text-xl font-bold mb-4 text-center">Nota</h2>
                <p className="mb-4 text-center">Payment: {paymentMethod}</p>
                <ul className="mb-4">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between mb-2">
                            <span>{item.name} (x{item.count})</span>
                            <span>${(item.price * item.count).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t pt-2 flex justify-between">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span>Total Price:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                
                {/* Tombol OK di bagian bawah nota */}
                <div className="flex justify-center mt-6">
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={handleOk}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrintableReceipt;




