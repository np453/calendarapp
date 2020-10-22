import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import moment from 'moment';
import '../styles/landing-page.scss'
import Calendar from './calender';
import ScrollReveal from 'scrollreveal';
export default class HomePage extends Calendar {
    
    state = {
        dateContext:moment(),
        today:moment()

    }
    componentDidMount() {
        ScrollReveal().reveal('.timeline-item',{ delay: 800, duration:1000, origin:"bottom", opacity:0.2, reset:true });
    }
    
    render() {
        const colors = ["#ffc600", "#63A92C", "#BF30F1", "#A92C42", "#FDC04B", "#2FA5D8", "#D82F43"];
        const week = [];
        for (let i=0;i<7;i++) {
            
            week.push({weekday:this.weekdaysShort[i], color:colors[i]});
        }
        let weekdays = week.map((day) => {
            return (
                <td key={day} className="week-day"><strong>{day.weekday}</strong></td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }
        
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d} id="tddd" className={d === this.state.today.date() ? "today dropdown days":"dropdown days"}>
                    <span className="day p-2 rounded text-center" onClick={e => this.onDayClick(e,this.state.data.user.events , d)}>{d}</span>
                </td>  
                    
                
            );
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });
        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100} className="">
                    {d}
                </tr>
            );
        })
        return (
            <React.Fragment>
            <div className="container-fluid shadow-sm">
                <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <h1 class="navbar-brand brand is-fjalla">1999 Sharp</h1>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#landingPageNavbar" aria-controls="landingPageNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="landingPageNavbar">
                        <div class="navbar-nav ml-auto align-items-center">
                        <Link style={{textDecoration:"none", color:"#000"}} className="mr-3 is-nunito" to="/contact">Contact</Link>
                        <Link style={{textDecoration:"none", color:"#000"}} className="mr-3 is-nunito" to="/faq">FAQ</Link>
                        <Link style={{textDecoration:"none", color:"#000"}} className="mr-3 is-nunito" to="/login">sign in</Link>
                        <Link style={{textDecoration:"none"}} className="sign-up is-nunito" to="/"><span className="">sign up for free</span></Link>
                        </div>
                    </div>
                </nav>
                </div>   
            </div>
            <div className="vh-100">
            <motion.div initial={{y:10, opacity:0}} animate={{y:-20, opacity:1}} transition={{duration:0.7}} className=" mt-4 text-center is-nunito row d-flex justify-content-center align-items-center background-white">
                <div className="col-md-12">
                <span className=" font-weight-bold landing-page-heading">Your shcedule<br/>management tool</span>
                </div>
                <div className="col-md-12">
                <h3>Keep yourself updated and organised</h3>
                </div>    
            </motion.div>
            <motion.div initial={{y:10, opacity:0}} animate={{y:-20, opacity:1}} transition={{duration:0.7}} className="is-nunito text-center jumbotron d-flex justify-content-center background-white">
                
            </motion.div>
            <div className="container-calendar-wqewe shadow-lg">
            <div className="d-flex justify-content-center align-items-center">
                    <i onClick={e => this.prevMonth()} className="fa p-3 fa-2x fa-angle-left"></i>
                    <h4 className="is-poppins mt-4 mb-4">{this.month()}, {this.currentDate()} {moment().format('dddd')}</h4>
                    <i onClick={e => this.nextMonth()} className="fa p-3 fa-2x fa-angle-right"></i>
            </div>
                    
                <motion.table className="table" initial={{y:10, opacity:0}} animate={{y:-20, opacity:1}} transition={{duration:0.7}}>
                    <thead>
                    </thead>
                    <tbody>
                        <tr className="is-poppins week-rows">
                            {weekdays}
                        </tr >
                        {trElems}
                    </tbody>
                </motion.table>
            </div>
            </div>
            
            <div className="row container-row p-4">
                <div className="col is-nunito d-flex flex-column font-weight-bold">
                    <div className="row mb-4"><span className="mb-2 heading-2">Manage, organise your events<br/>in Dashboard</span><br/></div>
                    <div className="row"><span className="">try it <span className="sign-up">sign up for free</span></span></div>
                    
                    
                </div>
                <div className="col"></div>
            </div>
            <div className="row container-row mt-5 p-4">
                <div className="col"></div>
                <div className="col is-nunito d-flex flex-column font-weight-bold">
                    <div className="row mb-4"><span className="mb-2 heading-2">We keep track of your events :)</span><br/></div>            
                </div>
            </div>
            <footer className="footer p-2 border-top mt-5">
                <div className="row">
                    <div className="col-md-4"><h2 className="is-fjalla mt-5">1999 Sharp</h2><h6>Your schedule<br/>management tool</h6></div>
                    <div className="col-md-1"><h4 className="is-fjalla mt-5">Links</h4><h6>Sign up</h6><h6>Sign in</h6></div>
                    <div className="col-md-1"><h4 className="is-fjalla mt-5">Product</h4><h6>Overview</h6></div>
                    <div className="col-md-1"><h4 className="is-fjalla mt-5">Contact us</h4><h6>Email us</h6></div>
                    <div className="col-md-5"></div>
                </div>
                
            </footer>
        </React.Fragment> 
        )
    }
}