import { ApiTable } from "./components/ApiTable"
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { WepView } from "./components/WepView"
import { WepViewReverse } from "./components/WepViewReverse"
import { WepViewTr } from "./components/WepViewTr"

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <WepView 
              pathImage="../../images/pageMuestra.svg"
              title="WEB PAGE TITLE" 
              description="Esta vainaesta hecha con su makina chda cola uwu perron paralelogramo escosovio e file" 
              url="url"/>
      <WepViewReverse 
              pathImage="../../images/pageMuestra.svg"
              title="WEB PAGE TITLE" 
              description="Esta vainaesta hecha con su makina chda cola uwu perron paralelogramo escosovio e file" 
              url="url"/>
      <WepViewTr/>
      <ApiTable/>
    </>
  )
}

export default App
