import React, { useState } from 'react';
import {
  SearchBarHeader,
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  Field,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Formik } from 'formik';

export const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Input search query');
      return;
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchBarHeader>
      <Formik initialValues={searchQuery}>
        <Form onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <Field
            type="text"
            name="search"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </Form>
      </Formik>
    </SearchBarHeader>
  );
};

// export const Searchbar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchQueryChange = e => {
//     setSearchQuery(e.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (searchQuery.trim() === '') {
//       toast.warn('Input search query');
//       return;
//     }

//     onSearch(searchQuery);
//     setSearchQuery('');
//   };

//   return (
//     <SearchBarHeader>
//       <Formik initialValues={searchQuery}>
//         <Form onSubmit={handleSubmit}>
//           <SearchFormButton type="submit">
//             <FcSearch />
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>
//           <Field
//             type="text"
//             name="search"
//             autoFocus
//             placeholder="Search images and photos"
//             value={searchQuery}
//             onChange={handleSearchQueryChange}
//           />
//         </Form>
//       </Formik>
//     </SearchBarHeader>
//   );
// };
