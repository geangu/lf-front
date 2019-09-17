import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import SimpleReactValidator from 'simple-react-validator';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBusinessTime, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faBusinessTime, faArrowLeft, faArrowRight);

class Business extends Component {

    validator = new SimpleReactValidator();

    taxId = React.createRef();
    businessName = React.createRef();
    address = React.createRef();
    city = React.createRef();
    _state = React.createRef();
    postalCode = React.createRef();
    amount = React.createRef();

    state = {
        ok: false,
        taxId: "",
        businessName: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        amount: "",
    };

    updateValues = (e) => {
        e.preventDefault();
        this.setState({
            taxId: this.taxId.current.value,
            businessName: this.businessName.current.value,
            address: this.address.current.value,
            city: this.city.current.value,
            state: this._state.current.value,
            postalCode: this.postalCode.current.value,
            amount: this.amount.current.value
        });
        console.log(this.state);
    }

    nextPage = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.setState({ok: true})
        } else {
            this.setState({ok: false})
            this.validator.showMessages();
        }
    };

    render() {

        if (this.state.ok) {
            return (<Redirect to="/owner"></Redirect>);
        }

        return (
            <div className="card card-body bg-light">
                <br></br>
                <h1>
                    <FontAwesomeIcon icon="business-time" /> Business Info
                </h1>
                <hr></hr>
                <form onSubmit={this.nextPage} onChange={this.updateValues}>
                    <div className="form-group">
                        <label htmlFor="inputAmount">Amount</label>
                        <input type="text" className="form-control" id="inputAmount" placeholder="10000" ref={this.amount} />
                        {this.validator.message('amount', this.state.amount, 'required|numeric')}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputTaxId">Tax Id</label>
                            <input type="text" className="form-control" id="inputTaxId" placeholder="Tax Id" ref={this.taxId} />
                            {this.validator.message('TaxId', this.state.taxId, 'required')}
                        </div>
                        <div className="form-group col-md-9">
                            <label htmlFor="businessName">Business Name</label>
                            <input type="text" className="form-control" id="businessName" placeholder="Business Name" ref={this.businessName} />
                            {this.validator.message('businessName', this.state.businessName, 'required')}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" ref={this.address} />
                        {this.validator.message('address', this.state.address, 'required')}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Seattle" ref={this.city} />
                            {this.validator.message('city', this.state.address, 'required')}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" ref={this._state}>
                                <option value="" defaultValue>Choose...</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>

                            </select>
                            {this.validator.message('state', this.state.state, 'required')}
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" ref={this.postalCode} />
                            {this.validator.message('postalCode', this.state.postalCode, 'required|numeric')}
                        </div>
                    </div>
                    <hr></hr>
                    <div className="text-right">
                        <NavLink className="btn btn-link btn-lg" to="/">
                            <FontAwesomeIcon icon="arrow-left" /> Back
                        </NavLink>
                        <button type="submit" className="btn btn-success btn-lg">
                            Next <FontAwesomeIcon icon="arrow-right" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Business;