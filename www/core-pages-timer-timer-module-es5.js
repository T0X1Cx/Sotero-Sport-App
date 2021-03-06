(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-pages-timer-timer-module"], {
    /***/
    "W89Q":
    /*!**********************************************************!*\
      !*** ./src/app/core/pages/timer/timer-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: TimerPageRoutingModule */

    /***/
    function W89Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerPageRoutingModule", function () {
        return TimerPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _timer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./timer.page */
      "dPra");

      var routes = [{
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_3__["TimerPage"]
      }];

      var TimerPageRoutingModule = function TimerPageRoutingModule() {
        _classCallCheck(this, TimerPageRoutingModule);
      };

      TimerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TimerPageRoutingModule);
      /***/
    },

    /***/
    "dPra":
    /*!************************************************!*\
      !*** ./src/app/core/pages/timer/timer.page.ts ***!
      \************************************************/

    /*! exports provided: TimerPage */

    /***/
    function dPra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerPage", function () {
        return TimerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./timer.page.html */
      "wV7M");
      /* harmony import */


      var _timer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./timer.page.scss */
      "hQX6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/services/items.service */
      "V8OY");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modals_timer_end_timer_end_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../modals/timer-end/timer-end.page */
      "iDyF");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].App;
      var circleR = 80;
      var circleDasharray = 2 * Math.PI * circleR;

      var TimerPage = /*#__PURE__*/function () {
        function TimerPage(popoverCtrl, itemsService, modalCtrl, actvRoute, platform) {
          _classCallCheck(this, TimerPage);

          this.popoverCtrl = popoverCtrl;
          this.itemsService = itemsService;
          this.modalCtrl = modalCtrl;
          this.actvRoute = actvRoute;
          this.platform = platform;
          this.item = {
            title: '',
            description: '',
            preparation: null,
            sets: null,
            time: null,
            restSets: null,
            repeats: null,
            restReps: null,
            totalTime: null
          };
          this.itemArray = [];
          this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](100);
          this.time = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('00:00');
          this.state = 'stop';
          this.circleDasharray = circleDasharray;
          this.circleR = circleR;
          this.audio = new Audio();
          this.displayStage = 'Preparaci??n';
          this.onlyDigits = false;
          this.noFeatures = false;
          this.mute = false;
          this.startDuration = 1;
          this.counterPreparation = 1;
        }

        _createClass(TimerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.itemId = this.actvRoute.snapshot.paramMap.get('itemId');
            console.log(this.itemId + ' Entrando al timer ');
            this.itemsService.getItemById(this.itemId).subscribe(function (resp) {
              var _this$itemArray;

              // Lo a??ado a un array por si hay retraso en la respuesta
              (_this$itemArray = _this.itemArray).push.apply(_this$itemArray, _toConsumableArray(resp.items));

              var load = _this.item = _this.itemArray[0];

              if (load) {
                _this.updateCountersAndDuration();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.interval);
            this.time.next('00:00');
            this.updateCountersAndDuration();
          }
        }, {
          key: "updateCountersAndDuration",
          value: function updateCountersAndDuration() {
            // Duration
            this.preparation = this.item.preparation;
            this.timeEx = this.item.time;
            this.restReps = this.item.restReps;
            this.restSets = this.item.restSets; // Counters

            this.counterSets = this.item.sets;
            this.counterTimeEx = this.item.repeats * this.counterSets;
            this.counterRestReps = this.item.repeats - 1;
          } // Actualiza la duraci??n

        }, {
          key: "updateTimeDisplay",
          value: function updateTimeDisplay(durationPercent) {
            var minutes = this.timer / 60;
            var seconds = this.timer % 60;
            minutes = String('0' + Math.floor(minutes)).slice(-2);
            seconds = String('0' + Math.floor(seconds)).slice(-2);
            var text = minutes + ':' + seconds;
            this.time.next(text);
            var totalTime = this.startDuration * durationPercent;
            var percentage = (totalTime - this.timer) / totalTime * 100;
            this.percent.next(percentage);
          } // Preparaci??n ------------------------------------------------------------------

        }, {
          key: "startPreparation",
          value: function startPreparation(duration) {
            var _this2 = this;

            this.displayColor = 'restOut';
            console.log('Entramos en preparaci??n');
            this.displayStage = 'Preparaci??n';
            this.state = 'start';
            clearInterval(this.interval);
            this.timer = duration;
            this.durationPreparation();
            this.interval = setInterval(function () {
              _this2.durationPreparation();
            }, 1000);
          }
        }, {
          key: "durationPreparation",
          value: function durationPreparation() {
            this.updateTimeDisplay(this.preparation);
            --this.timer;

            if (this.timer < 2 && this.timer >= -1) {
              this.playAudio("../../assets/audio/audio02.wav");
            }

            if (this.timer < -1) {
              this.playAudio("../../assets/audio/audio04.wav");
            } //_________________________________________


            if (this.timer < -1) {
              this.startExercise(this.timeEx);
            }
          } // -------------------------------------------------------------------------------
          // Ejercicio ---------------------------------------------------------------------

        }, {
          key: "startExercise",
          value: function startExercise(duration) {
            var _this3 = this;

            console.log('Entramos en Ejercicio');
            this.displayColor = 'Rest';
            this.state = 'start';
            this.displayStage = 'Ejercicio';
            clearInterval(this.interval);
            this.timer = duration;
            this.durationExercise();
            this.interval = setInterval(function () {
              _this3.durationExercise();
            }, 1000);
          }
        }, {
          key: "durationExercise",
          value: function durationExercise() {
            this.updateTimeDisplay(this.timeEx);
            --this.timer;

            if (this.timer < 2 && this.timer >= -1) {
              this.playAudio("../../assets/audio/audio02.wav");
            }

            if (this.timer < -1) {
              this.playAudio("../../assets/audio/audio05.wav");
            }

            if (this.timer < -1) {
              this.counterTimeEx--;
              this.startRestReps(this.restReps);

              if (this.counterTimeEx === this.counterSets) {
                this.startRestSets(this.restSets); // Empieza el descanso entre Series

                if (this.counterSets === 1) {
                  this.stopTimer();
                  this.updateCountersAndDuration();
                  this.modalEnd();
                }
              }
            }
          } // -------------------------------------------------------------------------------
          // Descanso Repeticion -----------------------------------------------------------

        }, {
          key: "startRestReps",
          value: function startRestReps(duration) {
            var _this4 = this;

            console.log('Entramos en descanso repeticiones');
            this.displayColor = 'Ex';
            this.state = 'start';
            this.displayStage = 'Descanso';
            clearInterval(this.interval);
            this.timer = duration;
            this.durationRestReps();
            this.interval = setInterval(function () {
              _this4.durationRestReps();
            }, 1000);
          }
        }, {
          key: "durationRestReps",
          value: function durationRestReps() {
            this.updateTimeDisplay(this.restReps);
            --this.timer;

            if (this.timer < 2 && this.timer >= -1) {
              this.playAudio("../../assets/audio/audio02.wav");
            }

            if (this.timer < -1) {
              this.playAudio("../../assets/audio/audio04.wav");
            }

            if (this.timer < -1) {
              this.counterRestReps--;
              this.startExercise(this.timeEx);
            }
          } // --------------------------------------------------------------------------------
          // Descanso Series ----------------------------------------------------------------

        }, {
          key: "startRestSets",
          value: function startRestSets(duration) {
            var _this5 = this;

            console.log('Entramos en descanso series');
            this.displayColor = 'restOut';
            this.state = 'start';
            this.displayStage = 'Descanso Serie';
            clearInterval(this.interval);
            this.timer = duration;
            this.durationRestSets();
            this.interval = setInterval(function () {
              _this5.durationRestSets();
            }, 1000);
          }
        }, {
          key: "durationRestSets",
          value: function durationRestSets() {
            this.updateTimeDisplay(this.restSets);
            --this.timer;

            if (this.timer < 2 && this.timer >= -1) {
              this.playAudio("../../assets/audio/audio02.wav");
            }

            if (this.timer < -1) {
              this.playAudio("../../assets/audio/audio04.wav");
            }

            if (this.timer < -1) {
              this.counterSets--;
              this.counterTimeEx++;
              this.startExercise(this.timeEx);
            }
          } // --------------------------------------------------------------------------------
          // Muestra el modal de final del ejercicio

        }, {
          key: "modalEnd",
          value: function modalEnd() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        cssClass: 'modal-end',
                        component: _modals_timer_end_timer_end_page__WEBPACK_IMPORTED_MODULE_8__["TimerEndPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Play audio

        }, {
          key: "playAudio",
          value: function playAudio(url) {
            var audio = new Audio();
            audio.src = url;
            audio.load();
            audio.play();
          } // Porcentage

        }, {
          key: "percentageOffset",
          value: function percentageOffset(percent) {
            var percentFloat = percent / 100;
            return circleDasharray * (1 - percentFloat);
          } // Stop timer

        }, {
          key: "stopTimer",
          value: function stopTimer() {
            clearInterval(this.interval);
            this.time.next('00:00');
            this.updateCountersAndDuration();
            this.state = 'stop';
          }
        }]);

        return TimerPage;
      }();

      TimerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      TimerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-timer',
        template: _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_timer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TimerPage);
      /***/
    },

    /***/
    "dYf9":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/modals/timer-end/timer-end.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dYf9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" class=\"ion-text-center\">\n  <img src=\"../../../../assets/img/cup.png\" alt=\"\" />\n  <h1 color=\"soterosport-darkyellow\"><strong>?? Fin !</strong></h1>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n        Cerrar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "hQX6":
    /*!**************************************************!*\
      !*** ./src/app/core/pages/timer/timer.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function hQX6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 1.5em;\n}\n\nh3 {\n  font-size: 2.5em;\n  font-weight: 600;\n  margin-top: 30px;\n  color: #ffffff !important;\n}\n\n#progress-circle {\n  margin-top: 15px;\n  transform: rotate(-90deg);\n}\n\n.timer-text {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 36px;\n  text-anchor: middle;\n  font-weight: 700;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RpbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InRpbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuI3Byb2dyZXNzLWNpcmNsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi50aW1lci10ZXh0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAvLyBmaWxsOiAjZmZlZWQwO1xufVxuIl19 */";
      /***/
    },

    /***/
    "iDyF":
    /*!*********************************************************!*\
      !*** ./src/app/core/modals/timer-end/timer-end.page.ts ***!
      \*********************************************************/

    /*! exports provided: TimerEndPage */

    /***/
    function iDyF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerEndPage", function () {
        return TimerEndPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_timer_end_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./timer-end.page.html */
      "dYf9");
      /* harmony import */


      var _timer_end_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./timer-end.page.scss */
      "o61L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TimerEndPage = /*#__PURE__*/function () {
        function TimerEndPage(modalCtrl) {
          _classCallCheck(this, TimerEndPage);

          this.modalCtrl = modalCtrl;
        }

        _createClass(TimerEndPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);

        return TimerEndPage;
      }();

      TimerEndPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      TimerEndPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-timer-end',
        template: _raw_loader_timer_end_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_timer_end_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TimerEndPage);
      /***/
    },

    /***/
    "o61L":
    /*!***********************************************************!*\
      !*** ./src/app/core/modals/timer-end/timer-end.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function o61L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1 {\n  font-size: 2.5em;\n}\n\nimg {\n  margin-top: 30px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RpbWVyLWVuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoidGltZXItZW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "wV7M":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/timer/timer.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function wV7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-header class=\"ion-no-border\">\n        <ion-toolbar class=\"ion-text-center\">\n            <!-- Menu -->\n            <ion-buttons slot=\"start\">\n                <ion-menu-button autoHide=\"false\" menu=\"first\"></ion-menu-button>\n            </ion-buttons>\n            <!-- T??tulo -->\n            <ion-title>{{item.title}}</ion-title>\n\n            <!-- Icono info -->\n            <ion-buttons slot=\"end\">\n                <ion-button>\n                    <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n    <h3>{{displayStage}}</h3>\n\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col class=\"ion-text-center\">\n                <svg id=\"progress-circle\" width=\"40vh\" height=\"40vh\" viewBox=\"0 0 175 175\">\n          <linearGradient id=\"linearColors1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop\n              *ngIf=\"displayColor === 'restOut'\"\n              offset=\"0%\"\n              stop-color=\"#4DD3E3\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'restOut'\"\n              offset=\"100%\"\n              stop-color=\"#7DCFFF\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Ex'\"\n              offset=\"0%\"\n              stop-color=\"#ff9368\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Ex'\"\n              offset=\"100%\"\n              stop-color=\"#FF412C\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Rest'\"\n              offset=\"0%\"\n              stop-color=\"#A4FCE5\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Rest'\"\n              offset=\"100%\"\n              stop-color=\"#85FF8B\"\n            ></stop>\n          </linearGradient>\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"#34343C\"\n            stroke-width=\"14\"\n          />\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"#121213\"\n            stroke-width=\"12\"\n          />\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"url(#linearColors1)\"\n            stroke-width=\"9\"\n            stroke-linecap=\"round\"\n            [attr.stroke-dasharray]=\"circleDasharray\"\n            [attr.stroke-dashoffset]=\"percentageOffset(percent | async)\"\n          />\n          <text x=\"50%\" y=\"57%\" class=\"timer-text\">{{ time | async }}</text>\n        </svg>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-card class=\"ion-padding\">\n        <ion-item>\n            <ion-label>\n                <h2>Descripci??n</h2>\n                <p>{{item.description}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ion-content>\n\n<ion-footer class=\"ion-padding\">\n    <ion-toolbar>\n        <ion-button *ngIf=\"state === 'stop'\" (click)=\"startPreparation(this.preparation)\" color=\"soterosport-blue\" expand=\"block\">\n            <ion-icon color=\"soterosport-darkcream\" name=\"play\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"state === 'start'\" (click)=\"stopTimer()\" color=\"soterosport-red\" expand=\"block\">\n            <ion-icon *ngIf=\"state === 'start'\" color=\"soterosport-darkcream\" name=\"stop\"></ion-icon>\n        </ion-button>\n\n        <!-- (click)=\"startTimer()\" -->\n        <!-- *ngIf=\"state === 'stop'\" -->\n        <!-- *ngIf=\"state === 'start'\"  -->\n        <!-- (click)=\"stopTimer()\" -->\n    </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "yVGo":
    /*!**************************************************!*\
      !*** ./src/app/core/pages/timer/timer.module.ts ***!
      \**************************************************/

    /*! exports provided: TimerPageModule */

    /***/
    function yVGo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerPageModule", function () {
        return TimerPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./timer-routing.module */
      "W89Q");
      /* harmony import */


      var _timer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./timer.page */
      "dPra");
      /* harmony import */


      var ngx_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-countdown */
      "z+xu");

      var TimerPageModule = function TimerPageModule() {
        _classCallCheck(this, TimerPageModule);
      };

      TimerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"], _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimerPageRoutingModule"]],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_6__["TimerPage"]]
      })], TimerPageModule);
      /***/
    },

    /***/
    "z+xu":
    /*!***************************************************************************!*\
      !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
      \***************************************************************************/

    /*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */

    /***/
    function zXu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
        return CountdownComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function () {
        return CountdownGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownModule", function () {
        return CountdownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownStatus", function () {
        return CountdownStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownTimer", function () {
        return CountdownTimer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CountdownComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function CountdownComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      var CountdownStatus;

      (function (CountdownStatus) {
        CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
        CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
        CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
        CountdownStatus[CountdownStatus["done"] = 3] = "done";
      })(CountdownStatus || (CountdownStatus = {}));

      var CountdownTimer = /*#__PURE__*/function () {
        function CountdownTimer(ngZone) {
          _classCallCheck(this, CountdownTimer);

          this.ngZone = ngZone;
          this.fns = [];
          this.commands = [];
          this.ing = false;
        }

        _createClass(CountdownTimer, [{
          key: "start",
          value: function start() {
            var _this6 = this;

            if (this.ing === true) {
              return;
            }

            this.ing = true;
            this.nextTime = +new Date();
            this.ngZone.runOutsideAngular(function () {
              _this6.process();
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this7 = this;

            while (this.commands.length) {
              this.commands.shift()();
            }

            var diff = +new Date() - this.nextTime;
            var count = 1 + Math.floor(diff / 100);
            diff = 100 - diff % 100;
            this.nextTime += 100 * count;

            for (var i = 0, len = this.fns.length; i < len; i += 2) {
              var frequency = this.fns[i + 1]; // 100/s

              if (0 === frequency) {
                this.fns[i](count); // 1000/s
              } else {
                // ???????????????0???????????????2
                frequency += 2 * count - 1;
                var step = Math.floor(frequency / 20);

                if (step > 0) {
                  this.fns[i](step);
                } // ??????????????????1


                this.fns[i + 1] = frequency % 20 + 1;
              }
            }

            if (!this.ing) {
              return;
            }

            setTimeout(function () {
              return _this7.process();
            }, diff);
          }
        }, {
          key: "add",
          value: function add(fn, frequency) {
            var _this8 = this;

            this.commands.push(function () {
              _this8.fns.push(fn);

              _this8.fns.push(frequency === 1000 ? 1 : 0);

              _this8.ing = true;
            });
            return this;
          }
        }, {
          key: "remove",
          value: function remove(fn) {
            var _this9 = this;

            this.commands.push(function () {
              var i = _this9.fns.indexOf(fn);

              if (i !== -1) {
                _this9.fns.splice(i, 2);
              }

              _this9.ing = _this9.fns.length > 0;
            });
            return this;
          }
        }]);

        return CountdownTimer;
      }();

      CountdownTimer.??fac = function CountdownTimer_Factory(t) {
        return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CountdownTimer.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CountdownTimer,
        factory: CountdownTimer.??fac
      });

      CountdownTimer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountdownTimer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })(); // tslint:disable: no-inferrable-types


      var CountdownGlobalConfig = function CountdownGlobalConfig(locale) {
        var _this10 = this;

        _classCallCheck(this, CountdownGlobalConfig);

        this.locale = locale;
        this.demand = false;
        this.leftTime = 0;
        this.format = 'HH:mm:ss';
        this.timezone = '+0000';

        this.formatDate = function (_ref) {
          var date = _ref.date,
              formatStr = _ref.formatStr,
              timezone = _ref.timezone;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(date), formatStr, _this10.locale, timezone || _this10.timezone || '+0000');
        };
      };

      CountdownGlobalConfig.??fac = function CountdownGlobalConfig_Factory(t) {
        return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      };

      CountdownGlobalConfig.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
        factory: function CountdownGlobalConfig_Factory() {
          return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
        },
        token: CountdownGlobalConfig,
        providedIn: "root"
      });

      CountdownGlobalConfig.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountdownGlobalConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }];
        }, null);
      })();

      var CountdownComponent = /*#__PURE__*/function () {
        function CountdownComponent(locale, timer, defCog, cdr, ngZone) {
          _classCallCheck(this, CountdownComponent);

          this.locale = locale;
          this.timer = timer;
          this.defCog = defCog;
          this.cdr = cdr;
          this.ngZone = ngZone;
          this.frequency = 1000;
          this._notify = {};
          this.status = CountdownStatus.ing;
          this.isDestroy = false;
          this.i = {};
          this.left = 0;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CountdownComponent, [{
          key: "config",
          get: function get() {
            return this._config;
          }
          /**
           * Start countdown, you must manually call when `demand: false`
           */
          ,
          set: function set(i) {
            if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
              i.notify = [i.notify];
            }

            this._config = i;
          }
        }, {
          key: "begin",
          value: function begin() {
            this.status = CountdownStatus.ing;
            this.callEvent('start');
          }
          /**
           * Restart countdown
           */

        }, {
          key: "restart",
          value: function restart() {
            if (this.status !== CountdownStatus.stop) {
              this.destroy();
            }

            this.init();
            this.callEvent('restart');
          }
          /**
           * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
           */

        }, {
          key: "stop",
          value: function stop() {
            if (this.status === CountdownStatus.stop) {
              return;
            }

            this.status = CountdownStatus.stop;
            this.destroy();
            this.callEvent('stop');
          }
          /**
           * Pause countdown, you can use `resume` to recover again
           */

        }, {
          key: "pause",
          value: function pause() {
            if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
              return;
            }

            this.status = CountdownStatus.pause;
            this.callEvent('pause');
          }
          /**
           * Resume countdown
           */

        }, {
          key: "resume",
          value: function resume() {
            if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
              return;
            }

            this.status = CountdownStatus.ing;
            this.callEvent('resume');
          }
        }, {
          key: "callEvent",
          value: function callEvent(action) {
            this.event.emit({
              action: action,
              left: this.left,
              status: this.status,
              text: this.i.text
            });
          }
        }, {
          key: "init",
          value: function init() {
            var _this11 = this;

            var locale = this.locale,
                defCog = this.defCog;
            var config = this.config = Object.assign(Object.assign(Object.assign({}, new CountdownGlobalConfig(locale)), defCog), this.config); // tslint:disable-next-line: no-bitwise

            var frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
            this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
            this.getLeft(); // bind reflow to me

            var _reflow = this.reflow;

            this.reflow = function () {
              var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return _reflow.apply(_this11, [count, force]);
            };

            if (Array.isArray(config.notify)) {
              config.notify.forEach(function (time) {
                if (time < 1) {
                  throw new Error("The notify config must be a positive integer.");
                }

                time = time * 1000;
                time = time - time % frq;
                _this11._notify[time] = true;
              });
            }

            this.timer.add(this.reflow, frq).start();
            this.reflow(0, true);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.timer.remove(this.reflow);
            return this;
          }
          /**
           * ????????????
           */

        }, {
          key: "reflow",
          value: function reflow() {
            var _this12 = this;

            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.isDestroy) {
              return;
            }

            var status = this.status,
                config = this.config,
                _notify = this._notify;

            if (!force && status !== CountdownStatus.ing) {
              return;
            }

            var value = this.left = this.left - this.frequency * count;

            if (value < 1) {
              value = 0;
            }

            this.i = {
              value: value,
              text: config.formatDate({
                date: value,
                formatStr: config.format,
                timezone: config.timezone
              })
            };

            if (typeof config.prettyText === 'function') {
              this.i.text = config.prettyText(this.i.text);
            }

            this.cdr.detectChanges();

            if (config.notify === 0 || _notify[value]) {
              this.ngZone.run(function () {
                _this12.callEvent('notify');
              });
            }

            if (value === 0) {
              this.ngZone.run(function () {
                _this12.status = CountdownStatus.done;

                _this12.destroy();

                _this12.callEvent('done');
              });
            }
          }
          /**
           * ???????????????????????????
           */

        }, {
          key: "getLeft",
          value: function getLeft() {
            var config = this.config,
                frequency = this.frequency;
            var left = config.leftTime * 1000;
            var end = config.stopTime;

            if (!left && end) {
              left = end - new Date().getTime();
            }

            this.left = left - left % frequency;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();

            if (!this.config.demand) {
              this.begin();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isDestroy = true;
            this.destroy();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!changes.config.firstChange) {
              this.restart();
            }
          }
        }]);

        return CountdownComponent;
      }();

      CountdownComponent.??fac = function CountdownComponent_Factory(t) {
        return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CountdownComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CountdownComponent,
        selectors: [["countdown"]],
        hostVars: 2,
        hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("count-down", true);
          }
        },
        inputs: {
          config: "config",
          render: "render"
        },
        outputs: {
          event: "event"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
        decls: 2,
        vars: 5,
        consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
        template: function CountdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.render);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.i));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      CountdownComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: CountdownTimer
        }, {
          type: CountdownGlobalConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CountdownComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        render: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'countdown',
            template: "\n    <ng-container *ngIf=\"!render\">\n      <span [innerHTML]=\"i.text\"></span>\n    </ng-container>\n    <ng-container *ngTemplateOutlet=\"render; context: { $implicit: i }\"></ng-container>\n  ",
            host: {
              '[class.count-down]': 'true'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }, {
            type: CountdownTimer
          }, {
            type: CountdownGlobalConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          render: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var CountdownModule = function CountdownModule() {
        _classCallCheck(this, CountdownModule);
      };

      CountdownModule.??fac = function CountdownModule_Factory(t) {
        return new (t || CountdownModule)();
      };

      CountdownModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CountdownModule
      });
      CountdownModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        providers: [CountdownTimer],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CountdownModule, {
          declarations: function declarations() {
            return [CountdownComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CountdownComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountdownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [CountdownTimer],
            declarations: [CountdownComponent],
            exports: [CountdownComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-countdown.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=core-pages-timer-timer-module-es5.js.map