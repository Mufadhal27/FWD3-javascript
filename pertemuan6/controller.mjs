import users from "./data.mjs";

const index = () => {
  console.log("--- Data Users ---");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan!`);
};

const destroy = (indexData) => {
  if (indexData >= 0 && indexData < users.length) {
    const deleted = users.splice(indexData, 1);
    console.log(`Data ${deleted[0].nama} berhasil dihapus!`);
  } else {
    console.log("Data tidak ditemukan!");
  }
};

export { index, store, destroy };
