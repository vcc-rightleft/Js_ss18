let hour = Number(prompt("Nhap vao gio:"));
let minute = Number(prompt("Nhap vao phut:"));
let second = Number(prompt("Nhap vao giay:"));
if (hour <= 12 && hour < 24) {
    alert(hour + ":" + minute + ":" + second + " AM");
} else if (hour > 12 && hour < 24) {
    alert(hour - 12 + ":" + minute + ":" + second + " PM");
} else {
    alert("Gio khong hop le");
}