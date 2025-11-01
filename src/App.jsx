import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe'
import Profession from './components/Profession/Profession'
import Milestones from './components/Milestones/Milestones'
import MyVideos from './components/MyVideos/MyVideos'
import Social from './components/Social/Social'
import Connect from './components/Connect/Connect'
import "./index.css"

function App() { 
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Profession />
      <Milestones />
      <MyVideos />
      <Social />
      <Connect />
    </div>
  )
}

export default App
