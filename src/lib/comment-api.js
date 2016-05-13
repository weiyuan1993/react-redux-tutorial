import $ from 'jquery';

const fetch = (url) =>{
	return new Promise((resolve,reject) =>{
		$.ajax({
			url,
			dataType: 'json',
			cache:false,
			success:(data)=>{
				resolve({data});
			},
			error:(xhr,status,err)=>{
				reject(url,status,err.toString())
			}
		});
	});
}

const save = (url,comment) =>{
	return new Promise((resolve,reject) =>{
		$.ajax({
			url,
			dataType:'json',
			type:"POST",
			data: comment,
			success:(data)=>{
				resolve({data});
			},
			error:(xhr,status,err)=>{
				reject(url,status,err.toString());
			}
		});
	});
}
export { fetch };
export { save };