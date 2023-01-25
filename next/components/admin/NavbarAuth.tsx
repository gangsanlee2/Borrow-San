import Link from "next/link";

export default function Navbar(){

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link href="/">홈</Link></li><span style={{width:10}}/>
        <li className="nav-item"><Link href="/user/">마이페이지</Link></li><span style={{width:10}}/>
        <li className="nav-item"><Link href="/user/" >문의 내역</Link></li><span style={{width:10}}/>
      </ul>
       <button>로그아웃</button>
      </nav>
    </div>
  );
}
