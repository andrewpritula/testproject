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

//copyArr and add new obj to arr
function addArrItem(arr, obj) {
    const newArr = [...arr];
    newArr.push(obj);

    console.clear();
    console.log('Standart Arr')
    console.table(arr);

    console.log('Arr copy with new el')
    console.table(newArr);

    return newArr;
}


//creates arr copy, del element from it, and return it
function delArrItem(arr) {
    const newArr = [...arr];
    newArr.pop();

    console.clear();
    console.log('Standart Arr')
    console.table(arr);

    console.log('Arr copy without deleted el')
    console.table(newArr);

    return newArr;
}

//display all keys of obj to console
function displayObj(item) {
      getProp(item);

      function getProp(o) {
          for(var prop in o) {
              if(typeof(o[prop]) === 'object') {
                  getProp(o[prop]);
              } else {
                  console.log('obj.' + prop + " = " + o[prop])
              }
          }
      }
}

//add el to obj
//task 5 creates new obj(copy of obj that you push into property and adding new element, default or custom)
//and displays first obj and new obj with adding ellement
function addEl(obj, item = "newDefaultItem") {
    
    const newObj = {...obj};
    newObj.newEl = item;

    console.clear();
    console.log('STANDART OBJ');
    displayObj(obj);
    console.log('');

    console.log('NEW OBJ WITH ADDING ELEMENT');
    displayObj(newObj);

    console.log(obj === newObj);
    return newObj;
}

//del el from obj
//task 5 creates new obj(copy of obj that you push into property and adding new element, default or custom)
//and displays first obj and new obj without deleted ellement
function deleteEl(obj, item = 'placeOfBirth') {
    const newObj = {...obj}
    delete newObj[item];

    console.clear();
    console.log('STANDART OBJ');
    displayObj(obj);
    console.log('');
    console.log('NEW OBJ WITHOUT DELETING ELEMENT');
    displayObj(newObj);

    console.log(obj === newObj);
    return newObj;
}

//pic obj by key
//task 5 creates new obj(copy of obj that you push into property and pick it value by key, default or custom)
//and displays first obj item and new obj with changed item
function pickByKey(obj, item, value) {
    const newObj = {...obj};
    newObj[item] = value;

    console.clear();
    console.log('item of standart obj: ' + obj[item]);
    console.log('item of obj copy: ' + newObj[item]);
    return newObj;
}

//extend obj by 'spread'
//creates obj copy by spread operator and adding new item from property
function spreadTest(obj, item = 'defaultItem') {
    console.clear();
    console.log('STANDAT OBJ');
    const newObj = {...obj, item};
    displayObj(obj);
    console.log('');
    console.log('NEW OBJ AFTER SPREAD');
    displayObj(newObj);

    return newObj;
}

//task5 sort that takes array of obj in first paramether and vaule sort by into second
function bubbleSort(a, par) {
    var swapped;
    const arrCopy = [...a];
    do {
        swapped = false;
        for (var i = 0; i < arrCopy.length - 1; i++) {
            if (arrCopy[i][par] > arrCopy[i + 1][par]) {
                var temp = arrCopy[i];
                arrCopy[i] = arrCopy[i + 1];
                arrCopy[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    
    console.clear();
    console.log('Standart Arr of Obj');
    console.table(a);
    console.log('Sorted Arr copy of Obj');
    console.table(arrCopy);

    return arrCopy;
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
                    <button className="tButton" onClick={(e) => bubbleSort(goodGuys, 'yearOfBirth')}>Sort</button>
                    <button className="tButton" onClick={(e) => addArrItem(goodGuys, {fullname: {name: 'James', sername: 'Bond'}, 
                        yearOfBirth:1996, placeOfBirth: "Krop", age:24, displayFullname})}>Add el to arr</button>
                    <button className="tButton" onClick={(e) => delArrItem([1, 2, 3])}>Dell el from arr</button>
                </div>
            </div>
        )
    }
}

render(<Task4Table/>, document.getElementById('task4'));