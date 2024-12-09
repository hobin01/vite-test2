const SimpleTable = ({
    tableClass = "", 
    theadClass = "", 
    tbodyClass = "",
    thClass = [],  
    tdClass = [], 
    heads = [], 
    datas = [[]] }) => {
    return (
        <table className={tableClass}>
            <thead className={theadClass}>
                <tr>
                    {heads.map((value, idx) => (
                        <th key={idx} className={thClass[idx]}>{value}</th>
                    ))}
                </tr>
            </thead>
            <tbody className={tbodyClass}>
                {datas.map((values, idx) => (
                    <tr key={idx}>
                        {values.map((value, idx) => (
                            <td className={tdClass[idx]}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SimpleTable;
