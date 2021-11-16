import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-top__right">
                        <div className="widget  widget_text">
                            <h6 className="footer-top__headings">Контакты</h6>
                            <div className="textwidget">
                                <p style={{marginBottom: '7px'}} id="contacts"><span className="icon-container"> <span
                                    className="fa fa-map-marker"> </span></span>г.Ташкент, ул. Усмона Носира 113</p>
                                <p style={{marginBottom: '7px'}}><span className="icon-container"><span
                                    className="fa fa-phone"> </span></span>+99895 169 09 88</p>
                                <p><span className="icon-container"><span className="fa fa-envelope"> </span></span>
                                    info@rauto.uz<br/>
                                        <a className="icon-container" href="https://www.facebook.com/rauto.uz/"
                                           target="_blank"
                                           rel="noreferrer"><span className="fa fa-facebook  fa-2x"> </span> </a> <a
                                        className="icon-container" href="https://t.me/autocredit" target="_self"
                                        rel="noopener"><span className="fa fa-telegram"> </span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top__left">
                        <div className="row">
                            <div className="col-xs-12  col-lg-6">
                                <div className="widget  widget_text">
                                    <h6 className="footer-top__headings">Retail Auto</h6>
                                    <div className="textwidget">
                                        <p>Для наших клиентов мы предлагаем выгодные автокредиты, минимальные процентные
                                            ставки. Для этого клиенту необходимо
                                            предоставить лишь все необходимые документы. Оформление документации
                                            происходит
                                            в нашем салоне.
                                        </p>
                                        <p>&nbsp;</p>
                                        <a className="btn  btn-warning" href="https://t.me/autocredit" target="_self"
                                           rel="noopener">Оставить заявку</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;