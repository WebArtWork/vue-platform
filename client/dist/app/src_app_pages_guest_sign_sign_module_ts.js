"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_pages_guest_sign_sign_module_ts"],{

/***/ 2274:
/*!****************************************************!*\
  !*** ./src/app/pages/guest/sign/sign.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignComponent": () => (/* binding */ SignComponent)
/* harmony export */ });
/* harmony import */ var src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/form/form.service */ 4780);
/* harmony import */ var src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/input/input.interface */ 9095);
/* harmony import */ var src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/button/button.interface */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var wacom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wacom */ 2563);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modules_form_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/form/form/form.component */ 9646);








class SignComponent {
  constructor(alert, http, hash, us, router, ui) {
    this.alert = alert;
    this.http = http;
    this.hash = hash;
    this.us = us;
    this.router = router;
    this.ui = ui;
    this.formConfig = {
      title: 'Sign In / Sign Up',
      components: [{
        set: 'ceo@webart.work',
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_0__.FormModules.INPUT,
        type: src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_1__.InputTypes.EMAIL,
        placeholder: 'fill your email',
        label: 'E-mail',
        input: 'email',
        focused: true
      }, {
        set: 'asdasdasdasd',
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_0__.FormModules.INPUT,
        type: src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_1__.InputTypes.PASSWORD,
        placeholder: 'fill your password',
        label: 'Password',
        input: 'password'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_0__.FormModules.INPUT,
        placeholder: 'fill code from email',
        hidden: true,
        label: 'Code',
        input: 'code'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_0__.FormModules.BUTTON,
        type: src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_2__.ButtonTypes.PRIMARY,
        label: "Let's go"
      }]
    };

    this._set = user => {
      if (!user) {
        return this.alert.error({
          text: 'Something went wrong'
        });
      }

      localStorage.setItem('waw_user', JSON.stringify(user));
      this.http.set('token', user.token);
      this.us.user = user;
      this.us.load();
      this.router.navigate(['/profile']);
    };
  }

  submit(form) {
    if (!this.formConfig.components[2].hidden && form.code) {
      return this.save();
    }

    if (!form.email) {
      this.alert.error({
        text: 'Enter your email'
      });
      return; //return this.email_focus();
    }

    if (!this.ui.valid(form.email)) {
      this.alert.error({
        text: 'Enter proper email'
      });
      return; //return this.email_focus();
    }

    this.hash.set('email', form.email);

    if (!form.password) {
      this.alert.error({
        text: 'Enter your password'
      });
      return; // return this.password_focus();
    }

    this.http.post('/api/user/status', form, resp => {
      if (resp.email && resp.pass) {
        this.login(form);
      } else if (resp.email) {
        this.reset(form);
      } else {
        this.sign(form);
      }
    });
  }

  login(user) {
    this.http.post('/api/user/login', user, this._set.bind(this));
  }

  sign(user) {
    this.http.post('/api/user/sign', user, this._set.bind(this));
  }

  reset(user) {
    this.http.post('/api/user/request', user, () => {
      this.formConfig.components[2].hidden = false;
    });
    this.alert.info({
      text: 'Mail will sent to your email'
    });
  }

  save() {// this.http.post('/api/user/change', this.user, (resp: boolean) => {
    // 	if (resp) {
    // 		this.alert.info({
    // 			text: 'Password successfully changed'
    // 		});
    // 	} else {
    // 		this.alert.error({
    // 			text: 'Wrong Code'
    // 		});
    // 	}
    // 	this.login();
    // });
  }

