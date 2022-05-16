document.querySelector('#btn-submit').addEventListener("click", function(event) {
    event.preventDefault();
    const valid = document.getElementById('email-input');
    const message = document.getElementById('error-message');
    const email = document.getElementById('email-input');
    const error_icon = document.getElementById('error-icon');
    const submit = document.getElementById('btn-submit');
    
    if(!valid.checkValidity()) {
      email.style.borderColor = 'var(--soft-red)';
      //button style
      submit.style.marginLeft = '383px';
      submit.style.marginTop = '-27px';
  
      message.innerHTML = 'Please provide a valid email';
      //message style
      message.style.marginLeft = '115px';
      message.style.marginTop = '11px';
      message.style.fontSize = '14px';
      message.style.color = 'var(--soft-red)';
  
      error_icon.style.display = 'block';
      //error style
      error_icon.style.marginTop = '-34px';
      error_icon.style.marginLeft = '339px';
      error_icon.style.marginBottom = '-3px';
    } if(window.matchMedia('(max-width: 400px)').matches) {
      submit.style.marginLeft = '277px';
      submit.style.marginTop = '-45px';
  
      message.innerHTML = 'Please provide a valid email';
      //message style
      message.style.marginLeft = '43px';
      message.style.marginTop = '11px';
      message.style.fontSize = '14px';
      message.style.color = 'var(--soft-red)';
  
      error_icon.style.display = 'block';
      //error style
      error_icon.style.marginTop = '-30px';
      error_icon.style.marginLeft = '244px';
      error_icon.style.marginBottom = '-9px';
    } 
  });