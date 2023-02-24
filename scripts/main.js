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
	
	function gallerySetup(){
		let w = "340px"
		let container = $(".gallery-container")
		let gallery = $(".gallery")
		let imgContainer = gallery.find("div")
		container.css("width", w)
		gallery.css("width", imgContainer.length * parseInt(w))
		imgContainer.css("width", w)
	}; gallerySetup()
	
	function gallery(){
		var container = $(".gallery")
		container.animate({"marginLeft":"-320px"}, 500, function(){
			$(this).find("div:first .desc").css("bottom", "-120px")
			$(this).find("div:first .name").css("top", "-60px")
			
			var imgHolder = $(this).find("div")
			imgHolder.first().insertAfter(imgHolder.last())
			$(this).css("marginLeft","0px")
			
			$(".gallery div").first().find(".desc").animate({"bottom":"0px"}, 200)
			$(".gallery div").first().find(".name").animate({"top":"0px"}, 200)
		})
		
		setTimeout(gallery, 8000)
	}
	gallery()
	
	async function shareHandler(){
		navigator.share({
			title: "CodeFest Academy | Home",
			text: "Share CodeFest Academy",
			url: "https://codefestacademy.github.io/home/"
		});
	}
