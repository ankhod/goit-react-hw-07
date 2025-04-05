import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}
