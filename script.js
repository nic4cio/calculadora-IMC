let peso, altura, imc, resultado

function calcular(event){
    event.preventDefault();

    peso_get = document.querySelector('#peso').value;
    peso = Number(peso_get)

    altura_get = document.querySelector('#altura').value;
    altura = Number(altura_get)

    imc = peso / Math.pow(altura, 2);

    
        if(imc <= 17){ 
            resultado = document.querySelector('#resultado');
            resultado.innerHTML = `<br/> seu resultado foi: ${imc.toFixed(2)}. cuidado, você está muito abaixo do peso`
        }
        else if (imc > 17 && imc <= 18.49){ 
            resultado = document.querySelector('#resultado');
            resultado.innerHTML = `<br/> seu resultado foi: ${imc.toFixed(2)}. você está muito abaixo do peso`
        }
        else if (imc > 18.5 && imc <= 24.99){ 
            resultado = document.querySelector('#resultado');
            resultado.innerHTML = `<br/> seu resultado foi: ${imc.toFixed(2)}. você está no peso ideal.`;
        }
        else if (imc > 25 && imc <= 29.99){ 
            resultado = document.querySelector('#resultado');
            resultado.innerHTML = `<br/> seu resultado foi: ${imc.toFixed(2)}. você está acima do peso.`;
        }
        else if (imc > 25 && imc <= 29.99){ 
            resultado = document.querySelector('#resultado');
            resultado.innerHTML = `<br/> seu resultado foi: ${imc.toFixed(2)}. você está acima do peso.`;
        }
        else if (imc >= 30){ 
            resultado = document.querySelector('#resultado');
            resultado.innerHTML = `<br/> seu resultado foi: ${imc.toFixed(2)}. cuidado, obesidade.`;
        }

        document.querySelector('#peso').value = '';
        document.querySelector('#altura').value = '';
    }
