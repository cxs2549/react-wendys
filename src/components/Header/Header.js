import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import colorLogo from "../../assets/color-logo.png";
import { BiUser, BiMap, BiSearch } from "react-icons/bi";
const StyledHeader = styled.header`
  --padding: 1rem;
  height: 60px;
  background-color: white;
  color: #333;
  position: relative;
  transition: all 400ms;
  @media (min-width: 1280px) {
    height: 120px;
  }
  button {
    background-color: var(--brandRed);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-size: 80%;

    @media (min-width: 768px) {
      background-color: #fff;
      color: var(--brandRed);
      font-size: 95%;
    }
    &:hover {
      filter: brightness(1.2);
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
    max-width: var(--maxWidth);
    margin: 0 auto;
    text-transform: capitalize;
    z-index: 10;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
    @media (min-width: 1280px) {
      padding: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
      font-weight: 500;
      font-size: 80%;
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 0.15rem;
      color: #333;

      @media (min-width: 768px) {
        flex-flow: row;
      }

      svg {
        font-size: 1.45rem;
        color: var(--brandRed);
      }
    }

    /* logo */
    > div:nth-of-type(1) {
      position: absolute;
      left: 50%;
      top: 5%;
      transform: translateX(-50%);
      @media (min-width: 768px) {
        position: relative;
        left: 0;
        transform: translateX(0);
        top: 0;
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-right: auto;
      }

      img {
        max-width: 72px;
        filter: brightness(0.95);
        transition: max-width 400ms;
        @media (min-width: 1280px) {
          max-width: 140px;
        }
        @media (min-width: 1536px) {
          max-width: 120px;
        }
      }

      /* links */
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
        li {
          &:hover {
            color: var(--brandRed);
            cursor: pointer;
          }
        }
      }
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
    padding: 0.75rem 0;
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
    @media (min-width: 1280px) {
      position: absolute;
      bottom: -2.75rem;
      left: 0;
      width: 100%;
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
          button {
            opacity: 0.7;
          }
        }
        .active {
          opacity: 1;
        }
      }
    }
  }
`;
const Header = () => {
  const [isPickup, setIsPickup] = useState(true);
  const links = ["menu", "values", "company", "jobs"];
  const linksLong = [
    "view our menu",
    "what we value",
    "who we are",
    "find jobs",
  ];
  return (
    <StyledHeader>
      <div id="wrapper">
        <div id="logo">
          <a href="/">
            <img src={logo} className='2xl:hidden' alt="" />
            <img src={colorLogo} className='hidden 2xl:block' alt="" />
          </a>
          <ul>
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
          <ul>
            {linksLong.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <a href="/">
            <BiMap />
            <span>find </span>
            <span className="hidden lg:block"> a wendy's</span>
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
          <button
            className={isPickup && "active"}
            onClick={() => setIsPickup(true)}
          >
            order pickup
          </button>
          <button
            className={!isPickup && "active"}
            onClick={() => setIsPickup(false)}
          >
            order delivery
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;
