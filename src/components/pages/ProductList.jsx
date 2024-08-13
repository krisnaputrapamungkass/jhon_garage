import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ProductList = ({ addToCart }) => {
    const [searchQuery, setSearchQuery] = useState(''); // State untuk menyimpan query pencarian
    const [selectedBrand, setSelectedBrand] = useState(''); // State untuk menyimpan kategori yang dipilih
    const [showMenu, setShowMenu] = useState(false); // State untuk menampilkan menu

    // Daftar produk
    const products = [
        // Daftar produk seperti sebelumnya
            { id: 1, name: 'Yamaha Vixion Piston Kit', price: 45.99, count: 1, brand: 'Yamaha' },
            { id: 2, name: 'Honda Beat Camshaft', price: 39.99, count: 1, brand: 'Honda' },
            { id: 3, name: 'Suzuki Satria Crankshaft', price: 89.99, count: 1, brand: 'Suzuki' },
            { id: 4, name: 'Yamaha NMAX Cylinder Head', price: 149.99, count: 1, brand: 'Yamaha' },
            { id: 5, name: 'Honda CBR Timing Chain', price: 29.99, count: 1, brand: 'Honda' },
            { id: 6, name: 'Kawasaki Ninja Valve Kit', price: 69.99, count: 1, brand: 'Kawasaki' },
            { id: 7, name: 'Suzuki GSX Clutch Plate Set', price: 54.99, count: 1, brand: 'Suzuki' },
            { id: 8, name: 'Yamaha Aerox Oil Pump', price: 34.99, count: 1, brand: 'Yamaha' },
            { id: 9, name: 'Honda Supra X Engine Gasket Set', price: 24.99, count: 1, brand: 'Honda' },
            { id: 10, name: 'Yamaha Mio Fuel Injector', price: 59.99, count: 1, brand: 'Yamaha' },
            { id: 11, name: 'Kawasaki Z250 Air Filter', price: 22.99, count: 1, brand: 'Kawasaki' },
            { id: 12, name: 'Honda CB150R Brake Pads', price: 19.99, count: 1, brand: 'Honda' },
            { id: 13, name: 'Suzuki Inazuma Spark Plug', price: 14.99, count: 1, brand: 'Suzuki' },
            { id: 14, name: 'Yamaha MT-15 Front Disc Brake', price: 109.99, count: 1, brand: 'Yamaha' },
            { id: 15, name: 'Honda CRF250L Chain Sprocket', price: 89.99, count: 1, brand: 'Honda' },
            { id: 16, name: 'Kawasaki KX250 Radiator', price: 139.99, count: 1, brand: 'Kawasaki' },
            { id: 17, name: 'Suzuki V-Strom Windshield', price: 99.99, count: 1, brand: 'Suzuki' },
            { id: 18, name: 'Yamaha FZ16 Brake Disc', price: 74.99, count: 1, brand: 'Yamaha' },
            { id: 19, name: 'Honda X-ADV Clutch Kit', price: 129.99, count: 1, brand: 'Honda' },
            { id: 20, name: 'Kawasaki Versys Exhaust Pipe', price: 199.99, count: 1, brand: 'Kawasaki' },
            { id: 21, name: 'Suzuki Burgman Oil Filter', price: 11.99, count: 1, brand: 'Suzuki' },
            { id: 22, name: 'Yamaha TMAX Battery', price: 59.99, count: 1, brand: 'Yamaha' },
            { id: 23, name: 'Honda CBR600RR Shock Absorber', price: 149.99, count: 1, brand: 'Honda' },
            { id: 24, name: 'Kawasaki Ninja 400 Brake Lever', price: 24.99, count: 1, brand: 'Kawasaki' },
            { id: 25, name: 'Suzuki Hayabusa Fairing Kit', price: 299.99, count: 1, brand: 'Suzuki' },
            { id: 26, name: 'Yamaha R1 Camshaft', price: 129.99, count: 1, brand: 'Yamaha' },
            { id: 27, name: 'Honda Gold Wing Windshield', price: 199.99, count: 1, brand: 'Honda' },
            { id: 28, name: 'Kawasaki ZX-10R Rear Sets', price: 179.99, count: 1, brand: 'Kawasaki' },
            { id: 29, name: 'Suzuki GSXR1000 Brake Master Cylinder', price: 159.99, count: 1, brand: 'Suzuki' },
            { id: 30, name: 'Yamaha WR250F Front Fork', price: 249.99, count: 1, brand: 'Yamaha' },
            { id: 31, name: 'Honda CRF450R Cylinder Kit', price: 189.99, count: 1, brand: 'Honda' },
            { id: 32, name: 'Kawasaki KLX300 Handlebars', price: 64.99, count: 1, brand: 'Kawasaki' },
            { id: 33, name: 'Suzuki SV650 Chain', price: 44.99, count: 1, brand: 'Suzuki' },
            { id: 34, name: 'Yamaha XSR900 Exhaust System', price: 349.99, count: 1, brand: 'Yamaha' },
            { id: 35, name: 'Honda Rebel 500 Foot Pegs', price: 39.99, count: 1, brand: 'Honda' },
            { id: 36, name: 'Kawasaki ZX-6R Radiator Cap', price: 17.99, count: 1, brand: 'Kawasaki' },
            { id: 37, name: 'Suzuki GSX-S1000 Rear Shock', price: 229.99, count: 1, brand: 'Suzuki' },
            { id: 38, name: 'Yamaha MT-09 Tail Light', price: 79.99, count: 1, brand: 'Yamaha' },
            { id: 39, name: 'Honda CBR1000RR Brake Lines', price: 89.99, count: 1, brand: 'Honda' },
            { id: 40, name: 'Kawasaki Z900 Clutch Lever', price: 24.99, count: 1, brand: 'Kawasaki' },
            { id: 41, name: 'Suzuki GSX-R150 Fuel Pump', price: 64.99, count: 1, brand: 'Suzuki' },
            { id: 42, name: 'Yamaha MT-07 Chain Tensioner', price: 49.99, count: 1, brand: 'Yamaha' },
            { id: 43, name: 'Honda CRF300L Front Fender', price: 54.99, count: 1, brand: 'Honda' },
            { id: 44, name: 'Kawasaki Versys 650 Seat Cover', price: 79.99, count: 1, brand: 'Kawasaki' },
            { id: 45, name: 'Suzuki GSX-R750 Throttle Cable', price: 29.99, count: 1, brand: 'Suzuki' },
            { id: 46, name: 'Yamaha R6 Clutch Cable', price: 34.99, count: 1, brand: 'Yamaha' },
            { id: 47, name: 'Honda CBR300R Mirror Set', price: 49.99, count: 1, brand: 'Honda' },
            { id: 48, name: 'Kawasaki Ninja ZX-6R Gas Tank', price: 299.99, count: 1, brand: 'Kawasaki' },
            { id: 49, name: 'Suzuki Hayabusa Footpegs', price: 59.99, count: 1, brand: 'Suzuki' },
            { id: 50, name: 'Yamaha YZF-R3 Brake Pads', price: 34.99, count: 1, brand: 'Yamaha' },
            { id: 51, name: 'Honda Grom Fuel Tank', price: 139.99, count: 1, brand: 'Honda' },
            { id: 52, name: 'Kawasaki KLR650 Exhaust Muffler', price: 229.99, count: 1, brand: 'Kawasaki' },
            { id: 53, name: 'Suzuki V-Strom 1000 Windscreen', price: 119.99, count: 1, brand: 'Suzuki' },
            { id: 54, name: 'Yamaha FJR1300 Alternator', price: 149.99, count: 1, brand: 'Yamaha' },
            { id: 55, name: 'Honda CB500X Handguards', price: 59.99, count: 1, brand: 'Honda' },
            { id: 56, name: 'Kawasaki ZX-14R Front Wheel', price: 299.99, count: 1, brand: 'Kawasaki' },
            { id: 57, name: 'Suzuki GSX-R1000 Clutch Basket', price: 189.99, count: 1, brand: 'Suzuki' },
            { id: 58, name: 'Yamaha YZF-R1 Front Brake Rotor', price: 129.99, count: 1, brand: 'Yamaha' },
            { id: 59, name: 'Honda CBR1100XX Radiator Hose', price: 44.99, count: 1, brand: 'Honda' },
            { id: 60, name: 'Kawasaki ZX-9R Battery Charger', price: 34.99, count: 1, brand: 'Kawasaki' },
            { id: 61, name: 'Suzuki SV1000 Gas Cap', price: 24.99, count: 1, brand: 'Suzuki' },
            { id: 62, name: 'Yamaha YZF-R125 LED Lights', price: 79.99, count: 1, brand: 'Yamaha' },
            { id: 63, name: 'Honda CRF250 Front Brake Caliper', price: 109.99, count: 1, brand: 'Honda' },
            { id: 64, name: 'Kawasaki Z1000 Rear Fender', price: 64.99, count: 1, brand: 'Kawasaki' },
            { id: 65, name: 'Suzuki DRZ400S Speedometer', price: 89.99, count: 1, brand: 'Suzuki' },
            { id: 66, name: 'Yamaha MT-10 Rear Brake Pads', price: 54.99, count: 1, brand: 'Yamaha' },
            { id: 67, name: 'Honda CRF150R Clutch Plate', price: 39.99, count: 1, brand: 'Honda' },
            { id: 68, name: 'Kawasaki ZXR750 Front Fork Seal', price: 24.99, count: 1, brand: 'Kawasaki' },
            { id: 69, name: 'Suzuki GSX-R600 Chain Guard', price: 29.99, count: 1, brand: 'Suzuki' },
            { id: 70, name: 'Yamaha FZ8 Radiator Grill', price: 39.99, count: 1, brand: 'Yamaha' },
            { id: 71, name: 'Honda CBR650F Engine Mounts', price: 129.99, count: 1, brand: 'Honda' },
            { id: 72, name: 'Kawasaki KX450F Clutch Basket', price: 149.99, count: 1, brand: 'Kawasaki' },
            { id: 73, name: 'Suzuki GSX-R1100 Seat Pad', price: 59.99, count: 1, brand: 'Suzuki' },
            { id: 74, name: 'Yamaha XJ6 Tank Pad', price: 19.99, count: 1, brand: 'Yamaha' },
            { id: 75, name: 'Honda CBR500R Chain Sprocket', price: 44.99, count: 1, brand: 'Honda' },
            { id: 76, name: 'Kawasaki ZX-10R Clutch Plate', price: 54.99, count: 1, brand: 'Kawasaki' },
            { id: 77, name: 'Suzuki GSR750 Brake Rotor', price: 99.99, count: 1, brand: 'Suzuki' },
            { id: 78, name: 'Yamaha MT-03 Front Brake Lines', price: 59.99, count: 1, brand: 'Yamaha' },
            { id: 79, name: 'Honda CRF450X Radiator Shrouds', price: 69.99, count: 1, brand: 'Honda' },
            { id: 80, name: 'Kawasaki ZX-14R Fuel Filter', price: 39.99, count: 1, brand: 'Kawasaki' },
            { id: 81, name: 'Suzuki GSX-S750 Rear Disc', price: 89.99, count: 1, brand: 'Suzuki' },
            { id: 82, name: 'Yamaha FZ25 Chain', price: 34.99, count: 1, brand: 'Yamaha' },
            { id: 83, name: 'Honda CB1000R LED Turn Signals', price: 49.99, count: 1, brand: 'Honda' },
            { id: 84, name: 'Kawasaki Ninja ZX-6R Swingarm', price: 199.99, count: 1, brand: 'Kawasaki' },
            { id: 85, name: 'Suzuki GSX-R125 Clutch Cover', price: 54.99, count: 1, brand: 'Suzuki' },
            { id: 86, name: 'Yamaha YZF-R6 Gear Lever', price: 29.99, count: 1, brand: 'Yamaha' },
            { id: 87, name: 'Honda CRF1100L Rear Brake Caliper', price: 129.99, count: 1, brand: 'Honda' },
            { id: 88, name: 'Kawasaki ZX-9R Footrests', price: 59.99, count: 1, brand: 'Kawasaki' },
            { id: 89, name: 'Suzuki Hayabusa Oil Cooler', price: 159.99, count: 1, brand: 'Suzuki' },
            { id: 90, name: 'Yamaha XSR700 Side Stand', price: 39.99, count: 1, brand: 'Yamaha' },
            { id: 91, name: 'Honda CRF150L Fork Guards', price: 24.99, count: 1, brand: 'Honda' },
            { id: 92, name: 'Kawasaki ZX-6R Rear Shock Absorber', price: 149.99, count: 1, brand: 'Kawasaki' },
            { id: 93, name: 'Suzuki GSX-R250 Front Caliper', price: 74.99, count: 1, brand: 'Suzuki' },
            { id: 94, name: 'Yamaha YZF-R15 Tail Light', price: 69.99, count: 1, brand: 'Yamaha' },
            { id: 95, name: 'Honda CB650R Handlebar', price: 84.99, count: 1, brand: 'Honda' },
            { id: 96, name: 'Kawasaki Ninja ZX-10R Radiator Hose', price: 49.99, count: 1, brand: 'Kawasaki' },
            { id: 97, name: 'Suzuki Bandit 1200 Battery', price: 74.99, count: 1, brand: 'Suzuki' },
            { id: 98, name: 'Yamaha MT-03 Front Disc Brake', price: 99.99, count: 1, brand: 'Yamaha' },
            { id: 99, name: 'Honda CB300F Seat Cushion', price: 39.99, count: 1, brand: 'Honda' },
            { id: 100, name: 'Kawasaki KLR650 Kickstand', price: 29.99, count: 1, brand: 'Kawasaki' },                // Spare parts tambahan untuk motor
                { id: 101, name: 'Yamaha Ninja RR New Piston Kit', price: 139.99, count: 1, brand: 'Yamaha' },
                { id: 102, name: 'Yamaha Ninja RR New Cylinder Head', price: 159.99, count: 1, brand: 'Yamaha' },
                { id: 103, name: 'Yamaha Ninja RR New Camshaft', price: 119.99, count: 1, brand: 'Yamaha' },
                { id: 104, name: 'Yamaha Ninja RR New Crankshaft', price: 199.99, count: 1, brand: 'Yamaha' },
                { id: 105, name: 'Yamaha Ninja RR New Fuel Injector', price: 89.99, count: 1, brand: 'Yamaha' },
                { id: 106, name: 'Yamaha Ninja RR New Oil Pump', price: 79.99, count: 1, brand: 'Yamaha' },
                { id: 107, name: 'Yamaha Ninja RR New Valve Kit', price: 99.99, count: 1, brand: 'Yamaha' },
                { id: 108, name: 'Yamaha Ninja RR New Timing Chain', price: 49.99, count: 1, brand: 'Yamaha' },
                { id: 109, name: 'Yamaha Ninja RR New Radiator', price: 159.99, count: 1, brand: 'Yamaha' },
                { id: 110, name: 'Yamaha Ninja RR New Brake Pads', price: 39.99, count: 1, brand: 'Yamaha' },
            
                { id: 111, name: 'Yamaha Ninja SS Piston Kit', price: 149.99, count: 1, brand: 'Yamaha' },
                { id: 112, name: 'Yamaha Ninja SS Cylinder Head', price: 169.99, count: 1, brand: 'Yamaha' },
                { id: 113, name: 'Yamaha Ninja SS Camshaft', price: 129.99, count: 1, brand: 'Yamaha' },
                { id: 114, name: 'Yamaha Ninja SS Crankshaft', price: 209.99, count: 1, brand: 'Yamaha' },
                { id: 115, name: 'Yamaha Ninja SS Fuel Injector', price: 99.99, count: 1, brand: 'Yamaha' },
                { id: 116, name: 'Yamaha Ninja SS Oil Pump', price: 89.99, count: 1, brand: 'Yamaha' },
                { id: 117, name: 'Yamaha Ninja SS Valve Kit', price: 109.99, count: 1, brand: 'Yamaha' },
                { id: 118, name: 'Yamaha Ninja SS Timing Chain', price: 54.99, count: 1, brand: 'Yamaha' },
                { id: 119, name: 'Yamaha Ninja SS Radiator', price: 169.99, count: 1, brand: 'Yamaha' },
                { id: 120, name: 'Yamaha Ninja SS Brake Pads', price: 44.99, count: 1, brand: 'Yamaha' },
            
                { id: 121, name: 'Yamaha SS Superkips Piston Kit', price: 139.99, count: 1, brand: 'Yamaha' },
                { id: 122, name: 'Yamaha SS Superkips Cylinder Head', price: 159.99, count: 1, brand: 'Yamaha' },
                { id: 123, name: 'Yamaha SS Superkips Camshaft', price: 119.99, count: 1, brand: 'Yamaha' },
                { id: 124, name: 'Yamaha SS Superkips Crankshaft', price: 199.99, count: 1, brand: 'Yamaha' },
                { id: 125, name: 'Yamaha SS Superkips Fuel Injector', price: 89.99, count: 1, brand: 'Yamaha' },
                { id: 126, name: 'Yamaha SS Superkips Oil Pump', price: 79.99, count: 1, brand: 'Yamaha' },
                { id: 127, name: 'Yamaha SS Superkips Valve Kit', price: 99.99, count: 1, brand: 'Yamaha' },
                { id: 128, name: 'Yamaha SS Superkips Timing Chain', price: 49.99, count: 1, brand: 'Yamaha' },
                { id: 129, name: 'Yamaha SS Superkips Radiator', price: 159.99, count: 1, brand: 'Yamaha' },
                { id: 130, name: 'Yamaha SS Superkips Brake Pads', price: 39.99, count: 1, brand: 'Yamaha' },
            
                { id: 131, name: 'Yamaha Fiz R Piston Kit', price: 129.99, count: 1, brand: 'Yamaha' },
                { id: 132, name: 'Yamaha Fiz R Cylinder Head', price: 149.99, count: 1, brand: 'Yamaha' },
                { id: 133, name: 'Yamaha Fiz R Camshaft', price: 109.99, count: 1, brand: 'Yamaha' },
                { id: 134, name: 'Yamaha Fiz R Crankshaft', price: 189.99, count: 1, brand: 'Yamaha' },
                { id: 135, name: 'Yamaha Fiz R Fuel Injector', price: 84.99, count: 1, brand: 'Yamaha' },
                { id: 136, name: 'Yamaha Fiz R Oil Pump', price: 74.99, count: 1, brand: 'Yamaha' },
                { id: 137, name: 'Yamaha Fiz R Valve Kit', price: 94.99, count: 1, brand: 'Yamaha' },
                { id: 138, name: 'Yamaha Fiz R Timing Chain', price: 44.99, count: 1, brand: 'Yamaha' },
                { id: 139, name: 'Yamaha Fiz R Radiator', price: 149.99, count: 1, brand: 'Yamaha' },
                { id: 140, name: 'Yamaha Fiz R Brake Pads', price: 34.99, count: 1, brand: 'Yamaha' },

                { id: 141, name: 'Yamaha R1 Camshaft', price: 129.99, count: 1, brand: 'Yamaha' },

                //oli two stroke//
                { id: 142, name: 'Oli 2-Tak Motul 800', brand: 'Motul', price: 85.00 },
    { id: 143, name: 'Oli 2-Tak Castrol Power1', brand: 'Castrol', price: 70.00 },
    { id: 144, name: 'Oli 2-Tak Yamalube 2T', brand: 'Yamaha', price: 75.00 },
    { id: 145, name: 'Oli 2-Tak Shell Advance', brand: 'Shell', price: 80.00 },
    { id: 146, name: 'Oli 2-Tak Repsol Moto', brand: 'Repsol', price: 65.00 },
    { id: 147, name: 'Oli 2-Tak Honda HP', brand: 'Honda', price: 60.00 },
    { id: 148, name: 'Oli 2-Tak Kawasaki K-Tech', brand: 'Kawasaki', price: 90.00 },
    { id: 149, name: 'Oli 2-Tak Bel-Ray Si-7', brand: 'Bel-Ray', price: 95.00 },
    { id: 150, name: 'Oli 2-Tak Mobil 1 2T', brand: 'Mobil 1', price: 100.00 },
    { id: 151, name: 'Oli 2-Tak Liqui Moly', brand: 'Liqui Moly', price: 85.00 },
    { id: 152, name: 'Oli 2-Tak Total 2T', brand: 'Total', price: 75.00 },
    { id: 153, name: 'Oli 2-Tak Motorex Cross Power', brand: 'Motorex', price: 80.00 },
    { id: 154, name: 'Oli 2-Tak Valvoline 2T', brand: 'Valvoline', price: 70.00 },
    { id: 155, name: 'Oli 2-Tak Pennzoil 2T', brand: 'Pennzoil', price: 65.00 },
    { id: 156, name: 'Oli 2-Tak MotoGP Pro', brand: 'MotoGP', price: 90.00 },
    { id: 157, name: 'Oli 2-Tak Eneos', brand: 'Eneos', price: 85.00 },
    { id: 158, name: 'Oli 2-Tak Silkolene', brand: 'Silkolene', price: 95.00 },
    { id: 159, name: 'Oli 2-Tak Amsoil Interceptor', brand: 'Amsoil', price: 100.00 },
    { id: 160, name: 'Oli 2-Tak Motul 510', brand: 'Motul', price: 90.00 },
    { id: 161, name: 'Oli 2-Tak Castrol Power1 Racing', brand: 'Castrol', price: 85.00 },
    { id: 162, name: 'Oli 2-Tak Motul 710', brand: 'Motul', price: 80.00 },
    { id: 163, name: 'Oli 2-Tak Repsol Racing', brand: 'Repsol', price: 75.00 },
    { id: 164, name: 'Oli 2-Tak Shell Super', brand: 'Shell', price: 70.00 },
    { id: 165, name: 'Oli 2-Tak Fuchs Silkolene', brand: 'Fuchs', price: 85.00 },
    { id: 166, name: 'Oli 2-Tak Motul 5100', brand: 'Motul', price: 90.00 },
    { id: 167, name: 'Oli 2-Tak Castrol TTS', brand: 'Castrol', price: 80.00 },
    { id: 168, name: 'Oli 2-Tak Yamalube 2T Semi-Synthetic', brand: 'Yamaha', price: 75.00 },
    { id: 169, name: 'Oli 2-Tak Valvoline Racing 2T', brand: 'Valvoline', price: 85.00 },
    { id: 170, name: 'Oli 2-Tak Motorex 2T', brand: 'Motorex', price: 80.00 },
    { id: 171, name: 'Oli 2-Tak Liqui Moly Racing', brand: 'Liqui Moly', price: 75.00 },

    //oli fourStroke

    { id: 201, name: 'Oli 4-Tak Motul 300V', brand: 'Motul', price: 150.00 },
    { id: 202, name: 'Oli 4-Tak Castrol GTX', brand: 'Castrol', price: 120.00 },
    { id: 203, name: 'Oli 4-Tak Yamalube 4T', brand: 'Yamaha', price: 130.00 },
    { id: 204, name: 'Oli 4-Tak Shell Helix', brand: 'Shell', price: 110.00 },
    { id: 205, name: 'Oli 4-Tak Repsol Elite', brand: 'Repsol', price: 140.00 },
    { id: 206, name: 'Oli 4-Tak Honda GN4', brand: 'Honda', price: 100.00 },
    { id: 207, name: 'Oli 4-Tak Kawasaki K-Tech 4T', brand: 'Kawasaki', price: 115.00 },
    { id: 208, name: 'Oli 4-Tak Bel-Ray Thumper', brand: 'Bel-Ray', price: 125.00 },
    { id: 209, name: 'Oli 4-Tak Mobil 1 Racing', brand: 'Mobil 1', price: 140.00 },
    { id: 210, name: 'Oli 4-Tak Liqui Moly Race Tech', brand: 'Liqui Moly', price: 135.00 },
    { id: 211, name: 'Oli 4-Tak Total Quartz', brand: 'Total', price: 120.00 },
    { id: 212, name: 'Oli 4-Tak Motorex 4T', brand: 'Motorex', price: 125.00 },
    { id: 213, name: 'Oli 4-Tak Valvoline SynPower', brand: 'Valvoline', price: 130.00 },
    { id: 214, name: 'Oli 4-Tak Pennzoil Platinum', brand: 'Pennzoil', price: 115.00 },
    { id: 215, name: 'Oli 4-Tak MotoGP Super', brand: 'MotoGP', price: 140.00 },
    { id: 216, name: 'Oli 4-Tak Eneos Sustina', brand: 'Eneos', price: 135.00 },
    { id: 217, name: 'Oli 4-Tak Silkolene Pro', brand: 'Silkolene', price: 145.00 },
    { id: 218, name: 'Oli 4-Tak Amsoil Dominator', brand: 'Amsoil', price: 150.00 },
    { id: 219, name: 'Oli 4-Tak Motul 5100', brand: 'Motul', price: 130.00 },
    { id: 220, name: 'Oli 4-Tak Castrol Edge', brand: 'Castrol', price: 140.00 },
    ];

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Fungsi untuk menangani perubahan kategori dropdown
    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
    };

    // Menyaring produk berdasarkan query pencarian dan kategori yang dipilih
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedBrand === '' || product.brand === selectedBrand)
    );

    // Menampilkan hanya beberapa produk secara default (misalnya 10 produk pertama)
    const displayedProducts = searchQuery || selectedBrand ? filteredProducts : products.slice(0, 10);

    // Fungsi untuk menampilkan/menyembunyikan menu
    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    return (
        <div className="bg-green-200 p-4 text-black relative">
            {/* Tombol titik tiga dan menu dropdown */}
            <div className="absolute top-2 right-2">
                <button
                    className="bg-transparent text-green-900 p-2 rounded hover:bg-gray-200"
                    onClick={toggleMenu}
                >
                    <FaEllipsisV />
                </button>
                {showMenu && (
                    <div className="absolute top-full right-0 mt-2 bg-white text-green-900 rounded shadow-lg w-48">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Akun</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Daftar</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Log-in</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
                            {/* Tambahkan opsi lain di sini */}
                        </ul>
                    </div>
                )}
            </div>

            <div className="mb-4 flex flex-col gap-4">
                {/* Menambahkan margin-top untuk menurunkan kolom pencarian */}
                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 rounded bg-white text-green-900 w-full mt-8" // Margin top untuk menurunkan kolom pencarian
                />
                <select
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    className="p-1.5 rounded bg-white text-green-900 w-32"
                >
                    <option value="">Semua Merek</option>
                    <option value="Yamaha">Yamaha</option>
                    <option value="Honda">Honda</option>
                    <option value="Kawasaki">Kawasaki</option>
                    <option value="Suzuki">Suzuki</option>
                </select>
            </div>

            <ul>
                {displayedProducts.map(product => (
                    <li key={product.id} className="flex justify-between items-center mb-2">
                        <span>{product.name} - ${product.price.toFixed(2)}</span>
                        <button
                            className="bg-transparent text-green-900 px-2 py-1 rounded hover:bg-gray-200"
                            onClick={() => addToCart(product)}
                        >
                            +
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
