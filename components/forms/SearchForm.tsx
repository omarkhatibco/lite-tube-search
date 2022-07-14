import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { MdClear, MdSearch } from 'react-icons/md';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const SearchForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onReset: () => {},
  });

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <HStack align={'flex-start'}>
        <FormControl isInvalid={formik.errors.search && formik.touched.search}>
          <VStack w='full' align={'stretch'}>
            <InputGroup size='md'>
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={MdSearch} color='red.300' />}
              />
              <Input
                pr='4.5rem'
                name='search'
                type={'search'}
                onChange={formik.handleChange}
                value={formik.values.search}
                isInvalid={formik.errors.search && formik.touched.search}
                placeholder='Search Channels...'
                sx={{
                  '::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration':
                    {
                      display: 'none',
                    },
                }}
              />

              <InputRightElement width='4.5rem'>
                <IconButton
                  icon={<Icon as={MdClear} />}
                  size='sm'
                  variant={'ghost'}
                  onClick={() => formik.resetForm()}
                  rounded='full'
                />
              </InputRightElement>
            </InputGroup>
            {formik.errors.search && formik.touched.search && (
              <FormErrorMessage>{formik.errors.search}</FormErrorMessage>
            )}
          </VStack>
        </FormControl>

        <Button type='submit'>Search</Button>
      </HStack>
    </form>
  );
};
