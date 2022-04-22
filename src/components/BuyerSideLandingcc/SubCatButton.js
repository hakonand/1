import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Grid, ButtonBase } from '@mui/material'
import Image from 'next/image'
import NextLink from 'next/link'

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 200,
	[theme.breakpoints.down('sm')]: {
		width: '100% !important', // Overrides inline-style
		height: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}))

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
})

const Image2 = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}))

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}))

export default function SubCatButton({ subcatTitle, subcatImg }) {
	return (
		<div>
			<ImageButton
				focusRipple
				style={{
					width: '100%',
				}}
			>
				<ImageSrc style={{ backgroundImage: `url(${subcatImg})` }} />
				<ImageBackdrop className='MuiImageBackdrop-root' />
				<Image2>
					<Typography
						component='span'
						variant='subtitle1'
						color='inherit'
						sx={{
							position: 'relative',
							p: 4,
							pt: 2,
							pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
						}}
					>
						{subcatTitle}
						<ImageMarked className='MuiImageMarked-root' />
					</Typography>
				</Image2>
			</ImageButton>
		</div>
	)
}
