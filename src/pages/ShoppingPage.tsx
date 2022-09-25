import { ProductsCard } from '../components/ProductsCard';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}>
				<ProductsCard product={product}>
					<ProductsCard.Image />
					<ProductsCard.Title title='' />
					<ProductsCard.Buttons />
				</ProductsCard>
			</div>
		</div>
	);
};
