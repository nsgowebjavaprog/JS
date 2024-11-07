// const numbers = [1, 2, 3, 4, 5];

// function square(element) {
//     return Math.pow(element, 2);
// }
// const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers);


const data = ["2024-10-1", "2025-20-2", "2026-30-3"];
const res_data = data.map(fun);

console.log(res_data);

function fun(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}}`;
}
// [ '10/1/2024}', '20/2/2025}', '30/3/2026}' ]