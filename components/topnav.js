class Topnav extends HTMLElement {
	constructor(){
		super()

		$(document).ready(function(){
			var menu = $(".menu-items")
			var overlay = $(".overlay")
			var open = false
				
			$(".menubars, .overlay").click(function(){
				if(open){
					overlay.fadeOut(100)
					document.body.style.overflow = "auto"
					open = false
					$("#main").css({"filter":"blur(0px)"})
				}else{
					overlay.fadeTo(100, 0.5)
					document.body.style.overflow = "hidden"
					open = true
					$("#main").css("filter","blur(5px)")
				}
				menu.toggleClass("menu-slidein")
			})
		})
	}

  	connectedCallback() {
		this.innerHTML = `
			<style>
			*{
				box-sizing: border-box;
				font-family: 'Nanum Gothic', sans-serif;
			}
			
			.clearfix::after {
			  content: "";
			  clear: both;
			  display: table;
			}
			
			body, html{
				width: 100%;
				height: 100%;
				margin: 0;
				padding-top: 25px;
			}
			
			.topnav{
				position: fixed;
				top: 0px;
				left: 0;
				width: 100%;
				background: orange;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-shadow: 1px 0px 5px 2px black;
				padding: 0 5px;
				z-index: 9999;
				overflow: auto;
			}
			
			.topnav img{
				width: 50px;
			}
			
			.topnav a{
				color: black;
				text-decoration: none;
				padding: 5px;
			}
			
			.topnav .menu-items{
				position: fixed;
				overflow: auto;
				width: 70%;
				height: 100vh;
				background: linear-gradient(to bottom right, #8000ff, #bf00ff);
				left: -80%;
				top: 53px;
				padding-top: 20px;
				font-size: 1.1rem;
				transition: 0.3s;
			}
			
			.topnav .menu-slidein{
				left: 0%;
			}
			
			.topnav .menu-items a{
				display: block;
				color: white;
			}
			
			.topnav .overlay{
				position: fixed;
				top: 53px;
				height: 100vh;
				width: 100vw;
				background: black;
				display:none;
			}
			
			.social-container{
				display: flex;
				font-size: 1.1rem;
				flex-direction: column;
			}
			
			.social-container *{
				font-size: 1.1rem;
				color: #fff;
			}
			
			.social-header{
				font-size: 1.3em;
				margin-top: 30px;
				margin-bottom: 20px;
				color: cyan;
				text-align: center;
			}
			
			.social-container a{
				padding: 5px;
				background: rgba(0,0,0,0.2);
				margin-bottom: 1px;
			}
			
			.sharebtn{
				background: linear-gradient(to right, rgb(64, 0, 255), rgb(255, 0, 191));
			}
			</style>
			
       		<div class="topnav">
       			<a href="index.html"><img src="images/logo.png"> CodeFest</a>
       			<div class="overlay"></div>
       			<div class="menu-items">
       				<a href="index.html">Home</a>
       				<a href="gallery.html">Gallery</a>
       				<a href="contact.html">Contact</a>
       				<a href="about.html">About</a>
       				<div class="social-header">Connect with us</div>
       				<div class="social-container">
       					<a href="https://facebook">
       						<i class="fab fa-facebook"></i>
       						<span>Facebook</span>
       					</a>
       					<a href="https://wa.me/2348068654944">
       						<i class="fab fa-whatsapp"></i>
       						<span>WhatsApp</span>
       					</a>
       					<a href="https://me.facebook/">
       						<i class="fab fa-facebook-messenger"></i>
       						<span>Facebook Messenger</span>
       					</a>
       					<a href="https://gmail">
       						<i class="fas fa-envelope"></i>
       						<span>Gmail</span>
       					</a>
       				</div>
       				<div class="text-center mt-5">
       					<button onclick="shareHandler()" type="button" class="sharebtn btn btn-primary"><i class="fas fa-share-square"></i> Share this website</button>
       				</div>
       				<div style="margin-bottom: 200px;"></div>
       			</div>
       			<div class="menubars">
       				<i class="fas fa-bars fa-2x"></i>
       			</div>
       		</div>
    	`
  	}
}

customElements.define('topnav-component', Topnav);