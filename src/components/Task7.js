import React, { Component } from 'react'
import {render} from 'react-dom'

import Image from './image'
import Task8 from './list'

export default class Task7 extends Component {

	render() {
		return (
		<div className='continer'>
			<h2 className='task7-header'>Task8</h2>
			<Task8/>
			<Image/>	
		</div>
		)
	}
}

render(<Task7/>, document.getElementById('task7'));