import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
}
