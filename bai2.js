const menu = `
1. Nhap du lieu
2. Xuat du lieu
3. Dich tu
4. Thoat

Moi lua chon:`;

const listWord = [];

let Enter = Number(prompt(menu));
while (Enter >= 1 && Enter <= 4) {
    if (Enter === 1) {
        // if (listWord.length === 0) {
        // while (Enter === 1) {
        let enWord = prompt("Nhap EnWord: ");
        let viWord = prompt("Nhap ViWord: ");
        let addWord = {
            enWord: enWord,
            viWord: viWord,
        };
        listWord.push(addWord);
        // Enter = Number(prompt(menu));
        // }
        // }
    } else if (Enter === 2) {
        console.table(listWord);
        // Enter = Number(prompt(menu));
    } else if (Enter === 3) {
        let enterAnyEn = prompt("Nhap AnyEnWord: ");
        let check = true;
        for (let i = 0; i < listWord.length; i++) {
            if (enterAnyEn == listWord[i].enWord) {
                console.table(listWord[i].viWord);
                check = false;
            }
        }
        if (check == true) {
            alert("Khong tim thay word");
        }
        // Enter = Number(prompt(menu));
    } else if (Enter === 4) {
        alert("Cam on da su dung tu dien");
        break;
    } // else {
    //     alert("Moi ban chon lai");
    // }
    Enter = Number(prompt(menu));
}
