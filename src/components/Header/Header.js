import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { BiUser, BiMap, BiSearch } from 'react-icons/bi'
const StyledHeader = styled.header`
	--padding: 1rem;
	height: 60px;
	background-color: white;
	color: #333;

	button {
		background-color: var(--brandRed);
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		border: none;
		padding: .75rem 1.25rem;
		border-radius: 9999px;
		@media (min-width: 768px) {
			background-color: #fff;
			color: var(--brandRed);
		}
	}

	#wrapper {
		padding: 0 var(--padding);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		position: relative;
		height: 100%;
		max-width: 1150px;
		margin: 0 auto;
		text-transform: capitalize;
		@media (min-width: 768px) {
			justify-content: flex-end;
		}
		a {
			text-decoration: none;
			color: inherit;
			font-weight: 500;
			font-size: 90%;
			display: flex;
			flex-flow: column;
			align-items: center;
			gap: .15rem;
			opacity: .85;
			@media (min-width: 768px) {
				flex-flow: row;
			}
			&:hover {
				opacity: 1;
			}
			svg {
				font-size: 1.45rem;
				color: var(--brandRed);
			}
		}

		/* logo */
		> div:nth-of-type(1) {
			display: flex;
			align-items: center;
			gap: 2rem;
			img {
				max-width: 70px;
				filter: brightness(.95);
			}
			ul {
				display: none;
				font-weight: 500;
				@media (min-width: 768px) {
					display: flex;
					gap: 4rem;
				}
				&:first-of-type {
					@media (min-width: 1280px) {
						display: none;
					}
				}
				&:last-of-type {
					display: none;
					@media (min-width: 1280px) {
						display: flex;
					}
				}
			}
		}
		/* find */
		> div:nth-of-type(2) {
			margin-left: auto;
		}
		/* search */
		> div:nth-of-type(4) {
			display: none;
			@media (min-width: 1024px) {
				display: block;
			}
		}
		/* buttons */
		> div:nth-of-type(5) {
			display: none;
			@media (min-width: 768px) {
				display: flex;
				gap: 1rem;
			}
		}
	}
	> div:last-of-type {
		padding: 1rem;
		display: flex;
		align-items: center;
		border-top: 2px solid var(--borderColor);
		border-bottom: 2px solid var(--borderColor);
		background-color: white;
		text-transform: capitalize;
		justify-content: center;
		@media (min-width: 768px) {
			background-color: var(--brandRed);
			color: white;
			border: none;
		}
		> div {
			display: flex;
			gap: 1rem;
			&:first-of-type {
				@media (min-width: 768px) {
					display: none;
				}
			}
            &:last-of-type {
                display: none;
                @media (min-width: 768px) {
                    display: flex;
                }
            }
		}
	}
`
const Header = () => {
	const links = [ 'menu', 'values', 'company', 'jobs' ]
	const linksLong = [ 'view our menu', 'what we value', 'who we are', 'find jobs' ]
	return (
		<StyledHeader>
			<div id="wrapper">
				<div>
					<img src={logo} alt="" />
					<ul>{links.map((link, i) => <li key={i}>{link}</li>)}</ul>
					<ul>{linksLong.map((link, i) => <li key={i}>{link}</li>)}</ul>
				</div>
				<div>
					<a href="/">
						<BiMap />
						<span>find</span>
					</a>
				</div>
				<div>
					<a href="/">
						<BiUser />
						<span>sign in</span>
					</a>
				</div>
				<div>
					<a href="/">
						<BiSearch />
						<span>search</span>
					</a>
				</div>
			</div>
			<div>
				<div>
					<button>view our menu</button>
					<button>start an order</button>
				</div>
				<div>
					<button>order pickup</button>
					<button>order delivery</button>
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
