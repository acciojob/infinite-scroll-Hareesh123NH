//your code here!

const list=document.getElementById("infi-list");
let item=1;
function addItems(count) {
	for (let i = 0; i < count; i++) {
		const ele=document.createElement("li");
		ele.innerText=`Item ${item++}`;
		list.appendChild(ele);
	}
}

addItems(10);