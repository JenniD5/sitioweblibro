

const nombre3=document.getElementById("name3");
const cambio=document.getElementById("caja");


const libroURL='https://localhost:5001/sagas/libros';


let getSimpsonData3= async ()=>{
    const response=await fetch (libroURL);
    const libros=await response.json();
    console.log(libros);
    const{titulo}=libros;
    nombre3.innerText=titulo;    
};

getSimpsonData3();






