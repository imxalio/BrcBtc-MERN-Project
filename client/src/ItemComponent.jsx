import { useContext } from 'react';
import { ProjcetContext } from './App';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ItemComponent = () => {
  const { allItems, apiUrl } = useContext(ProjcetContext);

  return (
    <div className="projects-section">
      {allItems.map((item, index) => {
        const { _id, name, image, date } = item;
        const newDate = moment(date).format('MMMM Do YYYY');

        return (
          <article key={index} className="item-container">
            <img src={`${apiUrl}${image}`}></img>

            <div
              style={{ textAlign: 'center' }}
              className="item-info-container"
            >
              <h1
                style={{
                  marginBottom: '1.6rem',
                  textAlign: 'center',
                  fontSize: '2.8rem',
                  fontWeight: '700',
                }}
              >
                {name}
              </h1>

              <h3
                style={{
                  fontSize: '1.6rem',
                  marginBottom: '1.2rem',
                }}
              >
                Mint Date : {newDate}
              </h3>
              <Link to={`/project/${_id}`}>
                <button className="btn">show more</button>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ItemComponent;
