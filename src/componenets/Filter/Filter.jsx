import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
}
