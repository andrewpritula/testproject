import React, { Component } from 'react'

import imgHtml from '../img/html.png'


export default class Html extends Component {
    render() {
        return(
            <div className="container">
                <div className="left-part">
                    <p className="term">HTML</p>
                    <p>
                        HTML (HyperText Markup Language — «язык гипертекстовой разметки») — 
                        самый базовый строительный блок Веба. Он определяет содержание и структуру веб-контента. 
                        Другие технологии, помимо HTML, обычно используются для описания внешнего вида/представления 
                        (CSS) или функциональности/поведения (JavaScript) веб-страницы.
                    </p>
                    <p>
                        Под гипертекстом ("hypertext") понимаются ссылки, которые соединяют веб-страницы друг с 
                        другом либо в пределах одного веб-сайта, либо между веб-сайтами. Ссылки являются 
                        фундаментальным аспектом Веба. Загружая контент в Интернет и связывая его со страницами, 
                        созданными другими людьми, вы становитесь активным участником Всемирной паутины.
                    </p>
                    <p>HTML использует разметку ("markup") для отображения текста, изображений и другого 
                        контента в веб-браузере. HTML-разметка включает в себя специальные "элементы", 
                        такие как &lt;head&gt;, &lt;title&gt;, &lt;body&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, 
                        &lt;p&gt;, &lt;div&gt;, &lt;span&gt;, &lt;img&gt;, &lt;aside&gt;, &lt;audio&gt;, &lt;canvas&gt;, &lt;datalist&gt;, 
                        &lt;details&gt;, &lt;embed&gt;, &lt;nav&gt;, &lt;output&gt;, &lt;progress&gt;, &lt;video&gt; и многие другие.
                    </p>
                    <p>
                    HTML-элемент выделяется из прочего текста в документе с помощью "тегов", 
                    которые состоят из имени элемента окруженного "&lt;" и "&gt;". Имя элемента внутри 
                    тега не чувствительно к регистру. То есть, оно может быть написано в верхнем 
                    или нижнем регистре, или смешано. Например, тег &lt;title&gt; может быть записан 
                    как &lt;Title&gt;, &lt;TITLE&gt;, или любым другим способом.
                    </p>
                    <p>Статьи, представленные ниже, могут помочь вам больше узнать о HTML.</p>
                    <h3>Введение в HTML</h3>
                    <p>Если вы новичок в веб-разработке, обязательно прочитайте статью:
                    <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics" className="text-link"> Основы HTML</a>, 
                    чтобы узнать, что такое HTML и как его использовать.
                    </p>
                    <h3>Руководства по HTML</h3>
                    <p>Статьи о том, как использовать HTML, а также обучающие материалы и исчерпывающие примеры можно найти в разделе. 
                        <a href="https://developer.mozilla.org/ru/docs/Learn/HTML" className="text-link"> Пространство изучения HTML</a>, 
                    </p>
                </div>
                <div className="rigth-part">
                    <img src={imgHtml} alt="html" id="html-img" className="overview-img"></img>
                </div>
            </div>
        )
    }
}