import React from 'react';
import styled from 'styled-components';

const UserProfile = ({ username, email, avatar }) => {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt="User Avatar" />
      <UserInfo>
        <h2>{username}</h2>
        <p>{email}</p>
      </UserInfo>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  padding: 0.2rem;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
`;

const UserInfo = styled.div`
  margin-left: 1rem;
  h2 {
    color: rgba(34, 34, 96, 1);
    margin-bottom: 0.5rem;
  }
  p {
    color: rgba(34, 34, 96, 0.6);
    margin: 0;
  }
`;

export default UserProfile;
