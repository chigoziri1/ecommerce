import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout"
import ProductItems from "../shared/ProductItems"
import ProductContext from "../context/ProductProvider";


function Women() {
	const {Products} = useContext(ProductContext);
	const [WomenProduct, setWomenProduct] = useState([]);

	useEffect(()=>{
				const found = Products?.filter((item) => item?.category === "women");
				if (found) {
					// eslint-disable-next-line react-hooks/set-state-in-effect
					setWomenProduct(found)
				}
	}, [Products])
	return (
		<Layout>
			<div className='bg-gray-100 min-h-screen p-4'>
				<p className="text-black font-semibold text-lg text-center">Women</p>
				<ProductItems Products={WomenProduct}/>
			</div>
		</Layout>
	)
}

export default Women