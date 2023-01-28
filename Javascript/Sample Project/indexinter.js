$('input.selected-product-quantity').change(function(){
    var quantity = $(this).val();
    var price = $('.pricecal').text();
    var calprice = parseInt(2000) * parseInt(quantity);
    $('.pricecal').text(calprice);
  });

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
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
  document.querySelector(".amt").innerHTML = Math.floor(Math.random() * 40000);