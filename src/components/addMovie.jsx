import { useFormik } from "formik";

function AddMovie (props) {
    const formik = useFormik({
        initialValues:{
            name:"",
            genre:"",
            length:"",
            rate:"",
        }
    });
    return ( 

        <form onSubmit={(e)=>{e.preventDefault();
        props.sendMovie(formik.values)
        }}>
            <div style={{position:'relative',width: '85vw',marginBottom: '10px',left: '40vw'}}>
            <div className="mb-3 mt-5 left">
                <lable htmlFor="" className="form-label">Name:</lable>
                    <input 
                    style={{width:'15vw'}}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Ex: Die Hard"
                    value={formik.values.name}
                    required
                    onChange={formik.handleChange}
                    />
            </div>
            <div>
                <select name="genre" id="genre" onChange={formik.handleChange}>
                    <option value="" defaultChecked>Choose genre</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                </select>
            </div>
            <div className="mb-3 mt-5 left">
                <lable htmlFor="" className="form-label">Length:</lable>
                    <input 
                    style={{width:'14.5vw'}}
                    type="text" 
                    name="length" 
                    id="length" 
                    placeholder="Ex: Action"
                    required
                    onChange={formik.handleChange}
                    />
            </div>
            <div className="mb-3 mt-5 left">
                <lable htmlFor="" className="form-label">Rating:</lable>
                    <input
                    style={{width:'14.8vw'}}
                    type="text" 
                    name="rate" 
                    id="rate" 
                    placeholder="Ex: 8.9"
                    required
                    onChange={formik.handleChange}
                    />
            </div>
            <button
            style={{width:'18.5vw'}} 
            type="submit" 
            className="btn btn-primary mt-3"
            >
            Add the movie!</button>
            </div>
            
            

        </form>


     );
}
 
export default AddMovie;








       