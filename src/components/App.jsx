import { Container } from "./Container/Container";
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../Json/user.json';
import data from '../Json/data.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
      </Container>
    </div>
  );
};