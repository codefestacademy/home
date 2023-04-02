class Componentname extends HTMLElement {
	constructor(){
		super()

		$(document).ready(function(){
			var Counter = function(f){
				this.begin = function(elem){
					var counted = false
			
					$(window).scroll(function(){
						targetPos = ($(window).scrollTop() + $(window).height()) - f.distance
			
						if(targetPos >= elem.position().top){
							if(!counted){
								countNumber()
								counted = true
							}
						}
					})
			
					function countNumber(){
						const num = elem.attr("data-count")
						let i = 0
						let interval = setInterval(
			
						function(){
							if(i <= num){
								elem.text(i++)
							}
							else{
								clearInterval(interval)
							}	
						}, f.speed)	
					}
				}
			}
		})
	}

  	connectedCallback() {
		this.innerHTML = `
			<style>
			
			</style>
			
			<div>
				<!-- put contents here -->
			</div>
    	`
  	}
}

customElements.define('tagname-component', Componentname);
