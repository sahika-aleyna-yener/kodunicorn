import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FriendInvite } from './types';

const InviteContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const InviteForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #FF6B00;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #FF6B00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff8533;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const InviteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InviteCard = styled.div<{ status: string }>`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: ${props => 
    props.status === 'accepted' ? '#e6f7e6' :
    props.status === 'expired' ? '#f7e6e6' :
    '#fff'
  };
`;

const InviteStatus = styled.span<{ status: string }>`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  color: white;
  background-color: ${props => 
    props.status === 'accepted' ? '#4CAF50' :
    props.status === 'expired' ? '#f44336' :
    '#ff9800'
  };
`;

interface FriendInvitePanelProps {
  invites: FriendInvite[];
  onInviteFriend: (email: string) => void;
}

export const FriendInvitePanel: React.FC<FriendInvitePanelProps> = ({
  invites,
  onInviteFriend
}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onInviteFriend(email);
      setEmail('');
      setIsValid(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR');
  };

  return (
    <InviteContainer>
      <h2>Arkadaş Daveti</h2>
      
      <InviteForm onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Arkadaşının e-posta adresini gir"
        />
        <Button type="submit" disabled={!isValid}>
          Davet Et
        </Button>
      </InviteForm>

      <InviteList>
        {invites.map(invite => (
          <InviteCard key={invite.id} status={invite.status}>
            <div>{invite.inviteeEmail}</div>
            <div>
              <small>Gönderilme: {formatDate(invite.createdAt)}</small>
              <br />
              <small>Son Geçerlilik: {formatDate(invite.expiresAt)}</small>
            </div>
            <InviteStatus status={invite.status}>
              {invite.status === 'pending' ? 'Bekliyor' :
               invite.status === 'accepted' ? 'Kabul Edildi' :
               'Süresi Doldu'}
            </InviteStatus>
          </InviteCard>
        ))}
      </InviteList>
    </InviteContainer>
  );
};