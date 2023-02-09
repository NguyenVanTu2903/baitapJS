const danhSachDoiBong = [
    {
        id: 1,
        ten: "Brazin",
        huanLuyenVien: "Tite",
        soLanVoDich: 15,
    },
    {
        id: 2,
        ten: "Đức",
        huanLuyenVien: "Hansi Flick",
        soLanVoDich: 10,
    },
    {
        id: 3,
        ten: "Pháp",
        huanLuyenVien: "Deschamps",
        soLanVoDich: 12,
    },
];

const menu = `
1. Nhap du lieu
2. Xuat du lieu
3. Tim thong tin 
4. Xoa thong tin doi bong 
5. Thoat

Nhap lua chon:`;

let enterData = Number(prompt(menu));

while (enterData >= 1 && enterData <= 5) {
    if (enterData === 1) {
        let newName = prompt("Nhap ten: ");
        let newCoach = prompt("Nhap HLV: ");
        let newNumberChampions = Number(prompt("Nhap SLVD: "));
        let newDanhSachDoiBong = {
            id: danhSachDoiBong.length + 1,
            ten: newName,
            huanLuyenVien: newCoach,
            soLanVoDich: newNumberChampions,
        };

        danhSachDoiBong.push(newDanhSachDoiBong);
    } else if (enterData === 2) {
        console.table(danhSachDoiBong);
    } else if (enterData === 3) {
        let enterID = Number(prompt("Nhap id:"));
        let check = true;
        for (let i = 0; i < danhSachDoiBong.length; i++) {
            if (enterID == danhSachDoiBong[i].id) {
                console.log(danhSachDoiBong[i]);
                check = false;
            }
        }
        if (check === true) {
            alert("Khong tim thay");
        }
    } else if (enterData === 4) {
        let enterID = Number(prompt("Nhap id:"));
        if (enterID <= danhSachDoiBong.length) {
            danhSachDoiBong.splice(enterID - 1, 1);
        } else alert("Khong tim thay doi bong nao de xoa");
    } else if (enterData === 5) {
        alert("Goodbye!");
        break;
    }
    enterData = Number(prompt(menu));
}
