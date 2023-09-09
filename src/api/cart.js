function createCartApi(http){
	return {
		async add(){
			return (await http.get('products/cart.php')).data;
		}
	}
}

export default createCartApi;