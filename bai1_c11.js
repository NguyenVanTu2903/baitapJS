var students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue",
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam",
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang",
    },
    {
        id: 4,
        name: "Hung",
        address: "hue",
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri",
    },
    {
        id: 6,
        name: "Anh",
        address: "hue",
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang",
    },
];

// const menu = `
// 1. Nhap diem cho sinh vien
// 2. Hien thị danh sach sinh vien

// Nhap lua chon: `;

// let enter = Number(prompt(menu));

// while (enter >= 1 && enter <= 2) {
//     if (enter === 1) {
//         nhapDiemSV();
//     } else if (enter === 2) {
//         hienThiDanhSachSV();
//     }
//     enter = Number(prompt(menu));
// }

// function nhapDiemSV() {
//     students.forEach(function (obj) {
//         obj.diemToan = Number(
//             prompt("Nhap diem toan cua SV " + obj.name + " :")
//         );
//         obj.diemLy = Number(prompt("Nhap diem ly cua SV " + obj.name + " :"));
//         obj.diemHoa = Number(prompt("Nhap diem hoa cua SV " + obj.name + " :"));
//     });
// }

// function hienThiDanhSachSV() {
//     console.log("=== DANH SACH SINH VIEN ===");
//     students.forEach(function (obj) {
//         console.log("id: " + obj.id);
//         console.log("name: " + obj.name);
//         console.log("address: " + obj.address);
//         console.log("toan: " + obj.diemToan);
//         console.log("ly: " + obj.diemLy);
//         console.log("hoa: " + obj.diemHoa);
//         if (obj.id < students.length) {
//             console.log("===========");
//         }
//     });
// }

students.forEach(function (obj) {
    obj.toan = randomNumberInRange();
    obj.ly = randomNumberInRange();
    obj.hoa = randomNumberInRange();
});

hienThiDanhSachSV();

function randomNumberInRange(a = 0, b = 10) {
    if (a >= b) return -1;
    const random = Math.random() * (b - a);
    return Math.round(random) + a;
}

// function hienThiDanhSachSV() {
//     console.log("=== DANH SACH SINH VIEN ===");
//     students.forEach(function (obj) {
//         console.log("id: " + obj.id);
//         console.log("name: " + obj.name);
//         console.log("address: " + obj.address);
//         console.log("toan: " + obj.toan);
//         console.log("ly: " + obj.ly);
//         console.log("hoa: " + obj.hoa);
//         if (obj.id < students.length) {
//             console.log("===========");
//         }
//     });
// }

function hienThiDanhSachSV() {
    console.log("=== DANH SACH SINH VIEN ===");
    students.forEach(function (obj) {
        for (let prop in obj) {
            console.log(prop + ": " + obj[prop]);
        }
        if (obj.id < students.length) {
            console.log("===========");
        }
    });
}
