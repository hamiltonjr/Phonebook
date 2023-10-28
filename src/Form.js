function Form() {
    return (
        <form>
            <input type="text" placeholder="name"
                className="form-control" />
            <input type="text" placeholder="email"
                className="form-control" />
            <input type="text" placeholder="phone"
                className="form-control" />

            <input type="button" value="Save" 
                className="btn btn-primary" />
            <input type="button" value="Update" 
                className="btn btn-warning" />
            <input type="button" value="Delete" 
                className="btn btn-danger" />
            <input type="button" value="Cancel"
                className="btn btn-secondary" />
        </form>
    )
}

export default Form;
