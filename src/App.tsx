import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useStore from './store/useStore';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function App() {
  const { logIn, logOut } = useStore();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      logIn();
    } else {
      logOut();
    }
  }, [logIn, logOut]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
