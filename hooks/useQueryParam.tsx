import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useQueryParam = (key: string): string | string[] | undefined => {
  const { asPath } = useRouter();

  const value = useMemo(() => {
    const res = asPath.match(new RegExp('[?&]' + key + '=([^&#]*)')) || [];

    return res[1];
    // return urlParams.get(key);
  }, [asPath]);

  return value ? decodeURIComponent(value) : undefined;
};
