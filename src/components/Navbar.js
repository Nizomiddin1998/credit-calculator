import React, {useState} from 'react';
import Logo from "../img/rauto-logo.png";
import { Button , Collapse} from 'react-bootstrap';
import '../css/wp-customize.css'
import '../css/auto-pt-style.css'

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
       <div data-rsssl="1" className="blog wp-featherlight-captions js-sticky-navigation">
           <div className={'boxed-container'}>
               <header className="site-header">
                   <div className="container">
                       <div className="header__container">
                           <div className="container">
                               <div className="header">
                                   {/*// <!-- Logo and site name -->*/}
                                   <div className="header__logo">
                                       <a href="https://rauto.uz/">
                                           <img src={Logo} alt="Retail Auto"
                                                className="img-fluid" width="197" height="71"/>
                                       </a>
                                   </div>
                                   {/*// <!-- Toggle button for Main Navigation on mobile -->*/}
                                   <Button
                                       className="btn  btn-dark  header__navbar-toggler  hidden-lg-up  "
                                       type="button"
                                       onClick={() => setOpen(!open)}
                                       aria-controls="example-collapse-text"
                                       aria-expanded={open}
                                   ><i className="fa  fa-bars  hamburger"> </i>
                                       <span>Меню</span></Button>
                                   {/*// <!-- Header navigation widget area -->*/}
                                   <div className="header__navigation-widgets">
                                       <div className="widget  widget-social-icons">
                                           <a className="social-icons__link" href="https://www.facebook.com/rauto.uz/"
                                              target="_blank" rel="noreferrer"><i className="fa  fa-facebook"> </i></a>
                                           <a className="social-icons__link" href="https://t.me/autocredit" target="_blank" rel="noreferrer"><i
                                               className="fa  fa-telegram"> </i></a>

                                       </div>
                                   </div>
                                   {/*// <!-- Main Navigation -->*/}
                                   <Collapse className={'collapse'} in={open} >
                                       <nav className="header__navigation  collapse  navbar-toggleable-md  js-sticky-desktop-option"
                                            id="auto-main-navigation" aria-label="Главное меню">

                                           <ul id="menu-main-menu" className="main-navigation  js-main-nav  js-dropdown"
                                               role="menubar">
                                               <li id="menu-item-13"
                                                   className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-13">
                                                   <a href="https://rauto.uz/">Главная</a>
                                               </li>
                                               <li id="menu-item-974"
                                                   className="menu-item menu-item-type-custom menu-item-object-custom menu-item-974">
                                                   <a
                                                       href="https://rauto.uz/avtopark/">Автопарк</a>
                                               </li>
                                               <li id="menu-item-1114"
                                                   className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1114">
                                                   <a href="https://rauto.uz/o-kompanii/">О компании</a>
                                               </li>
                                               <li id="menu-item-1396"
                                                   className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-1346 current_page_item current_page_parent menu-item-1396">
                                                   <a href="https://rauto.uz/blog/">Блог</a>
                                               </li>
                                               <li id="menu-item-1397"
                                                   className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item">
                                                   <a href="https://calculator.rauto.uz/">Калькулятор</a>
                                               </li>
                                           </ul>
                                       </nav>
                                   </Collapse>
                                   {/*// <!-- Header widget area -->*/}
                                   <div className="header__widgets">
                                       <div className="widget  widget-icon-box">
                                           <div className="icon-box">
                                               <i className="fa  fa-envelope"> </i>
                                               <div className="icon-box__text">
                                                   <a href="mailto:retailauto@mail.ru"
                                                      className="icon-box__title">retailauto@mail.ru</a>
                                                   <span className="icon-box__subtitle"> </span>
                                               </div>
                                           </div>

                                       </div>
                                       <div className="widget  widget-icon-box">
                                           <a className="icon-box  icon-box--featured" href="tel:+998951690988"
                                              target="_self">
                                               <i className="fa  fa-phone"> </i>
                                               <div className="icon-box__text">
                                                   <h4 className="icon-box__title">+99895 169 09 88</h4>
                                                   <span className="icon-box__subtitle"> </span>
                                               </div>
                                           </a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="page-header">
                           <div className="container">
                               <div className="page-header__text">
                                   <h1 className="page-header__title">Кредит калькулятор</h1>
                               </div>
                           </div>
                       </div>

                   </div>
               </header>
           </div>

           <div className="pt-sticky-menu__container  js-pt-sticky-menu" style={{backgroundColor: "#ffffff;"}}>
               <div className="container">
                   <div className="pt-sticky-menu">
                       {/*// <!-- Logo and site name -->*/}
                       <div className="pt-sticky-menu__logo">
                           <a href="https://rauto.uz/">
                               <img src={Logo} alt="Retail Auto"
                                    className="img-fluid" width="197" height="71"/>
                           </a>
                       </div>
                       {/*// <!-- Main Navigation -->*/}
                       <Collapse className={'collapse'} in={open}>
                           <nav className="pt-sticky-menu__navigation" aria-label="Main Menu" >
                               <ul id="pt-sticky-main-menu" className="main-navigation  js-dropdown" role="menubar">
                                   <li
                                       className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-13">
                                       <a href="https://rauto.uz/" tabIndex="-1">Главная</a>
                                   </li>
                                   <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-974"><a
                                       href="https://rauto.uz/avtopark/" tabIndex="-1">Автопарк</a></li>
                                   <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1114">
                                       <a
                                           href="https://rauto.uz/o-kompanii/" tabIndex="-1">О компании</a></li>
                                   <li
                                       className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-1346 current_page_item current_page_parent menu-item-1396">
                                       <a href="https://rauto.uz/blog/" aria-current="page" tabIndex="-1">Блог</a>
                                   </li>
                                   <li
                                       className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1346 current_page_item current_page_parent menu-item-1396">
                                       <a href="https://calculator.rauto.uz/" aria-current="page" tabIndex="-1">Калькулятор</a>
                                   </li>
                               </ul>
                           </nav>
                       </Collapse>
                       {/*// <!-- Hamburger Menu for mobile/tablet -->*/}
                       <div className="pt-sticky-menu__hamburger  hidden-lg-up">
                           <Button
                               className="btn  btn-dark  header__navbar-toggler  hidden-lg-up  "
                               type="button"
                               onClick={() => setOpen(!open)}
                               aria-controls="example-collapse-text"
                               aria-expanded={open}
                           ><i className="fa  fa-bars  hamburger"> </i>
                               <span>Меню</span></Button>
                       </div>
                   </div>
               </div>
           </div>


       </div>
    );
}

export default Navbar;