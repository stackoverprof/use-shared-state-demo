'use client';

import React, { useRef, useEffect } from 'react';

interface RenderCounterProps {
	name?: string;
	color?: 'green' | 'orange' | 'purple' | 'blue' | 'red' | 'yellow' | 'pink' | 'indigo';
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	className?: string;
}

const RenderCounter: React.FC<RenderCounterProps> = ({
	name = 'Component',
	color = 'blue',
	position = 'top-right',
	className = '',
}) => {
	const renderCount = useRef(0);

	useEffect(() => {
		renderCount.current += 1;
		console.log(`🔄 ${name} rendered ${renderCount.current} times`);
	});

	const colorClasses = {
		green: 'bg-green-500',
		orange: 'bg-orange-500',
		purple: 'bg-purple-500',
		blue: 'bg-blue-500',
		red: 'bg-red-500',
		yellow: 'bg-yellow-500',
		pink: 'bg-pink-500',
		indigo: 'bg-indigo-500',
	};

	const positionClasses = {
		'top-right': 'absolute -top-1 -right-1',
		'top-left': 'absolute -top-1 -left-1',
		'bottom-right': 'absolute -bottom-1 -right-1',
		'bottom-left': 'absolute -bottom-1 -left-1',
	};

	return (
		<div
			className={`${positionClasses[position]} ${colorClasses[color]} text-white px-2 py-1 rounded-full font-bold shadow-lg z-50 ${className}`}
		>
			{renderCount.current}
		</div>
	);
};

export default RenderCounter;
