import fetch from '@/utils/fetch'

export function getBase64(file){
  	let reader = new FileReader();
  	reader.readAsDataURL(file);
	reader.onload = (event) => {
		let imgUrl = event.target.result;
		console.log(imgUrl)
		return imgUrl
	}
}