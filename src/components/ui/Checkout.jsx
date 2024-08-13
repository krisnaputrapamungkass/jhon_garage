import React, { useState } from 'react';
import PrintableReceipt from './PrintableReceipt';
import Swal from 'sweetalert2';

// Komponen Checkout bertanggung jawab untuk mengelola proses checkout dan menampilkan struk
const Checkout = ({ cartItems, clearCart }) => {
    // State untuk menyimpan metode pembayaran yang dipilih pengguna
    const [paymentMethod, setPaymentMethod] = useState(''); 

    // State untuk mengatur visibilitas struk setelah checkout dilakukan
    const [isReceiptVisible, setIsReceiptVisible] = useState(false); 

    // Menghitung total harga semua item dalam keranjang
    const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

    // Menghitung total jumlah barang dalam keranjang
    const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0);

    // Menghitung diskon berdasarkan total harga
    const calculateDiscount = (total) => {
        if (total >= 500 && total < 900) {
            return total * 0.06; // Diskon 6%
        } else if (total >= 900) {
            return total * 0.12; // Diskon 12%
        }
        return 0; // Tidak ada diskon jika total di bawah 500
    };

    // Hitung diskon dan total setelah diskon
    const discount = calculateDiscount(total);
    const totalAfterDiscount = total - discount;

    // Fungsi untuk menangani proses checkout
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            // Jika tidak ada barang dalam keranjang, tampilkan pesan peringatan
            Swal.fire({
                title: 'Perhatian',
                text: 'Tidak ada barang yang kamu Checkout, Silahkan pilih dulu🙏',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        if (!paymentMethod) {
            // Jika metode pembayaran belum dipilih, tampilkan pesan peringatan
            Swal.fire({
                title: 'Perhatian',
                text: 'Silakan pilih metode pembayaran.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        // Tampilkan struk setelah pengguna memilih metode pembayaran
        setIsReceiptVisible(true);
    };

    // Fungsi untuk menutup struk dan mengosongkan keranjang
    const handleCloseReceipt = () => {
        setIsReceiptVisible(false);
        clearCart(); // Mengosongkan keranjang setelah struk ditutup
    };

    // Render tampilan komponen Checkout
    return (
        <div className="bg-green-200 p-4 text-black relative">
            <div className="mb-4">
                {/* Menampilkan daftar item dalam keranjang */}
                <h3 className="mb-2">Note</h3>
                <ul className="mb-4">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between mb-2">
                            <span>{item.name} (x{item.count})</span>
                            <span>${(item.price * item.count).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                {/* Menampilkan total jumlah item dan harga */}
                <div className="border-t pt-2 flex justify-between">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span>Total Price:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                {/* Menampilkan diskon jika ada */}
                {discount > 0 && (
                    <div className="flex justify-between mt-2">
                        <span>Discount:</span>
                        <span>-${discount.toFixed(2)}</span>
                    </div>
                )}
                <div className="flex justify-between mt-2">
                    <span>Total After Discount:</span>
                    <span>${totalAfterDiscount.toFixed(2)}</span>
                </div>
            </div>
            <div className="mb-4">
                {/* Dropdown untuk memilih metode pembayaran */}
                <p className="mb-2">Select Payment:</p>
                <select 
                    className="bg-white text-green-900 px-2 py-1 rounded"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="">--Select--</option>
                    <option value="paypal">PayPal</option>
                    <option value="Shopeepay">Shopeepay</option>
                    <option value="Bank BCA">Bank BCA</option>
                    <option value="Bank BRI">Bank BRI</option>
                    <option value="Link-Aja">Link Aja</option>
                </select>
            </div>
            <div className="flex justify-end">
                {/* Tombol untuk memulai proses checkout */}
                <button 
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-transform duration-500"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>

            {/* Menampilkan struk jika isReceiptVisible bernilai true */}
            {isReceiptVisible && (
                <PrintableReceipt
                    cartItems={cartItems}
                    totalItems={totalItems}
                    total={totalAfterDiscount}
                    paymentMethod={paymentMethod}
                    onClose={handleCloseReceipt}
                />
            )}
        </div>
    );
};

export default Checkout; 