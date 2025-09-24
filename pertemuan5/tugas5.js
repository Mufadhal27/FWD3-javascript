// data produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000},
    { id: 2, nama: "Smartphone", harga: 5000000},
    { id: 3, nama: "Tablet", harga: 2000000},
    { id: 4, nama: "Monitor", harga: 3000000},
    { id: 5, nama: "Keyboard", harga: 500000},
];

// event handler
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (...id) => hapusProduk(...id),
    tampilkan: () => tampilkanProduk()
}

// menambahkan produk dengan spread operator
function tambahProduk(id, nama, harga) {
    let produkBaru = {id, nama, harga};
    produkList = [...produkList, produkBaru];
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// mengahapus produk dengan rest parameter
function hapusProduk(...id) {
    produkList = produkList.filter(p => !id.includes(p.id));
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);
}

// menampilkan produk dengan destructruring
function tampilkanProduk() {
    console.log("------------ Daftar Produk ------------");
    produkList.forEach(({id, nama, harga}) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
    console.log("---------------------------------------\n");
}


tampilkanProduk();
tambahProduk(6, "Mouse", 300000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
