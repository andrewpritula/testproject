import React, { Component } from 'react'
import {render} from 'react-dom'

import Image from '../../components/Image/Image'
import Fetch from './components/Fetch'
import Task8 from './components/Task8'

export default class Tasks extends Component {

	render() {
		return (
			<div>
				<Fetch/>
				<Task8/>
				<Image/>	
			</div>
		)
	}
}

render(<Tasks/>, document.getElementById('task7'));