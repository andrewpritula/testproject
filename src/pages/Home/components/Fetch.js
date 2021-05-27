import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../../store/action'
import loader from '../../../accets/images/loader.gif'
import ThemeContext from '../../../context/ThemeContext'
import {useTranslation} from "react-i18next";
import './Styles/fetch.css'

function Fetch(props){
  const {dark} = React.useContext(ThemeContext);
  const {t} = useTranslation('common');

  function handleClick() {
    props.dispatch(fetchData());
  }

  return (
    <div className={dark ? "container-dark" : "container"}>
      <button className = 'button' type="button" onClick={handleClick}>Get articles</button>
      {props.isFetching && <img className='loader' src={loader} alt='loader'/>}
      <table className="table">
          <thead>
              <tr>
                <th>{t('tableTitle')}</th>
                <th>{t('tableSummary')}</th>
                <th>{t('tableLink')}</th>
              </tr>
          </thead>
          <tbody key ='tbody'>
          {props.myData.map(item => 
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.summary}</td>
              <td>
                <a className={dark ? "table-link-dark" : "table-link"} href={item.url}>{t('tableLink')}</a>
              </td>
            </tr>
          )}    
        </tbody>
      </table> 
    </div>
  );
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(Fetch);