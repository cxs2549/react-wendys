import styled from 'styled-components'
import hero from '../../../assets/hero.jpg'
import appstore from '../../../assets/appstore.png'
import gplay from '../../../assets/gplay.png'
import { FaPepperHot } from 'react-icons/fa'

const StyledHero = styled.div`
	background-image: url(${hero});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	height: 60vh;
	padding: 1rem;
	position: relative;
    margin-bottom: 140px;
	&::after {
		content: '';
		position: absolute;
		bottom: -140px;
		left: 0;
		width: 100%;
		height: 144px;
        /* border: 2px solid white; */
		background: var(--brandRed);
        z-index: 0;
	}
	h2 {
		font-size: 210%;
		text-transform: uppercase;
		font-weight: 800;
		margin-top: -20px;
		color: var(--brandRed);
		span {
			font-size: 150%;
		}
	}
	h3 {
		font-size: 80%;
		text-transform: uppercase;
		margin-top: -1rem;
		opacity: .9;
	}
	h4 {
		font-size: 90%;
		margin-top: .5rem;
		font-weight: 700;
		text-transform: uppercase;
		opacity: .9;
	}
    p {
        color: #333;
        position: relative;
        z-index: 1;
    }
	button {
		background-color: var(--brandRed);
		color: white;
		padding: .75rem 1.75rem;
		max-width: 212px;
		white-space: nowrap;
		text-transform: uppercase;
		font-weight: 800;
		font-size: 125%;
		margin: 1.5rem 0;
		border-radius: 8px;
		display: flex;
		align-items: center;
		gap: .5rem;
	}
    #info {
        position: absolute;
        /* border: 2px solid white; */
        bottom: -124px;
        >div {
            /* background-color: #fff; */
            position: relative;
            z-index: 1;
            display: flex;
            gap: .75rem;
            margin: 1rem 0;
            img {
                max-width: 140px;
            }
        }
        p {
            font-size: 80%;
        }
    }
`
const Hero = () => {
	return (
		<StyledHero>
			<p>
				No matter what you get at Wendy’s, right now you can also get a FREE 6 PC Nuggs with
				it. Spicy or crispy. Better yet, get one, and then get the other for free. Grab that
				new Ghost Pepper Ranch, too. That stuff just heats different.
			</p>
			<h4>App-exclusive offer</h4>
			<h2>
				<span>6</span> nuggs for <span>0</span> bucks
			</h2>
			<h3>with purchase</h3>
			<button>
				<span>spice it up</span>
				<FaPepperHot />
			</button>
			<div id="info">
				<div>
                    <img src={appstore} alt="" />
                    <img src={gplay} alt="" />
                </div>
				<p>
					Offer valid for a limited time only at participating U.S. Wendy’s. Offer must be
					redeemed via the Wendy’s App. Account registration required. See offer details
					in the Wendy’s app.
				</p>
			</div>
		</StyledHero>
	)
}
export default Hero
