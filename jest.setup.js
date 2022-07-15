import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', require('next-router-mock'));
