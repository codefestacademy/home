class FloatButtons extends HTMLElement {
	constructor(){
		super()

		$(document).ready(function(){
			var btns = $(".btns")
			var x  // translateX(0px|100px) initial value is 100px - out of viewport
			
			$(".toggler").click(function(){
				var i = 0  // button index
				x = (x==0 ? 100 : 0)
				var interval = setInterval(function(){
					if (i < btns.length){
						btns[i++].style.transform = "translateX(" +x+ "px)"
					}else{
						clearInterval(interval)
					}
				}, 150)
			})
			
		})
		
	}

  	connectedCallback() {
		this.innerHTML = `
			<style>
				.float-btns{
					display: flex;
					flex-direction: column;
					position: fixed;
					bottom: 0px;
					right: 5px;
					z-index: 9999;
					margin: 5px;
					margin-bottom: 20px;
				}
				
				.float-btns a{
					height: 50px;
					width: 50px;
					background: #fff;
					color: #000;
					border-radius: 50%;
					margin: 5px 0px;
					box-shadow: 3px 3px 5px rgba(0,0,0,0.4);
					display: flex;
					justify-content: center;
					align-items: center;
				}
				
				.float-btns a:last-child{
					margin-bottom: 0;
				}
				
				.float-btns .btns{
					transform: translateX(100px);
					transition: 0.2s;
					font-size: 2.5rem;
				}
				
				.float-btns-slide{
					transform: translateX(0px);
				}
				
				@media only screen and (max-width: 700px){
					.float-btns .btns{
						font-size: 1.3rem;
					}
					
					.float-btns a{
						height: 40px;
						width: 40px;
						background: rgba(255,120,0,0.7);
						color: white;
					}
					
					.float-btns .whatsapp, .toggler{
						font-size: 1.5rem;
					}
				}
			</style>
			
       		<div class="float-btns" >
       			<a href="contact.html" class="message btns"><i class="fas fa-envelope"></i></a>
       			<a href="tel:2348068654944" class="call btns"><i class="fas fa-phone"></i></a>
       			<a href="https://wa.me/2348068654944" class="whatsapp btns"><i class="fab fa-whatsapp" style=""></i></a>
       			<a class="toggler text-dark border"><i class="fab fa-rocketchat fa-1x"></i></a>
       		</div>
    	`
  	}
}

customElements.define('floatbutton-component', FloatButtons);