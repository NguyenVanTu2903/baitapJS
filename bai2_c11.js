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
        ly: 5,
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
1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? 
2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? 
3. Lọc ra các sinh viên xếp loại giỏi và in ra
4. Tìm 1 sinh viên xếp loại giỏi
5. Cộng cho mỗi sinh viên 1 điểm toán
6. Thêm thuộc tính tổng điểm 3 môn
7. Tính tổng điểm của các sinh viên
8. Tính điểm trung bình của các sinh viên 
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
10. Thoát

Nhap lua chon: `;

let enter = Number(prompt(menu));

while (enter >= 1 && enter <= 10) {
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
        case 10:
            alert("Goodbye!");
            break;

        default:
            break;
    }
    enter = Number(prompt(menu));
}

function isTrue() {
    let check = true;
    students.forEach(function (obj) {
        if (obj.toan < 5 || obj.ly < 5 || obj.hoa < 5) check = false;
    });
    if (check == true) {
        return true;
    } else {
        return false;
    }
}

// function isTrue() {
//     students.every(function (obj) {
//         return obj.toan >= 5 && obj.ly >= 5 && obj.hoa >= 5;
//     });
// }

function checkGoodStudents() {
    let count = 0;
    students.forEach(function (obj) {
        if (obj.toan >= 8 && obj.ly >= 8 && obj.hoa >= 8) {
            count += 1;
        }
    });
    return count;
}

function filterGoodStudent() {
    let listGoodStudents = students.filter(function (obj) {
        return obj.toan >= 8 && obj.ly >= 8 && obj.hoa >= 8;
    });
    return listGoodStudents;
}

function findFirstGoodStudent() {
    let firstGoodStudent = students.find(function (obj) {
        return obj.toan >= 8 && obj.ly >= 8 && obj.hoa >= 8;
    });
    return typeof firstGoodStudent !== undefined
        ? firstGoodStudent
        : alert("Khong tim thay sinh vien gioi");
}

function addMathPoints() {
    students.forEach(function (obj) {
        if (obj.toan < 10) {
            obj.toan += 1;
        }
    });
    return students;
}

function addPropertiesSum() {
    students.forEach(function (obj) {
        obj.sumPoints = obj.toan + obj.ly + obj.hoa;
    });
    return students;
}

function sumPoints() {
    let sumPoints = students.reduce(function (accumulator, currentValue) {
        return (accumulator +=
            currentValue.toan + currentValue.ly + currentValue.hoa);
    }, 0);
    return sumPoints;
}

function averagePoints() {
    students.forEach(function (obj) {
        obj.averagePoints = Number(
            ((obj.toan + obj.ly + obj.hoa) / 3).toFixed(2)
        );
    });
    return students;
}

function sortSumPoint() {
    students.sort((a, b) => a.sumPoints - b.sumPoints);
    return students;
}
