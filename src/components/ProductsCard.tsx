import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import '../styles/customStyle.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interface';
import { ProductButtons, ProductTitle, ProductImage } from '../components';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductsCard = ({
	children,
	product,
	className,
}: ProductCardProps) => {
	const { incrementOrDecrementShop, counter } = useProduct();
	return (
		<Provider value={{ incrementOrDecrementShop, counter, product }}>
			<div className={`${styles.productCard} ${className}`}>{children}</div>
		</Provider>
	);
};

ProductsCard.Title = ProductTitle;
ProductsCard.Image = ProductImage;
ProductsCard.Buttons = ProductButtons;
