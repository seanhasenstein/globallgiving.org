import styled from 'styled-components';

export default function Divider() {
  return (
    <DividerStyles>
      <div className="divider-container">
        <div className="logo">
          <img src="/logo-simple.png" alt="" />
        </div>
      </div>
    </DividerStyles>
  );
}

const DividerStyles = styled.div`
  .divider-container {
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      top: 34px;
      background-color: #e4e4e7;
    }
  }

  .logo {
    width: 70px;
    height: 70px;
    border-radius: 9999px;
    border: 20px solid #f9fafb;
    z-index: 8888;
  }

  img {
    width: 100%;
    flex-shrink: 0;
  }
`;
