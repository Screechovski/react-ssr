import Catalog from "./catalog";
import User from "./user";

function createRootStore(api){
	const rootStore = {
		user: new User(),
		catalog: new Catalog(api.products)
	}

	return rootStore;
}

export default createRootStore;