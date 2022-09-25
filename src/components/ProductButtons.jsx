import { useContext } from 'react';
import { ProductContext } from './ProductsCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
	const { incrementOrDecrementShop, counter } = useContext(ProductContext);

	return (
		<div className={styles.buttonsContainer}>
			<button
				onClick={() => incrementOrDecrementShop(-1)}
				className={styles.buttonMinus}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>

			<button
				onClick={() => incrementOrDecrementShop(1)}
				className={styles.buttonAdd}>
				+
			</button>
		</div>
	);
};
