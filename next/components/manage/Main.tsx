import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import  ManageNav from '@/components/admin/ManageNav'
import {wrapper} from "@/modules/store"


function ManageMain() {
  return (<>
    <table style={{ width: "100%", height: "100%", margin: "0 auto", border: "1px solid black"}}>
        <tr style={{ width: "20%",height: "70%",  border: "1px solid black"}}>
            <td style={{ width: "15%", border: "1px solid black"}}>
            <ManageNav/>
            </td>
            <span style={{ width: "100%", border: "1px solid black"}}>
               pageProps 어쩌냐...
            </span>
        </tr>
    </table>
    </>)
       
}
export default wrapper.withRedux(ManageMain)