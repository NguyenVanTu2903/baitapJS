const danhSachQuanBai = [
    {
        id: 1,
        name: "Ba bích", // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1, // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: "Năm rô",
        exp: 5,
        point: 3,
    },
    {
        id: 3,
        name: "Bốn cơ",
        exp: 4,
        point: 4,
    },
];

const menu = `
1. Nhập 1 quân bài
2. Nhập mảng các quân bài
3. Sắp xếp tăng dần
4. Sắp xếp giảm dần
5. Xuất dữ liệu
6. Thoát

Nhap lua chon: `;

let enter = Number(prompt(menu));

while (enter >= 1 && enter <= 6) {
    if (enter === 1) {
        let newName = prompt("Nhap ten quan bai: ");
        while (newName === "" || newName === " ") {
            alert("Ban nhap sai, Moi nhap lai ten quan bai");
            newName = prompt("Nhap ten quan bai: ");
        }
        let newExp = Number(prompt("Nhap he so quan bai: "));
        while (newExp < 1 || newExp > 13) {
            alert("Ban nhap sai, Moi nhap lai he so quan bai");
            newExp = Number(prompt("Nhap he so quan bai: "));
        }
        let newPoint = Number(prompt("Nhap diem quan bai: "));
        while (newPoint < 1 || newPoint > 4) {
            alert("Ban nhap sai, Moi nhap lai diem quan bai");
            newPoint = Number(prompt("Nhap diem quan bai: "));
        }
        let newDanhSachQuanBai = {
            id: danhSachQuanBai.length + 1,
            name: newName,
            exp: newExp,
            point: newPoint,
        };
        danhSachQuanBai.push(newDanhSachQuanBai);
    } else if (enter === 2) {
        let arrQuanBai = [];
        let lengthDanhSachQuanBai = danhSachQuanBai.length;
        while (confirm("Ban co muon nhap quan bai")) {
            let newName = prompt("Nhap ten quan bai: ");
            while (newName === "" || newName === " ") {
                alert("Ban nhap sai, Moi nhap lai ten quan bai");
                newName = prompt("Nhap ten quan bai: ");
            }
            let newExp = Number(prompt("Nhap he so quan bai: "));
            while (newExp < 1 || newExp > 13) {
                alert("Ban nhap sai, Moi nhap lai he so quan bai");
                newExp = Number(prompt("Nhap he so quan bai: "));
            }
            let newPoint = Number(prompt("Nhap diem quan bai: "));
            while (newPoint < 1 || newPoint > 4) {
                alert("Ban nhap sai, Moi nhap lai diem quan bai");
                newPoint = Number(prompt("Nhap diem quan bai: "));
            }
            let newDanhSachQuanBai = {
                id: lengthDanhSachQuanBai + 1,
                name: newName,
                exp: newExp,
                point: newPoint,
            };
            arrQuanBai.push(newDanhSachQuanBai);
            lengthDanhSachQuanBai += 1;
        }
        danhSachQuanBai.push(...arrQuanBai);
    } else if (enter === 3) {
        console.table(sortAscending());
    } else if (enter === 4) {
        console.table(sortDescending());
    } else if (enter === 5) {
        console.table(danhSachQuanBai);
    } else if (enter === 6) {
        alert("Goodbye!");
        break;
    } else {
    }
    enter = Number(prompt(menu));
}

function sortAscending() {
    for (let i = 0; i < danhSachQuanBai.length; i++) {
        for (let j = i + 1; j < danhSachQuanBai.length; j++) {
            if (danhSachQuanBai[i].exp > danhSachQuanBai[j].exp) {
                let temp = danhSachQuanBai[i];
                danhSachQuanBai[i] = danhSachQuanBai[j];
                danhSachQuanBai[j] = temp;
            }
        }
    }
    return danhSachQuanBai;
}

function sortDescending() {
    for (let i = 0; i < danhSachQuanBai.length; i++) {
        for (let j = i + 1; j < danhSachQuanBai.length; j++) {
            if (danhSachQuanBai[i].exp < danhSachQuanBai[j].exp) {
                let temp = danhSachQuanBai[i];
                danhSachQuanBai[i] = danhSachQuanBai[j];
                danhSachQuanBai[j] = temp;
            }
        }
    }
    return danhSachQuanBai;
}
