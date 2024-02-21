import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
