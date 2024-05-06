import { useEffect } from 'react'
import './assets/scss/main.scss'
import { THEME } from './store/general';
import { useGeneralStore } from './store/generalStore';
import "react-datepicker/dist/react-datepicker.css";
import NavBar from './components/Kit/navbar';
import Header from './components/Kit/Slider';
import Whyus from './components/Kit/Whyus';
import Article from './components/Kit/article';
import Faq from './components/Kit/faq';
import Footer from './components/Kit/footer';
import Roadmap from './components/Kit/roadmap';

function App() {
  const { [THEME]: theme } = useGeneralStore();

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
  }, [theme]);
  return (
    <>
      <div className='container md'>
        <NavBar
          brandName="My Brand"
          navItems={['Home', "servise", "question", "blog", "About",]} />
        <Header />
        <Whyus />
      </div>
      <Roadmap />
      <div className='container md'>
        <Article />
        <Faq />
        <Footer />
      </div>

    </>
  )
}


export default App