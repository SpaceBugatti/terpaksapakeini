# Penjelasan Kode `test.js`

File ini memiliki satu fungsi utama yaitu `calculateCartTotal` yang bertujuan untuk menghitung total akhir dari sebuah keranjang belanja, termasuk diskon dan ongkos kirim.

### Penjelasan Fungsi `calculateCartTotal` (Baris 1-23)

**Baris 1:**
```javascript
function calculateCartTotal (items, discountCode = null) {
```
Mendefinisikan sebuah fungsi bernama `calculateCartTotal` yang menerima dua parameter:
*   `items`: Diharapkan berupa array yang berisi daftar barang di keranjang.
*   `discountCode`: Kode diskon yang akan digunakan. Nilai default-nya adalah `null`, yang berarti parameter ini tidak wajib diisi.

---

**Baris 3-6:**
```javascript
    // 1. Hitung subtotal
    let subtotal = 0
    for (let item of items) {
        subtotal += item.price * item.quantity
    }
```
*   **Baris 3:** Membuat variabel `subtotal` dengan nilai awal `0`.
*   **Baris 4:** Memulai perulangan (loop) untuk setiap `item` di dalam array `items`.
*   **Baris 5:** Mengalikan harga (`item.price`) dengan jumlah (`item.quantity`), lalu menambahkannya ke `subtotal`.

---

**Baris 9-15:**
```javascript
    // 2. Apply discount kalau ada
    let discount = 0
    const discountCodes = {
        SAVE10: 0.1, //10% OFF
        SAVE20: 0.2, //20% OFF
    }
    if (discountCode && discountCodes[discountCode]) {
        discount = subtotal * discountCodes[discountCode]
    }
```
*   **Baris 9:** Membuat variabel `discount` dengan nilai awal `0`.
*   **Baris 10-13:** Membuat objek `discountCodes` yang berisi daftar kode diskon dan nilainya.
*   **Baris 14:** Mengecek apakah `discountCode` valid dan ada di dalam `discountCodes`.
*   **Baris 15:** Jika valid, hitung jumlah diskon dengan mengalikan `subtotal` dengan nilai diskon.

---

**Baris 19:**
```javascript
    // 3. Hitung ongkir (gratis kalau > 100k)
    const shipping = subtotal < 100000 ? 15000 : 0
```
*   Menghitung ongkos kirim (`shipping`). Jika `subtotal` kurang dari 100,000, `shipping` adalah 15,000. Jika tidak, `shipping` adalah 0 (gratis).

---

**Baris 22:**
```javascript
    // 4. Tottal
    return subtotal - discount + shipping
}
```
*   Mengembalikan nilai akhir, yaitu `subtotal` dikurangi `discount` lalu ditambah `shipping`.

### Penjelasan Bagian Test (Baris 25-30)

```javascript
//Test
const cart = [
    {name: 'Laptop', price: 5000000, quantity: 1},
    {nam: 'Mouse', price: 150000, quantity: 2},
]
console.log(calculateCartTotal(cart, 'SAVE10')) //4770000
```
*   **Baris 26-29:** Membuat data `cart` contoh untuk pengujian.
*   **Baris 30:** Memanggil fungsi `calculateCartTotal` dengan data `cart` dan kode diskon `'SAVE10'`, lalu mencetak hasilnya ke konsol.
