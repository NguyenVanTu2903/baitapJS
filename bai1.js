//khoi tao mang
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
//Hien thi sinh vien co trong mang studentList ra table
let number = parseInt(prompt("Nhập số"));
switch (number) {
    case 1:
        for (i = 0; i < students.length; i++) {
            document.writeln(`<tr>
				<td>${students[i].id}</td>
				<td>${students[i].name}</td>
				<td>${students[i].address}</td>
			</tr>`);
        }
        break;
    case 2:
        let newStudent = {
            id: students.length + 1,
            name: prompt("Nhap name"),
            address: prompt("Nhap address"),
        };
        students.push(newStudent);
        for (i = 0; i < students.length; i++) {
            document.writeln(`<tr>
				<td>${students[i].id}</td>
				<td>${students[i].name}</td>
				<td>${students[i].address}</td>
			</tr>`);
        }
        break;
    case 3:
        let fixID = parseInt(prompt("Nhap ID"));
        for (i = 0; i < students.length; i++) {
            if (i === fixID - 1) {
                students[i].name = prompt("Nhap name");
                students[i].address = prompt("Nhap address");
            }
        }
        for (i = 0; i < students.length; i++) {
            document.writeln(`<tr>
				<td>${students[i].id}</td>
				<td>${students[i].name}</td>
				<td>${students[i].address}</td>
			</tr>`);
        }
        break;
    case 4:
        let delID = parseInt(prompt("Nhap ID"));
        students.splice(delID - 1, 1);
        for (i = 0; i < students.length; i++) {
            document.writeln(`<tr>
				<td>${students[i].id}</td>
				<td>${students[i].name}</td>
				<td>${students[i].address}</td>
			</tr>`);
        }
    default:
        break;
}
