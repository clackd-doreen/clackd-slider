import React from 'react'

import {
	Slider,
	SliderArrows,
	SliderContent,
	SliderDots,
	SliderIndicator,
	SliderLightbox,
	SliderTabs,
} from '@components/Slider'

import './App.scss'


export const App = () => {
	console.log('')

	return (
		<div className="App">
			<img
				alt="clackd logo"
				className="logo__clackd"
				src="https://clackd.com/static/media/logo-black.1911b938.svg"
			/>

			<Slider initialSlide={ 5 }>
				<SliderTabs />
				<SliderArrows icon="chevron" />
				<SliderContent />
				<SliderDots />
				<SliderIndicator />
				<SliderLightbox />
			</Slider>
		</div>
	)
}
