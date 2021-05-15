import React, { useState, useEffect } from 'react'
import './Styles/fetch.css'
import ThemeContext from '../../../context/ThemeContext'
import {useTranslation} from "react-i18next";

function Fetch() {
  const {t} = useTranslation('common');
  const {dark} = React.useContext(ThemeContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

   // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://spaceflightnewsapi.net/api/v2/articles")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={dark ? "container-dark" : "container"}>
        <table className="table">
          <thead>
              <tr>
                <th>{t('tableTitle')}</th>
                <th>{t('tableSummary')}</th>
                <th>{t('tableLink')}</th>
              </tr>
          </thead>
          <tbody key ='tbody'>
            {items.map((item, index) => 
            <tr key={index}>
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
}

export default Fetch;