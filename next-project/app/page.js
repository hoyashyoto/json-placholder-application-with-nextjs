import axios from "axios";
import Link from "next/link";
export default async function Page() {
  let title = []
  let fechdata = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{
    revalidate:1
  }})
  .then(response => response.json())
  .then(json => json.forEach(post=>title.push(post)))
  
    return(
            <>
            <h1>posts=:</h1>
            <div style={{height:'100px',width:'100%',borderRadius:'10px'}}>
              
              {
                  title.map((post,i)=>{
                    
                    return(
                      <>
                        <Link href={`/post/${++i}`}>
                          <button style={{width:"100%",boxShadow:'0 0 3px black',margin:'4px 0'}}> 
                            <div>
                            <h1 key={i+1*2}>TITLE</h1>
                            <p>{post.title}</p>
                            <h1>BODY</h1>
                            <p>{post.body}</p>
                            </div>
                          </button>
                        </Link>
                      </>
                    )
                  })
                }
            </div>    
            </>
    )
}