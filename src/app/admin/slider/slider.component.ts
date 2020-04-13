import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserIdleService } from 'angular-user-idle';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      var trigger = $('.hamburger'),

        isClosed = false;

      function buttonSwitch() {


        if (isClosed === true) {

          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {

          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      trigger.click(function () {
        buttonSwitch();
      });

      $('[data-toggle="offcanvas"]').click(function () {

        $('#wrapper').toggleClass('toggled');
      });
    });
  }
  toggleClick(event) {
    console.log('vdsvsvsd')
    $('.hamburger.animated.fadeInLeft.is-closed').click(function() {
          $('#main').css("margin-left","250px")
    })
    $('.hamburger.animated.fadeInLeft.is-open').click(function() {
           $('#main').css("margin-left","0px")
         })
  }
}