import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
export default function Navbar(){

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li><Link href="/">홈</Link></li><span style={{width:10}}/>
          <li><Link href="/users/join">회원가입</Link></li><span style={{width:10}}/>
          <li><Link href="/user/login">로그인</Link></li><span style={{width:10}}/>
          <li><Link href="/user/mypage" >마이페이지</Link></li><span style={{width:10}}/>
          <li><Link href="/manage" >관리자 페이지</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/list" >회원조회</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/claim" >상담내역</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/notice" >공지사항</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/stand" >보관함 위치</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/damage" >파손기록</Link></li><span style={{width:10}}/>


        </ul>
      </nav>
    </div>
  )
}

