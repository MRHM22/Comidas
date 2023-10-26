import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

function ComidaApp() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default ComidaApp;
