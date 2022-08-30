import { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/auth-context';
import PostContext from '../contexts/post-context';
import UserContextSetters from '../contexts/user-context-setters';

const useHome = () => {
  const userContextSetters = useContext(UserContextSetters);
  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);

  useEffect(() => {
    const fetchUser = async () => {
      authContext.generateNewAccessToken();
      userContextSetters.setUser();
    };
    const fetchFeed = async () => {
      postContext.getFeed();
    };
    setTimeout(() => {
      fetchUser().catch(console.error);
      fetchFeed().catch(console.error);
      setLoading(false);
    }, 1000);
  }, [userContextSetters]);

  console.log(postContext.posts);

  const [loading, setLoading] = useState(true);

  const [showBioModal, setShowBioModal] = useState(false);

  const handleCloseBioModal = () => {
    setShowBioModal(false);
  };

  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const handleCloseNewPostModal = () => {
    setShowNewPostModal(false);
  };

  const [showMessageModal, setShowMessageModal] = useState({
    message: '',
    error: ''
  });

  const handleCloseMessageModal = () => {
    setShowMessageModal({
      message: '',
      error: ''
    });
  };

  return {
    loading,
    showBioModal,
    setShowBioModal,
    handleCloseBioModal,
    showNewPostModal,
    setShowNewPostModal,
    handleCloseNewPostModal,
    showMessageModal,
    setShowMessageModal,
    handleCloseMessageModal
  };
};

export default useHome;
