(function(){
 //varijable
 const form = document.querySelector('.form');
 const input = document.querySelector('#input');
 const msgValue = document.querySelector('#msgValue');
 const feedback = document.querySelector('.feedback');
 //eventi
 form.addEventListener('submit', event=>{
  event.preventDefault();
  let value = input.value;
  if(value===''){
   showFeedback('Please enter some value')
  }else{
   msgValue.textContent = value;
   input.value = '';
  }
 })
 //funkcije
 function showFeedback(text){
  feedback.classList.add('show');
  feedback.innerText = `${text}`;
  setTimeout(()=>{
   feedback.classList.remove('show')
  },3000)
 }
})()