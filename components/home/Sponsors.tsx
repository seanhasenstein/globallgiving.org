import Link from 'next/link';
import styled from 'styled-components';
import { sponsors } from '../../utils/sponsors';

export default function Sponsors() {
  return (
    <SponsorsStyles>
      <div className="container">
        <h2>Partners, Sponsors, &amp; Donors</h2>
        <p>
          A big thank you to our partners, sponsors, and donors for your
          continued support. Your organizations help make the Globall Giving
          mission possible.
        </p>
        <div className="grid">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="item">
              <a href={sponsor.href} target="_blank" rel="noreferrer">
                <img src={`/sponsors/${sponsor.image}`} alt={sponsor.alt} />
              </a>
            </div>
          ))}
        </div>
        <Link href="/sponsors" className="all-link">
          See them all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </SponsorsStyles>
  );
}

const SponsorsStyles = styled.div`
  padding: 2.5rem 1.5rem 5rem;

  .container {
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 0 auto 2rem;
    max-width: 500px;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    color: #151617;
    text-align: center;
    line-height: 1.35;
    font-family: 'Outfit', sans-serif;
  }

  p {
    margin: 0 auto 2rem;
    padding: 0;
    max-width: 600px;
    width: 100%;
    font-size: 1.0625rem;
    font-weight: 500;
    color: #6b7280;
    text-align: center;
    line-height: 1.65;
  }

  .grid {
    margin: 0 auto;
    padding: 0.5rem 0 0;
    max-width: 800px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 5rem));
    justify-content: center;
    gap: 2rem 4rem;

    a {
      padding: 0.5rem;
      display: inline-flex;
      background-color: transparent;
      border-radius: 0.125rem;

      &:hover {
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }
    }

    img {
      width: 100%;
    }
  }

  .all-link {
    margin: 2.25rem auto 0;
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 600;

    svg {
      margin: 0.125rem 0 0;
      height: 1.125rem;
      width: 1.125rem;
    }

    &:hover svg {
      transform: translateX(2px);
    }
  }
`;
