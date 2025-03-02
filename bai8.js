let a = Number(prompt("Nhap vao canh a:"));
let b = Number(prompt("Nhap vao canh b:"));
let c = Number(prompt("Nhap vao canh c:"));
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && a === c) {
        alert("Tam giac deu");
    }else if (a === b || a === c || b === c){
        alert("La tam giac can");
    }else if (a * a + b * b== c * c || a * a + c * c == b * b || b * b + c * c==a * a) {
        alert("La tam giac vuong");
    }else  {
        alert("La tam giac thuong");
    }
} else {
    alert("Khong phai tam giac")
}