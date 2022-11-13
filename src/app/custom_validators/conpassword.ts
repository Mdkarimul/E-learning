export function conpassword(data: any){
	console.log(data);
	const pwd = data.controls.password.value;
	const cpwd = data.controls.conpassword.value;
	if (pwd === cpwd && pwd.length >= 6 && cpwd.length >= 6)
	{
	   return {
	     conpassword : false,
	   };
	}
	else
	{
	return {
	     conpassword : true,
	   };
	}
}
