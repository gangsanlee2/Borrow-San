import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import  Footer from '@/components/admin/Footer'
import Header from '@/components/admin/Header'
import { wrapper } from "@/modules/store"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {

  return (<>
    <table style={{ width: "100%", height: "1000px", margin: "0 auto", border: "1px solid black"}}>
        <thead style={{ height: "10%",  border: "1px solid black"}}>
            <tr>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Header/>
                </td>
            </tr>
        </thead>
        <tbody style={{ paddingTop:"None", height: "90%",  border: "1px solid black"}}>
            <tr>
                <td>
                    <Component {...pageProps}/>
                </td>
            </tr>
        </tbody>
        <tfoot style={{color:"white", backgroundColor:"black"}}>
        <Footer/>
        </tfoot>
    </table>
    </>)
          
          
       
}
export default wrapper.withRedux(MyApp)