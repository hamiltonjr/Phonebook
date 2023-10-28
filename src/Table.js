function Table({ vector }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Select</th>
                </tr>
            </thead>

            <tbody>
                {
                    vector.map((obj, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                            <td>{obj.phone}</td>
                            <td>
                                <button className="btn btn-success">
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
