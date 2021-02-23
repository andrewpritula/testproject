import React, { Component } from 'react'
import {render} from 'react-dom'

//create obj
const TimBerners = {
    //2-nd lvl of nesting
    fullname : {
        name : 'Tim',
        sername : 'Berners-Lee',
    },
    yearOfBirth : 1955,
    placeOfBirth : 'London',
    age : 65,
    displayFullname : function() {
        return this.fullname.name + " " + this.fullname.sername;
    },
}

const BillGates = {
    //2-nd lvl of nesting
    fullname : {
        name : 'Bill',
        sername : 'Gates',
    },
    yearOfBirth : 1955,
    placeOfBirth : 'Seattle',
    age : 65,
    displayFullname : function() {
        return this.fullname.name + " " + this.fullname.sername;
    },
}

const JamesGosling = {
    //2-nd lvl of nesting
    fullname : {
        name : 'James ',
        sername : 'Gosling',
    },
    yearOfBirth : 1955,
    placeOfBirth : 'Calgary',
    age : 65,
    displayFullname : function() {
        return this.fullname.name + " " + this.fullname.sername;
    },
}

//arr of obj
let goodGuys = [TimBerners, BillGates, JamesGosling];

//display all keys of array to console
function displayObj(item) {
      getProp(item);

      function getProp(o) {
          for(var prop in o) {
              if(typeof(o[prop]) === 'object') {
                  getProp(o[prop]);
              } else {
                  console.log("obj." + prop + " = " + o[prop])
              }
          }
      }
}

//add el to obj
function addEl(item) {
    console.clear();
    console.log('OBJ BEFORE ADDING ELEMENT');
    displayObj(item);
    console.log('');
    console.log('OBJ AFTER ADDING ELEMENT');
    item.newEl = 'adding el';
    displayObj(item);
}

//del el from obj
function deleteEl(item) {
    console.clear();
    console.log('OBJ BEFORE DELETING ELEMENT');
    displayObj(item);
    delete item.placeOfBirth;
    console.log('');
    console.log('OBJ AFTER DELETING ELEMENT');
    displayObj(item);
}

//pic obj by key
function pickByKey(item) {
    console.clear();
    console.log('item age before: ' + item.age);
    item.age = 33;
    console.log('item age after: ' + item.age);
}

//extend obj by 'spread'
function spreadTest(item) {
    console.clear();
    console.log('OBJ BEFORE SPREAD');
    let spreadItem = {...item, spreadText: 'spread complete', spreadValue : 404};
    displayObj(item);
    console.log('');
    console.log('OBJ AFTER SPREAD');
    displayObj(spreadItem);;
}

export default class Task4Table extends Component {
    render() {
        return(
            <div className = "task3-container">
                <h2 className = "task-overview">Task 4</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Year of birth</th>
                            <th>Place of birth</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {goodGuys.map((value, index) => 
                            <tr>
                                <td key={index}>{value.displayFullname()}</td>
                                <td>{value.yearOfBirth}</td>
                                <td>{value.placeOfBirth}</td>
                                <td>{value.age}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="tabble-buttons">
                    <button className="tButton" onClick={(e) => addEl(JamesGosling)}>Add</button>
                    <button className="tButton" onClick={(e) => deleteEl(JamesGosling)}>Delete</button>
                    <button className="tButton" onClick={(e) => pickByKey(JamesGosling)}>Pick by key</button>
                    <button className="tButton" onClick={(e) => spreadTest(JamesGosling)}>Spread</button>
                </div>
            </div>
        )
    }
}

render(<Task4Table/>, document.getElementById('task4'));