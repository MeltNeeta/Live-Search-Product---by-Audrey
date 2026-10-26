$(document).ready(function(){
    // keyup= sensor di kontak input
    $("#searchBox").keyup(function(){
        // 1. Ambil data yang diketik, ubah jadi kecil-kecil
        var keyword = $(this).val().toLowerCase();
        var jumlahTampil = 0

        // 2. Cek setiap item produk
        $(".product-item").each(function(){
            var namaProduk = $(this).data("nama").toLowerCase();

            if (namaProduk.includes(keyword)){
                $(this).show(); // tampilkan jika cocok
                jumlahTampil++;
            } else {
                $(this).hide(); // sembunyikan jikatidak 
            }
        });

        // jika tidak ada satupun produk yang kamu cari
        if(jumlahTampil === 0){
            $("#pesanKosong").show();
        } else {
            $("#pesanKosong").hide();
        }
    });
});