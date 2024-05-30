import Imagefollow from 'react-image-follow';
import '../styles/test.css';
import background from '../img/snowbackground.png'
const src =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';
export default () => (
  <div className='demo'>
    <Imagefollow src={background} />
  </div>
);