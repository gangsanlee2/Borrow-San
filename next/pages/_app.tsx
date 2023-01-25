import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import  Footer from '@/components/admin/Footer'
import  Navbar from '@/components/admin/Navbar'
import Header from '@/components/admin/Header'
import { wrapper } from "@/modules/store"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {

  return (<>
 <table style={{ width: "1200px", height: "640px", margin: "0 auto", border: "1px solid black"}}>
        <thead style={{ height: "20%",  border: "1px solid black"}}>
            <tr>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Navbar/>
                </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "70%",  border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
           메인 이미지 및 다운로드 링크
            <Component {...pageProps}/>
            </td>
        </tr>
        <tr style={{ width: "20%",height: "70%",  border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
            <Footer/>
            </td>
        </tr>
        </tbody>
    </table>
    </>)
          
          
       
}
export default wrapper.withRedux(MyApp)