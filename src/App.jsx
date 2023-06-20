import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Blurb from './components/Blurb'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Blurb />
      {/* <Work /> */}
      <Projects />
      <Resume />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
