import React, { useContext } from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg'; 
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';
import useAuth from '../../../hooks/useAuth';

//pola wymagane
const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  //missing:PropTypes.bool.isRequired
};

//const defaultProps = {
 //missing : 'to jest domyslny props'
//}


function Hotel(props) {
  const theme = useContext(ThemeContext);
  const [auth]=useAuth(); //jesli nie chce to nie musze pobierac drugiej wartosci setAuth

const clickHandler = (e) => {
e.preventDefault()  // na razie próbujemy zatrzymać działanie tego linku by się strona nie odświeżyła
props.onOpen(props)
}



  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
      
        <div className="row">
          <div className="col-4">
            <img
              src={hotelImg}
              alt=""
              className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{props.name}</p>
                <span className="badge badge-light">{props.city}</span>
              </div>
              <div className="col text-right">
                <h5>{props.rating}</h5>
                <a href="#"
                onClick={clickHandler}
                className={`btn btn-${theme.color} mt-2 px-4`}>
                Pokaż
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <p className={styles.description}>
              {props.description}
            </p>
            {auth ? 
              <p className='mt-2'> Dostepnosc: 4 pokoje</p>
            : <p className='mt-2'> Dostepnosc: Zaloguj</p>
            }
           
          </div>
        </div>

      </div>
    </div>
  );
}

Hotel.propTypes = propTypes;
//Hotel.defaultProps = defaultProps;

export default Hotel;