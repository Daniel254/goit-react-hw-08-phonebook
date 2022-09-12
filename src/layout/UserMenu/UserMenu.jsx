import Box from 'components/ui/Box';
import { useAuth, useRedux } from 'hooks';
import React from 'react';
import { logoutUser } from 'redux/auth';

export default function UserMenu() {
  const { user, isLoggedIn, isFetchingCurrentUser } = useAuth();
  const { dispatch } = useRedux();
  const isCurrentUser = isLoggedIn && !isFetchingCurrentUser;

  return (
    <Box minHeight={'2em'} lineHeight={2} textAlign={'right'} width={'100%'}>
      {isCurrentUser && (
        <>
          {user.email}&nbsp;
          <button
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            Logout
          </button>
        </>
      )}
    </Box>
  );
}
