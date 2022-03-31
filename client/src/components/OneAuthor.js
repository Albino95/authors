import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const OneAuthor = (props) => {

    const [oneAuthor, setOneAuthor] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setOneAuthor(response.data)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [id])



    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
    }


    return(
        <div>
            <p>Product: {oneAuthor.name}</p>
            <hr/>
            <Link to = {"/"}>Home</Link>

            <button onClick={deleteAuthor}>Delete {oneAuthor.name}</button>
        </div>
    )
}

export default OneProduct;