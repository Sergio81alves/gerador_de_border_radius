
function ver(){
  //selecionando os elementos
  var num1 = document.getElementById('superior_esquerdo').value 

  var num2 = document.getElementById('superior_direito').value

  var num3 = document.getElementById('inferior_esquerdo').value
  
  var num4 =  document.getElementById('inferior_direito').value
  //convertando

    let super_esquerdo = document.querySelector('.caixa').style.borderTopLeftRadius = num1
   

    let super_direito = document.querySelector('.caixa').style.borderTopRightRadius = num2

    let inferior_esquerdo = document.querySelector('.caixa').style.borderBottomLeftRadius = num3

    let inferior_direito = document.querySelector('.caixa').style.borderBottomRightRadius = num4

    if(num1 != '' || num2 != '' || num3 != '' || num4 != ''){
      document.querySelector('.copiando').style.display="inline"
    }
    
 
}
//colocando cor nas bordas
document.getElementById('superior_esquerdo').style.border ='2px outset aqua'

document.getElementById('superior_direito').style.border ='2px outset blueviolet'

document.getElementById('inferior_esquerdo').style.border ='2px outset darkgoldenrod'

document.getElementById('inferior_direito').style.border ='2px outset lime'

//copiar para a area de transferencia
function copiando() {
 
  let num1 = document.getElementById('superior_esquerdo').value 
  let num2 = document.getElementById('superior_direito').value
  let num3 = document.getElementById('inferior_esquerdo').value
  let num4 =  document.getElementById('inferior_direito').value
 
  var copyText = document.getElementById("superior_esquerdo");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText("border-radius: "+ num1 + ' ' + num2 + ' ' + num3 + 
  ' ' + num4 +  ';')

  alert("border-radius: " + copyText.value + ' ' + num2 + ' ' + num3 + 
  ' ' + num4 + ';');

}