(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _flight_details_flight_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight-details/flight-details.component */ "./src/app/flight-details/flight-details.component.ts");
/* harmony import */ var _book_confirmation_book_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-confirmation/book-confirmation.component */ "./src/app/book-confirmation/book-confirmation.component.ts");







var routes = [
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'details/:id',
        component: _flight_details_flight_details_component__WEBPACK_IMPORTED_MODULE_5__["FlightDetailsComponent"]
    },
    {
        path: 'book_confirmation',
        component: _book_confirmation_book_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["BookConfirmationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n\r\n  <div id=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #B7DEF7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXENhbmFkYVxcQ2VudGVubmlhbFxcU2VtZXN0ZXJfNlxcU29mdHdhcmVQcm9qZWN0XFxQcm9qL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCN0RFRjc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Softwareproject';
    }
    AppComponent.prototype.ngOnInit = function () {
        $('body').addClass('df');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _flight_details_flight_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flight-details/flight-details.component */ "./src/app/flight-details/flight-details.component.ts");
/* harmony import */ var _enter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enter.pipe */ "./src/app/enter.pipe.ts");
/* harmony import */ var _book_confirmation_book_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-confirmation/book-confirmation.component */ "./src/app/book-confirmation/book-confirmation.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _flight_details_flight_details_component__WEBPACK_IMPORTED_MODULE_10__["FlightDetailsComponent"],
                _enter_pipe__WEBPACK_IMPORTED_MODULE_11__["EnterPipe"],
                _book_confirmation_book_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["BookConfirmationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-confirmation/book-confirmation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/book-confirmation/book-confirmation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book-confirmation works!\n</p>\n"

/***/ }),

/***/ "./src/app/book-confirmation/book-confirmation.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/book-confirmation/book-confirmation.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stY29uZmlybWF0aW9uL2Jvb2stY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-confirmation/book-confirmation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/book-confirmation/book-confirmation.component.ts ***!
  \******************************************************************/
/*! exports provided: BookConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookConfirmationComponent", function() { return BookConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookConfirmationComponent = /** @class */ (function () {
    function BookConfirmationComponent() {
    }
    BookConfirmationComponent.prototype.ngOnInit = function () {
    };
    BookConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-confirmation',
            template: __webpack_require__(/*! ./book-confirmation.component.html */ "./src/app/book-confirmation/book-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./book-confirmation.component.scss */ "./src/app/book-confirmation/book-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookConfirmationComponent);
    return BookConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAllFlights = function () {
        return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights');
    };
    DataService.prototype.getFlight = function (flightId) {
        // console.log(this.flight$)
        return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights/' + flightId);
    };
    DataService.prototype.getVerificationCode = function (email) {
        return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/customers/code?email=' + email);
        //return this.http.get('https://localhost:44310/api/customers/code?email=' + email) 
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/enter.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/enter.pipe.ts ***!
  \*******************************/
/*! exports provided: EnterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterPipe", function() { return EnterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnterPipe = /** @class */ (function () {
    function EnterPipe() {
    }
    EnterPipe.prototype.transform = function (flights, search, i) {
        var filterFlights = [];
        var entries = Object.values(search);
        var dCity;
        entries[0] == undefined ? dCity = entries[0] = "" : dCity = entries[0]; //.toLowerCase();
        var aCity;
        entries[1] == undefined ? aCity = entries[1] = "" : aCity = entries[1]; //.toLowerCase();
        var dDate;
        entries[2] == undefined ? dDate = entries[2] = "" : dDate = entries[2]; //.toLowerCase();
        var aDate;
        entries[3] == undefined ? aDate = entries[3] = "" : aDate = entries[3]; //.toLowerCase();
        var direct = entries[4];
        var price;
        entries[5] == undefined ? price = entries[5] = 1000000 : price = entries[5];
        var filteredFlights = flights.filter(function (flight) {
            if (direct)
                return flight.departureCity.toLocaleLowerCase().startsWith(dCity)
                    && flight.arrivalCity.toLocaleLowerCase().startsWith(aCity)
                    && (flight.departureTime.toLocaleLowerCase().search(dDate) != -1)
                    && (flight.arrivalTime.toLocaleLowerCase().search(aDate) != -1)
                    && flight.ticketPrice <= price
                    && flight.direct == entries[4];
            else
                return flight.departureCity.toLocaleLowerCase().startsWith(dCity)
                    && flight.arrivalCity.toLocaleLowerCase().startsWith(aCity)
                    && (flight.departureTime.toLocaleLowerCase().search(dDate) != -1)
                    && (flight.arrivalTime.toLocaleLowerCase().search(aDate) != -1)
                    && flight.ticketPrice <= price;
        });
        // debugger;
        console.log(filteredFlights);
        return filteredFlights;
    };
    EnterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'enter'
        })
    ], EnterPipe);
    return EnterPipe;
}());



