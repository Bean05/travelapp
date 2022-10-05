import React from 'react';
import { useSelector } from 'react-redux';

export default function LoaderWrapper({ children }) {
  const user = useSelector((state) => state.user);
  if (user.fetching) {
    return <p>Loading...</p>;
  }
  return children;
}
