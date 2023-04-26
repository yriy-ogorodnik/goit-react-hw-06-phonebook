import PropTypes from 'prop-types';
import StyledForm from './ContactForm.styled';
import StyledButton from './Button.styled';
import { useState } from 'react';

const ContactForm = ({ getFormData }) => {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') setNamber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name: name,
      number: number,
    };
    getFormData(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNamber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
ContactForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
};

export default ContactForm;

// ________________________________________________________________________
// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import StyledForm from './ContactForm.styled';
// import StyledButton from './Button.styled';
// import { useState } from "react";

// class ContactForm extends Component {
//   static propTypes = {
//     getFormData: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const contact = {
//       name: this.state.name,
//       number: this.state.number,
//     };
//     const { getFormData } = this.props;
//     console.log('getFormData :>> ', getFormData);

//     this.props.getFormData(contact);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <StyledForm onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             onChange={this.handleChange}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <StyledButton type="submit">Add contact</StyledButton>
//       </StyledForm>
//     );
//   }
// }

// export default ContactForm
