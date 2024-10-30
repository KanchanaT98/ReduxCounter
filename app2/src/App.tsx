import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div style={{textAlign:'center', marginTop: "10%"}}>
      <h1>Redux Counter with TypeScript</h1>
      <Counter />
    </div>
  );
};

export default App;