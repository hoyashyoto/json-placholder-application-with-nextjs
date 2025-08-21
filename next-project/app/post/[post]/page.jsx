import { Suspense } from "react"
import FechData from "./FetchData"
export default async function post({params}) {
    const {post}=await params
    const loading = (
        <h6>
            loading...
        </h6>
    )
    return(
        <div  style={{height:'100px',width:'100%',borderRadius:'10px'}}>
            <h1>Post with id({post})</h1>

                <FechData postId={post}/>
      </div>   
    )
    
}