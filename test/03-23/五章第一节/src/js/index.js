var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBody from './components/indexbody';

class ComponentIndex extends React.Component {

	//页面将要加载
	componentWillMount() {
		//定义用户逻辑
		console.log('ComponentIndex - componentWillMount');
	};

	//页面已经加载完成
	componentDidMount() {
		//定义用户逻辑
		console.log('ComponentIndex - componentDidMount');
	}
	render() {
		var header = <ComponentHeader/>;
		return (
			<div>
				{header}
				<ComponentBody userid={123456}/>
				<ComponentFooter/>
			</div>
		)
	}
}

ReactDOM.render(<ComponentIndex/>,document.getElementById('example'));
