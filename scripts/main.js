var menu = $(".menu-items")
var overlay = $(".overlay")
var open = false
	
$(".menubars").click(function(){
	if(open){
		overlay.fadeOut()
		document.body.style.overflow = "auto"
		open = false
	}else{
		overlay.fadeTo(50, 0.4)
		document.body.style.overflow = "hidden"
		open = true
	}
	menu.toggleClass("menu-slidein")
})
	
	
$("#whatsapplink").click(function(event){
	var inputerr = true
	event.preventDefault()
	var name = $("#txtName")
	var msg = $("#txtMsg")
		
	name.css("border-color","gray")
	msg.css("border-color","gray")
		
	if (name.val().trim()==""){
		name.css("border-color","red")
		inputerr &= false
	}
		
	if (msg.val().trim()==""){
		msg.css("border-color","red")
		inputerr &= false
	}
		
	if (!inputerr){ return }
		
	var url = $("#whatsapplink").attr("href") + "?text=*" + name.val().trim() +"* - "+ msg.val().trim()
	window.location.href = url
})
	
function testimonySetup(){
	let container = $(".testimony-container")
	let testimony = $(".testimony")
	let imgContainer = testimony.find("div")
	//let w = container.attr("data-width")
    let w = "340px"
	container.css("width", w)
	testimony.css("width", imgContainer.length * parseInt(w))
	imgContainer.css("width", w)
}; testimonySetup()

var divs = $(".testimony > div")
divs.each(function(i,v){
	$(this).attr("index", i)
	$(".nav-button").append($("<span>"))
})
	
function testimony(){
    $(".testimony div").first().find(".desc").animate({"bottom":"-150px"}, 500)
	$(".testimony div").first().find(".name").animate({"top":"-50px"}, 500)
	
    setTimeout(() => {
	    var container = $(".testimony")
        container.animate({"marginLeft":"-320px"}, 500, function(){
            $(this).find("div:first .desc").css("bottom", "-120px")
            $(this).find("div:first .name").css("top", "-60px")
                
            var imgHolder = $(this).find("div")
            imgHolder.first().insertAfter(imgHolder.last())
            $(this).css("marginLeft","0px")
           
           	let first = $(".testimony div").first()
            first.find(".desc").animate({"bottom":"0px"}, 500)
            first.find(".name").animate({"top":"0px"}, 500)
            
            let span = $(".nav-button span")
            span.css("background","none")
            let divs = container.find("div:first")
            let index = divs.attr("index")
            span.eq(index).css("background","black")
            
        })
	}, 500);

	setTimeout(testimony, 8000)
}
testimony()
	
async function shareHandler(){
	navigator.share({
		title: "Tapajyoti Bose | Portfolio",
		text: "Check out my website",
		url: "https://tapajyoti-bose.vercel.app/"
	});
}