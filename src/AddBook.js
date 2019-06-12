import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'

class AddBook extends Component {
	constructor(props){
		super(props);
		this.state={
			title : '',
			author : '',
			imgURL : '',
			stats: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleURLChange = this.handleURLChange.bind(this);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		const values = event.target;
		const book = {};
		book.title = values.title.value;
		book.author=values.author.value;
		book.imgURL=values.imgURL.value;
		book.stats=values.stats.value;
		console.log(book);
		if(this.props.onAddBook){
			this.props.onAddBook(book)
		}
	}
	
	handleURLChange(event){
		this.setState({imgURL: event.target.value});
		if(event.target.value !== ''){
			console.log(event.target.value);
			document.getElementById("show").src=event.target.value;
		}
		console.log(this.state.imgURL);
	}
	
	render() {
		return (
			<div className='booklist'>
				<div id="booklist-top">
					<Link className='close-addbook'	to='/'>Close page</Link>
				</div>
				<form onSubmit={this.handleSubmit} className='addBook-form' method='POST' encType='multipart/form-data'>
						<div id='addImage'>
							<p ip="Load">Add Image for this Book</p>
							<ImageInput 
								className='addBook-avatar'
								name='imgURL'
								maxHeight={120}
							/>
						</div>
						<div className='addBook-details'>
							<input type='text' name='title' placeholder='Title'  className='addBook-details-item' />
							<input type='text' name='author' placeholder='Author' className='addBook-details-item' />
							<select type="text" name='stats' placeholder="Status" className='addBook-details-item'>
								<option value="read">Read</option>
								<option value="toRead">toRead</option>
								<option value="readed">Readed</option>
							</select>
							<input type="submit" id="addBook-button" value="Add Book" />
						</div>
				</form>
			</div>
		)
	}
}

export default AddBook
