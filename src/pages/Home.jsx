
// import { products } from "../../data/data"
import Layout from "../shared/Layout"


import { useContext, useEffect } from "react"
import ProductItems from "../shared/ProductItems"
import ProductContext from "../context/ProductProvider"



function Home() {
	const {Products} = useContext(ProductContext);

	useEffect(()=>{
		// console.log("num:", num);
		// console.log(num * 3);
		console.log("Home:", Products)
		
	}, [Products]);
	return (
		<Layout>
			<div className='bg-gray-100 min-h-screen text-center text-white p-4'>
				<p className="text-black font-semibold mb-3">ALL</p>

				<ProductItems Products={Products}/>
			</div>
		</Layout>
	)
}

export default Home