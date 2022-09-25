import { useContext } from 'react';
import { ProductContext } from './ProductsCard';
import styles from '../styles/styles.module.css';

interface Props {
	className?: string;
}

export const ProductButtons = ({ className }: Props) => {
	const { incrementOrDecrementShop, counter } = useContext(ProductContext);

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
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
