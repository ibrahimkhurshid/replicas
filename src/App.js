import './App.css';
import { hamburgersvg, filesvg, searchsvg, sourcecontrolsvg, profilesvg, settingsvg } from './assets/icons';

function App() {
  return (
    <div className="container">
      <div className='icons-col'>

        <div className='icons-top'>
          <div className='icon-container'>{hamburgersvg}</div>
          <div className='icon-container'>{filesvg}</div>
          <div className='icon-container'>{searchsvg}</div>
          <div className='icon-container'>{sourcecontrolsvg}</div>
          <div className='icon-container'>{filesvg}</div>
          <div className='icon-container'>{filesvg}</div>
          <div className='icon-container'>{filesvg}</div>
        </div>

        <div className='icons-bottom'>
          <div className='icon-container'>{profilesvg}</div>
          <div className='icon-container'>{settingsvg}</div>
        </div>
      </div>

      <div className='files-col'>
      </div>

      <textarea className='body-col'>
      </textarea>
    </div>
  );
}

export default App;
