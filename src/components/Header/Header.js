import styled from 'styled-components'
const StyledHeader = styled.header`
	--padding: 1rem;
	height: 60px;
	background-color: gray;

	#wrapper {
        padding: 0 var(--padding);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		position: relative;
		height: 100%;
		max-width: 1150px;
		margin: 0 auto;
		@media (min-width: 768px) {
            justify-content: flex-end;
		}
        
		/* logo */
		> div:nth-of-type(2) {
            position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			@media (min-width: 768px) {
                left: var(--padding);
				transform: translateY(-50%);
			}
		}
        /* search */
        >div:nth-of-type(4) {
            display: none;
            @media (min-width: 768px) {
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
		justify-content: center;
        border-top: 2px solid black;
		background-color: gray;
        >div:first-of-type {
            display: flex;
            gap: 1rem;
            @media (min-width: 768px) {
                display: none;
            }
        }
        ul {
            display: none;
            @media (min-width: 768px) {
                display: flex;
                gap: 4rem;
            }
        }
	}
`
const Header = () => {
	return (
		<StyledHeader>
			<div id="wrapper">
				<div>find</div>
				<div>logo</div>
				<div>sign in</div>
				<div>search</div>
				<div>
					<button>order pickup</button>
					<button>order delivery</button>
				</div>
			</div>
			<div>
				<div>
                    <button>view our menu</button>
                    <button>start an order</button>
                </div>
                <ul>
                    <li>links</li>
                    <li>links</li>
                    <li>links</li>
                    <li>links</li>
                </ul>
			</div>
		</StyledHeader>
	)
}
export default Header
