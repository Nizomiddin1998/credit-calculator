import React from 'react';

function Table({bankName, tables,tablesB,tablesS, allAllAmount,allOneAmount,allFoiz}) {
    return (
        <div>
            <table className="table table-hover table-credit-info">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    {
                        bankName.map((item,index)=><th key={index} scope={"col"}>
                            {item}
                        </th>)
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Цена автотранспорта:</th>
                    <td>{tables.avtoNarx}</td>
                    <td>{tables.avtoNarx}</td>
                    <td>{tables.avtoNarx}</td>
                    <td>{tables.avtoNarx}</td>
                </tr>
                <tr>
                    <th scope="row">Срок кредита:</th>
                    <td>{tables.creditTerm}</td>
                    <td>{tables.creditTerm}</td>
                    <td>{tables.creditTerm}</td>
                    <td>{tables.creditTerm}</td>
                </tr>
                <tr>
                    <th scope="row">Первоначальный платеж %:</th>
                    <td>{tablesB.boshFoizA}</td>
                    <td>{tablesB.boshFoizK}</td>
                    <td>{tablesB.boshFoizI}</td>
                    <td>{tablesB.boshFoizT}</td>
                </tr>
                <tr>
                    <th scope="row">Первоначальный взнос UZS:</th>
                    <td>{tablesS.boshSummaA}</td>
                    <td>{tablesS.boshSummaK}</td>
                    <td>{tablesS.boshSummaI}</td>
                    <td>{tablesS.boshSummaT}</td>
                </tr>
                <tr>
                    <th scope="row">Итого выплачаемый в месяц:</th>
                    <td>{allOneAmount.anor}</td>
                    <td>{allOneAmount.kapital}</td>
                    <td>{allOneAmount.ipoteka}</td>
                    <td>{allOneAmount.turon}</td>
                </tr>
                <tr>
                    <th scope="row">Годовой процент:</th>
                    {
                        allFoiz.map((item,index)=><td key={index}>
                            {item}
                        </td>)
                    }
                </tr>
                <tr>
                    <th scope="row">Сумма кредита:</th>
                    <td>{allAllAmount.anor}</td>
                    <td>{allAllAmount.kapital}</td>
                    <td>{allAllAmount.ipoteka}</td>
                    <td>{allAllAmount.turon}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;