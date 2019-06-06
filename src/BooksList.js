import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BooksList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onDeleteBook: PropTypes.func.isRequired,
	}
	state = {
		query: ''
	}
	updateQuery = (query) => {
		this.setState(() =>({
			query: query.trim()
		}))
	}
       clearQuery = () => {
   	     this.updateQuery('')
    	}
    
	render() {
		const { query} = this.state
		const { books,  onDeleteBook } = this.props
		
		const showingBooks = query === ''
			? books
			: books.filter((c) => (
				c.title.toLowerCase().includes(query.toLowerCase())
			)) 
            
 		const rBooks = books.filter(function(book) {
							return book.stats === 'read';
						})
		const tBooks = books.filter(function(book) {
							return book.stats === 'toRead';
						})		
		const dBooks = books.filter(function(book) {
							return book.stats === 'readed';
						})        
 
		const srBooks = showingBooks.filter(function(book) {
							return book.stats === 'read';
						})
		const stBooks = showingBooks.filter(function(book) {
							return book.stats === 'toRead';
						})		
		const sdBooks = showingBooks.filter(function(book) {
							return book.stats === 'readed';
						})	
		
		return(
			<div className = 'booklist'>
				<div className='booklist-top'>
						<Link
						to='/'
						className='search-button'
					></Link>
					<input
						className='search-book'
						type='text'
						placeholder='Search Books'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
					<Link
						to='/create'
						className='add-Book-button'
					></Link>
                    {((srBooks.length !== rBooks.length) || (stBooks.length !== tBooks.length) || (sdBooks.length !== dBooks.length)) &&(    
                        <button className='showAll' onClick={this.clearQuery}>
                            Show All
                        </button>
                    )}
				</div>
				
				{(tBooks.length !== 0) && (
				<div id='toRead' className='shell'>
					<div className='title'>
                        <div className='titlename'>
                            <h5>To read</h5>
                        </div>
                        {stBooks.length !== tBooks.length &&(    
                            <div className='bookscounter'>
                                <span>Now showing {stBooks.length} of {tBooks.length}</span>
                            </div>
                        )}
                    </div>
                    <ul className="book-list">
                        {stBooks.map((book) => (
                            <li key={book.id} >
							<div className='bookslist-item'>
                                <div className='book-image' style={{backgroundImage: `url(${book.imgURL})`}}>
								</div>
								<div className='Books-item'>
									<div>
										<div className='book-author'><h6>{book.author}</h6></div>
										<div className='book-title'><h6>{book.title}</h6></div>
									</div>
									<div className='book-remove-blok'>
										<button onClick={() => onDeleteBook(book)} className='book-remove'>M</button>
									</div>
								</div>
							</div>
                            </li>
                        ))}
                    </ul>
				</div>
				)}
				
				
				
				{(rBooks.length !== 0) && (
				<div id='Read' className='shell'>
					<div className='title'>
						<div className='titlename'>
                            <h5>Read</h5>
                        </div>
                    {srBooks.length !== rBooks.length &&(    
                        <div className='bookscounter'>
                            <span>Now showing {srBooks.length} of {rBooks.length}</span>
                        </div>
                    )}
                        </div>
						<ul className='book-list'>
							{srBooks.map((book) => (
								<li key={book.id} >
							<div className='bookslist-item'>
                                <div className='book-image' style={{backgroundImage: `url(${book.imgURL})`}}>
								</div>
								<div className='Books-item'>
									<div>
										<div className='book-author'><h6>{book.author}</h6></div>
										<div className='book-title'><h6>{book.title}</h6></div>
									</div>
									<div className='book-remove-blok'>
										<button onClick={() => onDeleteBook(book)} className='book-remove'>M</button>
									</div>
								</div>
							</div>
                            </li>
							))}
						</ul>
				</div>
				)}
				
				{(dBooks.length !== 0) && (
				<div id='Readed' className='shell'>
					<div className='title'>
						<div className='titlename'>
                            <h5>Readed</h5>
                        </div>
                    {sdBooks.length !== dBooks.length &&(    
                        <div className='bookscounter'>
                            <span>Now showing {sdBooks.length} of {dBooks.length}</span>
                        </div>
                    )}
                        </div>
						<ul className='book-list'>
							{sdBooks.map((book) => (
								<li key={book.id} >
							<div className='bookslist-item'>
                                <div className='book-image' style={{backgroundImage: `url(${book.imgURL})`}}>
								</div>
								<div className='Books-item'>
									<div>
										<div className='book-author'><h6>{book.author}</h6></div>
										<div className='book-title'><h6>{book.title}</h6></div>
									</div>
									<div className='book-remove-blok'>
										<button onClick={() => onDeleteBook(book)} className='book-remove'>M</button>
									</div>
								</div>
							</div>
                            </li>
							))}
						</ul>
				</div>
				)}
			</div>
		)
	}
}

export default BooksList
