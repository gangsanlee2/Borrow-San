import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
export default function ManageNav(){

  return (
    <div className="container-fluid">
      <nav className="nav flex-column">
          <li><Link href="/">홈</Link></li><span style={{width:10}}/>
          <li><Link href="/manage" >관리자 페이지</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/list" >회원조회</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/claim" >상담내역</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/notice" >공지사항</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/stand" >보관함 위치</Link></li><span style={{width:10}}/>
          <li><Link href="/manage/damage" >파손기록</Link></li><span style={{width:10}}/>
      </nav>
    </div>
  )
}