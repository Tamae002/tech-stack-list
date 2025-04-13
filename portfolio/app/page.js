import { Card } from "./card"

export default function app(){
  return (
    <>
      <header style={{
        fontFamily:"Inter",
        fontSize:"2.25rem",
        display: 'flex',
        justifyContent: 'center',
        margin: '50px'
      }}>
        <h1>
          List TechStack 2025!
        </h1>
      </header>
      <Card />
      <footer style={{
        fontFamily:"Inter",
        fontSize:"1rem",
        display: 'flex',
        justifyContent: 'center',
        margin: '100px'
      }}>
        <p>Thanks for visiting!</p>
      </footer>
    </>
  )
}