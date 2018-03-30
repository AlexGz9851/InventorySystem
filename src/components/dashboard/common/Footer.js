import React from 'react'

class Footer extends React.Component {
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(){
        const pageYOffset = window.pageYOffset;
        if(pageYOffset>15){
            document.getElementById('toTop').style.display="block";
        } else{
            document.getElementById('toTop').style.display="none";
        }
    }
    render(){
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
}

export default Footer;