class Kendaraan {
    constructor(merk, platNomor) {
        this.merk =merk;
        this.platNomor = platNomor;
    }
    infoKendaraan() {
        return `${this.merk} - ${this.platNomor}`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, platNomor, jumlahKursi) {
        super(merk, platNomor);
        this.jumlahKursi = jumlahKursi;
    }
    
    infoKendaraan() {
        return `Mobil: ${this.merk}, Plat: ${this.platNomor}, Jumlah Kursi: ${this.jumlahKursi}`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, platNomor, tipe) {
        super(merk, platNomor);
        this.tipe = tipe;
    }

    infoKendaraan() {
        return `Motor: ${this.merk}, Plat:${this.platNomor}, Tipe:${this.tipe}`;
    }
}

class Bus extends Kendaraan {
    constructor(merk, platNomor, kapasitas) {
        super(merk, platNomor);
        this.kapasitas = kapasitas;
    }

    infoKendaraan() {
        return `Bus: ${this.merk}, Plat: ${this.platNomor}, Kapasitas: ${this.kapasitas}`;
    }
}

// class pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    infoPelanggan() {
        return `Nama Pelanggan: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, Kendaraan Disewa: ${this.kendaraanDisewa ? this.kendaraanDisewa.infoKendaraan() : "Belum menyewa"}`;
    }
}


// class sistem transportasi
class SistemTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan, kendaraan) {
        pelanggan.sewaKendaraan(kendaraan);
        this.pelangganList.push(pelanggan);
    }

    tampilkanDaftarPelanggan() {
        this.pelangganList.forEach((p, index) => {
            console.log(`${index + 1}. ${p.infoPelanggan()}`);
        })
    }
}

// kendaraan
let mobil1 = new Mobil("Toyota", "B 1234 CD", 5);
let motor1 = new Motor("Yamaha", "B 5678 EF", "Sport");
let bus1 = new Bus("Mercedes", "B 9101 GH", 40);

// pelanggan
let pelanggan1 = new Pelanggan("Xinsoo", "083132194138");
let pelanggan2 = new Pelanggan("Fadhal", "083821334234");
let pelanggan3 = new Pelanggan("Nayla", "083832314910");

// sistem transportasi
let sistem = new SistemTransportasi();

// tambah transaksi
sistem.tambahPelanggan(pelanggan1, motor1);
sistem.tambahPelanggan(pelanggan2, bus1);
sistem.tambahPelanggan(pelanggan3, mobil1);

// tampilkan daftar pelanggan
sistem.tampilkanDaftarPelanggan();