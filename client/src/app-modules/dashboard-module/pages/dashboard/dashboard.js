import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./dashboard.css";
import { OPEN_YOUR_ACCONT, PROCESS_ORMENT_ACCOUNT, VALIDATE_CREDIT_CARD, REQUEST_CHECKBOOK } from '../../../../app-constant/images';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="content">
                <div className="inner-container">
                    <div className="page-header">
                        <h2 className="welcome-text"><span>Welcome to </span>Finance</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit urna quis ultricies commodo.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Aliquam convallis vel arcu et scelerisque. Quisque vitae est a lacus placerat fermentum vitae id
                        dolor. Morbi non orci quam. Donec in semper odio.</p>

                    <p>Maecenas efficitur commodo lacus eu molestie. Praesent congue iaculis auctor. Nulla
                        facilisis eros non neque hendrerit facilisis. Vestibulum nulla dui, imperdiet at diam ut, accumsan
                        tincidunt diam. Fusce finibus massa eget congue pellentesque. Donec in semper odio. Suspendisse
                        potenti. Sed tempus lacus nibh, ut
                        auctor ipsum varius sed. Duis iaculis lectus sed magna efficitur faucibus. Sed molestie rhoncus
                        orci, eu fermentum maurisaccumsan non.</p>

                    <div className="row card-group">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-header">
                                    <figure><img src={OPEN_YOUR_ACCONT} width="218px" alt="Open Your Account" /></figure>
                                </div>
                                <div className="card-body">
                                    <h3>Do you want to open an account with us?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/open-your-account" className="btn btn-primary">Open Your Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-header">
                                    <figure><img src={PROCESS_ORMENT_ACCOUNT} alt="Process Ornament Account" /></figure>
                                </div>
                                <div className="card-body">
                                    <h3>Do you want to activate your Dormant account?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/#" className="btn btn-primary">Process Dormant Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-header">
                                    <figure><img src={VALIDATE_CREDIT_CARD} alt="Validate Credit Card" /></figure>
                                </div>
                                <div className="card-body">
                                    <h3>Do you want to validate your credit card?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/#" className="btn btn-primary">Validate your Credit Card</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-header">
                                    <figure><img src={REQUEST_CHECKBOOK} alt="Request Checkbook" /></figure>
                                </div>
                                <div className="card-body">
                                    <h3>Do you want to request for a cheque book?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/#" className="btn btn-primary">Process Cheque Book</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;