import { Camping } from './components/Camping'
import {Header} from './components/Header'
import { Opinions } from './components/Opinions'
import {Services} from './components/Services'
import { Ubication } from './components/Ubication'

export const Home = () => {
  return (
    <>
    <Header/>    
    <Camping/>
    <Services/>
    <Opinions/>
    <Ubication/>
    </>
  )
}
