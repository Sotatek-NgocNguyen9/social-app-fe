import AuthContextProvider from './AuthContextProvider';
import PostContextProvider from './PostContextProvider';
import UserContextProvider from './UserContextProvider';

const ContextProvider = (props: any) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <PostContextProvider>{props.children}</PostContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
