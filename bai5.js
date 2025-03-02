let time = Number(prompt("Nhap vao nam kinh nghiem:"));
if (time < 1) {
    alert("nhan vien moi vao nghe");
} else if (time <= 3) {
    alert("nhan vien co kinh nghiem");
} else if (time <= 6) {
    alert("Chuyen vien");
} else if (time > 6) {
    alert("quan li");
}

