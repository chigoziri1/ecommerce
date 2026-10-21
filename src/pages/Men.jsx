import { useContext, useEffect, useState } from "react"
import Layout from "../shared/Layout"
import ProductItems from "../shared/ProductItems";
import ProductContext from "../context/ProductProvider";


function Men() {
	const {Products} = useContext(ProductContext);
	const [menProduct, setMenProduct] = useState([]);

	useEffect(()=>{
		const found = Products?.filter((item) => item?.category === "men");
		if (found) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setMenProduct(found)
		}
	}, [Products])
	return (
		<Layout>
			<div className='bg-gray-100 min-h-screen'>
				<p className="text-black font-semibold text-lg text-center">Men</p>
				<ProductItems Products={menProduct}/>
			</div>	
		</Layout>
	)
}

export default Men