import React from 'react';

function Selected({setCreditTerm,setCarYear,setOtKuchi,setCity}) {
    return (
        <div>
            <select className="select form-select mt-3"
                    onChange={(e) => setCreditTerm(e.target.value)}
                    aria-label="Default select example">
                <option value={""} hidden>Срок кредита</option>
                <option value="36">36 oy</option>
                <option value="48">48 oy</option>
                <option value="60">60 oy</option>
            </select>
            <select className="select form-select mt-3"
                    onChange={(e) => setCarYear(e.target.value)}
                    aria-label="Default select example">
                <option value={""} hidden>Год выпуска</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
            <select className="select form-select mt-3"
                    onChange={(e) => setOtKuchi(e.target.value)}
                    aria-label="Default select example">
                <option value={""} hidden>Лошадиные силы</option>
                <option value="38">38 л.с</option>
                <option value="49">49 л.с</option>
                <option value="62">62 л.с</option>
                <option value="68">68 л.с</option>
                <option value="75">75 л.с</option>
                <option value="80">80 л.с</option>
                <option value="85">85 л.с</option>
                <option value="105">105 л.с</option>
                <option value="106">106 л.с</option>
                <option value="108">108 л.с</option>
                <option value="121">121 л.с</option>
                <option value="141">141 л.с</option>
                <option value="167">167 л.с</option>
                <option value="169">169 л.с</option>
                <option value="186">186 л.с</option>
                <option value="258">258 л.с</option>
            </select>
            <select className="select form-select mt-3"
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="Default select example">
                <option value={''} hidden>Выберите область</option>
                <option value="Ташкент">Ташкент</option>
                <option value="Сирдаря">Сирдаря</option>
                <option value="Джиззак">Джиззак</option>
                <option value="Самарканд">Самарканд</option>
                <option value="Бухара">Бухара</option>
                <option value="Навои">Навои</option>
                <option value="Кашкадаря">Кашкадаря</option>
                <option value="Сурхандаря">Сурхандаря</option>
                <option value="Харезм">Харезм</option>
                <option value="Андижан">Андижан</option>
                <option value="Фергана">Фергана</option>
                <option value="Наманган">Наманган</option>
                <option value="Нукус">Нукус</option>
            </select>
        </div>
    );
}

export default Selected;