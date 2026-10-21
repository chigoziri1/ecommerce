import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({children}) {
	const [Products, setProducts] = useState([]);

	const HandleGetProduct = async () => {
		try {
			const response = await fetch("http://localhost:8000/products", {
				method: "GET",
			});
			const data = await response.json();
		  if (response.ok) {
				setProducts(data);
			}
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	useEffect(()=>{
		// eslint-disable-next-line react-hooks/set-state-in-effect
		HandleGetProduct();
	}, [])

	return (
		<ProductContext.Provider 
			value={{
				Products,
				
			}}
		>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductContext;

export {  ProductProvider };