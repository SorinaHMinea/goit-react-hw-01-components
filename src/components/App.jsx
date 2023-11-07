import Profile from './Profile/Profile';

export const App = () => {
  return (
    <main>
      <Profile />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: 'red',
        }}
      >
        my react app
      </div>
    </main>
  );
};
