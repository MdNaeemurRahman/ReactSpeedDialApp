import React from 'react';
import './style.css';
import { Search } from './components/Search';

const App = () => {
  return (
    <div className='bg-text'>
      <Search />
      <h1>My Speed Dial</h1>
      <hr
        style={{
          color: 'gray',
          backgroundColor: 'gray',
          height: 4,
        }}
      />
      <Bpp />
    </div>
  );
};

const Shortcut = ({ href, src, title }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.open(href);
  };

  return (
    <a href='onClick' onClick={onClick}>
      <img src={src} alt='' />
      <br />
      <span>{title}</span>
    </a>
  );
};

// To keep App component small and clear
// Here i've created new component Bpp

const Bpp = () => {
  return (
    <div className='app'>
      <Shortcut
        href='https://google.com'
        src='https://www.johngregorysmith.com/wp-content/uploads/2017/08/google_logo1600.png'
        title='Google'
      />
      <Shortcut
        href='https://facebook.com'
        src='https://image.similarpng.com/very-thumbnail/2020/04/Facebook-logo-3d-button-social-media-png-3.png'
        title='Facebook'
      />
      <Shortcut
        href='https://twitter.com'
        src='https://cdn0.iconfinder.com/data/icons/squarico/135/squarico-18-512.png'
        title='Twitter'
      />
      <Shortcut
        href='https://gmail.com'
        src='https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png'
        title='Gmail'
      />
      <Shortcut
        href='https://youtube.com'
        src='https://i.pinimg.com/originals/62/60/ef/6260efc8fc9a9002669d2f4ad9956cc0.jpg'
        title='Youtube'
      />
      <Shortcut
        href='https://web.whatsapp.com/'
        src='https://i.pinimg.com/736x/da/c4/bf/dac4bfad9993da7eddada931ebedc3e1.jpg'
        title='WhatsApp'
      />
      <Shortcut
        href='https://www.utu.fi/en'
        src='https://www.g20-insights.org/wp-content/uploads/2019/10/3503-turku-institute-advanced-studies.png'
        title='Turku University'
      />
      <Shortcut
        href='http://huis.hueuni.edu.vn/'
        src='https://lh3.googleusercontent.com/proxy/NzZcscfM8fg0ppM0qBvH7bjcvDr6g35q2Hp3svYAowgWnzMR089DJmKrpsm4O-HZ5wsUd8y7GexLTw'
        title='Hue University'
      />
      <Shortcut
        href='https://stackoverflow.com/'
        src='https://madsourcer.com/wp-content/uploads/stackoverflow.png'
        title='Stackoverflow'
      />
      <Shortcut
        href='https://github.com/'
        src='https://miro.medium.com/max/719/1*WaaXnUvhvrswhBJSw4YTuQ.png'
        title='GitHub'
      />
    </div>
  );
};

export default App;
