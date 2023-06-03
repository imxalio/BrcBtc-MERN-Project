import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ProjcetContext } from './App';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import BackHome from './BackHome';

const ItemDetails = () => {
  const { apiUrl } = useContext(ProjcetContext);
  const [itemData, setItemData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(apiUrl + 'project/' + id)
      .then((res) => {
        setItemData(res.data.getItem);
      })
      .catch((err) => {});
  }, []);

  let newDate = '';
  if (itemData?.date) newDate = moment(itemData.date).format('MMMM Do YYYY');

  return (
    <>
      <BackHome />

      {itemData ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <h1
            style={{
              fontSize: '3.6rem',
              textAlign: 'center',
            }}
          >
            {itemData.name}
          </h1>
          <div
            style={{ width: '100%', overflow: 'hidden', textAlign: 'center' }}
          >
            <img
              style={{
                height: '50rem',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={apiUrl + itemData.image}
              alt=""
            />
          </div>
          <h1>Mint Date : {newDate}</h1>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.7' }}>
            {itemData.description}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '4rem',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginBottom: '4.4rem',
            }}
          >
            <a
              target={`_blank`}
              style={{ textDecoration: 'none' }}
              className="btn"
              href={itemData.twitter}
            >
              <h1 style={{ fontSize: '1.8rem' }}>twitter</h1>
            </a>
            {itemData.discord && (
              <a
                target={`_blank`}
                style={{ textDecoration: 'none' }}
                className="btn"
                href={itemData.discord}
              >
                <h1 style={{ fontSize: '1.8rem' }}>discord</h1>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4.4rem' }}>Project not found</h1>
        </div>
      )}
    </>
  );
};
export default ItemDetails;
