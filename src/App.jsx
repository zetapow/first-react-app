import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { MyButton, AboutPage } from './button';
import './App.css';

function App() {
   const [count, setCount] = useState(0);

   return (
      <div>
         <h1>Hello from React</h1>
         <p>This is my first component</p>
         <AboutPage />
         <MyButton />
         <MyButton />
         <Profile />
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
   );
}

const user = {
   name: 'Hedy Lamarr',
   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
   imageSize: 90,
};

export function Profile() {
   return (
      <>
         <h1>{user.name}</h1>
         <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
               width: user.imageSize,
               height: user.imageSize,
            }}
         />
      </>
   );
}

export default App;
