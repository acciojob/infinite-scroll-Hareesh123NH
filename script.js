//your code here!

const list=document.getElementById("infi-list");
// let item=1;
function addItems(count) {
	for (let i = 0; i < count; i++) {
		const ele=document.createElement("li");
		ele.innerText=`Item ${list.children.length+1}`;
		list.appendChild(ele);
	}
}

addItems(10);

list.addEventListener("scroll",()=>{
	if(list.clientHeight+list.scrollTop>=list.scrollHeight){
		addItems(2);
	}
});