/***/ }),

/***/ "./src/app/flight-details/flight-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/flight-details/flight-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1> Booking of Flight <span style=\"color: green;\">{{ flight$.flightName }} </span> </h1>\r\n    <ul>\r\n        <li> <strong> Departure City: </strong>{{ flight$.departureCity }}</li>\r\n        <li> <strong> Arrival City: </strong>  {{ flight$.arrivalCity }}</li>\r\n        <li> <strong> Departure Date: </strong> {{ flight$.departureTime | date }}</li>\r\n        <li> <strong> Arrival Date: </strong>{{ flight$.arrivalTime | date }}</li>\r\n        <li> <strong> Direct: </strong> {{ flight$.direct }}</li>\r\n        <li> <strong> Ticket Price: </strong> {{ flight$.ticketPrice }}</li>\r\n    </ul>\r\n\r\n      <div *ngIf=\"chosen\">  <a routerLink=\"/home\"> <button class=\"discardBtn button\">Back to Flights</button> </a>\r\n\r\n       <!--<a class=\"book_button\" href=\"home\" title=\"Back to Flights\">Book this Flight</a>-->\r\n      <button class=\"confirmBtn button\" type=\"submit\" (click)=\"onChoose()\">Choose</button>  \r\n  </div>\r\n\r\n\r\n  <div class=\"form\" *ngIf=\"showForm\">\r\n\r\n    <h3> Please Fill Form Below </h3>\r\n    <h4 *ngIf=\"isNotValid\" style=\"color: red\"> Fields are Mandatory! </h4>\r\n    <br>\r\n    <input type=\"text\" name=\"fullName\" [(ngModel)]=\"fullName\" placeholder=\"Enter Your Full Name\"  />\r\n    <br>\r\n    <input type=\"email\" pattern=\".+@globex.com\" size=\"30\" required name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter Your Email\"  />    \r\n    <br>\r\n\r\n    <button class=\"confirmBtn button\" type=\"submit\" (click)=\"onConfirm()\">Confirm Email</button>\r\n    <br> \r\n    <button class=\"discardBtn button\" type=\"submit\" (click)=\"onDiscard()\">Discard</button> \r\n  </div>\r\n  <div class=\"verification\" *ngIf=\"showCodeField\"> <!---->\r\n\r\n      <h3> Please Enter Verification Code Sent You by Email</h3>\r\n      <br>\r\n      <h4 *ngIf=\"isCodeEntered\" style=\"color: red\"> Please Enter the Code or Hit Discard Button </h4>\r\n    <br>\r\n      <input type=\"number\" name=\"enteredCode\" [(ngModel)]=\"enteredCode\" placeholder=\"Enter Code\"  />\r\n      <br>      \r\n  \r\n      <button class=\"confirmBtn button\" type=\"submit\" (click)=\"onCodeEntered()\">Confirm</button>\r\n      <br> \r\n      <button class=\"discardBtn button\" type=\"submit\" (click)=\"onDiscard()\">Discard</button> \r\n    </div>\r\n\r\n    <h2 style=\"color: red\" *ngIf=\"codeIncorrect\"> Code is Incorrect. Please try again </h2>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/flight-details/flight-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/flight-details/flight-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center; }\n\na {\n  /* text-decoration: none;\r\n    border: 1px solid #0A4970;\r\n    border-radius: 4px;\r\n    background: #F1BDB7;\r\n    padding: 4px;\r\n    color: #0A4970;*/\n  margin-right: 30px; }\n\na:hover {\n  background: #f7f7bc;\n  color: #4561F7; }\n\nul {\n  list-style-type: none; }\n\n.book_button {\n  background: #36F135; }\n\n.book_button:hover {\n  background: honeydew; }\n\n.form {\n  /*border: 2px solid #4561F7;\r\n    border-radius: 6px;\r\n    margin: 20px 350px;*/ }\n\n.form input {\n  border-radius: 5px;\n  margin: 10px;\n  width: 400px;\n  height: 40px; }\n\n.button {\n  margin-bottom: 10px;\n  width: 200px;\n  height: 40px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.confirmBtn {\n  background: #36F135; }\n\n.confirmBtn:hover {\n  background: #f7f7bc;\n  color: #4561F7; }\n\n.discardBtn {\n  background: #F1BDB7; }\n\n.discardBtn:hover {\n  background: lightyellow;\n  color: #4561F7; }\n\n.verification input {\n  border-radius: 5px;\n  margin: 10px;\n  width: 400px;\n  height: 40px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0LWRldGFpbHMvQzpcXENhbmFkYVxcQ2VudGVubmlhbFxcU2VtZXN0ZXJfNlxcU29mdHdhcmVQcm9qZWN0XFxQcm9qL3NyY1xcYXBwXFxmbGlnaHQtZGV0YWlsc1xcZmxpZ2h0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDRzs7Ozs7cUJBS2tCO0VBQ2pCLG1CQUFrQixFQUVyQjs7QUFDRDtFQUNJLG9CQUE4QjtFQUM5QixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksc0JBQXFCLEVBQ3hCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0kscUJBQW9CLEVBQ3ZCOztBQUVEO0VBQ0k7O3lCQUVxQixFQUN4Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUNaLGFBQVksRUFDZjs7QUFFRDtFQUNJLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLGVBQWMsRUFDakI7O0FBR0Q7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHQtZGV0YWlscy9mbGlnaHQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBBNDk3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMUJEQjc7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBjb2xvcjogIzBBNDk3MDsqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gXHJcbn1cclxuYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyNDcsIDE4OCk7XHJcbiAgICBjb2xvcjogIzQ1NjFGNztcclxufVxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmJvb2tfYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzM2RjEzNTtcclxufVxyXG4uYm9va19idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBob25leWRldztcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgLypib3JkZXI6IDJweCBzb2xpZCAjNDU2MUY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDM1MHB4OyovXHJcbn1cclxuXHJcbi5mb3JtIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb25maXJtQnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNkYxMzU7XHJcbn1cclxuXHJcbi5jb25maXJtQnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDcsIDI0NywgMTg4KTtcclxuICAgIGNvbG9yOiAjNDU2MUY3O1xyXG59XHJcbi5kaXNjYXJkQnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUJEQjc7XHJcbn1cclxuXHJcbi5kaXNjYXJkQnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xyXG4gICAgY29sb3I6ICM0NTYxRjc7XHJcbn1cclxuXHJcblxyXG4udmVyaWZpY2F0aW9uIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/flight-details/flight-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/flight-details/flight-details.component.ts ***!
  \************************************************************/
