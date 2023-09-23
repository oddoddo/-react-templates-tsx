import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// 각 페이지로 들어가면 해당 페이지의 gnb가 활성화 되어야 함
// 이를 위해 react-router-dom의 useLocation을 사용
// useLocation은 현재 페이지의 url을 반환해줌
// 이를 이용해 해당 페이지의 url과 gnb의 url을 비교하여 활성화 시킴
const Gnb = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const selectedMenu = splitLocation[1];
  return (
    <GnbWrap>
      <ul>
        <li className={selectedMenu === 'Exchange' ? 'active' : ''}>
          <Link to="/Exchange">거래소</Link>
        </li>
        <li className={selectedMenu === 'Deposit' ? 'active' : ''}>
          <Link to="/Deposit">입출금</Link>
        </li>
        <li className={selectedMenu === 'Investment' ? 'active' : ''}>
          <Link to="/Investment">투자내역</Link>
        </li>
        <li className={selectedMenu === 'Help' ? 'active' : ''}>
          <Link to="/Help">고객센터</Link>
        </li>
      </ul>
    </GnbWrap>
  );
};

const GnbWrap = styled.nav`
  margin-left: 1rem;
  ul {
    display: flex;
    li {
      margin-left: 1.3rem;
      &.active {
        a {
          font-weight: 500;
          color: var(--white);
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--white);
          }
        }
      }
      a {
        position: relative;
        display: flex;
        align-items: center;
        height: var(--header-height);
        padding: 0 0.7rem;
        font-size: 1rem;
        color: var(--S_Light);
        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

export default Gnb;
