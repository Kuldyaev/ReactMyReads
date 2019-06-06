import React, { Component }  from 'react'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import AddBook from './AddBook'


const api = 'http://localhost:3000'
const headers = {'Accept':'application/json'}

class  App  extends Component {
	state = { 
		books: []	,
	}
		
	componentDidMount() {
		fetch('./books.json')
			.then(response=>response.json())
				.then(response=>response.books)
					.then(response=>{this.setState(()=>({books: response}))})
	}
	
	removeBook = (book) => {
		this.setState((currentState) => ({
			books: currentState.books.filter((c) => {
				return c.id !== book.id
			})
		}))
	
		fetch(`${api}/books/${book.id}`,{method: 'DELETE', headers})
			.then(res=>res.json())
			.then(data=>data.books)
			.then(res=>console.log(res))
	}
	
	addBook = (book) => {
		fetch(`${api}/books`,{
			method: 'POST',
			headers: {...headers,'Content-Type':"application/json"},
			body: JSON.stringify(book)
		}).then(response=>response.json())
			.then((book)=>{
				this.setState((currentState)=>({
					books: currentState.books.concat([book])
				}))
			})
		
	}
	
	render(){
		return (
			<div className="App" id='telo'>
				<header>
					<h1>My Books</h1>
				</header>
				<Route exact path='/' render ={() =>(
					<BooksList
							books={this.state.books}
							onDeleteBook = {this.removeBook}
						/>
				)} />
				<Route path='/create'  render={( {history })=>(
					<AddBook
						onAddBook={(book)=>{
							this.addBook(book)
							history.push('/')
						}}
					/>
				)} />
				<footer>
					<p id='creator'>Created by Viacheslav Kuldyaev</p>
				</footer>
			</div>
		);}
}

	
export default App
