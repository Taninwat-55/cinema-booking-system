import { Outlet } from 'react-router-dom';
import Text from './components/Text';

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
