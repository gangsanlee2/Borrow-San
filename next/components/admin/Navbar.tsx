import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
export default function Navbar(){

  return (
    <div className="container-fluid" style={{backgroundColor: "lightgreen"}}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"lightgreen"}}>
          <Link href="/">홈</Link><span style={{paddingLeft:"1%"}}/>
          <td style={{alignItems:"flex-end"}}>
            <Link href="/users/join">회원가입</Link><span style={{width:10}}/>
            <Link href="/user/login">로그인</Link><span style={{width:10}}/>
            <Link href="/user/mypage" >마이페이지</Link><span style={{width:10}}/>
          </td>     
      </nav>
    </div>
  )
}

