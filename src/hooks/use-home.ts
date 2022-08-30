import { useContext, useEffect, useState } from 'react';
import UserContextSetters from '../contexts/user-context-setters';
// import AuthContext from "../../contexts/auth-context";

const useHome = () => {
  const userContextSetters = useContext(UserContextSetters);
  // const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      // await authContext.generateNewAccessToken();
      await userContextSetters.setUser();
    };
    setTimeout(() => {
      fetchUser().catch(console.error);
      setLoading(false);
    }, 1000);
  }, [userContextSetters]);

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
