import React, { Fragment } from 'react'

export default function withTranslation(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                language: "ru"
            }
        }
        setLanguage = (lang) => {
            this.setState({ language: lang })
        }
        render() {
            return <Fragment>
                <button className='language-button' onClick={() => this.setLanguage("ru")}>RU</button>
                <button className='language-button' onClick={() => this.setLanguage("en")}>EN</button>
                <WrappedComponent lang={this.state.language} {...this.props} />
            </Fragment>
        }
    };
}