"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_pages_user_profile_profile_module_ts"],{

/***/ 2650:
/*!*********************************************************!*\
  !*** ./src/app/pages/user/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/button/button.interface */ 297);
/* harmony import */ var src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/form/form.service */ 4780);
/* harmony import */ var src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/input/input.interface */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _modules_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/button/button.component */ 212);
/* harmony import */ var _modules_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/card/card.component */ 3401);
/* harmony import */ var _modules_form_form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/form/form/form.component */ 9646);









class ProfileComponent {
  constructor(_form, us) {
    this._form = _form;
    this.us = us;
    this.buttonTypes = src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_0__.ButtonTypes;
    this.inputTypes = src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_2__.InputTypes;
    this.formPassword = {
      title: 'Change password',
      components: [{
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        type: src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_2__.InputTypes.PASSWORD,
        placeholder: 'Type password',
        label: 'Current',
        input: 'oldPass',
        focused: true
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        type: src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_2__.InputTypes.PASSWORD,
        placeholder: 'Type password',
        label: 'New',
        input: 'newPass'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.BUTTON,
        type: src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_0__.ButtonTypes.PRIMARY,
        label: 'Change'
      }]
    };
    this.formConfig = {
      components: [{
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        placeholder: 'fill your name',
        label: 'Name',
        input: 'name'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        placeholder: 'fill your phone',
        label: 'Phone',
        input: 'data.phone'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.TEXTAREA,
        placeholder: 'fill your bio',
        label: 'Biography',
        input: 'data.bio'
      }]
    };
  }

