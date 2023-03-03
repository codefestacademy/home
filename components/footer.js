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
    				padding: 30px 10px;
    				background: #333;
    				color: gray;
					text-align: center;
    			}

				.footer img{
					height: 30px;
					width: 30px;
				}
    		</style>
       		<div class="footer">
       			<div class="d-flex justify-content-between">
       				<span><img src="./images/logo.png" > &copy; <span id="year"></span></span>
       				<span>POWERED BY:<br>CodeFest</span>
				</div>
				<div class="text-center mt-4">
					<div><i class="fas fa-envelope"></i> iykeezekwesili@gmail.com</div>
					<div><i class="fas fa-phone"></i> 0806-8654944</div>
				</div>
       		</div>
    	`
  	}
}

customElements.define('footer-component', Footer);