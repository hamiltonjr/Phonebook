function Form( {btn, eventKeyboard, create, obj, cancel} ) {
    return (
        <form>
            {/* form fields */}
            <input type="text"
                onChange={eventKeyboard} 
                name="name"
                value={obj.name}
                placeholder="name"
                className="form-control" />
            <input type="text"
                onChange={eventKeyboard}
                name="email" 
                value={obj.email}
                placeholder="email"
                className="form-control" />
            <input type="text" 
                onChange={eventKeyboard}
                name="phone"
                value={obj.phone}
                placeholder="phone"
                className="form-control" />

            {/* buttons conditionally shown */}
            {
                btn
                ? 
                <input type="button" value="Save" 
                    className="btn btn-primary" 
                    onClick={create} />
                :
                <div>
                    <input type="button" value="Update" 
                        className="btn btn-warning" />
                    <input type="button" value="Delete" 
                        className="btn btn-danger" />
                    <input onClick={cancel} 
                        type="button" value="Cancel"
                        className="btn btn-secondary" />
                </div> 
            }
        </form>
    )
}

export default Form;
