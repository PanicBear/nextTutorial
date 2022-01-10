import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = (props) => {
  const router = useRouter();

  return (
    <nav>
      <Link href={"/"}>
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href={"/about"}>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;

// Link : href의 기능만을 가지며, 스타일링, 클래스 지정등을 할 수 없다, 내부 코드에서 해야됨
// useRouter : location에 대한 정보
