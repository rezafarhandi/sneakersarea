function tambahKeKeranjang(namaProduk, hargaProduk, gambarProduk) {
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    
    // Periksa apakah produk sudah ada di keranjang
    let produkIndex = keranjang.findIndex(item => item.nama === namaProduk);
    
    if (produkIndex !== -1) {
        // Jika produk sudah ada, tambahkan jumlahnya
        keranjang[produkIndex].jumlah += 1;
        keranjang[produkIndex].subtotal = keranjang[produkIndex].jumlah * keranjang[produkIndex].harga;
    } else {
        // Jika produk belum ada, tambahkan ke keranjang
        keranjang.push({ 
            nama: namaProduk,
            harga: parseFloat(hargaProduk), // Pastikan harga dalam format angka
            gambar: gambarProduk,
            jumlah: 1, // Default jumlah 1
            subtotal: parseFloat(hargaProduk) // Subtotal = harga x jumlah
        });
    }
    
    // Simpan kembali ke localStorage
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
    
    alert('Produk berhasil ditambahkan ke keranjang!');
    
    // Redirect ke halaman keranjang
    window.location.href = "keranjang.html";
}
