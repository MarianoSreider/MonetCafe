// jquery  para que aparezca seccion quiensoy al hacer scroll

$(function(){

	$(document).on("scroll", function(){
		let desplazamientoActual = $(document).scrollTop();
		let quienSoy = $("#quienSoy");
      let frase = $("#frase");
		
		// console.log("Estoy en " , desplazamientoActual); 
		if(desplazamientoActual > 400 && quienSoy.css("display") == "none"){
			quienSoy.fadeIn(2000);         
		}

      else if (desplazamientoActual > 1450 && frase.css("display") == "none"){
			frase.fadeIn(500);         
		}

		
	});
});


// escalando logo
$(function(){

	$(document).on("scroll", function(){
		let desplazamientoActual = $(document).scrollTop();      
		
		// console.log("Estoy en " , desplazamientoActual); 		

      if (desplazamientoActual < 200 ){
        
         $(".logoFontA").css({  "transform": "scale(1.60)" });
			      
		}

      else if(desplazamientoActual > 200 ){
        
         $(".logoFontA").css({  "transform": "scale(1)", "transition": "all 0.8s ease-in-out" });
			      
		}
		
	});
});
        


function init()
{
   listarCategorias();
}


function listarCategorias(){

   const nodoCategorias = document.getElementById("categorias")
   
   let contenido=document.createElement ("section");
   contenido.classList.add("displayImg")
      
   for(categoria of categorias)
   {
      
      contenido.innerHTML+=`
      <div onclick="enlaceHtml(${categoria.id})" class="categoriasContent" >
         <img class="imgCategoria" src="images/${categoria.slug}.png" alt="${categoria.nombre}">
         <buttom class="enlaceCategoria">${categoria.nombre}</buttom>
      </div>
      `;
   }
   nodoCategorias.appendChild(contenido);

}

// lo envio al sessionstorage por que voy a ir a otra pagina, asi guardo datos
function enlaceHtml(idCategoria) {   
   sessionStorage.setItem("CATEGORIA", JSON.stringify(idCategoria));
   
   window.location = "https://marianosreider.github.io/MonetCafe/productos.html";
   
}




