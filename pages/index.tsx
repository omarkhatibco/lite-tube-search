import { SearchForm } from 'components/forms';
import { ChannalList } from 'components/SearchPage';
import { Fragment } from 'react';

const Page = () => {
  return (
    <Fragment>
      <SearchForm />
      <ChannalList />
    </Fragment>
  );
};

export default Page;
