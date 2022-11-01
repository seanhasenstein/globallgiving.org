import React from 'react';
import useCloseOnEscape from './useCloseOnEscape';
import useCloseOnOutsideClick from './useCloseOnOutsideClick';
import useCloseOnOutsideActiveElement from './useCloseOnOutsideActiveElement';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLElement>;
}

export default function useHandleClose(props: Props) {
  useCloseOnEscape(props.show, props.setShow);
  useCloseOnOutsideClick(props.show, props.setShow, props.containerRef);
  useCloseOnOutsideActiveElement(props.show, props.setShow, props.containerRef);
}
