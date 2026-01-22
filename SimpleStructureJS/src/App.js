import Header from './components/Header.js';
import Home from './pages/Home.js';


export default function App() {
  return `
    ${Header()}
    <main>
      ${Home()}

    </main>
  `;
}
