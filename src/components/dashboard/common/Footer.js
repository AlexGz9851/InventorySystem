import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="sticky-footer">
                <div className="container">
                    <div className="text-center">
                        <small>Iván Morett & Alex González</small>
                    </div>
                </div>
            </footer>
            <a className="scroll-to-top rounded" href="#page-top" name='toTop' id='toTop'>
                <i className="fa fa-angle-up"></i>&nbsp;
            </a>
        </div>
    )
}

export default Footer;