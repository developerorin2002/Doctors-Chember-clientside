import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';
import 'react-day-picker/dist/style.css';
function App() {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
