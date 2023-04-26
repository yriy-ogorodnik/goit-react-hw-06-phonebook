import PropTypes from 'prop-types';
import StyledFilter from './Filter.styled';

const Filter = ({ handleFilterChange, filter }) => {
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
