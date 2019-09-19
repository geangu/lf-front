import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import SimpleReactValidator from 'simple-react-validator';

import swal from 'sweetalert';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';

import Constants from '../../config/Constants'


library.add(faUser, faArrowLeft, faArrowRight);

class Owner extends Component {

  validator = new SimpleReactValidator();
  amount = Number(this.props.location.state.amount);
  business = this.props.location.state.business;

  securityNumber = React.createRef();
  ownerName = React.createRef();
  email = React.createRef();
  address = React.createRef();
  city = React.createRef();
  _state = React.createRef();
  postalCode = React.createRef();

  state = {
    ok: false,
    owner: {
      securityNumber: "",
      ownerName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
    }
  };

  updateValues = (e) => {
    e.preventDefault();
    this.setState({
      owner: {
        securityNumber: this.securityNumber.current.value,
        ownerName: this.ownerName.current.value,
        email: this.email.current.value,
        address: this.address.current.value,
        city: this.city.current.value,
        state: this._state.current.value,
        postalCode: this.postalCode.current.value,
      }
    });
  }

  nextPage = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      swal({
        title: "Are you sure to apply for the loan?",
        text: "Amount: " + this.amount,
        icon: "warning",
        buttons: true,
        dangerMode: true,
        showLoaderOnConfirm: true,
        closeModal: false
      })
        .then(() => {
          Axios.post(
            Constants.API_BASE_URL + '/loan',
            {
              "amount": this.amount,
              "business": this.business,
              "owner": this.state.owner,
            }).then((res) => {
              if (res.data.decision) {
                let decision = res.data.decision
                var className = "info";
                switch (decision) {
                  case "Aproved":
                    className = "success";
                    this.setState({ ok: true })
                    break;
                  case "Declined":
                    className = "error";
                    this.setState({ ok: false })
                    break;
                  case "Undecided":
                    className = "warning";
                    this.setState({ ok: false })
                    break;
                  default:
                    className = "info";
                }
                swal('Application ' + decision, 'The loan application is ' + decision, className);
              }
            });
        });
    } else {
      this.setState({ ok: false })
      this.validator.showMessages();
    }
  };

  render() {
    if (this.state.ok) {
      return (<Redirect to="/"></Redirect>);
    }
    return (
      <div className="card card-body bg-light">
        <br></br>
        <h1>
          <FontAwesomeIcon icon="user" /> Owner Info
                </h1>
        <hr></hr>
        <form onSubmit={this.nextPage} onChange={this.updateValues}>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="inputSecurityNumber">Social Security Number</label>
              <input type="text" className="form-control" id="inputSecurityNumber" placeholder="9876543210" ref={this.securityNumber} />
              {this.validator.message('securityNumber', this.state.owner.securityNumber, 'required|numeric')}
            </div>
            <div className="form-group col-md-9">
              <label htmlFor="ownerName">Owner Name</label>
              <input type="text" className="form-control" id="ownerName" placeholder="Owner Name" ref={this.ownerName} />
              {this.validator.message('ownerName', this.state.owner.ownerName, 'required')}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" placeholder="10000" ref={this.email} />
            {this.validator.message('email', this.state.owner.email, 'required|email')}
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" ref={this.address} />
            {this.validator.message('address', this.state.owner.address, 'required')}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" placeholder="Seattle" ref={this.city} />
              {this.validator.message('city', this.state.owner.city, 'required')}
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
              {this.validator.message('state', this.state.owner.state, 'required')}
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" ref={this.postalCode} />
              {this.validator.message('postalCode', this.state.owner.postalCode, 'required|numeric')}
            </div>
          </div>
          <hr></hr>
          <div className="text-right">
            <Link className="btn btn-link btn-lg" to={{ pathname: '/business', state: { 'business': this.business, 'amount': this.amount } }}>
              <FontAwesomeIcon icon="arrow-left" /> Back
            </Link>
            <button type="submit" className="btn btn-success btn-lg">
              Next <FontAwesomeIcon icon="arrow-right" />
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Owner;