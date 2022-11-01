import Link from 'next/link';
import styled from 'styled-components';
import NavDropdown from './NavDropdown';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <Link href="/">
          <div className="logo">
            <img src="/logo.png" alt="Globall Giving" />
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/" className="primary-nav-item">
                Home
              </Link>
            </li>
            <NavDropdown
              title="About"
              ariaId="about-dropdown"
              links={[
                { href: '/about', label: 'About us' },
                { href: '/mission', label: 'Our mission' },
                { href: '/founder', label: 'Founder message' },
                { href: '/team', label: 'Meet our team' },
                { href: '/sponsors', label: 'Partners & Sponsors' },
              ]}
            />
            <NavDropdown
              title="Get involved"
              ariaId="get-involved-dropdown"
              links={[
                { href: '/donate-equipment', label: 'Donate equipment' },
                { href: '/paypal', label: 'Donate via PayPal' },
                { href: '/volunteer', label: 'Volunteer' },
                {
                  href: '/organize-a-collection',
                  label: 'Organize a collection',
                },
                {
                  href: '/become-partner-sponsor',
                  label: 'Become a Partner/Sponsor',
                },
              ]}
            />
            <NavDropdown
              title="More"
              ariaId="more-dropdown"
              links={[
                { href: '/faq', label: 'FAQ' },
                { href: '/request-equipment', label: 'Request Equipment' },
                { href: '/contact', label: 'Contact us' },
              ]}
            />
          </ul>
        </nav>
        <Link href="/donate" className="donate-link">
          Make a Donation
        </Link>
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  padding: 0 1.5rem;

  .container {
    margin: 0 auto;
    padding: 1.125rem 0;
    max-width: 80rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
  }

  .logo {
    padding: 0.25rem;
    width: 11rem;
  }

  nav {
    ul {
      display: flex;
      gap: 1.5rem;
      list-style-type: none;
    }
  }

  .primary-nav-item {
    padding: 0.75rem 2rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-family: 'Outfit';
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.0625em;
    color: #1f2937;
    transition: color 200ms linear;

    &:hover {
      color: #000;
    }
  }

  .dropdown-link-item {
    padding: 0.5rem 0;
  }

  .donate-link {
    padding: 1rem 1.875rem;
    background-color: #4d619a;
    border: none;
    border-radius: 9999px;
    font-family: 'Outfit';
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
    cursor: pointer;
    transition: background-color 200ms linear;

    &:hover {
      background-color: #5469a7;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #4338ca 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }
`;
