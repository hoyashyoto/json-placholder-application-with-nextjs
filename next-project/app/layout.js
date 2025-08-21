import '../styles/global.css';
export default function RootLayout({ children }) {
  
    return (
      <html lang="en">
        <body style={{height:'100vh'}}>
        {children}
        </body>
      </html>
    )
  }