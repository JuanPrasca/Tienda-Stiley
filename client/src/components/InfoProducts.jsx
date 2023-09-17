    // // eslint-disable-next-line react/prop-types
    // export const InfoProducts = ({ product = [], deletedData }) => {
        

    //     return (
    //         <table className="table">
    //             <thead>
    //                 <tr>
    //                     <th scope="col">Nombre</th>
    //                     <th scope="col">Precio</th>
    //                     <th scope="col">Cantidad</th>
    //                     <th scope="col">Color</th>
    //                     <th></th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     product.map((val) => {
    //                         return <tr key={val._id}>
    //                         <td className="text-success">{val.productName}</td>
    //                         <td>$ {val.price}</td>
    //                         <td>{val.amount}</td>
    //                         <td>{val.color}</td>
    //                         <td>
    //                         <i className="fa-solid fa-eye"></i>
    //                         <i className="fa-solid fa-pen-to-square text-success mx-3"></i>
    //                         <i className="fa-solid fa-trash text-danger" onClick={() => deletedData(val._id)}></i>
    //                         </td>
    //                     </tr>
    //                     })
    //                 }
    //             </tbody>
    //         </table>
    //     );
    // }