import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../shared/Layout";
import ProductContext from "../context/ProductProvider";


function SingleProducts() {
const { id } = useParams();
const { Products} = useContext(ProductContext);

const [singleProduct, setSingleProduct] = useState(null);
const [defaultSize, setDefaultSize] = useState(null);
const [quantity, setQuantity] = useState(1);
	useEffect(()=>{
	console.log("p:",Products);
	
	}, [Products])

useEffect(() => {
const found = Products?.find(
(item) => Number(item?.id) === Number(id)
);

// eslint-disable-next-line react-hooks/set-state-in-effect
setSingleProduct(found ?? null);
setDefaultSize(found?.defaultSize ?? found?.sizes?.[0] ?? null);
setQuantity(1);
}, [Products, id]);

if (!Products) {
return (
<Layout>
<div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
<div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
<p className="text-sm text-gray-500">Loading product...</p>
</div>
</Layout>
);
}

if (!singleProduct) {
	return (
		<Layout>
		<div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
		<h2 className="text-2xl font-bold text-gray-900">
			Product not found
		</h2>

		<p className="mt-3 text-gray-500">
			Sorry, we couldn't find the product you're looking for.
		</p>

		<Link
		to="/"
		className="mt-6 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
		>
		Back to shopping
		</Link>
		</div>
		</Layout>
		);
		}

		const {
		name,
		price,
		category,
		sizes = [],
		description,
		image,
		} = singleProduct;

		const productPrice = Number(price) || 0;

		const handleAddToCart = () => {
		if (sizes.length > 0 && !defaultSize) return;

		// Connect your existing cart function here.
		// Pass singleProduct, defaultSize, and quantity.
		};

		return (
		<Layout>
		<main className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
		<div className="mx-auto max-w-7xl">
		<nav
		aria-label="Breadcrumb"
		className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500 sm:mb-10"
		>
		<Link to="/" className="transition hover:text-black">
		Home
		</Link>
		<span>/</span>
		<span>{category || "Products"}</span>
		<span>/</span>
		<span className="font-medium text-gray-900">{name}</span>
		</nav>

		<section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
		{/* Product image */}
		<div className="overflow-hidden rounded-2xl bg-gray-50">
		{image ? (
		<img
		src={image}
		alt={name}
		className="aspect-square w-full object-contain p-5 transition duration-300 hover:scale-105 sm:p-8"
		/>
		) : (
		<div className="flex aspect-square items-center justify-center text-gray-400">
		No product image available
		</div>
		)}
		</div>

		{/* Product details */}
		<div className="flex min-w-0 flex-col">
		<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
		{category || "Our Collection"}
		</p>

		<h1 className="break-words text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
		{name}
		</h1>

		<p className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
		₦{productPrice.toLocaleString("en-NG")}
		</p>

		<div className="my-6 border-t border-gray-200" />

		<p className="text-sm leading-7 text-gray-600 sm:text-base">
		{description ||
		"Discover comfort and style with this product. Choose your preferred size and quantity to continue shopping."}
		</p>

		{/* Size selection */}
		{sizes.length > 0 && (
		<div className="mt-8">
		<div className="mb-4 flex flex-wrap items-center justify-between gap-2">
		<label className="text-sm font-semibold text-gray-900">
		Select size
		</label>

		<span className="text-sm text-gray-500">
		{defaultSize
		? `Selected: ${defaultSize}`
		: "Choose a size"}
		</span>
		</div>

		<div className="flex flex-wrap gap-3">
		{sizes.map((size) => (
		<button
		key={size}
		type="button"
		onClick={() => setDefaultSize(size)}
		aria-pressed={defaultSize === size}
		className={`flex h-12 min-w-12 items-center justify-center rounded-lg border-2 px-4 text-sm font-medium transition duration-200 ${
		defaultSize === size
		? "border-black bg-black text-white"
		: "border-gray-200 bg-white text-gray-700 hover:border-black"
		}`}
		>
		{size}
		</button>
		))}
		</div>
		</div>
		)}

		{/* Quantity selector */}
		<div className="mt-8">
		<label className="mb-4 block text-sm font-semibold text-gray-900">
		Quantity
		</label>

		<div className="inline-flex h-12 items-center rounded-lg border border-gray-200">
		<button
		type="button"
		aria-label="Decrease quantity"
		onClick={() =>
		setQuantity((current) => Math.max(1, current - 1))
		}
		className="h-full w-12 rounded-l-lg text-xl transition hover:bg-gray-100"
		>
		−
		</button>

		<span
		aria-live="polite"
		className="min-w-10 text-center text-sm font-semibold"
		>
		{quantity}
		</span>

		<button
		type="button"
		aria-label="Increase quantity"
		onClick={() => setQuantity((current) => current + 1)}
		className="h-full w-12 rounded-r-lg text-xl transition hover:bg-gray-100"
		>
		+
		</button>
		</div>
		</div>

		{/* Add to cart */}
		<button
		type="button"
		disabled={sizes.length > 0 && !defaultSize}
		onClick={handleAddToCart}
		className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 disabled:cursor-not-allowed disabled:bg-gray-300"
		>
		Add to Cart
		</button>

		{/* Shopping benefits */}
		<div className="mt-8 space-y-5 border-t border-gray-200 pt-6">
		<div className="flex items-start gap-3">
		<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg">
		✓
		</span>

		<div>
		<h3 className="text-sm font-semibold text-gray-900">
		Quality products
		</h3>
		<p className="mt-1 text-sm text-gray-500">
		Find products to suit your style.
		</p>
		</div>
		</div>

		<div className="flex items-start gap-3">
		<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg">
		♡
		</span>

		<div>
		<h3 className="text-sm font-semibold text-gray-900">
		Easy shopping
		</h3>
		<p className="mt-1 text-sm text-gray-500">
		A simple and convenient shopping experience.
		</p>
		</div>
		</div>
		</div>
		</div>
		</section>
		</div>
		</main>
		</Layout>
	);
}

export default SingleProducts;