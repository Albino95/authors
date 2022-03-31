import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const NewAuthor = (props) => {
    const [name, setName] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors",{
            name
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => {
                console.log(err.data)
            })
    }



    return(
        <div>
            <header>
                <Link to = {"/"}>Home</Link>
                <p>Add a new author</p>
                <hr />
            </header>

            <form onSubmit = {handleSubmit}>
                <div style={{"margin": "30px"}}>
                    <label>Title</label>
                    <input type='text' value = {name} onChange = {(e) => setName(e.target.value)} />
                </div>


                <button type= 'submit'>Submit</button>
                <Link to = {'/'}>Cancel</Link>
            </form>
        </div>
    )
}

export default NewAuthor;