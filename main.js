//LET/VAR variables tambien alamacena informacion numeros enteros Y STRING
//let cantidad = 8;  manera base
//let  permita cambiar el valor
let cantidad = document.getElementById('cantidad');
let boton= document.getElementById('generar');
let contrasena= document.getElementById('contrasena');
let botonlimpiar= document.getElementById('limpiar');

const caracteres= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";



//funciones  agreaga actividaddes/acciones  especificas
function generar (){
     let numerodigitado= parseInt(cantidad.value);
    // console.log(numerodigitado);   // verificando/ validador string  transformado a  int   

    let password='';        

    if(numerodigitado<8){
        alert("Atención Contraseña demasiado debil");
        return;
        
      }
      for(let i=0; i<numerodigitado;i++)  // revisar como funciona i++ vs i+1
        {
           let caracterandom=caracteres[Math.floor (Math.random() * caracteres.length)];    //lenght toda lalongitud de caracteres
             // console.log(caracterandom);

                password+=caracterandom; 
                   //+= uso concatena y asigna valor

                  

        }
              //prueba de que genera password
       // console.log('Password Generada:'+ password);
    
       contrasena.value = password;
       

          

}


function limpiar (){
  
     contrasena.value = "";
     cantidad.value="";


 }











//let texto = 'texto';
//console.log(typeof texto);     