  change_password() {
    this._form.modal(this.formPassword, form => {
      this.us.change_password(form.oldPass, form.newPass);
    });
  }

  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_3__.UserService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 23,
    vars: 5,
    consts: [[1, "container"], [3, "padding"], [1, "profile__header", "w-card__header"], [1, "avatar", "_profile"], ["width", "50", "height", "50", "alt", "User Avatar", 1, "avatar__img", 3, "src"], ["for", "userAvatarUrl", 1, "avatar__upload"], [1, "material-icons", "avatar__icon"], [1, "profile__body"], [3, "config", "change"], ["form", ""], [1, "profile__footer"], [1, "profile__logout"], [3, "type", "click"], [1, "material-icons"], [1, "profile__password"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "wcard", 1)(2, "div", 2)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div")(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 5)(9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7)(12, "wform", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ProfileComponent_Template_wform_change_12_listener() {
          return ctx.us.update();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "wbutton", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileComponent_Template_wbutton_click_16_listener() {
          return ctx.us.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 14)(21, "wbutton", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileComponent_Template_wbutton_click_21_listener() {
          return ctx.change_password();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.us.user.thumb || "assets/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.formConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.buttonTypes.DANGER);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.buttonTypes.LINK);
      }
    },
    dependencies: [_modules_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _modules_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _modules_form_form_form_component__WEBPACK_IMPORTED_MODULE_6__.FormComponent],
    styles: ["[_ngcontent-%COMP%]:root {\n  --c-white: #fff;\n  --c-black: #000;\n  --c-grey: #e7e7e7;\n  --c-grey-dark: #bfbfbf;\n  --c-basic: #3558ae;\n  --c-primary: #256eff;\n  --c-primary-hover: #0051f1;\n  --c-secondary: red;\n  --c-bg-primary: #f3f4f7;\n  --c-bg-secondary: #ffffff;\n  --c-bg-tertiary: #fcfdfe;\n  --c-border: #f0f1f7;\n  --c-shadow: #f3f3f3;\n  --c-text-primary: #666666;\n  --c-text-secondary: #19235c;\n  --c-placeholder: #adb8c6;\n  --c-warn: #e67e22;\n  --c-error: #e74c3c;\n  --c-error-hover: #d62c1a;\n  --c-success: #14c76e;\n  --c-info: #17a2b8;\n  --container: 1210px;\n  --b-radius: 8px;\n  --b-radius-card: 10px;\n  --b-radius-btn: 10px;\n  --b-radius-img: 50%;\n  --padding: 10px;\n  --fs: 16px;\n  --ff-bold: bold;\n  --ff-base: \"Poppins\",\n      sans-serif;\n  --letter-spacing: 0.3px;\n  --transition: .3s all ease-in-out;\n}\n\nhtml.dark[_ngcontent-%COMP%]:root {\n  --c-basic: #333;\n  --c-bg-primary: #282828;\n  --c-bg-secondary: #343434;\n  --c-bg-tertiary: #404040;\n  --c-border: #404040;\n  --c-shadow: #444444;\n  --c-text-primary: #ffffff;\n  --c-text-secondary: #ffffff;\n  --c-placeholder: #7a7a7a;\n}\n\n\n[_nghost-%COMP%] {\n  padding: 20px;\n}\n\n\n.container[_ngcontent-%COMP%] {\n  padding: unset;\n}\n\n.profile__header[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  line-height: 23px;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--c-text-primary);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: var(--b-radius);\n}\n.profile__footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 767.9px) {\n  .profile__footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .profile__footer[_ngcontent-%COMP%]   .profile__logout[_ngcontent-%COMP%] {\n    order: 2;\n    margin-top: 20px;\n  }\n}\n.profile__logout[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.profile__logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n\n.avatar[_ngcontent-%COMP%] {\n  border-radius: var(--b-radius-img);\n  border: 1px solid var(--c-border);\n  position: relative;\n  margin: 0 auto;\n  padding: 3px;\n}\n.avatar._profile[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.avatar__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--b-radius-img);\n}\n.avatar__upload[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  width: 24px;\n  height: 24px;\n  border-radius: var(--b-radius-img);\n  background: var(--c-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: var(--transition);\n}\n.avatar__icon[_ngcontent-%COMP%] {\n  color: var(--c-white);\n  font-size: var(--fs);\n}\n/*# sourceURL=webpack://./src/scss/utils/_vars.scss */\n/*# sourceURL=webpack://./src/app/pages/user/profile/profile.component.scss */\n/*# sourceURL=webpack://./src/scss/utils/_media.scss */\n/*# sourceURL=webpack://./src/scss/utils/_mixins.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL192YXJzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbHMvX21lZGlhLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBR0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0gsZUFBQTtFQUNHLFVBQUE7RUFDQSxlQUFBO0VBQ0E7Z0JBQUE7RUFFQSx1QkFBQTtFQUNBLGlDQUFBO0FDTko7O0FEV0E7RUFDSSxlQUFBO0VBQ0gsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ1JKOztBQzdDQSxxREFBQTtBRENBO0VBQ0ksYUFBQTtBQWdESjs7QUE5Q0Esb0JBQUE7QUFDQTtFQUNJLGNBQUE7QUFpREo7O0FBOUNJO0VFVEEsaUJGVTBCO0VFVDFCLGlCRlM2QjtFRVI3QixnQkZRbUM7RUVQbkMsZUZPd0M7RUVOeEMsNEJGTThDO0VFSDlDLGFGSXFCO0VFRnhCLDhCRkVvQztFRURwQyxtQkZDbUQ7RUFDNUMsOEJBQUE7QUF1RFI7QUFyREM7RUFDQyxnQkFBQTtFRVJFLGFGU2U7RUVQbEIsOEJGTzhCO0VFTjlCLG1CRk02QztFRUw3QyxlRktxRDtBQTBEdEQ7QUM5Q1E7RURkUDtJQUlFLHNCQUFBO0lBQ0EsbUJBQUE7RUE0REQ7RUEzREM7SUFDQyxRQUFBO0lBQ0EsZ0JBQUE7RUE2REY7QUFDRjtBQXpEUTtFQUNJLFNBQUE7RUVyQlIsYUZzQnlCO0VFcEI1Qiw4QkZvQndDO0VFbkJ4QyxtQkZtQnVEO0FBNkR4RDtBQTNEUTtFQUNJLGtCQUFBO0FBNkRaOztBQXhEQSx5QkFBQTtBQUNBO0VBQ0ksa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUEyREo7QUExREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTREUjtBQTFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQTREUjtBQTFESTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VFdkRKLGFGd0RxQjtFRXREeEIsdUJGc0RvQztFRXJEcEMsbUJGcUQ0QztFQUNyQyw2QkFBQTtBQThEUjtBQTVESTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUE4RFIiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIjpyb290IHtcbiAgLS1jLXdoaXRlOiAjZmZmO1xuICAtLWMtYmxhY2s6ICMwMDA7XG4gIC0tYy1ncmV5OiAjZTdlN2U3O1xuICAtLWMtZ3JleS1kYXJrOiAjYmZiZmJmO1xuICAtLWMtYmFzaWM6ICMzNTU4YWU7XG4gIC0tYy1wcmltYXJ5OiAjMjU2ZWZmO1xuICAtLWMtcHJpbWFyeS1ob3ZlcjogIzAwNTFmMTtcbiAgLS1jLXNlY29uZGFyeTogcmVkO1xuICAtLWMtYmctcHJpbWFyeTogI2YzZjRmNztcbiAgLS1jLWJnLXNlY29uZGFyeTogI2ZmZmZmZjtcbiAgLS1jLWJnLXRlcnRpYXJ5OiAjZmNmZGZlO1xuICAtLWMtYm9yZGVyOiAjZjBmMWY3O1xuICAtLWMtc2hhZG93OiAjZjNmM2YzO1xuICAtLWMtdGV4dC1wcmltYXJ5OiAjNjY2NjY2O1xuICAtLWMtdGV4dC1zZWNvbmRhcnk6ICMxOTIzNWM7XG4gIC0tYy1wbGFjZWhvbGRlcjogI2FkYjhjNjtcbiAgLS1jLXdhcm46ICNlNjdlMjI7XG4gIC0tYy1lcnJvcjogI2U3NGMzYztcbiAgLS1jLWVycm9yLWhvdmVyOiAjZDYyYzFhO1xuICAtLWMtc3VjY2VzczogIzE0Yzc2ZTtcbiAgLS1jLWluZm86ICMxN2EyYjg7XG4gIC0tY29udGFpbmVyOiAxMjEwcHg7XG4gIC0tYi1yYWRpdXM6IDhweDtcbiAgLS1iLXJhZGl1cy1jYXJkOiAxMHB4O1xuICAtLWItcmFkaXVzLWJ0bjogMTBweDtcbiAgLS1iLXJhZGl1cy1pbWc6IDUwJTtcbiAgLS1wYWRkaW5nOiAxMHB4O1xuICAtLWZzOiAxNnB4O1xuICAtLWZmLWJvbGQ6IGJvbGQ7XG4gIC0tZmYtYmFzZTogXCJQb3BwaW5zXCIsXG4gICAgICBzYW5zLXNlcmlmO1xuICAtLWxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLS10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2UtaW4tb3V0O1xufVxuXG5odG1sLmRhcms6cm9vdCB7XG4gIC0tYy1iYXNpYzogIzMzMztcbiAgLS1jLWJnLXByaW1hcnk6ICMyODI4Mjg7XG4gIC0tYy1iZy1zZWNvbmRhcnk6ICMzNDM0MzQ7XG4gIC0tYy1iZy10ZXJ0aWFyeTogIzQwNDA0MDtcbiAgLS1jLWJvcmRlcjogIzQwNDA0MDtcbiAgLS1jLXNoYWRvdzogIzQ0NDQ0NDtcbiAgLS1jLXRleHQtcHJpbWFyeTogI2ZmZmZmZjtcbiAgLS1jLXRleHQtc2Vjb25kYXJ5OiAjZmZmZmZmO1xuICAtLWMtcGxhY2Vob2xkZXI6ICM3YTdhN2E7XG59XG5cbi8qIFVTRTogQGluY2x1ZGUgYnAtbWF4KHNtKS4uLiBicC1taW4uLi4gYnAtb25seS4uLiAqL1xuOmhvc3Qge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiAgUFJPRklMRSBTVFlMRSAgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiB1bnNldDtcbn1cblxuLnByb2ZpbGVfX2hlYWRlciB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tYy10ZXh0LXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWItcmFkaXVzKTtcbn1cbi5wcm9maWxlX19mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOXB4KSB7XG4gIC5wcm9maWxlX19mb290ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucHJvZmlsZV9fZm9vdGVyIC5wcm9maWxlX19sb2dvdXQge1xuICAgIG9yZGVyOiAyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5wcm9maWxlX19sb2dvdXQgLnctYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZV9fbG9nb3V0IC5tYXRlcmlhbC1pY29ucyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLyogIEFWQVRBUiBQSE9UTyBTVFlMRSAgKi9cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1iLXJhZGl1cy1pbWcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5hdmF0YXIuX3Byb2ZpbGUge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmF2YXRhcl9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWItcmFkaXVzLWltZyk7XG59XG4uYXZhdGFyX191cGxvYWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWItcmFkaXVzLWltZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWMtcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5hdmF0YXJfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tYy13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMpO1xufSIsbnVsbCxudWxsXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2687:
/*!******************************************************!*\
  !*** ./src/app/pages/user/profile/profile.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ 2650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
}];
class ProfileModule {
  static #_ = this.ɵfac = function ProfileModule_Factory(t) {
    return new (t || ProfileModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProfileModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), src_app_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, src_app_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_profile_profile_module_ts.js.map