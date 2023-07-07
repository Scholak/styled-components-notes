import React from 'react'
import { StyledButton } from './components/Button/Button.styles'

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
		</div>
	)
}

export default App
