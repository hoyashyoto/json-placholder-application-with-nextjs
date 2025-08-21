import { Suspense } from "react"
import FechData from "./FetchData"
import Link from "next/link"
export default async function post({params}) {
    const {post}=await params
    const loading = (
        <h6>
            loading...
        </h6>
    )
    return(
        <div  style={{height:'100px',width:'100%',borderRadius:'10px'}}>
            <Link href={'/'}>
                <button style={{margin:'4px',borderRadius:'0',background:'transparent',border:0,borderBottom:'1px black solid',fontSize:'32px'}}>&#8592;</button>
            </Link>
            <h1>Post with id({post})</h1>

                <FechData postId={post}/>
      </div>   
    )
    
}