/*! exports provided: FlightDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightDetailsComponent", function() { return FlightDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FlightDetailsComponent = /** @class */ (function () {
    function FlightDetailsComponent(route, router, data) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.data = data;
        this.showForm = false;
        this.showCodeField = false;
        this.isNotValid = false;
        this.email = '';
        this.fullName = '';
        this.isCodeEntered = false;
        this.chosen = true;
        this.codeIncorrect = false;
        this.route.params.subscribe(function (params) { return _this.flightId = params.id; });
    }
    FlightDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getFlight(this.flightId).subscribe(function (data) { return _this.flight$ = data; });
        $("button").click(function () {
            // var div = $("div");       
            // div.animate({left: '100px'}, "slow");
            // div.animate({fontSize: '5em'}, "slow");
        });
    };
    FlightDetailsComponent.prototype.onChoose = function () {
        var chosenFlight = this.flight$;
        this.showForm = true;
        this.chosen = false;
        console.log(chosenFlight);
    };
    FlightDetailsComponent.prototype.onDiscard = function () {
        this.router.navigate(['/home']);
    };
    FlightDetailsComponent.prototype.onConfirm = function () {
        var _this = this;
        if (this.email != "" && this.fullName != "") {
            this.showForm = false;
            this.showCodeField = true;
            this.data.getVerificationCode(this.email).subscribe(function (data) {
                _this.code = data;
                console.log(_this.code);
            });
        }
        else {
            this.isNotValid = true;
        }
    };
    FlightDetailsComponent.prototype.onCodeEntered = function () {
        if (this.enteredCode != undefined) {
            this.checkCode(this.code, this.enteredCode);
        }
        else
            this.isCodeEntered = true;
    };
    FlightDetailsComponent.prototype.checkCode = function (code, enteredCode) {
        if (code.code == enteredCode)
            //console.log("match")
            this.router.navigate(['/book_confirmation']);
        else
            //console.log("not match")
            this.codeIncorrect = true;
    };
    FlightDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flight-details',
            template: __webpack_require__(/*! ./flight-details.component.html */ "./src/app/flight-details/flight-details.component.html"),
            styles: [__webpack_require__(/*! ./flight-details.component.scss */ "./src/app/flight-details/flight-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FlightDetailsComponent);
    return FlightDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <!--<div class=\"sidebar\">-->\r\n            <div style=\"text-align: center\">\r\n            <!--<app-sidebar></app-sidebar>-->\r\n    \r\n            <h1> Please use filters below to specify your choice</h1>\r\n    \r\n             <!-- FORWARD SECTION -->\r\n    \r\n                <div  class=\"header\">\r\n                    <div style=\"text-align: left; margin-left: 50px; color: green\">\r\n                        <h3 *ngIf=\"isRound\"> Forward Flight</h3>\r\n                    </div>\r\n                    <div class=\"grid-container-top\">\r\n                        <div class=\"grid-item\">\r\n                            <h3>Departure City :</h3>\r\n                            <input type=\"text\" name=\"departureCityField\" [(ngModel)]=\"departureCityField\" (ngModelChange)=\"destCityInput($event)\" (ngModelChange)=\"changed($event)\"  /> <!--(ngModelChange)=\"changed($event)\"-->\r\n                        </div>\r\n                        <div class=\"grid-item\">\r\n                            <h3>Arrival City :</h3>\r\n                            <input type=\"text\" name=\"arrivalCityField\"  [(ngModel)]=\"arrivalCityField\"  (ngModelChange)=\"arrCityInput($event)\" (ngModelChange)=\"changed()\" />  <!---->\r\n                        </div>    \r\n                    \r\n                <!-- <br>-->\r\n                    <!--<div class=\"row\">-->\r\n                        <div class=\"grid-item\">\r\n                            <h3 >Departure Date :</h3>\r\n                            <input type=\"date\" name=\"departureDate\"  [(ngModel)]=\"departureDateField\"  />\r\n                        </div>\r\n                        <div class=\"grid-item\">\r\n                            <h3>Arrival Date :</h3>\r\n                            <input type=\"date\" name=\"arrivalDate\"  [(ngModel)]=\"arrivalDateField\" />\r\n                        </div>\r\n                <!-- </div>-->\r\n                    </div>\r\n    \r\n                    <div class=\"grid-item \">\r\n                        <h3>Round Trip</h3>\r\n                        <input type=\"checkbox\" checked=\"unChecked\" name=\"isRound\"  [(ngModel)]=\"isRound\"  />\r\n                    </div>\r\n    \r\n                    <div class=\"grid-container-bottom\">\r\n                <!--  <div class=\"row\">-->\r\n                            <div class=\"grid-item\">\r\n                                <h3>Direct :</h3>\r\n                                <input type=\"checkbox\" checked=\"checked\" name=\"isDirect\"  [(ngModel)]=\"isDirect\"  />\r\n                            </div>\r\n    \r\n    \r\n                            \r\n    \r\n                            <div class=\"grid-item\">\r\n                                <h3>Maximum price :</h3>\r\n                                <input type=\"number\" name=\"priceField\"  [(ngModel)]=\"priceField\"/>\r\n                            </div>\r\n                    <!--</div>-->\r\n                    </div>\r\n                </div>\r\n                 <!-- END OF FORWARD SECTION -->    \r\n                <!-- RETURN SECTION -->\r\n    \r\n                <div  class=\"header\" *ngIf=\"isRound\">\r\n                    <div style=\"text-align: left; margin-left: 50px; color: orangered\">\r\n                         <h3> Return Flight</h3>\r\n                    </div>                \r\n                    <div class=\"grid-container-top\">\r\n                        <div class=\"grid-item\">\r\n                            <h3>Departure City :</h3>\r\n                            <input type=\"text\" name=\"departureCityField\" disabled [(ngModel)]=\"arrivalCityField\"/> <!-- (ngModelChange)=\"destCityInput($event)\" (ngModelChange)=\"changed($event)\" />-->\r\n                        </div>\r\n                        <div class=\"grid-item\">\r\n                            <h3>Arrival City :</h3>\r\n                            <input type=\"text\" name=\"arrivalCityField\" disabled [(ngModel)]=\"departureCityField\"  (ngModelChange)=\"arrCityInput($event)\" /> <!--(ngModelChange)=\"changed()\"     -->\r\n                        </div>    \r\n                    \r\n                <!-- <br>-->\r\n                    <!--<div class=\"row\">-->\r\n                        <div class=\"grid-item\">\r\n                            <h3 >Departure Date :</h3>\r\n                            <input type=\"date\" name=\"departureDate\"  [(ngModel)]=\"departureDateField\"  />\r\n                        </div>\r\n                        <div class=\"grid-item\">\r\n                            <h3>Arrival Date :</h3>\r\n                            <input type=\"date\" name=\"arrivalDate\"  [(ngModel)]=\"arrivalDateField\" />\r\n                        </div>\r\n                <!-- </div>-->\r\n                    </div>\r\n                    <div class=\"grid-container-bottom\">\r\n                <!--  <div class=\"row\">-->\r\n                            <div class=\"grid-item\">\r\n                                <h3>Direct :</h3>\r\n                                <input type=\"checkbox\" checked=\"checked\" name=\"isDirect\"  [(ngModel)]=\"isDirect\"  />\r\n                            </div>\r\n                            <div class=\"grid-item\">\r\n                                <h3>Maximum price :</h3>\r\n                                <input type=\"number\" name=\"priceField\"  [(ngModel)]=\"priceField\"/>\r\n                            </div>\r\n                    <!--</div>-->\r\n                    </div>\r\n                </div>\r\n    \r\n            <!-- END OF RETURN SECTION -->\r\n    \r\n            <!--<button class=\"btn btn-danger\" type=\"submit\" (click)=\"search()\">Search</button>-->\r\n        </div>\r\n    \r\n       \r\n    \r\n        <div class=\"flights_content\" *ngIf=\"searchFieldsContainInfo\">\r\n                <div style=\"text-align: center\">\r\n                <h1 > Here is the list of all flights available </h1>   \r\n            </div><br>\r\n    \r\n            <ul>         \r\n                <!--<li  *ngFor=\"let flight of filteredFlights\"> -->\r\n                    <li  *ngFor=\"let flight of flights$ | enter: {departureCity : departureCityField, arrivalCity: arrivalCityField, \r\n                           departureTime : departureDateField, arrivalTime: arrivalDateField, direct : isDirect, ticketPrice : priceField}; index as i\">  \r\n                    \r\n                    <div > <!--*ngIf=\"flight.departureCity == departureCityField\" -->\r\n                        <a routerLink=\"/details/{{flight.id}}\">                \r\n                        <h3 class=\"flight_name\">  Flight number : {{ flight.flightName }}</h3>\r\n    \r\n                            <table>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th> Ticket Type </th>\r\n                                        <th> Arrival City</th>\r\n                                        <th> Departure Time </th>\r\n                                        <th> Arrival Time </th>\r\n                                        <th> Direct </th>\r\n                                        <th> Price </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>{{ flight.departureCity }}</td> <!-- | enter: departureCityField : i-->\r\n                                        <td> {{ flight.arrivalCity }}</td>\r\n                                        <td> {{ flight.departureTime }} </td>\r\n                                        <td> {{ flight.arrivalTime }}</td>\r\n                                        <td>\r\n                                           <div style=\"color:green\" *ngIf=\"flight.direct;else unset\"> Yes</div> \r\n                                           <ng-template #unset>No </ng-template>\r\n                                        </td>\r\n                                        <td> {{ flight.ticketPrice }} </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </a>\r\n                     </div>\r\n                </li>\r\n                \r\n            </ul>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: grid;\n  grid-template-columns: auto; }\n\n.grid-container-top {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  max-height: 95px;\n  margin-top: -20px; }\n\n.grid-container-bottom {\n  display: grid;\n  grid-template-columns: auto auto;\n  max-height: 95px;\n  padding-bottom: 40px;\n  margin-top: -10px; }\n\n.grid-item {\n  text-align: center;\n  margin-top: 10px; }\n\n.grid-item h5 {\n  font-weight: 700; }\n\n.sidebar {\n  background: #C3CFD7;\n  text-align: center; }\n\n.header {\n  background: #C3CFD7;\n  border: 1px solid #0A4970;\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 10px; }\n\n.left-el {\n  float: left; }\n\n.grid-item input {\n  margin-left: 10px;\n  border-radius: 5px;\n  margin: 10px;\n  width: 170px;\n  height: 30px; }\n\nul {\n  list-style-type: none; }\n\nul li {\n  background: #EBF3F9;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  padding: 5px;\n  margin-right: 30px;\n  border-radius: 7px; }\n\nul li:hover {\n  background: #F0F0DC;\n  border: 1px solid #8A97DC; }\n\nul a {\n  text-decoration: none;\n  color: #577e97; }\n\nh1, h3, h5 {\n  color: #0A4970; }\n\n.flight_prop {\n  float: left; }\n\nth {\n  padding: 0px 30px 0 30px; }\n\n.flight_name {\n  color: #4561F7; }\n\nbutton {\n  margin-left: 31%;\n  margin-top: 20px; }\n\n#unset {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcQ2FuYWRhXFxDZW50ZW5uaWFsXFxTZW1lc3Rlcl82XFxTb2Z0d2FyZVByb2plY3RcXFByb2ovc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBRWIsNEJBQTJCLEVBRTlCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLDJDQUEwQztFQUMxQyxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGlDQUFnQztFQUNoQyxpQkFBZ0I7RUFDaEIscUJBQW9CO0VBQ3BCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUVJLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFFbkIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLDBCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUV0Qjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZLEVBRWY7O0FBQ0Q7RUFDSSxzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsMEJBQXlCLEVBRTVCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQXdCLEVBQzNCOztBQUNEO0VBQ0ksZUFBYyxFQUVqQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUVJLHlCQUF3QixFQUMzQjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0csV0FBVSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICBcclxufVxyXG4uZ3JpZC1jb250YWluZXItdG9we1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4uZ3JpZC1jb250YWluZXItYm90dG9te1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogOTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW17XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uZ3JpZC1pdGVtIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnNpZGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzNDRkQ3O1xyXG4gICAvLyBib3JkZXItcmlnaHQ6MnB4IHNvbGlkICMwQTQ5NzA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzNDRkQ3O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMEE0OTcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvL3dpZHRoOiA4NSU7XHJcbn1cclxuLmxlZnQtZWx7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmdyaWQtaXRlbSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICBcclxufVxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxudWwgbGkge1xyXG4gICAgYmFja2dyb3VuZDogI0VCRjNGOTsgIFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG51bCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMERDO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhBOTdEQztcclxuICAgXHJcbn1cclxuXHJcbnVsIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYig4NywgMTI2LCAxNTEpO1xyXG59XHJcbmgxLCBoMywgaDUge1xyXG4gICAgY29sb3I6ICMwQTQ5NzA7IFxyXG4gICAgLy9wYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZmxpZ2h0X3Byb3B7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG50aCB7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggMCAzMHB4O1xyXG59XHJcbi5mbGlnaHRfbmFtZXtcclxuICAgIGNvbG9yOiAjNDU2MUY3O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzElO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4jdW5zZXR7XHJcbiAgIGNvbG9yOiByZWQ7IFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
        this.isRound = false;
        this.filteredFlights = [];
        this.tempFlights = [];
        this.searchFieldsContainInfo = false;
    }
    // Extracting list of flights when component loads
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getAllFlights().subscribe(function (data) {
            _this.flights$ = data;
            console.log(_this.flights$);
            var vals = Object.entries(_this.flights$);
            console.log(_this.departureCityField, vals);
        });
    };
    // Destination City field Change Event
    HomeComponent.prototype.destCityInput = function (obj) {
    };
    // Arrival City field event
    HomeComponent.prototype.arrCityInput = function (obj) {
        // this.filteredFlights = []; 
        var vals = this.flights$;
        var i;
        for (i = 0; i < vals.length; i++) {
            if ((vals[i].arrivalCity).toLowerCase().includes(obj)) {
                this.filteredFlights.push(vals[i]);
            }
        }
        this.filteredFlights.length == 0 ? this.searchFieldsContainInfo = false : this.searchFieldsContainInfo = true;
    };
    // Event handlers of search fields updated
    HomeComponent.prototype.changed = function (obj) {
        console.log(obj);
        this.tempFlights = [];
        this.filteredFlights = [];
        ;
        var vals = this.flights$;
        var i;
        // Testing filter
        //const result = vals.filter(word => word.startsWith(obj.toLowerCase()));
        //
        for (i = 0; i < vals.length; i++) {
            if ((vals[i].departureCity).toLowerCase().startsWith(obj.toLowerCase())) {
                this.tempFlights.push(vals[i]);
            }
        }
        if (this.tempFlights.length != 0)
            this.filteredFlights = this.tempFlights;
        this.filteredFlights.length == 0 ? this.searchFieldsContainInfo = false : this.searchFieldsContainInfo = true;
        /*
          this.filteredFlights = [];
        */ //debugger;
        // Clearing main page if all input fields empty
        if (this.departureCityField == "" || this.departureCityField === undefined) {
            if (this.arrivalCityField == "" || this.arrivalCityField === undefined) {
                this.searchFieldsContainInfo = false;
            }
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());

//flight (departureCity, arrivalCity, departureTime, arrivalTime, direct, ticketPrice) => 
// {departureCity, arrivalCity, departureTime, arrivalTime, direct, ticketPrice};
//let str = (vals[i].departureCity).toLowerCase();   
//console.log(this.flights$); 
// this.filteredFlights$ = this.flights$;
/* filter = function(departureCityField, flights$){
    let a = flights$.includes(departureCityField);
    console.log(a);
    return a;
  }*/
//let vals = Object.entries(this.flights$);
//console.log(this.departureCityField, vals)
//let a = this.flights$.includes(obj);
//console.log(str);
//console.log(typeof this.filteredFlights);
//console.log(typeof this.flights$);
//console.log(a);
//this.filteredFlights$ = vals[i] //.filter(value => {
//let x = (value[i][1].departureCity).indexOf(obj) > -1;
//  return x;
// })
// str.toLowerCase().includes(departureCityField.toLowerCase())
//.toLowerCase();
//var substr = this.departureCityField;
//console.log(substr);
// console.log(str.includes(substr));
/*
 search = () => {}

  filteredFlights$ = () => {
    return this.flights$.filter(flight => {
      let a = flight.departureCity.indexOf(this.departureCityField) > -1;
      console.log(a)
      return a;
    })
    
  }
*/


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li>\r\n          <a routerLink=\"flights\">\r\n                  Get all flights\r\n                </a>\r\n    </li>\r\n  <li>Get flight by Departure city</li>\r\n  <li>Get flight by Arrival city</li>\r\n  \r\n  </ul>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9DOlxcQ2FuYWRhXFxDZW50ZW5uaWFsXFxTZW1lc3Rlcl82XFxTb2Z0d2FyZVByb2plY3RcXFByb2ovc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsVUFBUTtFQUNSLFdBQVMsRUFHWiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome_text\" style=\"background-image: url(aircraft-02.jpg)\">\r\n\r\n  <h1> Easy Wings Airlines </h1>\r\n\r\n  <h2>Welcome to our site! To continue, please click on the image below</h2>  \r\n\r\n  <a routerLink=\"home\"><img class=\"welcome_image\" src=\"assets/aircraft-02.jpg\" title=\"Click here to enter\"/></a>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: grid;\n  /*grid-template-columns: auto auto;*/\n  grid-auto-rows: auto; }\n\nh1, h2 {\n  color: #0A4970; }\n\nimg {\n  border-radius: 15px; }\n\nimg:hover {\n  border: 3px solid #E5E43E; }\n\n.welcome_image {\n  height: 50%; }\n\n.welcome_text {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcQ2FuYWRhXFxDZW50ZW5uaWFsXFxTZW1lc3Rlcl82XFxTb2Z0d2FyZVByb2plY3RcXFByb2ovc3JjXFxhcHBcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFvQixFQUN2Qjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSwwQkFBd0IsRUFDM0I7O0FBQ0Q7RUFFSSxZQUFXLEVBRWQ7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHsgICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bzsqL1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbn1cclxuaDEsaDJ7XHJcbiAgICBjb2xvcjogIzBBNDk3MDtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5pbWc6aG92ZXIge1xyXG4gICAgYm9yZGVyOjNweCBzb2xpZCAjRTVFNDNFO1xyXG59XHJcbi53ZWxjb21lX2ltYWdle1xyXG4gIFxyXG4gICAgaGVpZ2h0OiA1MCU7XHJcblxyXG59XHJcbi53ZWxjb21lX3RleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Canada\Centennial\Semester_6\SoftwareProject\Proj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map