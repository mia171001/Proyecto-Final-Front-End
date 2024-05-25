import React from 'react';
import { Link } from 'react-router-dom';

function Carr({ carr }) {
    return (
        <div className="img-carr">
            <Link to="/cart">
                <button type="button" className="position-relative btn-carr">
                    <img src="/images/icon-cpf.svg" alt="carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {carr.length}
                    </span>
                </button>
            </Link>
        </div>
    );
}

export default Carr;

