let $btnGato=document.querySelector('#btnGato');

$btnGato.addEventListener('click',()=>{
    
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(respuesta => respuesta.json()).then(data =>{
        console.log(data);

        
        data.forEach(element => {
            console.log(element);
				let carta = document.createElement("div");
				let imagenGatito = document.createElement("img");
				let texto = document.createElement("p");
				texto.classList.add("card-text");
				texto.textContent = element.title;
				imagenGatito.src = element.url;
				carta.className = "card";
				carta.style = "width:180px";
				carta.appendChild(imagenGatito);
				document.body.appendChild(carta);
				document.body.appendChild(texto);
                document.body.appendChild(  )

        });
       
    })

});