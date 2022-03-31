import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditProduct = (props) => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })

        
    }

    return (
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to = '/'>Home</Link>
                <p>Edit this author</p>
            </header>
            <form onSubmit={handleEdit} >
                <div style={{"margin": "30px"}}>
                    <label>Name: </label>
                    <input type='text' value = {name} onChange = {(e) => setName(e.target.value)} />
                </div>

                <button type= 'submit'>Submit</button>
                <button onClick={navigate('/')}>Cancel</button>
            </form>
        </div>
    )
}


export default EditProduct;