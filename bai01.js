const students = [
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

const menu = `
1. Xem danh sach
2. Them SV
3. Sua SV
4. Xoa SV

Nhap lua chon:`;

let Enter = Number(prompt(menu));
while (Enter >= 1 && Enter <= 4) {
    if (Enter === 1) {
        console.table(students);
    } else if (Enter === 2) {
        let newStudent = {
            id: students.length + 1,
            name: prompt("Nhap ten SV"),
            address: prompt("Nhap address SV"),
        };
        // if (
        //     newStudents.name === "" ||
        //     newStudents.name.length > 15 ||
        //     newStudents.name === " "
        // ) {
        //     alert("Ban nhap sai ten SV");
        // }
        // if (
        //     newStudents.address === "" ||
        //     newStudents.add.length > 15 ||
        //     newStudents.name === " "
        // ) {
        //     alert("ban nhap sai address SV");
        // }
        students.push(newStudent);
        console.table(students);
    } else if (Enter === 3) {
        let fixID = Number(prompt("Nhap ID cua SV"));
        if (fixID <= 0 || fixID > students.length + 1) {
            alert("Khong tim thay ID cua SV");
        } else {
            for (i = 0; i < students.length; i++) {
                if (i === fixID - 1) {
                    students[i].name = prompt("Sua Ten");
                    students[i].address = prompt("Sua address");
                }
            }
            console.table(students);
        }
    } else if (Enter === 4) {
        let delID = Number(prompt("Nhap ID cua SV"));
        students.splice(delID - 1, 1);
        console.table(students);
    } else {
        alert("Moi ban nhap lai ");
    }
    Enter = Number(prompt(menu));
}
