import { observer } from "mobx-react";
import { useContext, useState } from "react";
import storeContext from "../contexts/store";
import Button from '@mui/material/Button';
import { Product } from "./Product";

function App() {
	const [cnt, setCnt] = useState(0);
	const store = useContext(storeContext);

	console.log(store.catalog.products);

	return <div>
		<h1>Hello React! {cnt}</h1>
		<Button type="button" variant="contained" onClick={() => setCnt(cnt + 1)}>+1</Button>
		<hr />
		{store.user.id}
		<hr />
		<ul>
			{store.catalog.products.map(p => (
				<li key={p.id}>
					{/* <Product price={p.price} title={p.title}></Product> */}
				</li>
			))}
		</ul>
	</div>
}

const observedApp = observer(App);

export default observedApp;