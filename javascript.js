$("body").append(` 
      
  <section class="form_wrap">

  <section class="cantact_info">
      <section class="info_title">
          <span class="fa fa-user-circle"></span>
          <h2>2021</h2>
          <h2>INFORMACIÓN<br>DE CONTACTO</h2>
      </section>
      <section class="info_items">
          <p><span class="fa fa-envelope"></span> Solicita información</p>
          <p><span class="fa fa-mobile"></span> En brevedad te responderemos</p>
      </section>
  </section>

  <form id="form" class="form_contact">
      <h2>Envia un mensaje</h2>
      <div class="user_info">
          <label for="name">Nombres *</label>
          <input type="text" id="name" required>

          <label for="phone">Telefono / Celular</label>
          <input type="text" id="phone" required>

          <label for="email">Email*</label>
          <input type="email" id="email" required>

          <label for="mensaje">Mensaje *</label>
          <textarea id="mensaje" required></textarea>
        <div class="divSubmit">
        <button id="btnSend" type="submit" class="boton-submit">Enviar Mensaje</button>
        </div>
          
      </div>
  </form>
  <button id="mostrar-resultados" type="click" >Mostrar resultados</button>

</section>

<div id="resultados" class="table-title">
    <div id="titulo-resultados">
        <h3>Información de consulta</h3>
    </div>
    <div id="resultados-body" class="table-fill">
        
        <div id="encabezados" class="encabezado"> 
        <div class="resultados">   
        <div  class="titulos">Nombres</div>
        <div id="resultados-nombre" class="resultados"></div>
        </div>
        <div class="resultados">   
        <div class="titulos">Celular</div>
        <div id="resultados-phone" class="resultados"></div>
        </div>   
        <div class="resultados">
        <div  class="titulos">Email</div>
        <div id="resultados-email" class="resultados"></div>
        </div>
        <div class="resultados">
        <div class="titulos">Mensaje</div>
        <div id="resultados-mensaje" class="resultados"></div>
        </div>
        </div> 
        
        
        
        
    </div> 
      
        
</div>
`)
//aca le decimos al script cual es la ubicacion de los elementos donde vamos a agregar 
const nombreRes = $("#resultados-nombre");
const phoneRes = $("#resultados-phone");
const emailRes = $("#resultados-email");
const mensajeRes = $("#resultados-mensaje");

class Usuario {
    constructor(nombre, phone, email, mensaje) { //aca me estaba faltando poner en los argumentos los datos que estas cargando, habian quedado los viejos que pusiste antes
      this.nombre = nombre;
      this.phone = phone;
      this.email = email;
      this.mensaje = mensaje;
    }
  }
  

  let listaUsuarios = JSON.parse(localStorage.getItem("Sesiones")) || []; //Aca le estas diciendo que si hay un nuevo usuario lo mande a listaUsuarios, y en caso de que aun no haya ningun usuario creado te cree un array vacio, porque si no hay un array vacio previamente creado, al momento que quiera pushear un nuevo usuario te va a dar error 
  

  //Con esta funcion vas a mandar un nuevo usuario a listaUsuarios
  const createSesion = (sesion) => {
    listaUsuarios.push(sesion); //Aca lo manda
    localStorage.setItem("Sesiones", JSON.stringify(listaUsuarios));//Aca lo manda y a la vez tambien al localStorage en formato JSON
  };
  
  //Esta es una funcion generica que te va a retornar la listaUsuarios, puede ser usada o no pero esta bueno tenerla por las dudas que la necesites
  const getSesions = () => {
    return listaUsuarios;
  };

//Primero vas a definir las variables que representan a cada input (aca le avisas al script que tenes input en esas ubicaciones)
let nombre = $("#name")
let phone = $("#phone")
let email = $("#email")
let mensaje = $("#mensaje")

//Aca le estas diciendo al formulario que escuche el evento submit asociado al boton
$('#form').submit((event)=>{
    event.preventDefault();
    //aca le estas diciendo que las variables que creaste anteriormente van a tener un valor "x" 
    nombre = $("#name").val();
    phone = $("#phone").val();
    email = $("#email").val();
    mensaje = $("#mensaje").val();


    const newUsuario = new Usuario (nombre, phone, email, mensaje) //Aca estas creando una NUEVA INSTANCIA del nuevo usuario para posteriormente pushearla al array
createSesion(newUsuario);//Aca enviastes los datos que guardaste en la nueva instancia bajo la variable newusuario al array que ya lo definimos mas arriba como predefinido al localStorage





//   const errores = '';

// Validado Nombre ==============================
//   if( nombre == '' ){
    //       errores += '<p>Escriba un nombre</p>';
    //       nombre.css("border-bottom-color", "#F14B4B")
    //   } else{
        //       nombre.css("border-bottom-color", "#d1d1d1")
        //   }
        
        // Validado Correo ==============================
        //   if( email == '' ){
            //       errores += '<p>Ingrese un correo</p>';
            //       email.css("border-bottom-color", "#F14B4B")
            //   } else{
                //       email.css("border-bottom-color", "#d1d1d1")
                //   }
                
                // Validado Mensaje ==============================
                //   if( mensaje == '' ){
                    //       errores += '<p>Escriba un mensaje</p>';
    //       mensaje.css("border-bottom-color", "#F14B4B")
    //   } else{
        //       mensaje.css("border-bottom-color", "#d1d1d1")
        //   }
        
        
        
        // ENVIANDO MENSAJE ============================
        //   if( errores == '' == false){
            //      const mensajeModal = '<div class="modal_wrap">'+
            //                               '<div class="mensaje_modal">'+
            //                                   '<h3>Errores encontrados</h3>'+
            //                                   errores+
            //                                   '<span id="btnClose">Cerrar</span>'+
            //                               '</div>'+
            //                           '</div>'
            
            //       $('body').append(mensajeModal);
            //   }
            
            // CERRANDO MODAL ==============================
    //   $('#btnClose').click(function(){
        //       $('.modal_wrap').remove();
        //   });
        //EJECUCION DE VENTANA PARA ENVIAR UN CORREO AL PERSONAL//
        //   window.open('mailto:' + email + `'?subject=Consulta'` + $('#name').val() + '&body=' + encodeURIComponent($('#mensaje').val()))
        //   $('#names').val("")
        //   $('#name').val("")
        //   $('#email').val("")
        //   $('#mensaje').val("")
        console.log(nombre)
        console.log(phone)
        console.log(email)
        console.log(mensaje)
    });

    //boton para mostrar resultados
    $('#mostrar-resultados').click(
()=>{
    renderResultados();
}

    )
    
    //Con esta funcion vas a renderizar los resultados a medida que vayas agregandolos SIN RECARGAR LA PAGINA
    const renderResultados = ()=>{
        nombreRes.empty();
        phoneRes.empty();
        emailRes.empty();
        // mensajesRes.empty();
        
        
        //vamos a crear un bucle for para poder recorrer los valores del array alojado en el localStorge
    for(let usuario of listaUsuarios){
        
        nombreRes.append(`<div>${usuario.nombre}</div>`);
        phoneRes.append(`<div>${usuario.phone}</div>`);
        emailRes.append(`<div>${usuario.email}</div>`);
        mensajeRes.append(`<div>${usuario.mensaje}</div>`);
        
        
        console.log(usuario)
    }
}
//esta funcion se pone para que lo carge cuando carga la pagina

console.log(listaUsuarios)
    
    

    
    