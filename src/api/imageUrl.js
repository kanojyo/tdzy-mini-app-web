

export function open(){ 							//	跳转地址
	if (process.env.NODE_ENV === 'development'){
		return 'http://192.168.0.74:8082'
	}else if (process.env.NODE_ENV === 'test'){
		return 'http://192.168.0.123:8033'
	}else{
		return 'http://manage.mangguokandian.com'
	}
}

export function uploadUrl(){ 							//	上传地址
	if (process.env.NODE_ENV === 'development'){
		return process.env.BASE_API + '/v1/uploads'
	}else if (process.env.NODE_ENV === 'test'){
		return process.env.BASE_API + '/v1/uploads'
	}else{
		return process.env.BASE_API + '/v1/uploads'
	}
}