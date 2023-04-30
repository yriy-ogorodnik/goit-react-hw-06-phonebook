
import StyledFilter from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {

  const filter = useSelector(state => state.filter) || '';
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const target = e.target.value.trim();
    dispatch(setFilter(target));
  };


  return (
    <StyledFilter>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};



export default Filter;
