import React, { useState } from 'react';

interface UserProfile {
  name: string;
  age: number;
  email?: string;
}

const ProfileEditor: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Alex Doe',
    age: 30,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Incorrect: Direct mutation (
    // profile.name = event.target.value; 
    // setProfile(profile);

    setProfile(prevProfile => ({
      ...prevProfile, // Copy all existing properties
      name: event.target.value // Override the name property
    }));
  };

  const handleAgeIncrement = () => {
    setProfile(prevProfile => ({
      ...prevProfile,
      age: prevProfile.age + 1
    }));
  };

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <input
        type="text"
        value={profile.name}
        onChange={handleNameChange}
        placeholder="Edit name"
      />
      <button onClick={handleAgeIncrement}>Increment Age</button>
    </div>
  );
};

export default ProfileEditor;