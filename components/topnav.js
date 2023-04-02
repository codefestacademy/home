class Mobilenavbar extends HTMLElement {
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
			
			
			
			/******************************************
			mobile menu slide up and down on scroll
			*******************************************/
			
			var prevScrollPos = $(window).scrollTop()
			var slideDelay = 500
			$(window).scroll(function(){
				var currentScrollPos = $(this).scrollTop()
				if ($(window).scrollTop() > 150){
					if(currentScrollPos > prevScrollPos){
						setTimeout(function(){
							$(".mobilenavbar").css("top", -70)
						}, slideDelay)
					}
					else{
						setTimeout(function(){
							$(".mobilenavbar").css("top", 0)
						}, slideDelay)
					}
				}
				prevScrollPos = $(window).scrollTop()
			})
			
			var url = location.href.substr(location.href.lastIndexOf("/")+1)
			url = $(".menu-items a[href*='" +url+ "']")
			url.css({"color":"black", "padding-left":"+=10px"})
			url.removeAttr("href")
			url.prepend("<i class='fas fa-chevron-right text-white'></i> ")
		})
	}

  	connectedCallback() {
		this.innerHTML = `
			
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
			<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
			
			<style>
			*{
				box-sizing: border-box;
				font-family: Ubuntu, Montserrat, Roboto Mono;
				font-size: 1.01em;
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
			}
			
			.mobilenavbar{
				position: fixed;
				top: 0px;
				left: 0;
				width: 100%;
				background: #2f4f4f;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-shadow: 0px 4px 5px #000;
				padding: 0px;
				z-index: 9999;
				overflow: auto;
				transition: 0.3s;
			}
			
			.mobilenavbar img{
				width: 40px;
				margin: 5px;
			}
			
			.mobilenavbar .menu-items a{
				text-decoration: none;
				padding-left: 15px;
				padding-bottom: 10px;
				font-weight: 700;
				font-size: 1rem;
				display: block;
				color: white;
			}
			
			.mobilenavbar .company-name{
				background: linear-gradient(white, lightblue);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				text-decoration: none;
				font-size: 1.5rem;
				font-weight: 900;
			}
			
			.mobilenavbar .menu-items{
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
			
			.mobilenavbar .menu-slidein{
				left: 0%;
			}
			
			.mobilenavbar .overlay{
				position: fixed;
				top: 53px;
				height: 100vh;
				width: 100vw;
				background: black;
				display:none;
			}
			
			.social-container{
				display: flex;
				flex-direction: column;
			}
			
			.social-header{
				font-size: 1.3em;
				margin-top: 30px;
				margin-bottom: 20px;
				color: cyan;
				text-align: center;
			}
			
			.social-container a{
				padding: 10px;
				padding-left: 15px;
				background: rgba(0,0,0,0.2);
				margin-bottom: 1px;
			}
			
			.sharebtn{
				background: linear-gradient(to right, rgb(64, 0, 255), rgb(255, 0, 191));
			}
			
			.mobilenavbar{
				displa: fixed;
			}
			
			button.menubars {
				border: none;
				outline: none;
				margin: 0px;
				background: none;
			}
			
			.menubars span{
				display: block;
				width: 30px;
				height: 3px;
				margin: 6px;
				background: white;
			}
			
			@media only screen and (min-width: 681px){
				.mobilenavbar{
					display: none;
				}
				
				.mobilenavbar .menu-items{
					width: 50%;
				}
				
			}
			</style>
			
       		<div class="mobilenavbar py-1">
       			<div><a href="index.html"><img src="images/logo.png"></a></div>
       			<div class="company-name">CodeFest</div>
       			<div class="overlay"></div>
       			<div class="menu-items">
       				<a href="index.html">Home</a>
       				<a href="gallery.html">Gallery</a>
       				<a href="contact.html">Contact</a>
       				<a href="about.html">About</a>
       				<div class="social-header">Connect with us</div>
       				<div class="social-container">
       					<a href="https://facebook.com/iykeman_007">
       						<i class="fab fa-facebook"></i>
       						<span>Facebook</span>
       					</a>
       					<a href="https://wa.me/2348068654944">
       						<i class="fab fa-whatsapp"></i>
       						<span>WhatsApp</span>
       					</a>
       					<a href="https://facebook.com/iykeman_007">
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
       			<button class="menubars">
       				<i class="fas fa-bars fa-2x text-white d-none"></i>
       				<span></span>
       				<span></span>
       				<span></span>
       			</button>
       		</div>
    	`
  	}
}

customElements.define('mobilenavbar-component', Mobilenavbar);