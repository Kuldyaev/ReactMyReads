import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'



class AddBook extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, {hash: true})
		if (this.props.onAddBook){
			this.props.onAddBook(values)
		}
		
	}
	
	render() {
		return (
			<div className='booklist'>
				<div id="booklist-top">
					<Link 
						className='close-addbook'
						to='/'>
							Close this form
					</Link>
				</div>
				<form onSubmit={this.handleSubmit} className='addBook-form'>
					<div id="addImage">
						<p id="Load">Add image for book</p>
						<ImageInput
							className='addBook-avatar'
							name='imgURL'
							maxHeight={64}
						/>
					</div>
					<div className='addBook-details'>
						<select type='text' name='stats' placeholder='Status'  className='addBook-details-item'>
							<option value ='read'>Read</option>
							<option value ='toRead'>toRead</option>
							<option value ='readed'>Readed</option>
						</select>
						<input type='text' name='title' placeholder='Title'  className='addBook-details-item'/>
						<input type='text' name='author' placeholder='Author' className='addBook-details-item'/>
						<button id="addBook-button">Add Book</button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddBook
