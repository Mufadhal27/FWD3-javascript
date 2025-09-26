import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // Tambah minimal 2 data
  store({ nama: "Annie", umur: 30, alamat: "Jl. Kopi", email: "annie@gmail.com" });
  store({ nama: "Marie", umur: 31, alamat: "Jl. Teh", email: "marie@gmail.com" });

  // Tampilkan semua data
  index();

  // Hapus data ke-2 (index 1)
  destroy(1);

  // Tampilkan ulang setelah dihapus
  index();
};

main();
