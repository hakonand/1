import { useState, useEffect, useContext } from 'react'

// material

import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid, Typography } from '@mui/material'
import NextLink from 'next/link'

import { styled } from '@mui/material/styles'
// components

import BuyerSideWelcome from 'src/components/BuyerSideLandingcc/BuyerSideWelcome'
import BuyerSideHighlight from 'src/components/BuyerSideLandingcc/BuyerSideHighlight'
import BuyerSideHighlightRow from 'src/components/BuyerSideLandingcc/BuyerSideHighlightRow'
import BuyerSideRowOf3 from 'src/components/BuyerSideLandingcc/BuyerSideRowOf3'

import SubCatButton from 'src/components/storefrontfolder/SubCatButton'

import Page from 'src/components/Page'
import firebase from 'src/firebase/firebase'
import MainLayout from 'src/layouts/main'
import { AuthContext } from 'src/contexts/AuthContext'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Home() {
	const [isLoading, setIsLoading] = useState(false)

	const { user, updateFavorites, userInfo, favorites, removeFromFavorites } =
		useContext(AuthContext)

	const [posts, setPosts] = useState([])

	// useEffect(() => {
	// 	setIsLoading(true)
	// 	firebase
	// 		.firestore()
	// 		.collection('posts')
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			const newArray = []
	// 			querySnapshot.forEach((doc) => {
	// 				// doc.data() is never undefined for query doc snapshots
	// 				console.log(doc.data())
	// 				newArray.push(doc.data())
	// 			})
	// 			setPosts(newArray)
	// 			setIsLoading(false)
	// 		})
	// }, [])

	// const getMorePosts = () => {
	// 	firebase
	// 		.firestore()
	// 		.collection('norway')
	// 		.doc('posts')
	// 		.collection('category')
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			const newArray = [...posts]
	// 			querySnapshot.forEach((doc) => {
	// 				// doc.data() is never undefined for query doc snapshots
	// 				console.log(doc.data())
	// 				newArray.push(doc.data())
	// 			})
	// 			setPosts(newArray)
	// 		})
	// }

	// useEffect(() => {
	//   setIsLoading(true);
	//   firebase
	//     .firestore()
	//     .collection('norway')
	//     .doc('for_men')
	//     .collection('jacket')
	//     .get()
	//     .then((querySnapshot) => {
	//       const newArray = [];
	//       querySnapshot.forEach((doc) => {
	//         // doc.data() is never undefined for query doc snapshots
	//         console.log(doc.data());
	//         newArray.push(doc.data());
	//       });
	//       setProductLine1(newArray);
	//       setIsLoading(false);
	//     });
	// }, []);

	const [maincats, setMainCats] = useState([
		{
			id: 'Man',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Flanding%2Fpexels-lumn-322207.jpg?alt=media&token=3c33281a-4f18-46e4-94fc-5b58e74fac4b',
			color1: '#b9fbc0',
			color2: '#FBF8CC',
		},
		{
			id: 'Woman',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Flanding%2Fpexels-jean-van-der-meulen-1457842.jpg?alt=media&token=ad5b8b48-0996-4a13-8ed5-de48cf643558',
			color1: '#fde4cf',
			color2: '#FFCFD2',
		},
		{
			id: 'Interior',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image: '/static/home/product_img_1.jpg',
			color1: '#fde4cf',
			color2: '#FFCFD2',
		},
		{
			id: 'Electronics',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Flanding%2Fpexels-yugandhar-bonde-4673285.jpg?alt=media&token=8c9bc510-dff8-4302-aa74-f4186e99469a',
			color1: '#fde4cf',
			color2: '#FFCFD2',
		},
	])

	const [subcats, setSubCats] = useState([
		{
			id: 'Jackets',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			exImages: '/static/home/product_img_1.jpg',
			color1: '#b9fbc0',
			color2: '#FBF8CC',
			productsArray: [
				{
					id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba012313123',
					cover: '/static/home/product_img_1.jpg',
					images: '../../images/img1',
					name: 'testtest',
					price: 123,
					colors: ['purple', 'black', 'midnight blue'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
				{
					id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba022222',
					cover: '/static/home/product_img_2.jpg',
					images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
					name: 'Test2',
					price: 1234,
					colors: ['blue', 'red', 'purple', 'yellow', 'black'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
				{
					id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba033',
					cover: '/static/home/product_img_1.jpg',

					images: '../../images/img1',
					name: 'testtest',
					price: 123,
					colors: ['purple', 'black', 'midnight blue'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
				{
					id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba012312312',
					cover: '/static/home/product_img_2.jpg',
					images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
					name: 'Test2',
					price: 1234,
					colors: ['blue', 'red', 'purple', 'yellow', 'black'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
			],
		},

		{
			id: 'Shirts',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			exImages: '/static/home/product_img_1.jpg',
			color1: '#fde4cf',
			color2: '#FFCFD2',
			productsArray: [
				{
					id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba012313123',
					cover: '/static/home/product_img_1.jpg',
					images: '../../images/img1',
					name: 'testtest',
					price: 123,
					colors: ['purple', 'black', 'midnight blue'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
				{
					id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba022222',
					cover: '/static/home/product_img_2.jpg',
					images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
					name: 'Test2',
					price: 1234,
					colors: ['blue', 'red', 'purple', 'yellow', 'black'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
				{
					id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba033',
					cover: '/static/home/product_img_1.jpg',

					images: '../../images/img1',
					name: 'testtest',
					price: 123,
					colors: ['purple', 'black', 'midnight blue'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
				{
					id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba012312312',
					cover: '/static/home/product_img_2.jpg',
					images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
					name: 'Test2',
					price: 1234,
					colors: ['blue', 'red', 'purple', 'yellow', 'black'],
					inventoryType: 'in_stock',
					status: 'sale',
				},
			],
		},
	])

	const [forMen, setForMen] = useState([
		{
			title: 'Hoodies',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fwhereslugo-qq-YDhd3bbg-unsplash.jpg?alt=media&token=f8b1405e-9971-4094-ae07-61047d8de387',
		},
		{
			title: 'Shoes',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fproduct_18.jpg?alt=media&token=dababc6a-5995-4107-811e-644e233b1d30',
		},
		{
			title: 'Jackets',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Famanda-vick-ohWf6YuzOQk-unsplash.jpg?alt=media&token=65c8cc38-3b6c-43a0-a5e3-0cbc6be2ed8f',
		},
	])

	const [forWomen, setForWomen] = useState([
		{
			title: 'Hats',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fclem-onojeghuo-vU2MmvDCmUo-unsplash.jpg?alt=media&token=d01a90f1-8061-4107-9bcc-7e8c2ef4c226',
		},
		{
			title: 'Dresses',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Falexander-kovacs-NHqLJrlHvDY-unsplash.jpg?alt=media&token=20b4077a-5c74-4955-b5ef-161315c209ea',
		},
		{
			title: 'Shoes',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fproduct_10.jpg?alt=media&token=4a4f0816-ed47-4716-a736-9a308b0236d5',
		},
		{
			title: 'Accessories',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fvadim-sherbakov-tCICLJ5ktBE-unsplash.jpg?alt=media&token=53327112-ab95-4f89-9081-9a0566254320',
		},
	])

	const [electronics, setElectronics] = useState([
		{
			title: 'Phones',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fomid-armin-skoebzCO9tc-unsplash.jpg?alt=media&token=b6aef3f4-5b48-41a3-b50b-894d7f78a209',
		},
		{
			title: 'Fridges',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fnrd-FDQFZHY9iG4-unsplash.jpg?alt=media&token=a0f2fc4f-cfd1-4b52-a32c-56a8f0d7bba3',
		},
		{
			title: 'Tv & Screen',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/mock-images%2Fjonas-leupe-Fhwg7BrGUpk-unsplash.jpg?alt=media&token=6324917d-5aa3-4e94-94c6-72c4871e3189',
		},
	])

	return (
		<MainLayout>
			<BuyerSideWelcome subcats={subcats} user={user} maincats={maincats} />

			<Grid container spacing={1} p={1}>
				<Grid item xs={12}>
					<Typography variant='h3' gutterBottom>
						Browse categories
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h6' gutterBottom>
						For Men
					</Typography>
				</Grid>
				{forMen.map((item, index) => (
					<Grid item xs={4} key={index}>
						<NextLink href='/ForMen/jackets'>
							<SubCatButton subcatTitle={item.title} subcatImg={item.img} />
						</NextLink>
					</Grid>
				))}

				<Grid item xs={12}>
					<Typography variant='h6' gutterBottom>
						For Women
					</Typography>
				</Grid>
				{forWomen.map((item, index) => (
					<Grid item xs={3} key={index}>
						<NextLink href='/ForMen/jackets'>
							<SubCatButton subcatTitle={item.title} subcatImg={item.img} />
						</NextLink>
					</Grid>
				))}

				<Grid item xs={12}>
					<Typography variant='h6' gutterBottom>
						Electronics
					</Typography>
				</Grid>
				{electronics.map((item, index) => (
					<Grid item xs={4} key={index}>
						<NextLink href='/ForMen/jackets'>
							<SubCatButton subcatTitle={item.title} subcatImg={item.img} />
						</NextLink>
					</Grid>
				))}
			</Grid>
		</MainLayout>
	)
}

// <InfiniteScroll
// 				next={getMorePosts}
// 				hasMore
// 				loader={<Typography variant='h6'>Getting more posts...</Typography>}
// 				dataLength={posts.length}
// 				style={{ overflow: 'hidden' }}
// 			>
// 				{posts.map((item, index) => (
// 					<BuyerSideHighlight post={[item]} isLoading={isLoading} key={index} />
// 				))}
// 			</InfiniteScroll>
