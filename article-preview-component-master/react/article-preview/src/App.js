
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  /* styles */
  const appStyle = useMediaQuery('(min-width:600px)') ? 'd-app' : 'm-app'
  return (
    <div className={appStyle}>
      TESTING
    </div>
  );
}

export default App;
