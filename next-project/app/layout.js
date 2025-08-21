import '../styles/global.css';
const metadata = {
  title:'Posts'
  ,
  description:'post page'
  ,
  icons:{
    icon:'/favicon.ico'
  }
}
export default function RootLayout({ children }) {
  
    return (
      <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        </head>
        <body style={{height:'100vh'}}>
        {children}
        </body>
      </html>
    )
  }