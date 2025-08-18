'use client';

import React, { useRef, useEffect } from 'react';
import { useSharedState } from '@stackoverprof/use-shared-state';

export interface UserSettings {
	name: string;
	phone: string;
	email: string;
}

const ComponentC = () => {
	// Render counter
	const renderCount = useRef(0);

	useEffect(() => {
		renderCount.current += 1;
		console.log(`🔄 ComponentC rendered ${renderCount.current} times`);
	});

	// Using persistent storage (@) so user settings survive page refresh and sync across tabs
	const [userSettings, setUserSettings] = useSharedState<UserSettings>('@user-settings', {
		name: '',
		phone: '',
		email: '',
	});

	const handleNameChange = (name: string) => {
		setUserSettings((prev) => ({
			...prev!,
			name,
		}));
	};

	const handlePhoneChange = (phone: string) => {
		setUserSettings((prev) => ({
			...prev!,
			phone,
		}));
	};

	const handleEmailChange = (email: string) => {
		setUserSettings((prev) => ({
			...prev!,
			email,
		}));
	};

	const clearSettings = () => {
		setUserSettings({
			name: '',
			phone: '',
			email: '',
		});
	};

	return (
		<div className="relative">
			{/* Floating Render Counter */}
			<div className="absolute -top-[4px] -right-[4px] bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg z-10">
				Renders: {renderCount.current}
			</div>

			<div className="flex-sc mb-6">
				<h2 className="text-2xl mr-6 font-bold text-gray-800">👤 User Settings</h2>
				<div className="flex items-center space-x-2">
					<span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
						Persistent (@user-settings)
					</span>
					<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
						Cross-tab Sync
					</span>
				</div>
			</div>

			<p className="text-gray-600 mb-6">
				This component demonstrates persistent user settings that survive page refresh and
				sync across browser tabs. Try opening this page in another tab to see real-time
				synchronization!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				{/* Name Field */}
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">Full Name</label>
					<input
						type="text"
						value={userSettings?.name || ''}
						onChange={(e) => handleNameChange(e.target.value)}
						placeholder="Enter your full name"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
					/>
					<p className="text-xs text-gray-500">
						{userSettings?.name ? `✓ ${userSettings.name}` : 'Name not set'}
					</p>
				</div>

				{/* Phone Field */}
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">Phone Number</label>
					<input
						type="tel"
						value={userSettings?.phone || ''}
						onChange={(e) => handlePhoneChange(e.target.value)}
						placeholder="Enter your phone number"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
					/>
					<p className="text-xs text-gray-500">
						{userSettings?.phone ? `✓ ${userSettings.phone}` : 'Phone not set'}
					</p>
				</div>

				{/* Email Field */}
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">Email Address</label>
					<input
						type="email"
						value={userSettings?.email || ''}
						onChange={(e) => handleEmailChange(e.target.value)}
						placeholder="Enter your email"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
					/>
					<p className="text-xs text-gray-500">
						{userSettings?.email ? `✓ ${userSettings.email}` : 'Email not set'}
					</p>
				</div>
			</div>

			{/* Actions */}
			<div className="flex justify-between items-center pt-4 border-t">
				<div className="text-sm text-gray-600">
					💾 Auto-saved to localStorage | 🔄 Syncs across tabs
				</div>
				<button
					onClick={clearSettings}
					className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
				>
					Clear Settings
				</button>
			</div>
		</div>
	);
};

export default ComponentC;
