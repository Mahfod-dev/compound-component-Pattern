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
				<ProductsCard product={product} className='bg'>
					<ProductsCard.Image className='custom-image' />
					<ProductsCard.Title title='' className='text-white' />
					<ProductsCard.Buttons className='custom-button' />
				</ProductsCard>
			</div>
		</div>
	);
};
