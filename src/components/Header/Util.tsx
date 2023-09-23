import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Utils = () => {
  return (
    <UtilWrap>
      <li>
        <Link to="/Login">로그인</Link>
      </li>
      <li>
        <Link to="/Signup">회원가입</Link>
      </li>
    </UtilWrap>
  );
};

const UtilWrap = styled.nav`
  display: flex;
  li {
    margin-left: 5px;
    a {
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 0.8rem;
      border-radius: 45px;
      background: var(--primary-light);
      white-space: nowrap;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: -0.24px;
      color: var(--white);
      &:hover {
        color: #ccc;
      }
    }
  }
`;

export default Utils;
