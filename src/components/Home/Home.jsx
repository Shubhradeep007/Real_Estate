import Caroserl from './Caroserl/Caroserl.jsx'
import CompletedProjects from './Completed-Projects/CompletedProjects.jsx'
import CurrentProjects from './Current-Projects/CurrentProjects.jsx'
import Search from './serach-pannel/Search.jsx'
import Welcome from './welcome-text/Welcome.jsx'

const Home = () => {
  return (
    <>
    <Caroserl />
    <Search />
    <Welcome />
    <CurrentProjects />
    <CompletedProjects />
    </>
  )
}

export default Home