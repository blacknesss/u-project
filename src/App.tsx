import { Route, Routes, Link } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy />} />
                    <Route path='/about' element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
}
