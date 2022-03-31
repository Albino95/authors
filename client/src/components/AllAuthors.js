import React, {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


const AllAuthors = (props) => {
    const [authorsList, setAuthorsList] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/authors')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setAuthorsList(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorsList(authorsList.filter((author, index)=> author._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return(
        <div>
            <header>
                <h1> Favorite Authors</h1>
                <Link to = {'/new'}>Add a Favorite Author</Link>
            </header>

                {
                    authorsList.map((author, index) => (
                        <div key={index}>
                            <Link to = {`/authors/${author._id}`}>
                            <p style={{"textDecoration": "none", "color": "black" }}>{author.name}</p>
                            </Link>
                            <Link to = {`/edit/${author._id}`}>Edit</Link>
                            <button onClick = {() => deleteAuthor(author._id)}>Delete</button>
                        </div>

                    ) )
                }
                
        </div>
    )
}

export default AllAuthors;