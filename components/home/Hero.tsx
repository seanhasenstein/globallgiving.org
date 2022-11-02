import styled from 'styled-components';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <h2>Every Child Deserves a Chance to Play!</h2>
        <p>
          Help us to bring joy to children around the world through donations of
          new and used sports equipment.
        </p>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  padding: 0 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
  }
`;
