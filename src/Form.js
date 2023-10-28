function Form( {btn, eventKeyboard} ) {
    return (
        <form>
            {/* form fields */}
            <input type="text"
                onChange={eventKeyboard} 
                name="name"
                placeholder="name"
                className="form-control" />
            <input type="text"
                onChange={eventKeyboard}
                name="email" 
                placeholder="email"
                className="form-control" />
            <input type="text" 
                onChange={eventKeyboard}
                name="phone"
                placeholder="phone"
                className="form-control" />

            {/* buttons conditionally shown */}
            {
                btn
                ? 
                <input type="button" value="Save" 
                    className="btn btn-primary" />
                :
                <div>
                    <input type="button" value="Update" 
                        className="btn btn-warning" />
                    <input type="button" value="Delete" 
                        className="btn btn-danger" />
                    <input type="button" value="Cancel"
                        className="btn btn-secondary" />
                </div> 
            }
        </form>
    )
}

export default Form;
