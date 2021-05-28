import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchData } from '../../../store/action';
import loader from '../../../accets/images/loader.gif';
import ThemeContext from '../../../context/ThemeContext';
import './Styles/fetch.css';

function Fetch(props) {
  const { dark } = React.useContext(ThemeContext);
  const { t } = useTranslation('common');
  const { dispatch, isFetching, myData } = props;

  function handleClick() {
    dispatch(fetchData());
  }

  return (
    <div className={dark ? 'container-dark' : 'container'}>
      <button className="button" type="button" onClick={handleClick}>Get articles</button>
      {isFetching && <img className="loader" src={loader} alt="loader" />}
      <table className="table">
        <thead>
          <tr>
            <th>{t('tableTitle')}</th>
            <th>{t('tableSummary')}</th>
            <th>{t('tableLink')}</th>
          </tr>
        </thead>
        <tbody key="tbody">
          {myData.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.summary}</td>
              <td>
                <a className={dark ? 'table-link-dark' : 'table-link'} href={item.url}>{t('tableLink')}</a>
              </td>
            </tr>
          ))}    
        </tbody>
      </table> 
    </div>
  );
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

Fetch.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  myData: PropTypes.arrayOf(PropTypes.string)
};

Fetch.defaultProps = {
  dispatch: fetchData,
  isFetching: false,
  myData: []
};

export default connect(mapStateToProps)(Fetch);
