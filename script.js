function getFormvalue() {
    //Write your code here
	
	let inputF=document.querySelector('[name="fname"]').value;
	let inputL=document.querySelector('[name="lname"]').value;
	if(inputF===""||inputL===""){
		alert("invalid input")
		return;
	}else{
		alert(`${inputF} ${inputL}`)
	}
}
