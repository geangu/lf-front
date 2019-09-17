import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faExclamationCircle);

class NotFound extends Component {

    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>
                        <FontAwesomeIcon icon="exclamation-circle" /> Page not found.
                    </h1>
                    <br></br>
                    <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;