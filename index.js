let cartButtons = document.getElementsByClassName('cart-btn');
let heartButtons = document.getElementsByClassName('heart')
let cartCount = document.getElementById('cart-count')
console.log(heartButtons)
let count = 0;
for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener('click', addToCart)
}

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener('click', favReq)
}



function updateCartCount(){
   cartCount.textContent = count;

}
function addToCart(){
  count += 1;
  updateCartCount()
  console.log('hit add to cart')
  
}



const favReq = () => {
    alert('hey')
    return

    axios.get('http://localhost:5501/api/heart')
    .then(res => {
      const data = res.data;
      alert(data)
      
    })
  }
  let heartBtn = document.querySelectorAll('#heart');
  heartBtn.forEach(heart => heart.addEventListener("click", favReq))
  
  let formInput = document.querySelector('#email')
  let submitBtn = document.querySelector('#submit')
  
   // axios.post(url, body)
  function saveEmail() {
    axios.post('http://localhost:5501/api/email', {email: formInput.value})
    .then(res =>{
      console.log(res.data)
      const data = res.data;
      alert(data)
    })
  }
  
  submitBtn.addEventListener("click", saveEmail)