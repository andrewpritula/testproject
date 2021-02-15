import React, { Component } from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import VCS from '../src/pages/VCS'
import Git from '../src/pages/Git'
import NodeJS from '../src/pages/NodeJS'
import Npm from '../src/pages/Npm'
import Html from '../src/pages/Html'
import Css from '../src/pages/Css'


class ListItem {
 constructor(title, path) {
     this.title = title;
     this.path = path;
 }
}

const headerTitle = 'Testproject';

const navList = [
    new ListItem('VCS', '/'),
    new ListItem('Git', '/git'),
    new ListItem('Node JS', '/node'),
    new ListItem('Npm', '/npm'),
    new ListItem('Html', '/html'),
    new ListItem('CSS', '/css')
];

const footerList = [
    new ListItem('Andrew Pritula', '/'),
    new ListItem('GitHub Profile', 'https://github.com/andrewpritula'),
    new ListItem('Original Design', 'https://dribbble.com/shots/14867346-Harman')
];


class TableItem {
    constructor(year, event) {
        this.year = year;
        this.event = event;
    }
}

let tableItems = [
    new TableItem(2005, 'testitem1'),
    new TableItem(2013, 'testitem2'),
    new TableItem(1996, 'testitem3'),
    new TableItem(2018, 'testitem4'),
    new TableItem(2008, 'testitem5')
];

function bubbleSort(a, par)
{
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i][par] > a[i + 1][par]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// eslint-disable-next-line no-extend-native
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

class Page extends Component {
    render() {
        return (
            <div id='page'>
                <header className="header">
                    <h1 className="header-title">{headerTitle}</h1>
                    <div className="header-right">
                        <ul className="nav-header">
                            {navList.map((value, index) => {
                               return <li key={index} className="nav-item"><a href={value.path} className="nav-link">{value.title}</a></li>
                            })}
                        </ul>
                    </div>
                </header>
                <section className ="task3">
                    <h2>Task 3</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableItems.map((value, index) => {
                                return <tr>
                                    <td key={index}>{value.year}</td>
                                    <td>{value.event}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <div className="tabbleButtons">
                        <button className="tButton" onClick={(e) => tableItems.push(new TableItem(getRandomIntInclusive(1, 2021), 'testitemPush'))}>Push</button>
                        <button className="tButton" onClick={(e) => tableItems.unshift(new TableItem(getRandomIntInclusive(1, 2021), 'testitemShift'))}>Unshift</button>
                        <button className="tButton" onClick={(e) => tableItems.insert(2, new TableItem(getRandomIntInclusive(1, 2021), 'testitemInsert'))}>Insert by index</button>
                        <button className="tButton" onClick={(e) => tableItems.pop()}>Pop</button>
                        <button className="tButton" onClick={(e) => tableItems.shift()}>Shift</button>
                        <button className="tButton" onClick={(e) => tableItems.splice(2, 1)}>Delete by index</button>
                        <button className="tButton" onClick={(e) => tableItems.sort((a, b) => a.year > b.year ? 1 : -1)}>Default Sort</button>
                        <button className="tButton" onClick={(e) => bubbleSort(tableItems, 'year')}>Bubble Sort</button>
                        <button className="tButton" onClick={(e) => console.log(tableItems)}>Display</button>
                    </div>
                </section>
                <section className="overview">
                        <Router>
                            <Switch>
                                <Route exact path = "/" component={VCS}/>
                                <Route exact path = "/git" component={Git}/>
                                <Route exact path = "/node" component={NodeJS}/>
                                <Route exact path = "/npm" component={Npm}/>
                                <Route exact path = "/html" component={Html}/>
                                <Route exact path = "/css" component={Css}/>
                            </Switch>
                        </Router>
                </section>

                <footer className="footer">
                    <ul className="footer-nav">
                            {footerList.map((value, index) => {
                               return <li key={index} className="footer-nav-item"><a href={value.path} className="footer-link">{value.title}</a></li>
                            })}
                        </ul>
                </footer>
            </div>
        )
    }
}

render(<Page/>, document.getElementById('root'));