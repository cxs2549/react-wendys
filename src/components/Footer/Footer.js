import styled from "styled-components";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import wordLogo from '../../assets/name-logo.png'
const StyledFooter = styled.footer`
  background-color: #252525;
  color: white;
  padding: 1.75rem 1rem;
  @media (min-width: 1280px) {
    padding: 1.75rem 0;
  }
  #wrapper {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  #socials {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
    padding-bottom: 2.5rem;
    @media (min-width: 768px) {
      justify-content: space-between;
      flex-flow: row;
    }
    img {
      max-width: 140px;
   
    }
    >div {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      width: 40%;
      max-width: 200px;
      @media (min-width: 1024px) {
      }
    }
    svg {
      font-size: 2rem;
      &:hover {
        color: var(--brandRed);
      }
    }
  }
  #links {
    /* max-width: min-content; */
    margin: 0 auto;
    display: grid;
    /* border: 2px solid white; */
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-transform: capitalize;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1fr;
      max-width: 100%;
      gap: 1rem;
    }
    ul {
      display: flex;
      flex-flow: column;
      gap: 1.5rem;
      white-space: nowrap;
      @media (min-width: 1024px) {
        flex-flow: row;
      }
      &:first-of-type {
        font-weight: bold;
        @media (min-width: 768px) {
          display: none;
        }
      }
      &:nth-of-type(2) {
        @media (min-width: 768px) {
          font-weight: bold;
        }
      }
      li:hover {
        color: var(--brandRed);
        cursor: pointer;
      }
    }
  }
  #sitelinks {
    ul {
      white-space: nowrap;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 1.5rem 0;
      text-transform: capitalize;
      font-size: 85%;
      li {
        margin-right: 1rem;
      }
    }
  }
  #copy {
    font-size: 80%;
    margin-top: 1rem;
    padding: 1rem 0;
  }
`;
const Footer = () => {
  const links1 = ["menu", "values", "company", "find jobs"];
  const links2 = ["gift cards", "contact us", "investors", "franchising"];
  const sitelinks = [
    "site map",
    "cookies & tracking",
    "privacy policy",
    "terms & conditions",
  ];
  return (
    <StyledFooter>
      <div id="wrapper">
        <div id="socials">
          <img src={wordLogo} alt="" />
          <div>
            <FiTwitter />
            <FiFacebook />
            <FiInstagram />
          </div>
        </div>
        <div id="links">
          <ul>
            {links1.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
     
          <ul>
            {links2.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
          <ul>
            {sitelinks.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
        <div id="sitelinks">
        </div>
        <div id="copy" className='text-center lg:text-left'>
          &copy; 2021 SuperVision Design for Quality Is Our Recipe, LLC.
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
