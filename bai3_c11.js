const students = [
    {
        id: 1,
        name: "Nguyen Van Teo",
        classId: 1,
    },
    {
        id: 2,
        name: "Nguyen Van Ti",
        classId: 2,
    },
    {
        id: 3,
        name: "Tran Van Tun",
        classId: 3,
    },
    {
        id: 4,
        name: "Nguyen Thi Heo",
        classId: 1,
    },
    {
        id: 5,
        name: "Le Thi Be",
        classId: 1,
    },
];

const classList = [
    {
        id: 1,
        name: "CNTT",
    },
    {
        id: 2,
        name: "DTVT",
    },
    {
        id: 3,
        name: "THXD",
    },
    {
        id: 4,
        name: "XDDD",
    },
];

const arr = students.map((students) => {
    const obj = {};

    if (students.classId === 1) {
        obj.id = students.id;
        obj.studentName = students.name;
    }

    return obj;
});

let arr1 = [];
arr.forEach(function (obj, index) {
    if (Object.keys(obj).length !== 0) {
        obj.className = "CNTT";
        arr1.push(obj);
    }
});

console.table(arr1);
