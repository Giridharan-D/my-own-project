// const targetDiv1 = document.querySelector(".page1");
// const targetDiv2 = document.querySelector(".page2");
// const btns = document.getElementById("goto");
// btns.onclick = function () {
//   if (targetDiv1.style.display !== "none") {
//     targetDiv1.style.display = "none";
//   } else {
//     targetDiv2.style.display = "block";
//   }
// };

//user id & password

var objPeople = [
  {
    username: "Thoufiq",
    password:"123",
    product: [ "computer","Laptop" ],
    amount: 30000
  },
  {
    username: "Hema",
    password : "123",
    product: [ "Shampoo","Lipsticks" ],
    amount: 30000
  },
  {
    username: "Mokesh",
    password : "123",
    product: [ "Goa","banana" ],
    amount: 20000
  },
  {
    username: "Elwin",
    password : "123",
    product: [ "Ipad","Smart Phone" ],
    amount: 20000
  },
  {
    username: "Jaanu",
    password : "123",
    product: [ "Jwellery" ],
    amount: 30000
  },
  {
    username: "Giri",
    password : "123",
    product: [ "Medicine" ],
    amount: 30000
  }
]

function getInfo() {
	var username = $('#username').val();
	var password = $('#password').val();

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!");
			return
		}
	}
	alert("incorrect username or password");
};

//hide & show

// $(document).ready(function(){
//   $("#goto").click(function(){
//     $(".page2").css("display","block");
//   });
//   $("#goto").click(function(){
//     $(".page2").css("display","none");
//   });
// });

//input get value

$('input.selected-product-quantity').change(function(){
  var quantity = $(this).val();
  var price = $('.pricecal').text();
  var calprice = parseInt(2000) * parseInt(quantity);
  $('.pricecal').text(calprice);
});

// Add to list

var noti = document.querySelector('#go');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for(var but of button){
  but.addEventListener('click', (e)=>{
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')

    var parent = e.target.parentNode;
    var clone = parent.cloneNode(true);
    select.appendChild(clone);
    clone.lastElementChild.innerText = "Pay-now";
    
    if (clone) {
      noti.onclick = ()=>{
        select.classList.toggle('display');
      }	
    }
  })
}
document.querySelector(".amt").innerHTML = Math.floor(Math.random() * 100000);