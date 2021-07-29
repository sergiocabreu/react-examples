import Aluno from './components/Aluno';
import Nome from './components/Nome';
import UserProvider from './contexts/user';

function App() {
  return (
      <UserProvider>
        <Aluno/>
        <Nome />
      </UserProvider>
  );
}

export default App;
