import React from 'react'

import {
	Slider,
	SliderArrows,
	SliderContent,
	// SliderDots,
	SliderHeader,
	SliderIndicator,
	SliderLightbox,
	SliderTabs,
} from '@components/Slider'

import './App.scss'


export const App = () => (
	<div className="App">
		<Slider>
			<SliderHeader>
				<img
					alt="clackd logo"
					className="logo__clackd"
					src="https://clackd.com/static/media/logo-black.1911b938.svg"
				/>
			</SliderHeader>
			<SliderTabs />
			<SliderContent>
				<SliderArrows icon="chevron" />
			</SliderContent>
			{/* <SliderDots /> */}
			<SliderIndicator />
			<SliderLightbox />
		</Slider>
	</div>
)
