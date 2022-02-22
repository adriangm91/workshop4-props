const TableBody = props => {
    //character es un jsx
    const characters = props.characters.map((char,index) => {
        return( //el key va en el primer elemento que se recorra
            <tr key={index}>
                <td>
                    { char.name }
                </td>
                <td>
                    { char.job }
                </td>
            </tr>
        );
    });
    return <tbody>{characters}</tbody>
};
export default TableBody;