
const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const bnt = document.querySelector("button")
const displayColor = document.querySelector("span")
bnt.addEventListener("click", function(){
	var color = "#"
	for (let i=0; i<6;i++){
		color += chars[Math.floor(Math.random() * 14)]
	}
	console.log(color)
	document.body.style.backgroundColor = color
	displayColor.innerHTML = color
})