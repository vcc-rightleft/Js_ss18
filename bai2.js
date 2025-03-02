let diemtoan = Number(prompt("nhap diem toan"));
let diemvan = Number(prompt("nhap diem van"));
let diemanh = Number(prompt("nhap diem anh"));
let trungbinh = (diemtoan + diemvan + diemanh) / 3;
if (trungbinh >= 8) {
    alert("Hoc luc gioi");
}
else if (trungbinh >= 6.4) {
    alert("Hoc luc kha");
}
else if (trungbinh >= 5) {
    alert("Hoc luc trung binh");
}