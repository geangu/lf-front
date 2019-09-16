import React, { Component } from 'react';

class Bussiness extends Component {

    render() {
        return (
            <div>
                <br></br>
                <h1>Bussiness Info</h1>
                <hr></hr>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label for="inputTaxId">Tax Id</label>
                            <input type="text" className="form-control" id="inputTaxId" placeholder="Tax Id" />
                        </div>
                        <div className="form-group col-md-9">
                            <label for="inputName">Bussiness Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Bussiness Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Seattle"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
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
                                <option value="New">New</option> Hampshire
<option value="New">New</option> Jersey
<option value="New">New</option> Mexico
<option value="New">New</option> York
<option value="North">North</option> Carolina
<option value="North">North</option> Dakota
<option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode">Rhode</option> Island
<option value="South">South</option> Carolina
<option value="South">South</option> Dakota
<option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West">West</option> Virginia
<option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>

                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="text-center">
                        <button type="button" className="btn btn-link btn-lg"> Back </button>
                        <button type="button" className="btn btn-success btn-lg"> Next </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Bussiness;