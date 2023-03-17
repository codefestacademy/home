class Menubar extends HTMLElement {
	constructor(){
		super()

		$(document).ready(function(){
			const menubarHeight = document.querySelector(".menubar").height()
			alert(menubarHeight)

			$(window).scroll(function(){
				
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
			}

			.menubar .logo{
				color: orange;
				font-size: 1.4em;
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

			@media only screen and (min-width: 600px){
				body{
					overflow: auto;
				}
			}
			</style>
			
       		<div class="menubar sticky">
       			<span class="logo">
				   <img src="images/logo.png" width=50 height=50> CodeFest Academy
				</span>
				<span class="links">
					<a href="gallery.html">Gallery</a>
					<a href="contact.html">Contact</a>
					<a href="about.html">About</a>
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