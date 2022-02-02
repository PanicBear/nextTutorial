import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = (props) => {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href={'/'}>
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href={'/about'}>
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;

// Link : href의 기능만을 가지며, 스타일링, 클래스 지정등을 할 수 없다, 내부 코드에서 해야됨
// useRouter : location에 대한 정보
