// ให้เขียน Function ชื่อว่า add โดยที่รับตัวแปรมา 1 ตัวเป็นตัวเลข (เป็นจำนวนเต็มบวกที่มีค่ามากกว่า 0) 
// และให้ผลลัพธ์ออกมาเป็นผลบวกตั้งแต่เลข 1 ถึงตัวเลขนั้น เช่น Input = 3 จะได้ Output = 6 เพราะว่า 1 + 2 + 3 = 6
function add(n) {
    let result = 0;
    for (let i = 1; i <= n; ++i) {
        result += i;
    }
    return result
}
console.log(add(3));