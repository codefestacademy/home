/**
---- CSS code ----
.counter{
	font-size: 3em;
	text-align: center;
	display: block;
	background: yellow;
	margin-bottom: 50px;
}

---- HTML code ----
<div style="text-align:center">
	<span class="counter" data-count="200">0</span>
	<span class="counter" data-count="350">0</span>
	<span class="counter" data-count="150">0</span>
</div>

---- JS code----
$(".counter").each(function(i, v){
	var counter = new Counter({"speed":20, "distance":100})
	
	counter.begin($(this))
})

**/
	
	
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