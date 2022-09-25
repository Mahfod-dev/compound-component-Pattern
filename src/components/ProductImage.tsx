import { useContext } from 'react';
import { ProductContext } from './ProductsCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {
	const { product } = useContext(ProductContext);
	let imgShow: string;

	if (img) {
		imgShow = img;
	} else if (product.img) {
		imgShow = product.img;
	} else {
		imgShow = noImage;
	}

	return <img className={styles.productImg} src={imgShow} alt='Coffee Mug' />;
};