function request(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file, true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send();
}

request("data.json", function(text){
	let data=JSON.parse(text);
	console.log(data);
	images(data.images);
})

var button = document.querySelector('button');
button.onclick = function() {
  var name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}

function images(img){
  var img_section=document.createElement("section");
  img_section.style.border="3px solid #ddd";
  img_section.setAttribute("id","img");
  body.appendchild(img_section);
  var image=document.createElement("img");
  image.classList.add("img");
  image.src=info[i].image;
  }
