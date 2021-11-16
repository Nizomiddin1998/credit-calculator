import React from 'react';
import NumberFormat from "react-number-format";

function Table({bankName, tables, tablesB, tablesS, allAllAmount, allOneAmount, allFoiz, comissiyaUsluga}) {
    return (
        <div>
            <table className="table table-hover table-credit-info">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    {
                        bankName.map((item, index) => <th key={index} scope={"col"}>
                            {item}
                        </th>)
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Цена автотранспорта:</th>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tables.avtoNarx}
                            displayType={"text"}
                            thousandSeparator={' '}
                        />
                    </td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tables.avtoNarx}
                            displayType={"text"}
                            thousandSeparator={' '}
                        />
                    </td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tables.avtoNarx}
                            displayType={"text"}
                            thousandSeparator={' '}
                        />
                    </td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tables.avtoNarx}
                            displayType={"text"}
                            thousandSeparator={' '}
                        />
                    </td>
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
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tablesS.boshSummaA}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tablesS.boshSummaK}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tablesS.boshSummaI}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={tablesS.boshSummaT}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                </tr>
                <tr>
                    <th scope="row">Итого выплачаемый в месяц:</th>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={allOneAmount.anor}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={allOneAmount.kapital}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={allOneAmount.ipoteka}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={allOneAmount.turon}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                </tr>
                <tr>
                    <th scope="row">Годовой процент:</th>
                    {
                        allFoiz.map((item, index) => <td key={index}>
                            {item}
                        </td>)
                    }
                </tr>
                <tr>
                    <th scope="row">Сумма кредита:</th>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={allAllAmount.anor}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td><NumberFormat
                        className="dashboard-number-format"
                        value={allAllAmount.kapital}
                        displayType={"text"}
                        thousandSeparator={' '}
                    /></td>
                    <td><NumberFormat
                        className="dashboard-number-format"
                        value={allAllAmount.ipoteka}
                        displayType={"text"}
                        thousandSeparator={' '}
                    /></td>
                    <td><NumberFormat
                        className="dashboard-number-format"
                        value={allAllAmount.turon}
                        displayType={"text"}
                        thousandSeparator={' '}
                    /></td>
                </tr>
                <tr>
                    <th scope="row">Комиссионные услуги:</th>
                    <td>
                        <NumberFormat
                            className="dashboard-number-format"
                            value={comissiyaUsluga}
                            displayType={"text"}
                            thousandSeparator={' '}
                        /></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;