import React, { Component } from 'react'

import imgCss from '../img/css.png'

const cssTitle = <h2 className='article-title'>CSS</h2>;
const articleIntro = 
    <div>
        {cssTitle}
        <p>
            CSS (Cascading Style Sheets) — это код, который вы используете для стилизации 
            вашей веб-страницы. Основы CSS помогут вам понять, что вам нужно для начала работы. 
            Мы ответим на такие вопросы как: Как сделать мой текст черным или красным? 
            Как сделать так, чтобы контент появлялся в определенном месте на экране? 
            Как украсить мою веб-страницу с помощью фоновых изображений и цветов?
        </p>
        <p>CSS используется создателями веб-страниц для задания цветов, шрифтов, стилей, 
            расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц. 
            Основной целью разработки CSS являлось отделение описания логической структуры веб-страницы 
            (которое производится с помощью HTML или других языков разметки) от описания внешнего вида этой веб-страницы 
            (которое теперь производится с помощью формального языка CSS). Такое разделение может увеличить 
            доступность документа, предоставить большую гибкость и возможность управления его представлением, 
            а также уменьшить сложность и повторяемость в структурном содержимом.
            Кроме того, CSS позволяет представлять один и тот же документ в различных стилях или методах вывода, 
            таких как экранное представление, печатное представление, чтение голосом (специальным голосовым
            браузером или программой чтения с экрана), или при выводе устройствами, использующими шрифт Брайля.</p>
    </div>

const subTitle = <h3 className='article-subtitle'>Так что же такое CSS?</h3>
const articleFull = <div>
    {subTitle}
    <p>
        Как и HTML, CSS на самом деле не является языком программирования. 
        Это не язык разметки - это язык таблицы стилей. Это означает, что он позволяет
        применять стили выборочно к элементам в документах HTML. Например, чтобы выбрать 
        все элементы абзаца на HTML странице и изменить текст внутри них с черного на красный, 
        вы должны написать этот CSS:
        </p>
        <code>p <br/>
        "color: red;"<br/>
        </code>
        <p>Давайте попробуем: вставьте эти три строки CSS в новый файл в ваш
        текстовый редактор, а затем сохраните файл как style.css в вашей папке styles.
        </p>
        <p>
        Но нам все равно нужно применить CSS к нашему HTML документу. 
        В противном случае, CSS стиль не повлияет на то, как ваш браузер отобразит HTML документ.
        </p>
        <p>Откройте ваш файл index.html и вставьте следующую строку куда-нибудь в шапку, 
        между &lt;head&gt; и &lt;/head&gt; тегами:</p>
        <code>&lt;link href="styles/style.css" rel="stylesheet" type="text/css"&gt;</code>
        <p>Сохраните index.html и загрузите его в вашем браузере.</p>
        <p>Если текст вашего абзаца теперь красный, примите наши поздравления! 
        Вы написали свой первый успешный CSS!
        </p>
        <h3>Анатомия набора правил CSS</h3>
        <dl>
        <dt><b>Селектор (Selector)</b></dt>
        <dd>Имя HTML элемента в начале набора правил. Он выбирает элемент(ы) для применения стиля 
            (в данном случае, элементы <code>p</code> ). Для стилизации&nbsp;другого элемента,
            просто измените селектор.</dd>
        <dt><b>Объявление (Declaration)</b></dt>
        <dd>Единственное правило, например <code>color: red;</code> указывает, 
            какие из <strong>свойств</strong> элемента вы хотите стилизовать.</dd>
        <dt><b>Свойства (Properties)</b></dt>
        <dd>Способы, которыми вы можете стилизовать определенный&nbsp;HTML 
            элемент (в данном случае,&nbsp;<code>color</code> является свойством для элементов <code>&lt;p&gt;</code>). В CSS вы выбираете, какие свойства вы хотите затронуть в вашем правиле.</dd>
        <dt><b>Значение свойства (Property value)</b></dt>
        <dd>Справа от свойства, после двоеточия, у нас есть&nbsp;<strong>значение 
            свойства</strong>, которое&nbsp;выбирает&nbsp;одно из множества возможных 
            признаков для данного свойства (существует множество значений&nbsp;<code>color</code>, 
            помимо <code>red</code>).</dd>
        </dl>
</div>

export default class Css extends Component {
    constructor(props) {
        super(props);
        this.handleMoreClick = this.handleMoreClick.bind(this);
        this.handleLessClick = this.handleLessClick.bind(this);
        this.state = {isShowed: false};
      }
    
      handleMoreClick() {
        this.setState({isShowed: true});
      }
    
      handleLessClick() {
        this.setState({isShowed: false});
      }

    render() {
        const isShowed = this.state.isShowed;
        let button;
        if (isShowed) {
            button = <ShowLess onClick={this.handleLessClick} />;
        } else {
            button = <ShowMore onClick={this.handleMoreClick} />;
        }

        return(
            <div className="container">
                <div className="left-part">  
                    {articleIntro}
                    {button}
                    <ShowInfo isLoggedIn={isShowed} />
                </div>
                <div className="rigth-part">
                    <img src={imgCss} alt="css" id="css-img" className="overview-img"></img>
                </div>
            </div>
        )
    }
}

function BeforeClick(props) {
    return articleFull
}
  
function AfterClick(props) {
    return null
}
  
function ShowInfo(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <BeforeClick />;
    }
    return <AfterClick />;
}
  
function ShowMore(props) {
    return (
      <button className='article-button' onClick={props.onClick}>
        Show more
      </button>
    );
}
  
function ShowLess(props) {
    return (
      <button className='article-button' onClick={props.onClick}>
        Show less
      </button>
    );
} 

