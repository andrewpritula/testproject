import React, { Component, Fragment } from 'react'

import '../articles.css'
import imgHtml from './html.png'

const translations = {
    "ru": {
        "title": "HTML",
        "introInf": 
        <Fragment>
          <p>HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») 
              — стандартизированный язык разметки веб-страниц во Всемирной паутине. 
              Код HTML интерпретируется браузерами; полученная в результате 
              интерпретации страница отображается на экране монитора компьютера 
              или мобильного устройства.
          </p>
          <p>Язык HTML до 5-й версии определялся как приложение SGML 
              (стандартного обобщённого языка разметки по стандарту ISO 8879). 
              Спецификации HTML5 формулируются в терминах DOM (объектной модели документа).
          </p>
          <p>Строгим вариантом HTML является XHTML, он наследует синтаксис XML и 
              является приложением языка XML в области разметки гипертекста.
          </p>
          <p>HTML-страницы, как правило, открываются браузерами обмениваясь с сервером 
              информацией по протоколу HTTP или HTTPS, в виде простого текста или с 
              использованием шифрования.
          </p>
        </Fragment>,
    },
    "en": {
      "title": "HTML",
      "introInf": <Fragment>
        <p>
        The HyperText Markup Language, or HTML is the standard markup language for documents 
        designed to be displayed in a web browser. It can be assisted by technologies such 
        as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
        </p>
        <p>
        Web browsers receive HTML documents from a web server or from local storage 
        and render the documents into multimedia web pages. HTML describes the structure 
        of a web page semantically and originally included cues for the appearance of 
        the document.
        </p>
        <p>
        HTML elements are the building blocks of HTML pages. With HTML constructs, 
        images and other objects such as interactive forms may be embedded into the 
        rendered page. HTML provides a means to create structured documents by denoting 
        structural semantics for text such as headings, paragraphs, lists, links, quotes 
        and other items. HTML elements are delineated by tags, written using angle brackets.
        Tags such as &gt;img /&gt; and &gt;input /&gt; directly introduce content into the page. 
        Other tags such as &gt;p&gt; surround and provide information about document text and 
            may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.
        </p>
        <p>
        HTML can embed programs written in a scripting language such as JavaScript, 
        which affects the behavior and content of web pages. Inclusion of CSS defines 
        the look and layout of content. The World Wide Web Consortium (W3C), 
        former maintainer of the HTML and current maintainer of the CSS standards, 
        has encouraged the use of CSS over explicit presentational HTML since 1997.
        </p>
      </Fragment>,
    }
}

class Html extends Component {
    render() {
        const { lang } = this.props;
        console.log(lang)

        return(
            <div>
                <div className="container">
                    <div className="left-part">
                        <h3>{translations[lang]["title"]}</h3>
                        <div>{translations[lang]["introInf"]}</div>
                    </div>
                    <div className="rigth-part">
                        <img src={imgHtml} alt="html" id="html-img" className="overview-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Html;