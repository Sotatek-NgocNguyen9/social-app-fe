import AuthContextProvider from './AuthContextProvider';
import UserContextProvider from './UserContextProvider';

const ContextProvider = (props: any) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>{props.children}</UserContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
