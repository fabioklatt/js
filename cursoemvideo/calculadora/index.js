
const result = document.querySelector('.result')
const igual = document.querySelector('.igual')


function insert(valor){
  result.innerHTML += valor
  
}

function clean(){
  const ce = document.querySelector('.butsce')
  result.innerHTML=''
}

function backspace (){
  if (result.innerHTML){
    let res = result.innerHTML
    result.innerHTML = res.substring(0,res.length-1)
  }
}

function finalres (){
  
  let r = eval(result.innerHTML)
  result.innerHTML = r
  
}







