<?php
$height = 5; // Tinggi segitiga
for($i = 1; $i <= $height; $i++) {
    // Cetak spasi
    for($j = $height; $j > $i; $j--) {
        echo "&nbsp";
    }
    // Cetak bintang
    for($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>"; // Pindah ke baris baru
}
?>
