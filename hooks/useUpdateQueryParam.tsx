import deepClean from 'clean-deep';
import { dequal } from 'dequal';
import { useQueryParam } from 'hooks';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

export const useUpdateQueryParam = (
  name: string,
): [
  string | string[] | undefined,
  Dispatch<SetStateAction<string | string[] | undefined>>,
] => {
  const value = useQueryParam(name);
  const { query: originalQuery, push, pathname } = useRouter();

  const { slug, ...originalQueryParams } = originalQuery;

  const changeQuery = (value) => {
    const query = deepClean({
      ...originalQueryParams,
      [name]: value,
    });

    if (dequal(query, originalQuery)) {
      return;
    }

    const opts = {
      pathname,
      query,
    };

    push(opts, undefined, { scroll: false });
  };

  return [value, changeQuery];
};