  static #_ = this.ɵfac = function SignComponent_Factory(t) {
    return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](wacom__WEBPACK_IMPORTED_MODULE_6__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](wacom__WEBPACK_IMPORTED_MODULE_6__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](wacom__WEBPACK_IMPORTED_MODULE_6__.HashService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](wacom__WEBPACK_IMPORTED_MODULE_6__.UiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignComponent,
    selectors: [["ng-component"]],
    decls: 3,
    vars: 1,
    consts: [[1, "auth-wrapper"], [1, "auth"], [3, "config", "wSubmit"]],
    template: function SignComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "wform", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("wSubmit", function SignComponent_Template_wform_wSubmit_2_listener($event) {
          return ctx.submit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.formConfig);
      }
    },
    dependencies: [_modules_form_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent],
    styles: ["[_ngcontent-%COMP%]:root {\n  --c-white: #fff;\n  --c-black: #000;\n  --c-grey: #e7e7e7;\n  --c-grey-dark: #bfbfbf;\n  --c-basic: #3558ae;\n  --c-primary: #256eff;\n  --c-primary-hover: #0051f1;\n  --c-secondary: red;\n  --c-bg-primary: #f3f4f7;\n  --c-bg-secondary: #ffffff;\n  --c-bg-tertiary: #fcfdfe;\n  --c-border: #f0f1f7;\n  --c-shadow: #f3f3f3;\n  --c-text-primary: #666666;\n  --c-text-secondary: #19235c;\n  --c-placeholder: #adb8c6;\n  --c-warn: #e67e22;\n  --c-error: #e74c3c;\n  --c-error-hover: #d62c1a;\n  --c-success: #14c76e;\n  --c-info: #17a2b8;\n  --container: 1210px;\n  --b-radius: 8px;\n  --b-radius-card: 10px;\n  --b-radius-btn: 10px;\n  --b-radius-img: 50%;\n  --padding: 10px;\n  --fs: 16px;\n  --ff-bold: bold;\n  --ff-base: \"Poppins\",\n      sans-serif;\n  --letter-spacing: 0.3px;\n  --transition: .3s all ease-in-out;\n}\n\nhtml.dark[_ngcontent-%COMP%]:root {\n  --c-basic: #333;\n  --c-bg-primary: #282828;\n  --c-bg-secondary: #343434;\n  --c-bg-tertiary: #404040;\n  --c-border: #404040;\n  --c-shadow: #444444;\n  --c-text-primary: #ffffff;\n  --c-text-secondary: #ffffff;\n  --c-placeholder: #7a7a7a;\n}\n\n\n[_nghost-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--c-bg-primary);\n  flex-grow: 1;\n  padding: 20px;\n}\n\n.auth[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  padding: 40px;\n  border-radius: var(--b-radius-card);\n  box-shadow: 0px 0px 6px var(--c-shadow);\n  background: var(--c-bg-secondary);\n}\n.auth__title[_ngcontent-%COMP%] {\n  font-size: var(--fs)8px;\n  font-weight: var(--ff-bold);\n  color: var(--c-text-primary);\n  text-align: center;\n  margin-bottom: 15px;\n}\n@media (max-width: 767.9px) {\n  .auth__title[_ngcontent-%COMP%] {\n    font-size: var(--fs)2px;\n  }\n}\n.auth__btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n.auth__btn[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n}\n@media (max-width: 767.9px) {\n  .auth[_ngcontent-%COMP%]   .form__title[_ngcontent-%COMP%] {\n    font-size: var(--fs)-2px;\n  }\n}\n\n.w-forms[_ngcontent-%COMP%] {\n  position: relative;\n}\n.w-forms__level[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 5px;\n  position: absolute;\n  display: inline-block;\n  color: var(--c-text-secondary);\n  font-size: calc(var(--fs) - 6px);\n  line-height: calc(var(--fs) + 4px);\n  letter-spacing: var(--letter-spacing);\n  transition: var(--transition);\n}\n.w-forms__level._sky[_ngcontent-%COMP%] {\n  color: var(--c-info);\n}\n.w-forms__level._orange[_ngcontent-%COMP%] {\n  color: var(--c-warn);\n}\n.w-forms__level._green[_ngcontent-%COMP%] {\n  color: var(--c-success);\n}\n.w-forms__input[_ngcontent-%COMP%] {\n  padding-right: 35px;\n}\n.w-forms__input-block[_ngcontent-%COMP%] {\n  position: relative;\n}\n.w-forms__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  color: var(--c-placeholder);\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.w-forms__toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.w-forms[_ngcontent-%COMP%]   .icon-visibility[_ngcontent-%COMP%] {\n  color: var(--c-primary);\n}\n/*# sourceURL=webpack://./src/scss/utils/_vars.scss */\n/*# sourceURL=webpack://./src/app/pages/guest/sign/sign.component.scss */\n/*# sourceURL=webpack://./src/scss/utils/_media.scss */\n/*# sourceURL=webpack://./src/scss/utils/_mixins.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL192YXJzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL2d1ZXN0L3NpZ24vc2lnbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL19tZWRpYS5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBR0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUdBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNILGVBQUE7RUFDRyxVQUFBO0VBQ0EsZUFBQTtFQUNBO2dCQUFBO0VBRUEsdUJBQUE7RUFDQSxpQ0FBQTtBQ05KOztBRFdBO0VBQ0ksZUFBQTtFQUNILHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNSSjs7QUM3Q0EscURBQUE7QURBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBaUREOztBQTlDQTtFRUZJLGFGR2lCO0VFRHBCLHVCRkNnQztFRUFoQyxtQkFBQTtFRkNHLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFtREo7O0FBakRBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtBQW9ESjtBQW5ESTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFxRFI7QUNwRFE7RUROSjtJQU9RLHVCQUFBO0VBdURWO0FBQ0Y7QUFyREk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBdURSO0FBdERRO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUF3RFo7QUNqRVE7RURhQTtJQUNJLHdCQUFBO0VBdURWO0FBQ0Y7O0FBcERBO0VBQ0Msa0JBQUE7QUF1REQ7QUF0REM7RUFDQyxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDTSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNOLDZCQUFBO0FBd0RGO0FBdkRFO0VBQ0Msb0JBQUE7QUF5REg7QUF2REU7RUFDQyxvQkFBQTtBQXlESDtBQXZERTtFQUNDLHVCQUFBO0FBeURIO0FBdERDO0VBQ0MsbUJBQUE7QUF3REY7QUF0REM7RUFDQyxrQkFBQTtBQXdERjtBQXREQztFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUF3REY7QUF2REU7RUFDQyxlQUFBO0FBeURIO0FBdERDO0VBQ0MsdUJBQUE7QUF3REYiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIjpyb290IHtcbiAgLS1jLXdoaXRlOiAjZmZmO1xuICAtLWMtYmxhY2s6ICMwMDA7XG4gIC0tYy1ncmV5OiAjZTdlN2U3O1xuICAtLWMtZ3JleS1kYXJrOiAjYmZiZmJmO1xuICAtLWMtYmFzaWM6ICMzNTU4YWU7XG4gIC0tYy1wcmltYXJ5OiAjMjU2ZWZmO1xuICAtLWMtcHJpbWFyeS1ob3ZlcjogIzAwNTFmMTtcbiAgLS1jLXNlY29uZGFyeTogcmVkO1xuICAtLWMtYmctcHJpbWFyeTogI2YzZjRmNztcbiAgLS1jLWJnLXNlY29uZGFyeTogI2ZmZmZmZjtcbiAgLS1jLWJnLXRlcnRpYXJ5OiAjZmNmZGZlO1xuICAtLWMtYm9yZGVyOiAjZjBmMWY3O1xuICAtLWMtc2hhZG93OiAjZjNmM2YzO1xuICAtLWMtdGV4dC1wcmltYXJ5OiAjNjY2NjY2O1xuICAtLWMtdGV4dC1zZWNvbmRhcnk6ICMxOTIzNWM7XG4gIC0tYy1wbGFjZWhvbGRlcjogI2FkYjhjNjtcbiAgLS1jLXdhcm46ICNlNjdlMjI7XG4gIC0tYy1lcnJvcjogI2U3NGMzYztcbiAgLS1jLWVycm9yLWhvdmVyOiAjZDYyYzFhO1xuICAtLWMtc3VjY2VzczogIzE0Yzc2ZTtcbiAgLS1jLWluZm86ICMxN2EyYjg7XG4gIC0tY29udGFpbmVyOiAxMjEwcHg7XG4gIC0tYi1yYWRpdXM6IDhweDtcbiAgLS1iLXJhZGl1cy1jYXJkOiAxMHB4O1xuICAtLWItcmFkaXVzLWJ0bjogMTBweDtcbiAgLS1iLXJhZGl1cy1pbWc6IDUwJTtcbiAgLS1wYWRkaW5nOiAxMHB4O1xuICAtLWZzOiAxNnB4O1xuICAtLWZmLWJvbGQ6IGJvbGQ7XG4gIC0tZmYtYmFzZTogXCJQb3BwaW5zXCIsXG4gICAgICBzYW5zLXNlcmlmO1xuICAtLWxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLS10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2UtaW4tb3V0O1xufVxuXG5odG1sLmRhcms6cm9vdCB7XG4gIC0tYy1iYXNpYzogIzMzMztcbiAgLS1jLWJnLXByaW1hcnk6ICMyODI4Mjg7XG4gIC0tYy1iZy1zZWNvbmRhcnk6ICMzNDM0MzQ7XG4gIC0tYy1iZy10ZXJ0aWFyeTogIzQwNDA0MDtcbiAgLS1jLWJvcmRlcjogIzQwNDA0MDtcbiAgLS1jLXNoYWRvdzogIzQ0NDQ0NDtcbiAgLS1jLXRleHQtcHJpbWFyeTogI2ZmZmZmZjtcbiAgLS1jLXRleHQtc2Vjb25kYXJ5OiAjZmZmZmZmO1xuICAtLWMtcGxhY2Vob2xkZXI6ICM3YTdhN2E7XG59XG5cbi8qIFVTRTogQGluY2x1ZGUgYnAtbWF4KHNtKS4uLiBicC1taW4uLi4gYnAtb25seS4uLiAqL1xuOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hdXRoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYy1iZy1wcmltYXJ5KTtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYXV0aCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1iLXJhZGl1cy1jYXJkKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggdmFyKC0tYy1zaGFkb3cpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWJnLXNlY29uZGFyeSk7XG59XG4uYXV0aF9fdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZzKThweDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLWJvbGQpO1xuICBjb2xvcjogdmFyKC0tYy10ZXh0LXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3LjlweCkge1xuICAuYXV0aF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMpMnB4O1xuICB9XG59XG4uYXV0aF9fYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmF1dGhfX2J0biAudy1idG4ge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcbiAgLmF1dGggLmZvcm1fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZzKS0ycHg7XG4gIH1cbn1cblxuLnctZm9ybXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udy1mb3Jtc19fbGV2ZWwge1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1jLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWZzKSAtIDZweCk7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWZzKSArIDRweCk7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1sZXR0ZXItc3BhY2luZyk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnctZm9ybXNfX2xldmVsLl9za3kge1xuICBjb2xvcjogdmFyKC0tYy1pbmZvKTtcbn1cbi53LWZvcm1zX19sZXZlbC5fb3JhbmdlIHtcbiAgY29sb3I6IHZhcigtLWMtd2Fybik7XG59XG4udy1mb3Jtc19fbGV2ZWwuX2dyZWVuIHtcbiAgY29sb3I6IHZhcigtLWMtc3VjY2Vzcyk7XG59XG4udy1mb3Jtc19faW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xufVxuLnctZm9ybXNfX2lucHV0LWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnctZm9ybXNfX3RvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogdmFyKC0tYy1wbGFjZWhvbGRlcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnctZm9ybXNfX3RvZ2dsZSBpIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuLnctZm9ybXMgLmljb24tdmlzaWJpbGl0eSB7XG4gIGNvbG9yOiB2YXIoLS1jLXByaW1hcnkpO1xufSIsbnVsbCxudWxsXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3873:
/*!*************************************************!*\
  !*** ./src/app/pages/guest/sign/sign.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignModule": () => (/* binding */ SignModule)
/* harmony export */ });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _sign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign.component */ 2274);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _sign_component__WEBPACK_IMPORTED_MODULE_1__.SignComponent
}];
class SignModule {
  static #_ = this.ɵfac = function SignModule_Factory(t) {
    return new (t || SignModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SignModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), src_app_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignModule, {
    declarations: [_sign_component__WEBPACK_IMPORTED_MODULE_1__.SignComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, src_app_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_guest_sign_sign_module_ts.js.map