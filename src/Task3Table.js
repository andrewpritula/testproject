import React, { Component } from 'react'
import {render} from 'react-dom'

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

function bubbleSort(a, par) {
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
    return Math.floor(Math.random() * (max - min + 1)) + min; //max and min include
}

export default class Task3Table extends Component {
    render() {
        return(
            <div className = "container tables">
                <h2 className = "task-overview">Task 3</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems.map((value, index) => 
                            <tr key={index}>
                                <td>{value.year}</td>
                                <td>{value.event}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="tabble-buttons">
                    <button className="tButton" onClick={(e) => tableItems.push(new TableItem(getRandomIntInclusive(1, 2021), 'testitemPush'))}>Push</button>
                    <button className="tButton" onClick={(e) => tableItems.unshift(new TableItem(getRandomIntInclusive(1, 2021), 'testitemShift'))}>Unshift</button>
                    <button className="tButton" onClick={(e) => tableItems.splice(2, 0, new TableItem(getRandomIntInclusive(1, 2021), 'testitemInsert'))}>Insert(index)</button>
                    <button className="tButton" onClick={(e) => tableItems.pop()}>Pop</button>
                    <button className="tButton" onClick={(e) => tableItems.shift()}>Shift</button>
                    <button className="tButton" onClick={(e) => tableItems.splice(2, 1)}>Delete(index)</button>
                    <button className="tButton" onClick={(e) => tableItems.sort((a, b) => a.year > b.year ? 1 : -1)}>Default Sort</button>
                    <button className="tButton" onClick={(e) => bubbleSort(tableItems, 'year')}>Bubble Sort</button>
                    <button className="tButton" onClick={(e) => console.table(tableItems)}>Display</button>
                </div>
            </div>
        )
    }
}

render(<Task3Table/>, document.getElementById('task3'));