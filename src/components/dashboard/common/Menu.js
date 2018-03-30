import React from 'react'
import FontAwesome from 'react-fontawesome';
import MenuItem from './MenuItem';
import $ from 'jquery';
import {  } from "bootstrap";

class Menu extends React.Component {    
    componentDidMount(){
          // Toggle the side navigation
          $("#sidenavToggler").click(function(e) {
            e.preventDefault();
            $("body").toggleClass("sidenav-toggled");
            $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
            $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
          });
          // Force the toggled class to be removed when a collapsible nav link is clicked
          $(".navbar-sidenav .nav-link-collapse").click(function(e) {
            e.preventDefault();
            $("body").removeClass("sidenav-toggled");
          });
          // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
          $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
            var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
          });
          // Scroll to top button appear
          $(document).scroll(function() {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
              $('.scroll-to-top').fadeIn();
            } else {
              $('.scroll-to-top').fadeOut();
            }
          });
          // Configure tooltips globally
          $('[data-toggle="tooltip"]').tooltip()
          // Smooth scrolling using jQuery easing
          $(document).on('click', 'a.scroll-to-top', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
          });
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <a className="navbar-brand" href="dashboard.html">Inventory System</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <MenuItem title="Dashboard" text="Dashboard" link="" icon="dashboard"/>
                        <MenuItem title="Inventory" text="Inventory" link="" icon="area-chart"/>
                        <MenuItem title="Locations" text="Locations" link="" icon="table"/>
                        <MenuItem title="Components" text="Components" link="" icon="wrench"/>
                    </ul>
                    <ul className="navbar-nav sidenav-toggler">
                        <li className="nav-item">
                            <a className="nav-link text-center" id="sidenavToggler" href="#">
                                <FontAwesome name="angle-left"/><span style={{display:"none"}}>Hide menu</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="logout">
                                <FontAwesome name="sign-out"/>&nbsp;Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;