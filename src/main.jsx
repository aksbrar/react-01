// imports
import {createRoot} from 'react-dom/client'
import Header from './header.jsx'
import Content from './content.jsx'

// root
const root = createRoot(document.querySelector('#root'))

// render
root.render(
  <Page />
)

// function to page
function Page() {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}