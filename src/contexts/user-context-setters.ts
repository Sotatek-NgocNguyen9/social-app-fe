import React from 'react';

const UserContextSetters = React.createContext({
  setUser: () => {},
  clearUser: () => {},
  updateProfilePic: (file: any) => {},
  updateName: (name: string) => {},
  updateLocation: (location: string) => {},
  updateBio: (bio: string) => {},
  updateFacebook: (facebook: string) => {},
  updateInstagram: (instagram: string) => {},
  updateLinkedin: (linkedin: string) => {}
});

export default UserContextSetters;
