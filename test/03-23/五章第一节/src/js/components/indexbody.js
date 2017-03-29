import React from 'react';
import BodyChild from './bodyChild';
export default class ComponentBody extends React.Component {

	//每一个组件可以当成一个类，每一个类都有constructor方法
	constructor() {
		//调用基类的所有初始化方法
		super();

		//初始化赋值
		this.state = {
			username: 'jiangrun-state',
			age: 20
		}
	};

	changeUserInfo(age) {
		this.setState({age: age})
	};

	handleChangeChildValue(event) {
		this.setState({age: event.target.value});
	};
	render () {
		var userName = 'Jiangrun';
		var boolBtn = true;
		var html = "im&nbsp;mook&nbsp;lesson";
		/*setTimeout(()=>{
			this.setState({username: 'IMMOOC123'});
		},4000);*/
		return(
			<div>
				<h2>这里是主体内容</h2>
					<p>========我是分割线========</p>
					<h3>reactjsx语法</h3>
					<p>{userName == '' ? '用户未登录' : '登录用户：' + userName}</p>
					<p><input type="button" value={userName} disabled={boolBtn} /></p>

					{/*第一种解析html片段，需要后台将特殊字符，例如空格进行Unicode转码*/}
					<p>{html}</p>

					{/*第二种解析html片段，但是容易造成xss攻击*/}
					<p dangerouslySetInnerHTML = {{__html : html}}></p>
					<p>========我是分割线========</p>

				<h3>react组件属性与事件-state与props的使用</h3>
				<p>{this.state.username} {this.props.userid}</p>

				<p>========我是分割线========</p>
				<h3>react双向数据绑定</h3>
				<p>接收到的父页面的age:{this.state.age}</p>
				<input type="button" value="提交" onClick = {this.changeUserInfo.bind(this,99)}/>
				<BodyChild handleChangeChildValue = {this.handleChangeChildValue.bind(this)}/>
				<p>========我是分割线========</p>
			</div>
		);
	}
}

//验证传递数据的合法性
ComponentBody.propTypes = {
	userid: React.PropTypes.number
}
