import React,{useState} from 'react';
import { Button , Collapse} from 'react-bootstrap';
import NumberFormat from "react-number-format";


function Cost({Gai, obshiRasxod}) {
    const [open, setOpen] = useState(false);

    return (
        <div>

            <div id="accordion" className="myaccordion">
                <div className="card">
                    <div className="card-header" >
                        <h2 className="mb-0">
                            <Button className="d-flex align-items-center justify-content-between btn1 "
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                Расходы по кредиту
                                <span className="fa-stack fa-sm">

                                    <i className="fas fa-circle fa-stack-2x"> </i>
                                    <i className="fas fa-plus fa-stack-1x fa-inverse"> </i>
                                </span>
                            </Button>
                        </h2>
                    </div>
                    <Collapse id="collapseOne" className="collapse" in={open} >
                        <div className="card-body" id="example-collapse-text">
                            <table className="table table-hover table-credit-info">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Kapitalbank</th>
                                    <th scope="col">Anorbank</th>
                                    <th scope="col">Ipoteka bank</th>
                                    <th scope="col">Turon bank</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className="th-width
                                            " scope="row">Оценка автомашины:
                                    </th>
                                    <td>270 000</td>
                                    <td>---</td>
                                    <td>270 000</td>
                                    <td>270 000</td>
                                </tr>
                                <tr>
                                    <th className="th-width
                                            " scope="row">Нотариальное оформление договора купли-продажи:
                                    </th>
                                    <td>550 000</td>
                                    <td>550 000</td>
                                    <td>550 000</td>
                                    <td>550 000</td>
                                </tr>
                                <tr>
                                    <th className="th-width
                                            " scope="row">Расходы на регистрацию в ГАИ:
                                    </th>
                                    <td><NumberFormat
                                            className="dashboard-number-format"
                                            value={Gai}
                                            displayType={"text"}
                                            thousandSeparator={' '}
                                        /></td>
                                    <td><NumberFormat
                                            className="dashboard-number-format"
                                            value={Gai}
                                            displayType={"text"}
                                            thousandSeparator={' '}
                                        /></td>
                                    <td><NumberFormat
                                            className="dashboard-number-format"
                                            value={Gai}
                                            displayType={"text"}
                                            thousandSeparator={' '}
                                        /></td>
                                    <td><NumberFormat
                                            className="dashboard-number-format"
                                            value={Gai}
                                            displayType={"text"}
                                            thousandSeparator={' '}
                                        /></td>
                                </tr>
                                <tr>
                                    <th className="th-width
                                            " scope="row">Оформление договора залога:
                                    </th>
                                    <td>570 000</td>
                                    <td>570 000</td>
                                    <td>570 000</td>
                                    <td>570 000</td>
                                </tr>
                                <tr>
                                    <th className="th-width
                                            " scope="row">ОБШИЕ РАСХОДЫ НА ПРИОБРЕТЕНИЯ:
                                    </th>
                                    <td><NumberFormat
                                        className="dashboard-number-format"
                                        value={obshiRasxod.anor}
                                        displayType={"text"}
                                        thousandSeparator={' '}
                                    /></td>
                                    <td>
                                        <NumberFormat
                                            className="dashboard-number-format"
                                            value={obshiRasxod.kapital}
                                            displayType={"text"}
                                            thousandSeparator={' '}
                                        /></td>
                                    <td><NumberFormat
                                        className="dashboard-number-format"
                                        value={obshiRasxod.ipoteka}
                                        displayType={"text"}
                                        thousandSeparator={' '}
                                    /></td>
                                    <td><NumberFormat
                                        className="dashboard-number-format"
                                        value={obshiRasxod.turon}
                                        displayType={"text"}
                                        thousandSeparator={' '}
                                    /></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Cost;