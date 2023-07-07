import styled from 'styled-components'

interface ButtonProps {
  variant?: 'info' | 'danger' | 'success' | 'warning'
}

interface GradientButtonProps extends ButtonProps {
	from: string
	to: string
  direction: string
  text?: 'white' | 'dark'
}

const buttonVariant = (variant: string | undefined) => {

  let background: string
  
  switch (variant) {
		case 'info':
			background = '#0284c7'
			break

		case 'danger':
			background = '#dc2626'
			break

		case 'success':
			background = '#16a34a'
			break

		case 'warning':
			background = '#eab308'
			break

		default:
			background = '#334155'
	}

  return background
}

export const StyledButton = styled.button<ButtonProps>`
	border: none;
	outline: none;

	padding: 12px 24px;
	font-size: 20px;
	font-weight: 500;
	border-radius: 8px;
	background: ${props => buttonVariant(props.variant)};
	color: #fff;
	cursor: pointer;
`

export const GradientButton = styled(StyledButton)<GradientButtonProps>`
  background: linear-gradient(${props => props.direction}, ${props => props.from}, ${props => props.to});
  color: ${props => props?.text === 'dark' ? '#000' : '#fff'}
`