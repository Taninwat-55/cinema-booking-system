import { Outlet } from 'react-router-dom';
import Text from './components/Text';

export default function App() {
  return (
    <div>
      <Outlet />

      {/* <h1>Cinema Booking System</h1>
      <Text /> */}
    </div>
  );
}
