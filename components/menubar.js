class Menubar extends HTMLElement {
	constructor(){
		super()

		$(document).ready(function(){
		
			$(window).scroll(function(){
				if ($(window).scrollTop() >= 60){
					$(".menubar").css({
						"background-color":"rgba(0, 0, 0, 1)",
						"box-shadow":"3px 3px 5px rgba(0,0,0,0.5)"
					})
				}
				else{
					
					$(".menubar").css({
						"background-color":"rgba(0, 0, 0, 0.4)",
						"box-shadow":"none"
					})
				}
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
			}
			
			.menubar{
				width: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: fixed;
				padding: 20px 10px;
				top: 0;
				z-index: 999;
				transition: 0.5s;
			}

			.menubar .logo{
				color: orange;
				font-size: 1.4em;
				text-decoration: none;
			}

			.menubar .links a{
				text-decoration: none;
				color: white;
				font-size: 1.2rem;
				display: inline-block;
				padding: 10px 5px;
			}

			.social span{
				padding-left: 5px;
				color: orange;
				font-size: 1.3rem;
				display: inline-block;
			}

			.sticky{
				
			}

			@media only screen and (min-width: 681px){
				body{
					overflow: auto;
				}
			}
			
			@media only screen and (max-width: 680px){
				.menubar{
					display: none;
				}
			}
			</style>
			
       		<div class="menubar sticky">
       			<a href="index.html" class="logo">
				   <img src="images/logo.png" width=50 height=50> CodeFest Academy
				</a>
				<span class="links">
					<a href="index.html">Home</a>
					<a href="gallery.html">Gallery</a>
					<a href="contact.html">Contact</a>
					<a href="about.html">About</a>
				</span>
				<span class="social">
					<span><i class="fab fa-facebook"></i></span>
					<span><i class="fab fa-twitter"></i></span>
					<span><i class="fab fa-instagram"></i></span>
					<span><i class="fab fa-whatsapp"></i></span>
				</span>
       		</div>
    	`
  	}
}

customElements.define('menubar-component', Menubar);