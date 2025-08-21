export default async function FechData({postId}){
    let title = {}
    let fechdata = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId,{next:{
      revalidate:1
    }})
    .then(response => response.json())
    .then(json => title = json)
    return(
        <>
        <div style={{width:"100%",boxShadow:'0 0 3px black'}}>
        <h1>TITLE</h1>
        <p>{title.title}</p>
        <h1>BODY</h1>
        <p>{title.body}</p>
        </div>
      </>
    )
}