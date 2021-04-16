import React, { Component, Fragment } from 'react'

import '../articles.css'
import imgCss from './css.png'

const translations = {
    "ru": {
        "title": "Css",
        "introInf": <Fragment>
            <p>
            CSS (/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — 
            формальный язык описания внешнего вида документа (веб-страницы), 
            написанного с использованием языка разметки (чаще всего HTML или XHTML). 
            Также может применяться к любым XML-документам, например, к SVG или XUL.
            </p>
            <p>
            CSS используется создателями веб-страниц для задания цветов, шрифтов, 
            стилей, расположения отдельных блоков и других аспектов представления 
            внешнего вида этих веб-страниц. Основной целью разработки CSS являлось 
            отделение описания логической структуры веб-страницы (которое производится 
            с помощью HTML или других языков разметки) от описания внешнего вида этой 
            веб-страницы (которое теперь производится с помощью формального языка CSS). 
            Такое разделение может увеличить доступность документа, предоставить большую 
            гибкость и возможность управления его представлением, 
            а также уменьшить сложность и повторяемость в структурном содержимом.
            </p>
            <p>
            Кроме того, CSS позволяет представлять один и тот же документ в различных 
            стилях или методах вывода, таких как экранное представление, печатное представление, 
            чтение голосом (специальным голосовым браузером или программой чтения с экрана), 
            или при выводе устройствами, использующими шрифт Брайля
            </p>
            <p>
            Часто при вёрстке страниц нужно использовать одно и то же значение много раз: 
            один и тот же цвет, один и тот же шрифт. И если это значение нужно будет изменить, 
            то придётся менять во многих местах. В стандартном CSS нет 
            возможностей наследования стилей, вычисляемых значений и прочих зависимостей.
            </p>
            <p>
            Для решения этих вопросов и ускорения разработки существует несколько расширений 
            (препроцессоров) языка CSS. Расширений в том смысле, что код CSS является валидным 
            кодом для расширения, но не наоборот. Чтобы из кода «расширенного CSS» получился 
            обычный CSS-файл, 
            воспринимаемый браузером, необходимо выполнить компиляцию.
            </p>
      </Fragment>,
    },
    "en": {
      "title": "Css",
      "introInf": <Fragment>
        <p>
            Cascading Style Sheets (CSS) is a style sheet 
            language used for describing the presentation of a 
            document written in a markup language such as HTML. 
            CSS is a cornerstone technology of the World Wide Web, 
            alongside HTML and JavaScript
        </p>
        <p>
            CSS is designed to enable the separation of presentation and content, 
            including layout, colors, and fonts.[3] This separation can improve 
            content accessibility, provide more flexibility and control in the 
            specification of presentation characteristics, enable multiple web
            pages to share formatting by specifying the relevant CSS in a separate 
            .css file which reduces complexity and repetition in the structural 
            content as well as enabling the .css file to be cached to improve the 
            page load speed between the pages that share the file and its formatting.
        </p>
        <p>
            Separation of formatting and content also makes it feasible to present 
            the same markup page in different styles for different rendering methods, 
            such as on-screen, in print, by voice (via speech-based browser or screen 
            reader), and on Braille-based tactile devices. CSS also has rules for 
            alternate formatting if the content is accessed on a mobile device. 
        </p>
        <p>
            The name cascading comes from the specified priority scheme to 
            determine which style rule applies if more than one rule matches a 
            particular element. This cascading priority scheme is predictable.
        </p>
        <p>
            The CSS specifications are maintained by the World Wide Web Consortium (W3C). 
            Internet media type (MIME type) text/css is registered for use with CSS by 
            RFC 2318 (March 1998). The W3C operates a free CSS validation service for 
            CSS documents.
        </p>
        <p>
            In addition to HTML, other markup languages support the use of CSS including 
            XHTML, plain XML, SVG, and XUL.
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
                        <img src={imgCss} alt="css" id="css-img" className="overview-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Html;