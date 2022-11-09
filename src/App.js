import Card from './UI/Card/Card';
import Header from './layout/Header/Header';
import Search from './Components/Search/Search';
import { CountryContextProvider } from './context/context-country';

function App() {
  return (
    <CountryContextProvider>
      <Card>
        <Header />
        <Search />
      </Card>
    </CountryContextProvider>
  );
}

export default App;
