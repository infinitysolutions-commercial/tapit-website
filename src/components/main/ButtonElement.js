import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary, buttonenabled}) => buttonenabled ? (primary ? '#01BF71' : '#010606') : 'transparent'};
  white-space: nowrap;
  padding: ${({big, buttonenabled}) => buttonenabled ? (big ? '14px 48px' : '12px 30px') : '0px'};
  color: ${({dark, buttonenabled}) => buttonenabled ? (dark ? '#010606' : '#fff') : 'transparent'};
  font-size: ${({fontBig, buttonenabled}) => buttonenabled ? (fontBig ? '20px' : '16px') : '0px'};
  outline: none;
  border: none;
  cursor: ${({buttonenabled}) => buttonenabled === "true" ? 'pointer' : 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({primary}) => primary ? '#fff' : '#01BF71'};
  }
`;