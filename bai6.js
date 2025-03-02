let namnhuan = Number(prompt("Moi nhap vao nam:"));
if ((namnhuan % 400 === 0) || (namnhuan % 4 === 0 && namnhuan % 100 !== 0)){
    alert("La nam nhuan");
} else {
    alert("Khong phai nam nhuan");
}