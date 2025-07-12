class Footer extends HTMLElement {
	constructor(){
		super()
		$(document).ready(function(){
			let y = new Date().getFullYear()
			$("#year").text(y)
		})
	}
  	connectedCallback() {
    	this.innerHTML = `
    		<style>
    			.footer{
    				padding: 10px;
    				background: #333;
    				color: gray;
					text-align: center;
    			}

				.footer img{
					height: 30px;
					width: 30px;
				}
				
				.mail-phone a{
					text-decoration: none;
					color: #aaa;
				}
    		</style>
       		<div class="footer">
       			<div class="d-flex justify-content-between align-items-center">
       				<span><img src="./images/logo.png" > &copy; <span id="year"></span></span>
       				<span>Powered by<br>CodeFest</span>
				</div>
				<div class="mail-phone text-center mt-4">
					<div><i class="fas fa-envelope"></i> <a href="mailto:codefestacademy@gmail.com">codefestacademy@gmail.com</a></div>
					<div><i class="fas fa-phone"></i> <a href="tel:+2349112017104">09112017104</a></div>
				</div>
       		</div>
    	`
  	}
}

customElements.define('footer-component', Footer);
