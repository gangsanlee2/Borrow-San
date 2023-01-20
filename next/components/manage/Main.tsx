import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import  Footer from '@/components/admin/Footer'
import  ManageNav from '@/components/admin/ManageNav'
import {wrapper} from "@/modules/store"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


function ManageMain({ Component, pageProps: {...pageProps} }: AppProps) {

  return (<>
    <table style={{ width: "1200px", height: "640px", margin: "0 auto", border: "1px solid black"}}>
        <thead style={{ height: "20%",  border: "1px solid black"}}>
            <tr >

            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "70%",  border: "1px solid black"}}>
            <td style={{ width: "15%", border: "1px solid black"}}>
            <ManageNav/>
            </td>
            <td style={{ width: "85%", border: "1px solid black"}}>
            <Component {...pageProps} />
            </td>
        </tr>
        
        <tr style={{ width: "100%", height: "10%", border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}} colSpan={2}>
            <Footer/>
            </td>
        </tr>
        </tbody>
    </table>
    </>)
          
          
       
}
export default wrapper.withRedux(ManageMain)