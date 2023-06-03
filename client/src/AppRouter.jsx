import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemComponent from './ItemComponent';
import SubmitProject from './SubmitProject';
import ItemDetails from './ItemDetails';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ItemComponent />} />
        <Route exact path="/project/:id" element={<ItemDetails />} />
        <Route exact path="/new-project" element={<SubmitProject />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
