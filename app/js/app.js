'use strict';

/* App Module */
var fawkesApp = angular.module('fawkesApp', []);

var products = [
  {
     productName: 'Business Information Report',
     companyName: 'Tesla Motors Inc',
     duns: '123456789',
     addedOn: '02/03/2015',
     expired : 'false'
  },
  {
     productName: 'Business Verification',
     companyName: 'Apple Inc',
     duns: '11111111',
     addedOn: '02/03/2015',
     expired : 'true'
  }
];

fawkesApp.controller('TabController', function(){
    this.tab = 1;
    
    this.setTab = function(tabValue) {
      this.tab = tabValue;
    };
    
    this.isSet = function(tabValue) {
      return this.tab === tabValue;
    };
  });


fawkesApp.controller('DashboardController', function(){
  this.myCompanyProducts = products;
});
