import Card from './Card/Card';

export const App = () => {
  return (
    <main>
      <Card />
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
