import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import { fetchCurrentUser } from 'redux/auth';
import RoutesTree from 'router';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <RoutesTree />
      <ToastContainer position="top-center" hideProgressBar={true} />
    </>
  );
}
