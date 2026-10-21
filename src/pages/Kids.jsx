import { useContext, useEffect, useState } from "react";

import Layout from "../shared/Layout"
import ProductItems from "../shared/ProductItems"
import ProductContext from "../context/ProductProvider";


function Kids() {
	const {Products} = useContext(ProductContext);
	const [KidsProduct, setKidsProduct] = useState([]);

	useEffect(()=>{
			const found = Products?.filter((item) => item?.category === "kids");
			if (found) {
				// eslint-disable-next-line react-hooks/set-state-in-effect
				setKidsProduct(found)
			}
	}, [Products])
	return (
		<Layout>
			<div className='bg-gray-100 min-h-screen'>
				<p className="text-black font-semibold text-lg text-center">Kids</p>
				<ProductItems Products={KidsProduct}/>
			</div>
		</Layout>
	)
}

export default Kids  