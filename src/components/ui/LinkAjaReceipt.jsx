import React from 'react';

const LinkAjaReceipt = ({ transactionType, transactionId, amount, adminFee, totalAmount, referenceNumber, onClose }) => {
    const currentDate = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar', hour12: false });

    return (
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8 animate-slide-in">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <button onClick={onClose} className="text-lg text-gray-700">&larr;</button>
                <h2 className="text-xl font-semibold text-gray-800">Detail Transaksi</h2>
                <div />
            </div>

            {/* Transaction Details */}
            <div className="mb-4">
                <p className="font-semibold text-lg text-gray-800">{transactionType}</p>
                <p className="text-gray-600">{transactionId}</p>
                <p className="text-green-500 font-semibold mt-2">Sukses</p>
            </div>

            {/* Transaction Information */}
            <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-gray-800">Detail Transaksi</h3>
                <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tipe Transaksi</span>
                        <span className="font-semibold text-gray-800">{transactionType}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Nominal</span>
                        <span className="font-semibold text-gray-800">Rp {amount.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Biaya Admin</span>
                        <span className="font-semibold text-gray-800">Rp {adminFee.toLocaleString('id-ID')}</span>
                    </div>
                </div>
            </div>

            {/* Total Amount */}
            <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-gray-800">Rp {totalAmount.toLocaleString('id-ID')}</span>
                </div>
            </div>

            {/* Reference and Date */}
            <div className="text-center text-gray-600 text-sm mt-4">
                <p>{currentDate} WITA</p>
                <p>Nomor Referensi: <span className="font-semibold">{referenceNumber}</span></p>
            </div>

            {/* Barcode */}
            <div className="flex justify-center mt-4">
                <img src="/path/to/barcode-image.png" alt="Barcode" className="h-16" />
            </div>
        </div>
        
    );
    
};

export default LinkAjaReceipt;
