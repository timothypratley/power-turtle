(ns power-turtle.lang.indonesian)

(def fns
  '{clojure-turtle.core
    {forward meneruskan
     back kembali
     left kiri
     right kanan
     color warna
     home rumah
     clean bersih
     penup penanaik
     pendown penake
     start-fill mulai-mengisi
     end-fill akhir-mengisi
     setxy menetapkanxy
     setheading menetapkankepala
     wait tunggu
     draw-turtle-commands menggambar-perintah-penyu}
    power-turtle.power
    {html jaringan
     add-action menambahkan-tindakan
     red merah
     green hijau
     blue biru
     octagon segidelapan
     pattern pola}})

(def forms
  '{cljs.core
    {aget amendapatkan
     and dan
     apply menerapkan
     aset amengatur
     assoc rekan
     assoc-in rekan-di
     def menetapkan
     defn dfungsi
     if jika
     fn fungsi
     repeatedly berkali-kali
     let membiarkan}
    power-turtle.power
    {all semua}})

(def all
  (merge fns forms))