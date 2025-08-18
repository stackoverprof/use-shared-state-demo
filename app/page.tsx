'use client';

import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const TestPage = () => {
	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800 mb-2">🛍️ Shopping Cart Demo</h1>
				<p className="text-lg text-gray-600">
					Showcasing{' '}
					<code className="bg-gray-200 px-2 py-1 rounded font-mono text-sm">
						useSharedState
					</code>{' '}
					- Real-time state sharing without prop drilling!
				</p>
			</div>
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<ComponentA />
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<ComponentB />
					</div>
				</div>

				{/* ComponentC - Full width below A and B */}
				<div className="mt-8">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<ComponentC />
					</div>
				</div>
			</div>

			{/* Documentation Section */}
			<div className="max-w-6xl mx-auto mt-16">
				<div className="bg-white rounded-xl shadow-lg p-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
						📚 useSharedState Documentation
					</h2>

					{/* Overview */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							🎯 What is useSharedState?
						</h3>
						<p className="text-gray-600 leading-relaxed">
							<code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
								useSharedState
							</code>{' '}
							is a revolutionary React hook that enables real-time state sharing
							between components without prop drilling, context providers, or complex
							state management libraries. Built on top of SWR&apos;s caching
							mechanism, it provides a simple, elegant solution for cross-component
							state synchronization. <strong>Plus</strong>, keys prefixed with{' '}
							<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">
								@
							</code>{' '}
							are automatically persisted to localStorage and synchronized across
							tabs!
						</p>
					</div>

					{/* Key Features */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							✨ Key Features
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="bg-blue-50 p-4 rounded-lg">
								<h4 className="font-semibold text-blue-800 mb-2">
									🚀 Zero Boilerplate
								</h4>
								<p className="text-blue-700 text-sm">
									No providers, reducers, or complex setup required.
								</p>
							</div>
							<div className="bg-green-50 p-4 rounded-lg">
								<h4 className="font-semibold text-green-800 mb-2">
									⚡ Real-time Sync
								</h4>
								<p className="text-green-700 text-sm">
									Changes propagate instantly across all components.
								</p>
							</div>
							<div className="bg-purple-50 p-4 rounded-lg">
								<h4 className="font-semibold text-purple-800 mb-2">
									🎯 Selective Sharing
								</h4>
								<p className="text-purple-700 text-sm">
									Share only what you need with key-based access.
								</p>
							</div>
							<div className="bg-orange-50 p-4 rounded-lg">
								<h4 className="font-semibold text-orange-800 mb-2">🔒 Type Safe</h4>
								<p className="text-orange-700 text-sm">
									Full TypeScript support with generic types.
								</p>
							</div>
							<div className="bg-pink-50 p-4 rounded-lg">
								<h4 className="font-semibold text-pink-800 mb-2">
									💾 Auto Persistence
								</h4>
								<p className="text-pink-700 text-sm">
									Keys with @ prefix persist to localStorage automatically.
								</p>
							</div>
							<div className="bg-teal-50 p-4 rounded-lg">
								<h4 className="font-semibold text-teal-800 mb-2">
									🌐 Cross-tab Sync
								</h4>
								<p className="text-teal-700 text-sm">
									Persistent state syncs across browser tabs in real-time.
								</p>
							</div>
						</div>
					</div>

					{/* Basic Usage */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">📖 Basic Usage</h3>
						<div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
							<div className="mb-4">
								{/* Component A */}
								<br />
								<span className="text-blue-400">const</span> [count, setCount] ={' '}
								<span className="text-yellow-400">useSharedState</span>(
								<span className="text-red-400">&apos;counter&apos;</span>,{' '}
								<span className="text-purple-400">0</span>);
								<br />
								<br />
								{/* Component B (anywhere in your app) */}
								<br />
								<span className="text-blue-400">const</span> [count, setCount] ={' '}
								<span className="text-yellow-400">useSharedState</span>(
								<span className="text-red-400">&apos;counter&apos;</span>);
								<br />
								<br />
								{/* Persistent state (survives page refresh + cross-tab sync) */}
								<br />
								<span className="text-blue-400">const</span> [cart, setCart] ={' '}
								<span className="text-yellow-400">useSharedState</span>(
								<span className="text-red-400">&apos;@cart-items&apos;</span>,{' '}
								<span className="text-purple-400">[]</span>);
								<br />
								<br />
								{/* Both components stay in perfect sync! ✨ */}
							</div>
						</div>
					</div>

					{/* API Reference */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							📋 API Reference
						</h3>
						<div className="bg-gray-50 p-4 rounded-lg">
							<div className="font-mono text-sm mb-4">
								<span className="text-blue-600">useSharedState</span>&lt;
								<span className="text-purple-600">T</span>&gt;(
								<span className="text-green-600">key</span>:{' '}
								<span className="text-orange-600">string</span>,
								<span className="text-green-600">initialValue</span>?:{' '}
								<span className="text-purple-600">T</span>)
							</div>
							<div className="space-y-3">
								<div>
									<strong className="text-gray-700">Parameters:</strong>
									<ul className="mt-1 ml-4 space-y-1 text-sm text-gray-600">
										<li>
											<code className="bg-gray-200 px-1 rounded">key</code> -
											Unique identifier for the shared state. Keys starting
											with <code className="bg-gray-200 px-1 rounded">@</code>{' '}
											are automatically persisted to localStorage and synced
											across tabs.
										</li>
										<li>
											<code className="bg-gray-200 px-1 rounded">
												initialValue
											</code>{' '}
											- Optional initial value (used only on first access)
										</li>
									</ul>
								</div>
								<div>
									<strong className="text-gray-700">Returns:</strong>
									<p className="mt-1 text-sm text-gray-600">
										<code className="bg-gray-200 px-1 rounded">
											[value, setValue]
										</code>{' '}
										- Current value and setter function (just like useState!)
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* How It Works */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							⚙️ How It Works
						</h3>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
									1
								</div>
								<div>
									<h4 className="font-semibold text-gray-700">
										Global State Storage
									</h4>
									<p className="text-gray-600 text-sm">
										Uses a Map to store shared state with string keys for
										efficient access.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
									2
								</div>
								<div>
									<h4 className="font-semibold text-gray-700">SWR Integration</h4>
									<p className="text-gray-600 text-sm">
										Leverages SWR&apos;s caching and revalidation system for
										state synchronization.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
									3
								</div>
								<div>
									<h4 className="font-semibold text-gray-700">
										Automatic Updates
									</h4>
									<p className="text-gray-600 text-sm">
										When state changes, SWR&apos;s mutate() triggers re-renders
										across all subscribed components.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Advanced Examples */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							🚀 Advanced Examples
						</h3>
						<div className="space-y-4">
							<div>
								<h4 className="font-medium text-gray-700 mb-2">
									Complex State Objects
								</h4>
								<div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono">
									<span className="text-blue-400">const</span> [user, setUser] ={' '}
									<span className="text-yellow-400">useSharedState</span>&lt;
									<span className="text-purple-400">User</span>&gt;(
									<span className="text-red-400">&apos;current-user&apos;</span>);
								</div>
							</div>
							<div>
								<h4 className="font-medium text-gray-700 mb-2">Array State</h4>
								<div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono">
									<span className="text-blue-400">const</span> [items, setItems] ={' '}
									<span className="text-yellow-400">useSharedState</span>&lt;
									<span className="text-purple-400">CartItem[]</span>&gt;(
									<span className="text-red-400">&apos;cart-items&apos;</span>,
									[]);
								</div>
							</div>
							<div>
								<h4 className="font-medium text-gray-700 mb-2">
									Updater Functions
								</h4>
								<div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono">
									<span className="text-yellow-400">setCount</span>(prev =&gt;
									(prev || <span className="text-purple-400">0</span>) +{' '}
									<span className="text-purple-400">1</span>);
								</div>
							</div>
							<div>
								<h4 className="font-medium text-gray-700 mb-2">
									Persistent State (Cross-tab + Refresh Proof)
								</h4>
								<div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono">
									<span className="text-blue-400">const</span> [settings,
									setSettings] ={' '}
									<span className="text-yellow-400">useSharedState</span>&lt;
									<span className="text-purple-400">Settings</span>&gt;(
									<span className="text-red-400">&apos;@user-settings&apos;</span>
									);
								</div>
							</div>
						</div>
					</div>

					{/* Comparison */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-700 mb-3">⚖️ Comparison</h3>
						<div className="overflow-x-auto">
							<table className="w-full border-collapse border border-gray-200">
								<thead>
									<tr className="bg-gray-50">
										<th className="border border-gray-200 px-4 py-2 text-left">
											Feature
										</th>
										<th className="border border-gray-200 px-4 py-2 text-center">
											useSharedState
										</th>
										<th className="border border-gray-200 px-4 py-2 text-center">
											Redux
										</th>
										<th className="border border-gray-200 px-4 py-2 text-center">
											Context
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="border border-gray-200 px-4 py-2 font-medium">
											Setup
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											✅ Zero
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											❌ Complex
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											⚠️ Providers
										</td>
									</tr>
									<tr>
										<td className="border border-gray-200 px-4 py-2 font-medium">
											Performance
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											✅ Optimized
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											✅ Good
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											❌ Re-renders
										</td>
									</tr>
									<tr>
										<td className="border border-gray-200 px-4 py-2 font-medium">
											Learning Curve
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											✅ Minimal
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											❌ Steep
										</td>
										<td className="border border-gray-200 px-4 py-2 text-center">
											⚠️ Moderate
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Best Practices */}
					<div>
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							💡 Best Practices
						</h3>
						<div className="bg-yellow-50 p-4 rounded-lg">
							<ul className="space-y-2 text-sm text-yellow-800">
								<li>• Use descriptive, unique keys for different state types</li>
								<li>• Provide initial values for better TypeScript inference</li>
								<li>• Consider using constants for frequently used keys</li>
								<li>
									• Use <code className="bg-yellow-100 px-1 rounded">@</code>{' '}
									prefix for data that should persist across page refreshes
								</li>
								<li>• Persistent keys automatically sync across browser tabs</li>
								<li>
									• Perfect for forms, shopping carts, user preferences, and UI
									state
								</li>
								<li>• Great for prototyping and small to medium applications</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestPage;
