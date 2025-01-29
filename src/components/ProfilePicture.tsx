import React from 'react';

const ProfilePicture = () => {
  return (
    <div className="relative w-6 h-10 rounded-full overflow-hidden">
    <img
      src="https://raw.githubusercontent.com/punnasurya2000/Surya_punna/main/profile_pic.jpeg"
      alt="Profile"
      className="w-full h-full object-cover object-center"
    />
  </div>

  );
  
};

export default ProfilePicture;