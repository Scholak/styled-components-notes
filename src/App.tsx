import React from 'react'
import { GradientButton, StyledButton } from './components/Button/Button.styles'

const App = () => {
  return (
		<div>
			<StyledButton>default</StyledButton>
			<br />
			<br />
			<StyledButton variant='info'>info</StyledButton>
			<br />
			<br />
			<StyledButton variant='danger'>danger</StyledButton>
			<br />
			<br />
			<StyledButton variant='success'>success</StyledButton>
			<br />
			<br />
			<StyledButton variant='warning'>warning</StyledButton>
			<br />
			<br />
			<GradientButton
				direction='to right'
				from='#1e40af'
				to='#6b21a8'
        type='reset'
			>
				gradient button
			</GradientButton>
		</div>
	)
}

export default App
