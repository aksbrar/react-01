// imports
import {createRoot} from 'react-dom/client'
import { Fragment } from 'react'

// create root
const root = createRoot(document.querySelector('#root'))

// start something
root.render(
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>
)

// page
function Header() {
  return (
    <header>
      <h1>Akspreet Singh</h1>
    </header>
  )
}

function Main(){
  return (
    <details>
      <summary>Click to see description</summary>
      <p>This is the full description that appears when you click. You can put any text or HTML here.</p>
    </details>
  )
}

function Footer(){
  return (
    <Fragment>
      <name>By aks</name>
      <p>Date - 21 july</p>
    </Fragment>
  )
}