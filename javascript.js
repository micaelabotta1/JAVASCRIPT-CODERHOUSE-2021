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

  <form action="" class="form_contact">
      <h2>Envia un mensaje</h2>
      <div class="user_info">
          <label for="names">Nombres *</label>
          <input type="text" id="names">

          <label for="phone">Telefono / Celular</label>
          <input type="text" id="phone">

          <label for="email">Email*</label>
          <input type="text" id="email">

          <label for="mensaje">Mensaje *</label>
          <textarea id="mensaje"></textarea>

          <input type="button" value="Enviar Mensaje" id="btnSend">
      </div>
  </form>

</section>

<div class="table-title">
      <h3>Información de consulta</h3>
    </div>
    <table class="table-fill">
      <thead>
        <tr>
    <th class="text-left">Nombres</th>
    <th class="text-left">Celular</th>
    <th class="text-left">Email</th>
    <th class="text-left">Mensaje</th>
        </tr>
      </thead>
      <tbody class="table-hover">                     
      </tr>

`)


/*declaracion de variable --email*/
var email= 'micaelabotta1@gmail.com';
$(document).ready(function(){

  $('#btnSend').click(function(){

      var errores = '';

      // Validado Nombre ==============================
      if( $('#names').val() == '' ){
          errores += '<p>Escriba un nombre</p>';
          $('#names').css("border-bottom-color", "#F14B4B")
      } else{
          $('#names').css("border-bottom-color", "#d1d1d1")
      }

      // Validado Correo ==============================
      if( $('#email').val() == '' ){
          errores += '<p>Ingrese un correo</p>';
          $('#email').css("border-bottom-color", "#F14B4B")
      } else{
          $('#email').css("border-bottom-color", "#d1d1d1")
      }

      // Validado Mensaje ==============================
      if( $('#mensaje').val() == '' ){
          errores += '<p>Escriba un mensaje</p>';
          $('#mensaje').css("border-bottom-color", "#F14B4B")
      } else{
          $('#mensaje').css("border-bottom-color", "#d1d1d1")
      }

    

      // ENVIANDO MENSAJE ============================
      if( errores == '' == false){
          var mensajeModal = '<div class="modal_wrap">'+
                                  '<div class="mensaje_modal">'+
                                      '<h3>Errores encontrados</h3>'+
                                      errores+
                                      '<span id="btnClose">Cerrar</span>'+
                                  '</div>'+
                              '</div>'

          $('body').append(mensajeModal);
      }

      // CERRANDO MODAL ==============================
      $('#btnClose').click(function(){
          $('.modal_wrap').remove();
      });
     //EJECUCION DE VENTANA PARA ENVIAR UN CORREO AL PERSONAL//
      window.open('mailto:' + email + `'?subject=Consulta'` + $('#name').val() + '&body=' + encodeURIComponent($('#mensaje').val()))
      $('#names').val("")
      $('#name').val("")
      $('#email').val("")
      $('#mensaje').val("")
  });

});

