
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
  
  var copyText = document.getElementById("superior_esquerdo");
  var ct = document.getElementById("superior_direito");
  var ie = document.getElementById("inferior_esquerdo");
  var id = document.getElementById("inferior_direito");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  ct.select();
  ct.setSelectionRange(0,99999);
  ie.select();
  ie.setSelectionRange(0,99999);
  id.select();
  id.setSelectionRange(0,99999);

  //navigator.clipboard.writeText(copyText.value, ct, ie, id);
  //navigator.clipboard.writeText(ct.value);
 // navigator.clipboard.writeText(ie.value);
 // navigator.clipboard.writeText(id.value);
    
  alert("border-radius: " + copyText.value + ' ' + ct.value + ' ' + ie.value + 
  ' ' + id.value + ';');
  navigator.clipboard.writeText("border-radius: ", copyText.value, ' ', ct.value, ' ', ie.value, 
  ' ', id.value, ';')
}