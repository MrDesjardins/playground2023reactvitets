import './App.css';
import { Content } from './Content';
import { useAppStore } from './store';


export function App() {
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  console.log(isMenuOpen);
  return (
    <div className='app'>
      <Content />
    </div>
  )
}
