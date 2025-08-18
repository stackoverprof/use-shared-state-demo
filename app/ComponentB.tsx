'use client';

import React from 'react';
import { useSharedState } from '@stackoverprof/use-shared-state';
import { UserSettings } from './ComponentC';
import RenderCounter from './components/RenderCounter';

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

const ComponentB = () => {
	// Shared cart state - using @ prefix for persistent storage
	const [cartItems, setCartItems] = useSharedState<CartItem[]>('cart-items', []);
	const [cartCount, setCartCount] = useSharedState<number>('cart-count', 0);

	const updateQuantity = (itemId: number, newQuantity: number) => {
		const currentCart = cartItems || [];

		if (newQuantity <= 0) {
			// Remove item if quantity is 0 or less
			removeItem(itemId);
			return;
		}

		const updatedCart = currentCart.map((item) =>
			item.id === itemId ? { ...item, quantity: newQuantity } : item,
		);

		setCartItems(updatedCart);
		updateCartCount(updatedCart);
	};

	const removeItem = (itemId: number) => {
		const currentCart = cartItems || [];
		const updatedCart = currentCart.filter((item) => item.id !== itemId);
		setCartItems(updatedCart);
		updateCartCount(updatedCart);
	};

	const updateCartCount = (cart: CartItem[]) => {
		const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
		setCartCount(totalCount);
	};

	const calculateTotal = () => {
		const currentCart = cartItems || [];
		return currentCart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const clearCart = () => {
		setCartItems([]);
		setCartCount(0);
	};

	const currentCart = cartItems || [];
	const isEmpty = currentCart.length === 0;
	const total = calculateTotal();

	const [userSettings] = useSharedState<UserSettings>('@user-settings');

	return (
		<div className="bg-white p-6 rounded-lg shadow-md relative">
			{/* Render Counter */}
			<RenderCounter name="ComponentB" color="orange" position="top-right" />

			{/* Cart Header */}
			<div className="bg-green-50 border mb-6 border-green-200 rounded-lg p-4">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold text-green-800">
						{userSettings?.name
							? `${userSettings.name}'s Shopping Cart`
							: 'Shopping Cart'}
					</h2>
					<div className="flex items-center space-x-4">
						<div className="text-sm text-green-700">
							Total: <span className="font-semibold">${total.toFixed(2)}</span>
						</div>
						{!isEmpty && (
							<button
								onClick={clearCart}
								className="text-red-600 hover:text-red-800 text-sm font-medium"
							>
								Clear Cart
							</button>
						)}
					</div>
				</div>
			</div>

			{/* Cart Items */}
			<div className="space-y-3 mb-6">
				{isEmpty ? (
					<div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
						<div className="text-gray-400 text-4xl mb-2">🛒</div>
						<p className="text-gray-500 font-medium">Your cart is empty</p>
						<p className="text-gray-400 text-sm">
							Add items from Component A to get started!
						</p>
					</div>
				) : (
					currentCart.map((item) => (
						<div
							key={item.id}
							className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
						>
							<div className="flex items-center justify-between">
								<div className="flex-1">
									<h3 className="font-semibold text-gray-800">{item.name}</h3>
									<p className="text-green-600 font-medium">
										${item.price.toFixed(2)} each
									</p>
								</div>

								<div className="flex items-center space-x-3">
									{/* Quantity Controls */}
									<div className="flex items-center space-x-2">
										<button
											onClick={() =>
												updateQuantity(item.id, item.quantity - 1)
											}
											className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-medium"
										>
											−
										</button>
										<span className="w-8 text-center font-medium">
											{item.quantity}
										</span>
										<button
											onClick={() =>
												updateQuantity(item.id, item.quantity + 1)
											}
											className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-medium"
										>
											+
										</button>
									</div>

									{/* Item Total */}
									<div className="text-right min-w-[80px]">
										<div className="font-semibold text-gray-800">
											${(item.price * item.quantity).toFixed(2)}
										</div>
									</div>

									{/* Remove Button */}
									<button
										onClick={() => removeItem(item.id)}
										className="text-red-500 hover:text-red-700 p-1"
										title="Remove item"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					))
				)}
			</div>

			{/* Cart Summary */}
			{!isEmpty && (
				<div className="bg-green-50 border border-green-200 rounded-lg p-4">
					<div className="flex justify-between items-center">
						<span className="font-semibold text-green-800">
							Total ({cartCount} items):
						</span>
						<span className="text-xl font-bold text-green-800">
							${total.toFixed(2)}
						</span>
					</div>
				</div>
			)}

			<div className="bg-gray-50 rounded-lg p-4">
				<p className="text-sm text-gray-600">
					🛒 <strong>Component B:</strong> Shopping cart that shares state with Component
					A. Add items from the catalog and watch them appear here instantly!
				</p>
			</div>
		</div>
	);
};

export default ComponentB;
