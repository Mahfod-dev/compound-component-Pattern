import { useState } from 'react';
export const useProduct = () => {
	const [counter, setCounter] = useState(0);

	const incrementOrDecrementShop = (value: number) => {
		setCounter((prevCount) => Math.max(prevCount + value, 0));
	};

	return {
		counter,
		incrementOrDecrementShop,
	};
};
