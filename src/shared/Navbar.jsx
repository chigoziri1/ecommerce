import { useContext, useState } from "react";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import ProductContext from "../context/ProductProvider";


function Navbar() {
	const [showmenu, setshowmenu] = useState(false)
	const {cartCount} = useContext(ProductContext)
	const navs = [
		{
			name: "About" ,
			path: "/about"
		},
		{
			name: "Contact",
			path: "/contact"
		},
		{
			name: "Kids",
			path: "/kids"
		},
		{
			name: "Men",
			path: "/men"
		},
		{
			name: "Women",
			path: "/women"
		}
	];
	return (
		<div className="sticky top-0 left-0 z-50">
			{/* big */}
			<div className="hidden lg:block">
				<div className="h-28 flexRow w-full justify-between p-2 bg-black mr-10">
					<Link 
					to={"/"}
					className="logo px-5 h-11 w-11 rounded-full bg-white text-black flexRow justify-center mr-6 md:h-14 md:w-14">
						Smart
					</Link> 

					<div className="list flexRow justify-between gap-8">
					{navs.map((item, i) => (
						<NavLink
							className={({ isActive }) =>
							` p-2 font-semibold border-2  transition ease-in-out duration-200 border-white rounded-full hover:bg-white hover:text-black ${isActive ? " bg-white text-black" : "text-white"}`
							}
							key={i}
							to={item.path}
						>
							{item.name}
						</NavLink>
					))}
					
				</div>
		
					<div className="flexRow gap-5 justify-center">
						<span className="icon">
							<FaUser/>
						</span>
						<Link to={"/checkout"} className="icon relative">
							<FaCartShopping/>
							<span className="text-lg font-bold absolute top-[-21px] left-3 ">{cartCount}</span>
						</Link>
						{/* <span>
							<FaHeart/>
						</span> */}
					</div>
				</div>
			</div>
			
			{/* small */}
			<div className="lg:hidden flexRow justify-between bg-black p-2 relative">
				<Link 
					to={"/"}
					className="logo p-2 h-12 w-12 rounded-full bg-white text-black flexRow justify-center ">
						Smart
				</Link> 

				<div className="flexRow justify-between gap-5">
						<Link to={"/checkout"} className="icon relative">
							<FaCartShopping/>
							<span className="text-lg font-bold absolute top-[-21px] left-3 ">{cartCount}</span>
						</Link>

					<span 
					onClick={()=> setshowmenu((prv) => !prv)}
					className="icon block lg:hidden"
					>
						<MdMenu className="h-10 w-10"/>
					</span>
				</div>

				
				<div className={` ${showmenu ? "" : "hidden"} list menuicon flex flex-col justify-between gap-8 absolute top-[100%] left-0 w-[30%] z-50 px-2 py-6 bg-black items-center `}>
					{navs.map((item, i) => (
						<NavLink
							className={({ isActive }) =>
							` p-2 font-semibold border-2  transition ease-in-out duration-200 border-white rounded-full hover:bg-white hover:text-black ${isActive ? " bg-white text-black" : "text-white"}`
							}
							key={i}
							to={item.path}
						>
							{item.name}
						</NavLink>
					))}
					
				</div>

			</div>
		</div>
		
	)
}

export default Navbar