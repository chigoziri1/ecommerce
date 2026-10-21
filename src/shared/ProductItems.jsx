import { FaHeart, FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"


function ProductItems({Products}) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
			{Products?.map((item)=>(
				<div key={item.id} className="rounded-md shadow-2xl hover:scale-105 transition ease-in-out duration-200">
					{/* remember to come change the literal string if the page isn't working  */}
					<Link 
						to={`singleProduct/${item?.id}`}
						className="h-[300px] w-full block bg-center bg-cover" 
						style={{backgroundImage: `url(${item.image})` }}
						// to={`/product/${item.id}`}
					></Link>

					<div className="flexRow justify-between p-3 text-black">
						<div className="">
							<p className="info">{item.name}</p>
							<p className="info">${item.price}</p>
						</div>

						<div className="flex gap-4">
							<p><FaShoppingCart className="cursor-pointer 
							hover:scale-110 transition-all duration-200" /></p>
							<p><FaHeart color="red" className="cursor-pointer hover:text-red-50
							hover:scale-110 transition-all duration-200 " /></p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default ProductItems