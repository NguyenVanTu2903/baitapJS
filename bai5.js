const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7,
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    },
];

const menu = `
1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
3. Lọc ra các sinh viên xếp loại giỏi và in ra
4. Tìm 1 sinh viên xếp loại giỏi
5. Cộng cho mỗi sinh viên 1 điểm toán
6. Thêm thuộc tính tổng điểm 3 môn
7. Tính tổng điểm của các sinh viên
8. Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần

Nhap lua chon: `;

let enter = Number(prompt(menu));

while (enter >= 1 && enter <= 9) {
    switch (enter) {
        case 1:
            alert(`${isTrue()}`);
            break;
        case 2:
            alert(`Co ${checkGoodStudents()} sinh vien gioi`);
            break;
        case 3:
            console.table(filterGoodStudent());
            break;
        case 4:
            console.table(findFirstGoodStudent());
            break;
        case 5:
            console.table(addMathPoints());
            break;
        case 6:
            console.table(addPropertiesSum());
            break;
        case 7:
            alert(`Tong diem cua cac sinh vien la: ${sumPoints()}`);
            break;
        case 8:
            console.table(averagePoints());
            break;
        case 9:
            console.table(sortSumPoint());
            break;

        default:
            break;
    }
    enter = Number(prompt(menu));
}

function isTrue() {
    for (let i = 0; i < students.length; i++) {
        if ((students[i].toan + students[i].ly + students[i].hoa) / 3 < 5) {
            return false;
        }
    }
    return true;
}

function checkGoodStudents() {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (
            students[i].toan >= 8 &&
            students[i].ly >= 8 &&
            students[i].hoa >= 8
        ) {
            count += 1;
        }
    }
    return count;
}

function filterGoodStudent() {
    let listGoodStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (
            students[i].toan >= 8 &&
            students[i].ly >= 8 &&
            students[i].hoa >= 8
        ) {
            listGoodStudents.push(students[i]);
        }
    }
    return listGoodStudents;
}

function findFirstGoodStudent() {
    for (let i = 0; i < students.length; i++) {
        if (
            students[i].toan >= 8 &&
            students[i].ly >= 8 &&
            students[i].hoa >= 8
        )
            return students[i];
    }
    return alert("Khong tim thay sinh vien gioi");
}

function addMathPoints() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].toan < 10) {
            students[i].toan += 1;
        }
    }
    return students;
}

function addPropertiesSum() {
    for (let i = 0; i < students.length; i++) {
        students[i].sumPoints =
            students[i].toan + students[i].ly + students[i].hoa;
    }
    return students;
}

function sumPoints() {
    let sumPoints = 0;
    for (let i = 0; i < students.length; i++) {
        sumPoints =
            sumPoints + (students[i].toan + students[i].ly + students[i].hoa);
    }
    return sumPoints;
}

function averagePoints() {
    for (let i = 0; i < students.length; i++) {
        students[i].averagePoints = Number(
            ((students[i].toan + students[i].ly + students[i].hoa) / 3).toFixed(
                2
            )
        );
    }
    return students;
}

function sortSumPoint() {
    for (let i = 0; i < students.length; i++) {
        students[i].sumPoints =
            students[i].toan + students[i].ly + students[i].hoa;
    }

    for (let i = 0; i < students.length; i++) {
        for (let j = i + 1; j < students.length; j++) {
            if (students[i].sumPoints > students[j].sumPoints) {
                let temp = students[i];
                students[i] = students[j];
                students[j] = temp;
            }
        }
    }
    return students;
}
