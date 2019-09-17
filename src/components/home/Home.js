import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

library.add(faRocket);

class Home extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">LendingFront Loan System</h1>
                <p className="lead">We believe that a healthy cash flow should drive the decision of granting a loan rather than a personal credit score.</p>
                <hr className="my-4" />
                <p>
                    Loan applications go through a multi-step
                    approval process: analysis based on basic criteria, credit verification, loan amount qualification
                    and loan document preparation.
                </p>
                <br></br>
                <p className="text-center">
                    <Link className="btn btn-primary btn-lg" to="/business">
                        <FontAwesomeIcon icon="rocket" /> Loan
                    </Link>
                </p>
            </div>
        );
    }
};

export default Home;