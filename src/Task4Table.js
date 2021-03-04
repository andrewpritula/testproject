import React, { Component } from 'react'
import {render} from 'react-dom'


function displayFullname() {
    return this.fullname.name + " " + this.fullname.sername;
}

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
    displayFullname,
}

const BillGates = {
    //2-nd lvl of nesting
    fullname : {
        name : 'Bill',
        sername : 'Gates',
    },
    yearOfBirth : 1935,
    placeOfBirth : 'Seattle',
    age : 65,
    displayFullname,
}

const JamesGosling = {
    //2-nd lvl of nesting
    fullname : {
        name : 'James ',
        sername : 'Gosling',
    },
    yearOfBirth : 1925,
    placeOfBirth : 'Calgary',
    age : 65,
    displayFullname,
}

//arr of obj
let goodGuys = [TimBerners, BillGates, JamesGosling];

function consoleInfo(op = 'default', item, itemCopy) {
    console.clear();
    console.log(op);
    console.log('Basic item:');
    console.table(item);
    console.log('Item copy');
    console.table(itemCopy);
}

// display all keys of obj to console
// function displayObj(item) {
//       getProp(item);

//       function getProp(o) {
//           for(var prop in o) {
//               if(typeof(o[prop]) === 'object') {
//                   getProp(o[prop]);
//               } else {
//                   console.log('obj.' + prop + " = " + o[prop])
//               }
//           }
//       }
// }

//add el to obj
//task 5 creates new obj(copy of obj that you push into property and adding new element, default or custom)
//and displays first obj and new obj with adding ellement
function addEl(obj, item = "newDefaultItem") {
    
    const newObj = {...obj};
    newObj.newEl = item;

    consoleInfo('add el', obj, newObj);

    console.log(obj === newObj);
    return newObj;
}

//del el from obj
//task 5 creates new obj(copy of obj that you push into property and adding new element, default or custom)
//and displays first obj and new obj without deleted ellement
function deleteEl(obj, item = 'placeOfBirth') {
    const newObj = {...obj}
    delete newObj[item];

    consoleInfo('delete el', obj, newObj);

    console.log(obj === newObj);
    return newObj;
}

//pic obj by key
//task 5 creates new obj(copy of obj that you push into property and pick it value by key, default or custom)
//and displays first obj item and new obj with changed item
function pickByKey(obj, item, value) {
    const newObj = {...obj};
    newObj[item] = value;

    consoleInfo('pick el by key', obj[item], newObj[item]);

    return newObj;
}

//extend obj by 'spread'
//creates obj copy by spread operator and adding new item from property
function spreadTest(obj, item = 'defaultItem') {
    const newObj = {...obj, item}; 
    
    consoleInfo('spred obj', obj, newObj);

    return newObj;
}

//copyArr and push new obj to arr
function pushArrItem(arr, obj) {
    const newArr = [...arr];
    newArr.push(obj);

    consoleInfo('push el', arr, newArr);

    return newArr;
}

//creates arr copy, pop element from it, and return it
function popArrItem(arr) {
    const newArr = [...arr];
    newArr.pop();
    
    consoleInfo('pop el', arr, newArr);

    return newArr;
}

//copyArr and add new obj to arr
function shiftArrItem(arr) {
    const newArr = [...arr];
    newArr.shift();

    consoleInfo('shift el', arr, newArr);

    return newArr;
}

//creates arr copy, pop element from it, and return it
function unshiftArrItem(arr, obj) {
    const newArr = [...arr];
    newArr.unshift(obj);

    consoleInfo('unshift el', arr, newArr);

    return newArr;
}

function insertArrItem(arr, position = 1, obj) {
    const newArr = [...arr];
    newArr.splice(position, 0, obj);

    consoleInfo('insert el', arr, newArr);

    return newArr;
}

function delByIndex(arr, index = 2) {
    const newArr = [...arr];
    newArr.splice(2, 1);

    consoleInfo('delete el by index', arr, newArr);

    return newArr;
}

//task5 sort that takes array of obj in first paramether and vaule sort by into second
function bubbleSort(arr, par) {
    let swapped;
    const newArr = [...arr];
    do {
        swapped = false;
        for (let i = 0; i < newArr.length - 1; i++) {
            if (newArr[i][par] > newArr[i + 1][par]) {
                let temp = newArr[i];
                newArr[i] = newArr[i + 1];
                newArr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    consoleInfo('bublle sort', arr, newArr);

    return newArr;
}

function defaultSort(arr, value = 'age') {
    const newArr = [...arr];
    newArr.sort((a, b) => a[value] > b[value] ? 1 : -1);

    consoleInfo('default sort', arr, newArr);

    return newArr;
}

export default class Task4Table extends Component {
    render() {
        return(
            <div className = "container tables">
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
                            <tr key={index}>
                                <td>{value.displayFullname()}</td>
                                <td>{value.yearOfBirth}</td>
                                <td>{value.placeOfBirth}</td>
                                <td>{value.age}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="tabble-buttons">

                    <h3>Work with obj:</h3>
                    <button className="tButton" onClick={(e) => addEl(JamesGosling, 'newCustomEl')}>Add item to obj</button>
                    <button className="tButton" onClick={(e) => deleteEl(JamesGosling, 'age')}>Delete item from obj</button>
                    <button className="tButton" onClick={(e) => pickByKey(JamesGosling, 'age', +22)}>Pick by key</button>
                    <button className="tButton" onClick={(e) => spreadTest(JamesGosling, +11)}>Spread</button>
                    
                    <h3>Work with arr:</h3>
                    <button className="tButton" onClick={(e) => bubbleSort(goodGuys, 'yearOfBirth')}>Bublle Sort</button>
                    <button className="tButton" onClick={(e) => defaultSort(goodGuys)}>Default Sort</button>
                    <button className="tButton" onClick={(e) => pushArrItem(goodGuys, {fullname: {name: 'James', sername: 'Bond'}, 
                        yearOfBirth:1996, placeOfBirth: "Krop", age:24, displayFullname})}>Push</button>
                    <button className="tButton" onClick={(e) => popArrItem(goodGuys)}>Pop</button>
                    <button className="tButton" onClick={(e) => unshiftArrItem(goodGuys, 
                        {fullname : { name : 'Andrew', sername : 'Pritula'}, age : 99, displayFullname})}>Unshift</button>
                    <button className="tButton" onClick={(e) => shiftArrItem(goodGuys)}>Shift</button>
                    <button className="tButton" onClick={(e) => insertArrItem(goodGuys, 2, {fullname: {name: 'James', sername: 'Bond'}, 
                        yearOfBirth:1996, placeOfBirth: "Krop", age:24, displayFullname})}>Insert by index</button>
                    <button className="tButton" onClick={(e) => delByIndex(goodGuys, 2)}>Delete by index</button>
                </div>
            </div>
        )
    }
}

render(<Task4Table/>, document.getElementById('task4'));