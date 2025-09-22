// Array produk awal
let produkToko = [
    {id:1, nama: "Laptop", harga: 7000000, stok: 5},
    {id:2, nama: "Mouse", harga: 200000, stok: 10},
    {id:3, nama: "Keyboard", harga: 350000, stok: 7},
];

// Fungsi menampilkan semua produk
function tampilkanProduk() {
    let tabel = document.getElementById("tabelProduk");
    tabel.innerHTML = "";

    for (let i = 0; i < produkToko.length; i++) {
        let p = produkToko[i];
        let tr ="<tr>";
        tr += "<td>" + p.id + "</td>";
        tr += "<td>" + p.nama + "</td>";
        tr += "<td>" + p.harga + "</td>";
        tr += "<td>" + p.stok + "</td>";
        tr += "<td><button onclick='hapusProduk("+ p.id +")'>Hapus</button>";
        tr += "</tr>";
        tabel.innerHTML += tr;
    }
}

// Fungsi tambah produk
function tambahProduk() {
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let stok = document.getElementById("stok").value;

    if (nama !== "" && harga !== "" && stok !== "") {
        let idBaru = produkToko.length + 1;
        let produkBaru = {id: idBaru, nama: nama, harga: parseInt(harga), stok: parseInt(stok)};
        produkToko.push(produkBaru);
        tampilkanProduk();

        document.getElementById("nama").value = "";
        document.getElementById("harga").value = "";
        document.getElementById("stok").value = "";
    } else {
        alert("Isi semua data dengan benar!");
    }
}

// Fungsi Hapus Produk
function hapusProduk(id) {
    id = parseInt(id);
    for (let i = 0; i < produkToko.length; i ++) {
        if (produkToko[i].id === id) {
            produkToko.splice(i, 1);
            break;
        }
    }
    tampilkanProduk();
}

tampilkanProduk();