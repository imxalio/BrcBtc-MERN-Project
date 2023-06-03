import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import AppRouter from './AppRouter';
import './app.css';

export const ProjcetContext = createContext();
const apiUrl = 'http://localhost:8080/';

const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    twitter: '',
    discord: '',
    date: '',
  });

  const fetchData = () => {
    axios.get(apiUrl).then((response) => {
      const data = response.data.getProjects;
      setAllItems(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <ProjcetContext.Provider
        value={{
          allItems,
          setAllItems,
          newItem,
          setNewItem,
          apiUrl,
          fetchData,
        }}
      >
        <AppRouter />
      </ProjcetContext.Provider>
    </main>
  );
};
export default App;
