'use client';

import React from 'react';
import { useSharedState } from '@stackoverprof/use-shared-state';

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

const ComponentA = () => {
	// Shared cart state - using @ prefix for persistent storage
	const [cartItems, setCartItems] = useSharedState<CartItem[]>('cart-items', []);
	const [cartCount, setCartCount] = useSharedState<number>('cart-count', 0);

	// Static product catalog
	const products = [
		{ id: 1, name: 'Wireless Headphones', price: 99.99 },
		{ id: 2, name: 'Smartphone Case', price: 24.99 },
		{ id: 3, name: 'Portable Charger', price: 39.99 },
	];

	const addToCart = (productId: number, productName: string, productPrice: number) => {
		const currentCart = cartItems || [];
		const existingItem = currentCart.find((item) => item.id === productId);

		if (existingItem) {
			// Update quantity if item already exists
			updateQuantity(productId, existingItem.quantity + 1);
		} else {
			// Add new item to cart
			const newItem: CartItem = {
				id: productId,
				name: productName,
				price: productPrice,
				quantity: 1,
			};
			setCartItems([...currentCart, newItem]);
			setCartCount((cartCount || 0) + 1);
		}
	};

	const updateQuantity = (productId: number, newQuantity: number) => {
		const currentCart = cartItems || [];

		if (newQuantity <= 0) {
			// Remove item if quantity is 0 or less
			removeFromCart(productId);
			return;
		}

		const updatedCart = currentCart.map((item) =>
			item.id === productId ? { ...item, quantity: newQuantity } : item,
		);

		setCartItems(updatedCart);
		updateCartCount(updatedCart);
	};

	const removeFromCart = (productId: number) => {
		const currentCart = cartItems || [];
		const updatedCart = currentCart.filter((item) => item.id !== productId);
		setCartItems(updatedCart);
		updateCartCount(updatedCart);
	};

	const updateCartCount = (cart: CartItem[]) => {
		const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
		setCartCount(totalCount);
	};

	const getItemQuantity = (productId: number): number => {
		const currentCart = cartItems || [];
		const item = currentCart.find((item) => item.id === productId);
		return item ? item.quantity : 0;
	};
	return (
		<div className="space-y-6">
			{/* Cart Status Header */}
			<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold text-blue-800">Product Catalog</h2>
					<div className="flex items-center space-x-2">
						<span className="text-sm text-blue-700">Cart Items:</span>
						<div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
							{cartCount || 0}
						</div>
					</div>
				</div>
			</div>

			{/* Products Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => {
					const quantity = getItemQuantity(product.id);
					const isInCart = quantity > 0;

					return (
						<div
							key={product.id}
							className="flex-bc col bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300"
						>
							<div className="flex-sc col">
								{/* Product Image Placeholder */}
								<div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
									<div className="text-4xl">
										{product.id === 1 ? '🎧' : product.id === 2 ? '📱' : '🔋'}
									</div>
								</div>

								{/* Product Info */}
								<div className="text-center mb-4">
									<h3 className="font-bold text-gray-800 text-lg mb-2">
										{product.name}
									</h3>
									<p className="text-green-600 font-bold text-xl">
										${product.price.toFixed(2)}
									</p>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-col items-center space-y-3 ">
								{isInCart ? (
									// Quantity controls when item is in cart
									<>
										<div className="grid grid-cols-3 items-center bg-gray-100 rounded-lg px-3 py-2 w-full">
											<button
												onClick={() =>
													updateQuantity(product.id, quantity - 1)
												}
												className="w-8 h-8 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-700 font-bold border border-gray-200 shadow-sm transition-all hover:shadow-md justify-self-center"
											>
												−
											</button>
											<div className="flex flex-col items-center">
												<span className="text-xs text-gray-500 font-medium">
													QTY
												</span>
												<span className="font-bold text-gray-800 text-lg">
													{quantity}
												</span>
											</div>
											<button
												onClick={() =>
													updateQuantity(product.id, quantity + 1)
												}
												className="w-8 h-8 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-700 font-bold border border-gray-200 shadow-sm transition-all hover:shadow-md justify-self-center"
											>
												+
											</button>
										</div>
										<button
											onClick={() => removeFromCart(product.id)}
											className="w-full bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 py-2 px-4 rounded-lg font-medium transition-all border border-red-200 hover:border-red-300 flex items-center justify-center"
											title="Remove from cart"
										>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
													clipRule="evenodd"
												/>
												<path
													fillRule="evenodd"
													d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
													clipRule="evenodd"
												/>
											</svg>
										</button>
									</>
								) : (
									// Add to Cart button when item is not in cart
									<button
										onClick={() =>
											addToCart(product.id, product.name, product.price)
										}
										className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors hover:shadow-md"
									>
										Add to Cart
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>

			<div className="bg-gray-50 rounded-lg p-4">
				<p className="text-sm text-gray-600">
					🛍️ <strong>Component A:</strong> Product catalog that adds items to shared cart
					state. Watch Component B update instantly when you add items!
				</p>
			</div>
		</div>
	);
};
export default ComponentA;
