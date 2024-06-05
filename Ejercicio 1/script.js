let resultado = 0



function calcular() {
    peso = document.getElementById('pesoUsuario').value
    altura = document.getElementById('alturaUsuario').value

    resultado = peso / (altura * altura)
    if(resultado >= 18.5 && resultado <= 24.9){
        document.getElementById('resultadoUsuario').innerHTML = "Su peso es normal"
        imagen = document.getElementById("imagen-respecto-peso").innerHTML =`
        <imagen-respecto-peso> <img src="sources/pesoNormal"> </imagen-respecto-peso>
        `

    } else if(resultado >= 25 && resultado <= 29.9){
        document.getElementById('resultadoUsuario').innerHTML = "Usted tiene sobrepeso"
        imagen = document.getElementById("imagen-respecto-peso").innerHTML =`
        <imagen-respecto-peso> <img src="sources/sobrePeso"> </imagen-respecto-peso>
        `
        
    } else if(resultado >= 30 && resultado <= 34.9){
        document.getElementById('resultadoUsuario').innerHTML = "Usted tiene obesidad de tipo I"
        imagen = document.getElementById("imagen-respecto-peso").innerHTML =`
        <imagen-respecto-peso> <img src="sources/obesidadI"> </imagen-respecto-peso>
        `
        
    } else if(resultado >= 35 && resultado <= 39.9){
        document.getElementById('resultadoUsuario').innerHTML = "Usted tiene obesidad de tipo II"
        imagen = document.getElementById("imagen-respecto-peso").innerHTML =`
        <imagen-respecto-peso> <img src="sources/obesidadII"> </imagen-respecto-peso>
        `
        
    } else if(resultado > 40){
        document.getElementById('resultadoUsuario').innerHTML = "Usted tiene obesidad de tipo III"
        let imagen = document.getElementById("imagen-respecto-peso").innerHTML =`
        <imagen-respecto-peso> <img src="sources/obesidadIII"> </imagen-respecto-peso>
        `
        
    }

    resultado = resultado.toFixed(2)
}

function goToEjercicio3(){
    window.location.href = "ejercicio3.html"
}

function goToEjercicio4(){
    window.location.href = "ejercicio4.html"
}




