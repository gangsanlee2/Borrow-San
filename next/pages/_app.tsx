import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import  Footer from '@/components/admin/Footer'
import  Navbar from '@/components/admin/Navbar'
import {wrapper} from "@/modules/store"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {

  return (<>
    <table style={{ width: "100%", height: "2560px", margin: "0 auto", border: "1px solid black"}}>
        <thead style={{border: "1px solid black"}}>
            <tr >
                <td style={{ width: "100%", border: "1px solid lightgreen"}} colSpan={2}>
                 <Navbar/>
                </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "100%",height: "30%",  border: "1px solid lightgreen", backgroundColor:"lightgreen"}}>
        메인 이미지 및 다운로드 링크
        </tr>
        <tr style={{ width: "100%",height: "30%",  border: "1px solid black"}}>서비스 소개</tr>
        <tr style={{ width: "100%", height: "40%", border: "1px solid black"}}>
            
        </tr>
        <tr style={{ width: "100%", height: "120px", border: "1px solid black", backgroundColor:"black", color:"white", paddingTop:"15px"}}>
                <Footer/>
        </tr>
        </tbody>
    </table>
    </>)
          
          
       
}
export default wrapper.withRedux(MyApp)