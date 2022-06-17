const dayName = new Date().getDay();
const monthName = new Date().getMonth();
const yearName = new Date().getFullYear();
const dayN = new Date().getDate();
const days = [
    "Domingo" , "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"
];


const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Sept", "Octubre", "Noviembre","Diciembre" 
];


export {
    dayName,
    monthName,
    yearName,
    dayN,
    days,
    months
}