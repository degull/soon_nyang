import React from 'react';
import Logo from './Logo/Logo';

export default function App() {
  return (
    <>
      <Logo redirectTo="/main" timeout={3000} />
    </>
  );
}
