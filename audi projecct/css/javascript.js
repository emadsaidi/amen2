
$("hr").remove();

$(function(){
	$(".dropdown-item").click(function(){
		var icone_text=$(this).html();
		$(".dropdown-toggle").html(icone_text);
	})
})
$(function(){
	$("[data-trigger]").on("click",function(){
		var targeet_id=$(this).attr('data-trigger');
		$(targeet_id).toggleClass("show");
		$('body').toggleClass("offcanvas-active")
	});
	//closebutton
	$(".btn-close").click(function(e){
		$(".navbar-collapse").removeClass("show");
		$("body").removeClass("offcanvas-active")
	})
	
})
let laptopname=[];
const searchbar=document.getElementById('searchbar');

searchbar.addEventListener('keyup',(e)=>{
	const target= e.target.value;
const filteredlaptop=	laptopname.filter(character=>{
		return character.name.includes(target)||character.category.includes(target);
	})
console.log(filteredlaptop);
});

