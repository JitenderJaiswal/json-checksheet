import { Link } from 'react-router-dom';

import { HomeContainer } from '../../assets/styles/layout/home.styled';
import { useAuth } from '../../services/auth/AuthProvider';
import { FaList } from 'react-icons/fa';
import { AiOutlinePartition } from 'react-icons/ai';

interface Iprop {
  tilesObj: {
    sNo: number;
    link: string;
    isLink: boolean;
    isIcon: boolean;
    clauseNo?: string | number;
    target?: string;
    p: string;
    span: string;
    icon?: any;
    red?: string;
    style?: {};
  }[];
  height?: string;
  justify?: string;
  columns?: string;
}

const RenderTiles = ({
  tilesObj,
  height,
  justify,
  columns,
}: Iprop): JSX.Element => {
  const { state, login } = useAuth();

  return (
    <HomeContainer height={height} justify={justify} columns={columns}>
      {tilesObj?.map((tiles, index: number) => (
        <div key={index + tiles?.sNo}>
          <Link
            to={tiles?.link}
            // target={tiles?.target}
            className="panel"
          >
            {tiles.isIcon ? (
              tiles.icon
            ) : (
              <span
                className="numberingIcon"
                // style={{ color: tiles?.red ? '#a12222' : '#003566' }}
              >
                {tiles?.clauseNo}
              </span>
            )}
          </Link>
          <p className="card-btn-para">
            {tiles?.p}
            <span className="card-btn-span">{tiles?.span}</span>
          </p>
        </div>
      ))}
    </HomeContainer>
  );
};
export default RenderTiles;
