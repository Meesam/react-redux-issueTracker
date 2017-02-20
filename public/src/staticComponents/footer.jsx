import React, {Component} from 'react';

export default class Footer extends Component{
	render(){
		return(
           <footer className="main-footer">
             <div className="pull-right hidden-xs">
               An open source organisation
             </div>
             <strong>Copyright &copy; 2015 <a href="#">Open Source</a>.</strong> All rights reserved.
           </footer>
		);
	}
}