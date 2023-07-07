import styled from 'styled-components'

interface ButtonProps {
  variant?: 'info' | 'danger' | 'success' | 'warning'
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