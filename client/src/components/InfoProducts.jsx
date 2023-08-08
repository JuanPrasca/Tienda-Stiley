
export const InfoProducts = ({ product = [] }) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Color</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((val, key) => {
                        return <tr key={key}>
                        <td className="text-success">{val.productName}</td>
                        <td>$ {val.price}</td>
                        <td>{val.amount}</td>
                        <td>{val.color}</td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    );
}