import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import useHandleClose from '../../hooks/useHandleClose';

interface Props {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  ariaId: string;
}

export default function NavDropdown(props: Props) {
  const containerRef = React.useRef<HTMLLIElement>(null);
  const [show, setShow] = React.useState(false);
  useHandleClose({ show, setShow, containerRef });

  return (
    <NavDropdownStyles ref={containerRef} show={show}>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="primary-nav-item"
        aria-controls={props.ariaId}
        aria-expanded={show}
      >
        {props.title}
      </button>
      <div className="dropdown-container" id={props.ariaId}>
        {props.links.map(link => (
          <Link key={link.href} href={link.href} className="dropdown-link">
            {link.label}
          </Link>
        ))}
      </div>
    </NavDropdownStyles>
  );
}

const NavDropdownStyles = styled.li<{ show: boolean }>`
  position: relative;

  .dropdown-container {
    padding: 0.3125rem 1.25rem;
    position: absolute;
    top: 2.75rem;
    left: 1.75rem;
    display: ${props => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    white-space: nowrap;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: inset 0 2px 2px #fff, rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(17, 24, 39, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  &:hover .dropdown-container {
    display: flex;
  }

  .dropdown-link {
    padding: 0.75rem 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    color: #6b7280;
    border-bottom: 1px solid #e5e7eb;
    transition: color 200ms linear;

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      color: #000;
    }
  }
`;
