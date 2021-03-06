# Pengenalan JavaScript Testing

Setelah kita mempelajari tentang dasar-dasar dalam pemrograman JavaScript, seperti menuliskan perintah dan menerapkan paradigma-paradigma yang populer maka proses selanjutnya adalah publikasi ke pengguna. Namun, sebelum sebuah program dipublikasikan, seharusnya sebuah program harus melalui tahap pengujian terlebih dahulu. Proses pengujian tersebut digunakan untuk melakukan kontrol kualitas dari kode yang kita tulis, memastikan bahwa software yang akan dipublikasikan ke pengguna minim adanya kecacatan atau bugs. Oleh sebab itu, sebagai seorang pemrogram kita harus melakukan testing saat proses pengembangan perangkat lunak.

Sebuah proses pengujian perangkat lunak dapat dilakukan secara:

- Manual<br />
  Proses pengujian secara manual oleh seorang yang ditunjuk sebagai test, atau sebagian pengguna yang memang mendapatkan akses untuk pengujian pre-release. Proses ini biasanya berkaitan dengan usability, accessibility dari sebuah aplikasi.

- Otomatis<br />
  Proses pengujian secara otomatis dilakukan oleh komputer dengan menuliskan script khusus, biasanya dilakukan oleh software engineer langsung ataupun oleh seorang QA Engineer. Proses ini biasanya berkaitan dengan fungsionalitas dari sebuah aplikasi.

Dari proses pengujian di atas, jenis-jenis pengujian dalam pengembangan perangkat lunak secara umum dapat dibagi menjadi 4 jenis pengujian, yaitu:

- Static test<br />
  Memastikan tidak adanya typo (naming convention yang standar) dan memastikan tidak ada error types.

- Unit test<br />
  Dilakukan untuk memastikan bahwa setiap unit kode yang kita tulis sudah bisa bekerja sesuai harapan. Unit sendiri berarti komponen terkecil yang dapat diuji secara terisolasi dalam perangkat lunak yang kita buat, dapat berupa fungsi bahkan kelas jika kita menggunakan paradigma OOP. Proses ini juga dapat diautomasikan.

- Integration test<br />
  Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya. Proses pengujian ini dapat dilakukan secara diautomasikan dengan menuliskan script test.

- End-to-End test<br />
  Proses pengujian sebuah aplikasi untuk menguji flow dari awal hingga akhir, layaknya seorang user saat menggunakan aplikasi. Memastikan bahwasanya aplikasi berfungsi selayaknya. Biasanya proses ini dapat dilakukan secara otomatis maupun manual oleh tester.

Dalam modul ini, kita akan mempelajari bagaimana cara membuat sebuah pengujian secara otomatis. Proses automasi ini digunakan untuk memudahkan proses pengujian yang repetitive terhadap sebuah kasus umum. Sehingga kita tidak perlu lagi melakukan uji secara manual satu persatu pada sebuah fungsi atau perintah.

Ketika kita menulis sebuah kasus pengujian (test case), maka ada beberapa poin yang harus kita definisikan terlebih dahulu:

- Apa yang ingin diuji?<br />
  Misalkan: Melakukan uji pada fungsi menghitung rata-rata nilai siswa, atau dapat juga melakukan pengujian pada proses registrasi akun, dan lain sebagainya.

- Ekspektasi apa yang diharapkan?
  - Untuk kasus menghitung nilai rata-rata:
    - Menghasilkan output perhitungan yang sesuai berdasarkan input yang diberikan.
    - Input harus berupa angka.
  - Untuk kasus proses registrasi akun:
    - Pengguna dapat melakukan registrasi secara normal.
    - Pengguna dengan email sama tidak dapat melakukan registrasi.
    - dan lain sebagainya.

## Rangkuman Materi

Proses pengujian yang dilakukan secara automate memiliki kelebihan dan kekurangan masing-masing. Pembuatan kode pengujian akan menyita lebih banyak waktu saat proses pengembangan (di awal) perangkat lunak, dibandingkan jika kita tidak melakukan pengujian. Namun, proses pengujian yang dilakukan akan memastikan bahwasanya perangkat lunak yang kita bangun minim akan adanya kecacatan ketika perangkat lunak sudah digunakan oleh pengguna.

Kecacatan/bugs yang ditemukan setelah software dikonsumsi oleh pengguna, proses penelusuran kecacatan, sampai dengan perbaikan akan lebih memakan waktu. Selain itu, kita tidak dapat memastikan, bahwasanya perbaikan yang kita lakukan tidak menambah bugs baru ditempat yang lain.

Oleh karena itu, penulisan script kode pengujian sangat membantu, selain memastikan kualitas kode yang dibuat minim adanya kecacatan. Juga berimplikasi pada biaya waktu (time cost) pada pengembangan perangkat lunak.

### Referensi

- [Cheatsheet Jest](https://devhints.io/jest)
