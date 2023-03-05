class Topnav extends HTMLElement {
	constructor(){
		super()

		$(document).ready(function(){
			var menu = $(".menu-items")
			var overlay = $(".overlay")
			var open = false
				
			$(".menubars, .overlay").click(function(){
				if(open){
					overlay.fadeOut()
					document.body.style.overflow = "auto"
					open = false
					$("main").css({"filter":"blur(0px)"})
				}else{
					overlay.fadeTo(50, 0)
					document.body.style.overflow = "hidden"
					open = true
					$("main").css("filter","blur(2px)")
					//$("main").css("filter","grayscale(100%)")
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
				padding-top: 30px;
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
			}
			
			.topnav img{
				width: 50px;
			}
			
			.topnav a{
				color: black;
				text-decoration: none;
				font-size: 1.1em;
				padding: 5px;
			}
			
			.topnav .menu-items{
				position: fixed;
				width: 70%;
				height: 100vh;
				background: linear-gradient(to bottom right, #8000ff, #bf00ff);
				left: -80%;
				top: 60px;
				padding-top: 30px;
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
				top: 60px;
				height: 100vh;
				width: 100vw;
				background: black;
				display:none;
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
       				<hr>
       			</div>
       			<div class="menubars">
       				<i class="fas fa-bars fa-2x"></i>
       			</div>
       		</div>
    	`
  	}
}

customElements.define('topnav-component', Topnav);