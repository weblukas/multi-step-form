import { Routes, Route } from 'react-router-dom';
import HeroImg from './components/HeroImg/HeroImg';
import Step1Page from './pages/Step1Page';
import Step2Page from './pages/Step2Page';
import Step3Page from './pages/Step3Page';
import Step4Page from './pages/Step4Page';
import style from './App.module.scss';


function App() {
    return (
        <div className={style.App}>
          
                <HeroImg />
                <Routes>
                    <Route path="/" element={<Step1Page />} />
                    <Route path="/step-2" element={<Step2Page />} />
                    <Route path="/step-3" element={<Step3Page />} />
                    <Route path="/step-4" element={<Step4Page />} />
                </Routes>
          
        </div>
    );
}

export default App;
