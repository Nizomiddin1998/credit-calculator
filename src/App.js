import {useEffect, useState} from 'react'
import NumberFormat from "react-number-format";
import './App.css';
import Logo from './img/rauto-logo.png';
import AnorBank from './img/anor.jpg'
import IpotekaBank from './img/Ipoteka.jpg'
import KapitalBank from './img/kapitalbank.jpg'
import TuronBank from './img/turonbank.jpg'
import Table from "./components/Table";
import Cost from "./components/Cost";
import Selected from "./components/Selected";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [table, setTable] = useState({
        avtoNarx: '', creditTerm: '', boshFoiz: '', boshSumma: '', oyigaNarx: '', fioz: '', credit: ''
    })
    const [tableB, setTableB] = useState({boshFoizA: '', boshFoizK: '', boshFoizI: '', boshFoizT: ''})
    const [tableS, setTableS] = useState({boshSummaA: '', boshSummaK: '', boshSummaI: '', boshSummaT: ''})
    const [obshiRasxod, setObshiRasxod] = useState({anor: '', kapital: '', ipoteka: '', turon: ''})

    const [bankName] = useState(['AnorBank', 'KapitalBank', 'IpotekaBank', 'TuronBank'])
    const [creditTerm, setCreditTerm] = useState("36")
    const [bankLogo, setBankLogo] = useState('AnorBank')
    const [carValue, setCarValue] = useState('')
    const [boshFoiz, setBoshFoiz] = useState(30)
    const [boshSumma, setBoshSumma] = useState('')
    const [otKuchi, setOtKuchi] = useState('38')
    const [carYear, setCarYear] = useState('')
    const [city, setCity] = useState('')
    const [minusDisabled, setMinusDisabled] = useState(true)
    const [GAI, setGAI] = useState('');

    let BoshlangichTolov;

    const [allOneAmount, setAllOneAmount] = useState({
        anor: '', kapital: '', ipoteka: '', turon: ''
    })
    const [allAllAmount, setAllAllAmount] = useState({
        anor: '', kapital: '', ipoteka: '', turon: ''
    })
    const [allFoiz] = useState([30, 23, 23, 24])


    function onChangeNarx(e) {
        let boshN = e.target.value
        setCarValue(boshN)
        hisob(parseInt(boshN))
    }

    function onChangeBank(e) {
        let a = e.target.value
        setBankLogo(a)
        if (a === 'KapitalBank') {
            setBoshFoiz(20)
        } else if (a === 'IpotekaBank') {
            setBoshFoiz(30)
        } else if (a === 'AnorBank') {
            setBoshFoiz(30)
        } else if (a === 'TuronBank') {
            setBoshFoiz(25)
        }
        hisob(carValue)
    }

    function plus() {
        setBoshFoiz(prev => prev + 1)
        setMinusDisabled(false)
    }

    function minus() {
        if (bankLogo === 'AnorBank') {
            if (boshFoiz === 31) {
                setBoshFoiz(prev => prev - 1)
                setMinusDisabled(true)
            } else setBoshFoiz(prev => prev - 1)
        } else if (bankLogo === 'KapitalBank') {
            if (boshFoiz === 21) {
                setBoshFoiz(prev => prev - 1)
                setMinusDisabled(true)
            } else setBoshFoiz(prev => prev - 1)
        } else if (bankLogo === 'IpotekaBank') {
            if (boshFoiz === 31) {
                setBoshFoiz(prev => prev - 1)
                setMinusDisabled(true)
            } else setBoshFoiz(prev => prev - 1)
        } else if (bankLogo === 'TuronBank') {
            if (boshFoiz === 26) {
                setBoshFoiz(prev => prev - 1)
                setMinusDisabled(true)
            } else setBoshFoiz(prev => prev - 1)
        }
    }

    useEffect(() => {
        hisob(carValue)
    }, [boshFoiz])

    function hisob(boshN) {
        if (bankLogo === 'KapitalBank') {
            BoshlangichTolov = boshN / 100 * boshFoiz;
        } else if (bankLogo === 'IpotekaBank') {
            BoshlangichTolov = boshN / 100 * boshFoiz;
        } else if (bankLogo === 'AnorBank') {
            BoshlangichTolov = boshN / 100 * boshFoiz;
        } else if (bankLogo === 'TuronBank') {
            BoshlangichTolov = boshN / 100 * boshFoiz;
        }
        setBoshSumma(+(BoshlangichTolov).toFixed(2))
    }

    function Calculate() {
        if (carValue){
            let yilFoiz;
            if (parseInt(carYear) <= 2018) {
                yilFoiz = 0.11
            } else yilFoiz = 0.09;
            let oneAmount;

            let oyFoiz;
            let one1Amount
            let one2Amount
            let one3Amount
            let one4Amount
            if (bankLogo === 'AnorBank')
                oyFoiz = 0.3 / 12;
            else if (bankLogo === 'KapitalBank')
                oyFoiz = 0.23 / 12
            else if (bankLogo === 'IpotekaBank')
                oyFoiz = 0.23 / 12
            else if (bankLogo === 'TuronBank')
                oyFoiz = 0.24 / 12


            let aniqCredit = parseInt(carValue) - boshSumma;
            let topPart = (aniqCredit * oyFoiz)
            let bottomPart = (1 - (1 / Math.pow((1 + oyFoiz), parseInt(creditTerm))))
            oneAmount = (topPart / bottomPart)

            let allAmount = +(oneAmount * creditTerm).toFixed(3);

            let avtoBaho = 270000;
            let notarial = 550000;
            let royxatdanUt = 570000;
            let gai = avtoBaho * yilFoiz * parseInt(otKuchi) + 800000;
            setGAI(gai)
            let sugMukof = +(carValue * 0.7 * 0.01 / 12 * parseInt(creditTerm));
            let risk = carValue * 0.3 * 0.01 / 12 * 15;
            let m = +(carValue * 0.07 * 1.25).toFixed(2);
            let risk2 = m * 0.01 / 12 * parseInt(creditTerm);
            let straxofka = sugMukof + risk + risk2;
            let jamiTulov = parseInt(carValue) * boshFoiz / 100 + straxofka + carValue * 0.07;
            let KapitalJami = (avtoBaho + notarial + royxatdanUt + gai + 330000) + jamiTulov;

            let sugMukofotAnor = +(carValue * 0.8 * 0.007 / 12 * parseInt(creditTerm)).toFixed(2);
            let riskAnor = carValue * 0.09 * 1.14 * 0.007 / 12 * parseInt(creditTerm);
            let strahofka = +(sugMukofotAnor + riskAnor).toFixed(2)

            if (boshFoiz >= 30) {
                one1Amount = +(aniqCredit * 0.3 / 12 / (1 - (1 / Math.pow((1 + 0.3 / 12), parseInt(creditTerm))))).toFixed(3)
                one2Amount = +(aniqCredit * 0.23 / 12 / (1 - (1 / Math.pow((1 + 0.23 / 12), parseInt(creditTerm))))).toFixed(3)
                one3Amount = +(aniqCredit * 0.23 / 12 / (1 - (1 / Math.pow((1 + 0.23 / 12), parseInt(creditTerm))))).toFixed(3)
                one4Amount = +(aniqCredit * 0.24 / 12 / (1 - (1 / Math.pow((1 + 0.24 / 12), parseInt(creditTerm))))).toFixed(3)
                setTableB({
                    boshFoizA: boshFoiz, boshFoizK: boshFoiz, boshFoizI: boshFoiz, boshFoizT: boshFoiz
                })
                setTableS({
                    boshSummaA: boshSumma, boshSummaK: boshSumma, boshSummaI: boshSumma, boshSummaT: boshSumma
                })
                let sugurtaI = parseInt(carValue) * 0.008 * (parseInt(creditTerm) / 12)
                let sugurtaT = (parseInt(carValue) - boshSumma) * 1.25 * 0.01 * (parseInt(creditTerm) / 12)
                let rasxod = avtoBaho + notarial + royxatdanUt + gai
                let IpotekaJami = (sugurtaI + boshSumma + rasxod)
                let TuronJami = (sugurtaT + boshSumma + rasxod);

                let jamitulovAnor = (carValue * boshFoiz / 100 + strahofka)
                let AnorJami = 330000 + notarial + royxatdanUt + gai + jamitulovAnor;

                setObshiRasxod({
                    anor: AnorJami, kapital: KapitalJami, ipoteka: IpotekaJami, turon: TuronJami
                })

            } else if (boshFoiz >= 25 && boshFoiz < 30) {

                one1Amount = +((parseInt(carValue) - carValue * 0.3) * 0.3 / 12 / (1 - (1 / Math.pow((1 + 0.3 / 12), parseInt(creditTerm))))).toFixed(3)
                one2Amount = +(aniqCredit * 0.23 / 12 / (1 - (1 / Math.pow((1 + 0.23 / 12), parseInt(creditTerm))))).toFixed(3)
                one3Amount = +((parseInt(carValue) - carValue * 0.3) * 0.23 / 12 / (1 - (1 / Math.pow((1 + 0.23 / 12), parseInt(creditTerm))))).toFixed(3)
                one4Amount = +(aniqCredit * 0.24 / 12 / (1 - (1 / Math.pow((1 + 0.24 / 12), parseInt(creditTerm))))).toFixed(3)
                setTableB({
                    boshFoizA: 30, boshFoizK: boshFoiz, boshFoizI: 30, boshFoizT: boshFoiz
                })
                setTableS({
                    boshSummaA: carValue * 0.3, boshSummaK: boshSumma, boshSummaI: carValue * 0.3, boshSummaT: boshSumma
                })

                let sugurtaI = parseInt(carValue) * 0.008 * (parseInt(creditTerm) / 12)
                let sugurtaT = (parseInt(carValue) - carValue * 0.3) * 1.25 * 0.01 * (parseInt(creditTerm) / 12)
                let rasxod = avtoBaho + notarial + royxatdanUt + gai;
                let IpotekaJami = (sugurtaI + carValue * 0.3 + rasxod);
                let TuronJami = (sugurtaT + boshSumma + rasxod)


                let jamitulovAnor = (carValue * 30 / 100 + strahofka)
                let AnorJami = 330000 + notarial + royxatdanUt + gai + jamitulovAnor;

                setObshiRasxod({
                    anor: AnorJami, kapital: KapitalJami, ipoteka: IpotekaJami, turon: TuronJami
                })

            } else if (boshFoiz >= 20 && boshFoiz < 25) {

                one1Amount = +((parseInt(carValue) - carValue * 0.3) * 0.3 / 12 / (1 - (1 / Math.pow((1 + 0.3 / 12), parseInt(creditTerm))))).toFixed(3)
                one2Amount = +(aniqCredit * 0.23 / 12 / (1 - (1 / Math.pow((1 + 0.23 / 12), parseInt(creditTerm))))).toFixed(3)
                one3Amount = +((parseInt(carValue) - carValue * 0.3) * 0.23 / 12 / (1 - (1 / Math.pow((1 + 0.23 / 12), parseInt(creditTerm))))).toFixed(3)
                one4Amount = +((parseInt(carValue) - carValue * 0.25) * 0.24 / 12 / (1 - (1 / Math.pow((1 + 0.24 / 12), parseInt(creditTerm))))).toFixed(3)
                setTableB({
                    boshFoizA: 30, boshFoizK: boshFoiz, boshFoizI: 30, boshFoizT: 25
                })
                setTableS({
                    boshSummaA: carValue * 0.3,
                    boshSummaK: boshSumma,
                    boshSummaI: carValue * 0.3,
                    boshSummaT: carValue * 0.25
                })
                let sugurtaI = parseInt(carValue) * 0.008 * (parseInt(creditTerm) / 12)
                let sugurtaT = (parseInt(carValue) - carValue * 0.3) * 1.25 * 0.01 * (parseInt(creditTerm) / 12)
                let rasxod = avtoBaho + notarial + royxatdanUt + gai;
                let IpotekaJami = (sugurtaI + carValue * 0.3 + rasxod);
                let TuronJami = (sugurtaT + boshSumma + rasxod);

                let jamitulovAnor = (carValue * 30 / 100 + strahofka)
                let AnorJami = 330000 + notarial + royxatdanUt + gai + jamitulovAnor;

                setObshiRasxod({
                    anor: AnorJami, kapital: KapitalJami, ipoteka: IpotekaJami, turon: TuronJami
                })
            }


            setAllOneAmount({
                anor: one1Amount,
                kapital: one2Amount,
                ipoteka: one3Amount,
                turon: one4Amount
            })
            setAllAllAmount({
                anor: +(one1Amount * parseInt(creditTerm)).toFixed(3),
                kapital: +(one2Amount * parseInt(creditTerm)).toFixed(3),
                ipoteka: +(one3Amount * parseInt(creditTerm)).toFixed(3),
                turon: +(one4Amount * parseInt(creditTerm)).toFixed(3)
            })


            if (bankLogo === 'AnorBank')
                setTable({
                    avtoNarx: carValue, creditTerm: creditTerm, boshFoiz: boshFoiz,
                    boshSumma: boshSumma, oyigaNarx: oneAmount, fioz: 30, credit: allAmount
                })
            if (bankLogo === 'KapitalBank')
                setTable({
                    avtoNarx: carValue, creditTerm: creditTerm, boshFoiz: boshFoiz,
                    boshSumma: boshSumma, oyigaNarx: oneAmount, fioz: 23, credit: allAmount
                })
            if (bankLogo === 'TuronBank')
                setTable({
                    avtoNarx: carValue, creditTerm: creditTerm, boshFoiz: boshFoiz,
                    boshSumma: boshSumma, oyigaNarx: oneAmount, fioz: 24, credit: allAmount
                })
            if (bankLogo === 'IpotekaBank')
                setTable({
                    avtoNarx: carValue, creditTerm: creditTerm, boshFoiz: boshFoiz,
                    boshSumma: boshSumma, oyigaNarx: oneAmount, fioz: 23, credit: allAmount
                })
            toast.success('Выполнено!')
        } else{
            toast.error("Заполните предоставленные поля!");
        }

    }


    return (
        <div>
            <header className="site-header mt-2">
                <div className="container">
                    <div className="header">
                        {/*******Logo and site name*****/}
                        <div className="header__logo">
                            <a href="https://rauto.uz/">
                                <img src={Logo} alt="Retail Auto"/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3">
                            <input type="number"
                                   onChange={onChangeNarx}
                                   value={carValue}
                                   className="form-control" placeholder="Введите цену машины в сумах"/>
                        </div>
                        <form className="form-wrapper">
                            <div>
                                <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
                                <label
                                    htmlFor="subscribeNews"><span>У меня есть официальный ежемесячный доход</span></label>
                            </div>
                        </form>
                        <div className={'selectBank d-flex'}>
                            <label htmlFor="selectBank"><span>Выберите банк</span></label>
                            <select className="select form-select mb-3 "
                                    onChange={onChangeBank}
                                    aria-label="Default select example">
                                {
                                    bankName.map((item, index) => <option key={index} value={item}>
                                        {item}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className="range-credit range-credit-protsent mb-3">
                            <p>Размер первоначального взноса - в процентах</p>
                            <output id="out1">{boshFoiz}</output>
                            <span>%</span>
                            <button type={'button'} className="btn btn-warning btns-style"
                                    onClick={plus}>+
                            </button>
                            <button type={'button'} className="btn btn-danger "
                                    onClick={minus} disabled={minusDisabled}>-
                            </button>
                        </div>
                        <div className="range-credit range-credit-sum">
                            <p>Размер первоначального взноса - в сумах</p>
                            <output id="out2" className={'bg-light'}>
                                <NumberFormat
                                    className="dashboard-number-format"
                                    value={boshSumma ? boshSumma : 0}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                />
                                <span> сум</span>
                            </output>

                        </div>

                        <Selected setCity={setCity} setOtKuchi={setOtKuchi} setCarYear={setCarYear}
                                  setCreditTerm={setCreditTerm}/>
                        <div className="calc-buttons">
                            <button type={'button'} className="btn btn-warning"
                                    onClick={Calculate}>Рассчитать
                            </button>
                            <form className={'d-inline'}>
                                <button type={'submit'} className="btn btn-danger">Обновлять</button>
                            </form>
                        </div>
                        <ToastContainer />
                    </div>
                    <div className="col-6">
                        <div className="card" style={{width: '95%'}}>
                            {
                                bankLogo === 'AnorBank' ?
                                    <img className="card-img-top" src={AnorBank} alt="Card cap"/> :
                                    bankLogo === 'KapitalBank' ?
                                        <img className="card-img-top" src={KapitalBank} alt="Card e cap"/> :
                                        bankLogo === 'TuronBank' ?
                                            <img className="card-img-top" src={TuronBank} alt="Card  cap"/> :
                                            <img className="card-img-top" src={IpotekaBank} alt="Card  cap"/>
                            }

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Цена автотранспорта:<span> {table.avtoNarx} сум</span>
                                </li>
                                <li className="list-group-item">Срок кредита:<span> {table.creditTerm}</span></li>
                                <li className="list-group-item">Первоначальный платеж %:<span> {table.boshFoiz}</span>
                                </li>
                                <li className="list-group-item">Первоначальный взнос UZS:<span> {table.boshSumma}</span>
                                </li>
                                <li className="list-group-item">Итого выплачаемый в
                                    месяц:<span> {table.oyigaNarx}</span></li>
                                <li className="list-group-item">Годовой процент:<span> {table.fioz}</span></li>
                                <li className="list-group-item">Сумма кредита:<span> {table.credit}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5 className="tabs-title">Сравните с банками</h5>
                        <Table bankName={bankName} allOneAmount={allOneAmount}
                               allFoiz={allFoiz}
                               allAllAmount={allAllAmount}
                               tables={table}
                               tablesB={tableB}
                               tablesS={tableS}
                        />
                    </div>
                </div>
                <div>
                    <Cost Gai={GAI} obshiRasxod={obshiRasxod}/>
                </div>
                <div className="alert alert-danger mt-5" role="alert">
                    <p>*Расчет является предварительным! Точные условия по кредиту вам будут предоставлены на нашем
                        офисе.</p>
                    <p>*Общая стоимость потребительского кредита рассчитывается в соответствии с законодательством
                        Республики
                        Узбекистан.</p>
                </div>
            </div>
        </div>
    )
}

export default App;
