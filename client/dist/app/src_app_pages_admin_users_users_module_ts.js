"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_pages_admin_users_users_module_ts"],{

/***/ 4907:
/*!******************************************************!*\
  !*** ./src/app/pages/admin/users/users.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/input/input.interface */ 9095);
/* harmony import */ var src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/form/form.service */ 4780);
/* harmony import */ var src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/button/button.interface */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _modules_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/input/input.component */ 5029);
/* harmony import */ var _modules_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/table/table.component */ 2366);
/* harmony import */ var _modules_table_table_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/table/table.directive */ 3289);










function UsersComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "winput", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_1_Template_winput_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const element_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      element_r2.is.admin = $event;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.us.save(element_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("set", element_r2.is.admin)("type", ctx_r1.inputTypes.CHECKBOX);
  }
}

class UsersComponent {
  constructor(_form, us) {
    this._form = _form;
    this.us = us;
    this.inputTypes = src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_0__.InputTypes;
    this.formCreate = {
      title: 'Create New User',
      components: [{
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        type: src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_0__.InputTypes.EMAIL,
        placeholder: 'fill email',
        label: 'E-mail',
        input: 'email',
        focused: true
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        placeholder: 'fill name',
        label: 'Name',
        input: 'name'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.BUTTON,
        type: src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_2__.ButtonTypes.PRIMARY,
        label: 'Create'
      }]
    };
    this.formUpdate = {
      title: 'Update User',
      components: [{
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        type: src_app_modules_input_input_interface__WEBPACK_IMPORTED_MODULE_0__.InputTypes.EMAIL,
        placeholder: 'fill email',
        label: 'E-mail',
        input: 'email',
        focused: true
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.INPUT,
        placeholder: 'fill name',
        label: 'Name',
        input: 'name'
      }, {
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.BUTTON,
        type: src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_2__.ButtonTypes.PRIMARY,
        label: 'Update'
      }]
    };
    this.formVerify = {
      title: 'Are you sure you want to delete this user?',
      components: [{
        module: src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormModules.BUTTON,
        type: src_app_modules_button_button_interface__WEBPACK_IMPORTED_MODULE_2__.ButtonTypes.PRIMARY,
        label: 'Yes'
      }]
    };
    this.config = {
      create: () => {
        this._form.modal(this.formCreate, user => {
          this.us.create(user);
        });
      },
      update: user => {
        this.formUpdate.components[0].set = user.email;
        this.formUpdate.components[1].set = user.name;

        this._form.modal(this.formUpdate, user => {
          this.us.save(user);
        });
      },
      delete: user => {
        this._form.modal(this.formVerify, () => {
          this.us.delete(user);
        });
      }
    };
    this.columns = ['name', 'email'];

    for (const role of this.us.roles) {
      this.columns.push(role);
    }
  }

  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_form_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_3__.UserService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 3,
    vars: 3,
    consts: [[3, "columns", "config", "rows"], ["cell", "admin"], ["admin", ""], [3, "set", "type", "ngModelChange"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "wtable", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_ng_template_1_Template, 1, 2, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", ctx.columns)("config", ctx.config)("rows", ctx.us.users);
      }
    },
    dependencies: [_modules_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _modules_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _modules_table_table_directive__WEBPACK_IMPORTED_MODULE_6__.CellDirective],
    styles: ["[_ngcontent-%COMP%]:root {\n  --c-white: #fff;\n  --c-black: #000;\n  --c-grey: #e7e7e7;\n  --c-grey-dark: #bfbfbf;\n  --c-basic: #3558ae;\n  --c-primary: #256eff;\n  --c-primary-hover: #0051f1;\n  --c-secondary: red;\n  --c-bg-primary: #f3f4f7;\n  --c-bg-secondary: #ffffff;\n  --c-bg-tertiary: #fcfdfe;\n  --c-border: #f0f1f7;\n  --c-shadow: #f3f3f3;\n  --c-text-primary: #666666;\n  --c-text-secondary: #19235c;\n  --c-placeholder: #adb8c6;\n  --c-warn: #e67e22;\n  --c-error: #e74c3c;\n  --c-error-hover: #d62c1a;\n  --c-success: #14c76e;\n  --c-info: #17a2b8;\n  --container: 1210px;\n  --b-radius: 8px;\n  --b-radius-card: 10px;\n  --b-radius-btn: 10px;\n  --b-radius-img: 50%;\n  --padding: 10px;\n  --fs: 16px;\n  --ff-bold: bold;\n  --ff-base: \"Poppins\",\n      sans-serif;\n  --letter-spacing: 0.3px;\n  --transition: .3s all ease-in-out;\n}\n\nhtml.dark[_ngcontent-%COMP%]:root {\n  --c-basic: #333;\n  --c-bg-primary: #282828;\n  --c-bg-secondary: #343434;\n  --c-bg-tertiary: #404040;\n  --c-border: #404040;\n  --c-shadow: #444444;\n  --c-text-primary: #ffffff;\n  --c-text-secondary: #ffffff;\n  --c-placeholder: #7a7a7a;\n}\n\n\n[_nghost-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n\n.w-table-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.w-table-user__img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  min-width: 30px;\n  min-height: 30px;\n  margin-right: 10px;\n}\n.w-table-user__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: var(--b-radius-img);\n}\n@media (max-width: 991.9px) {\n  .w-table-user__img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 991.9px) {\n  .w-table[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .w-table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.w-table[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  height: 18px;\n  max-height: 18px;\n  display: block;\n}\n.w-table[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.users-field[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.users-field[_ngcontent-%COMP%]   .forms[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 575.9px) {\n  .users-field[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n\n.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover {\n  color: var(--c-error);\n}\n.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + i[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.users__header[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  line-height: 23px;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--c-text-primary);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: var(--b-radius);\n}\n/*# sourceURL=webpack://./src/scss/utils/_vars.scss */\n/*# sourceURL=webpack://./src/app/pages/admin/users/users.component.scss */\n/*# sourceURL=webpack://./src/scss/utils/_media.scss */\n/*# sourceURL=webpack://./src/scss/utils/_mixins.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL192YXJzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbHMvX21lZGlhLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBR0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0gsZUFBQTtFQUNHLFVBQUE7RUFDQSxlQUFBO0VBQ0E7Z0JBQUE7RUFFQSx1QkFBQTtFQUNBLGlDQUFBO0FDTko7O0FEV0E7RUFDSSxlQUFBO0VBQ0gsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ1JKOztBQzdDQSxxREFBQTtBREFBO0VBQ0ksWUFBQTtFRU1BLGFGTGlCO0VFTXBCLHNCRk4wQjtFQUN2QixhQUFBO0FBa0RKOztBQWhEQTtFRUVJLGFGRGlCO0VFSXBCLG1CRkpzQztFRUt0QyxlRkw4QztBQXFEL0M7QUFwREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBc0RSO0FBckRRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQXVEWjtBQzNDUTtFRHJCSjtJQVlRLGFBQUE7RUF3RFY7QUFDRjs7QUNoRFE7RURGQTs7SUFFSSxhQUFBO0VBc0RWO0FBQ0Y7QUFwREk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBc0RSO0FBckRRO0VBQ0ksWUFBQTtBQXVEWjs7QUFsREE7RUVsQ0ksYUZtQ2lCO0VFakNwQiw4QkZpQ2dDO0VFaENoQyxxQkZnQytDO0FBdURoRDtBQXRESTtFQUNJLFlBQUE7QUF3RFI7QUF0REk7RUFDSSxXQUFBO0FBd0RSO0FDM0VRO0VEYVI7SUFVUSxzQkFBQTtJQUNOLG1CQUFBO0VBd0RBO0VBdkRNO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0VBeURWO0FBQ0Y7O0FBckRBO0VBQ0ksNkJBQUE7QUF3REo7QUF2REk7RUFDSSxxQkFBQTtBQXlEUjtBQXZESTtFQUNJLGlCQUFBO0FBeURSOztBQXBESTtFRXZFQSxpQkZ3RTBCO0VFdkUxQixpQkZ1RTZCO0VFdEU3QixnQkZzRW1DO0VFckVuQyxlRnFFd0M7RUVwRXhDLDRCRm9FOEM7RUVqRTlDLGFGa0VxQjtFRWhFeEIsOEJGZ0VvQztFRS9EcEMsbUJGK0RtRDtFQUM1Qyw4QkFBQTtBQTZEUiIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiOnJvb3Qge1xuICAtLWMtd2hpdGU6ICNmZmY7XG4gIC0tYy1ibGFjazogIzAwMDtcbiAgLS1jLWdyZXk6ICNlN2U3ZTc7XG4gIC0tYy1ncmV5LWRhcms6ICNiZmJmYmY7XG4gIC0tYy1iYXNpYzogIzM1NThhZTtcbiAgLS1jLXByaW1hcnk6ICMyNTZlZmY7XG4gIC0tYy1wcmltYXJ5LWhvdmVyOiAjMDA1MWYxO1xuICAtLWMtc2Vjb25kYXJ5OiByZWQ7XG4gIC0tYy1iZy1wcmltYXJ5OiAjZjNmNGY3O1xuICAtLWMtYmctc2Vjb25kYXJ5OiAjZmZmZmZmO1xuICAtLWMtYmctdGVydGlhcnk6ICNmY2ZkZmU7XG4gIC0tYy1ib3JkZXI6ICNmMGYxZjc7XG4gIC0tYy1zaGFkb3c6ICNmM2YzZjM7XG4gIC0tYy10ZXh0LXByaW1hcnk6ICM2NjY2NjY7XG4gIC0tYy10ZXh0LXNlY29uZGFyeTogIzE5MjM1YztcbiAgLS1jLXBsYWNlaG9sZGVyOiAjYWRiOGM2O1xuICAtLWMtd2FybjogI2U2N2UyMjtcbiAgLS1jLWVycm9yOiAjZTc0YzNjO1xuICAtLWMtZXJyb3ItaG92ZXI6ICNkNjJjMWE7XG4gIC0tYy1zdWNjZXNzOiAjMTRjNzZlO1xuICAtLWMtaW5mbzogIzE3YTJiODtcbiAgLS1jb250YWluZXI6IDEyMTBweDtcbiAgLS1iLXJhZGl1czogOHB4O1xuICAtLWItcmFkaXVzLWNhcmQ6IDEwcHg7XG4gIC0tYi1yYWRpdXMtYnRuOiAxMHB4O1xuICAtLWItcmFkaXVzLWltZzogNTAlO1xuICAtLXBhZGRpbmc6IDEwcHg7XG4gIC0tZnM6IDE2cHg7XG4gIC0tZmYtYm9sZDogYm9sZDtcbiAgLS1mZi1iYXNlOiBcIlBvcHBpbnNcIixcbiAgICAgIHNhbnMtc2VyaWY7XG4gIC0tbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbmh0bWwuZGFyazpyb290IHtcbiAgLS1jLWJhc2ljOiAjMzMzO1xuICAtLWMtYmctcHJpbWFyeTogIzI4MjgyODtcbiAgLS1jLWJnLXNlY29uZGFyeTogIzM0MzQzNDtcbiAgLS1jLWJnLXRlcnRpYXJ5OiAjNDA0MDQwO1xuICAtLWMtYm9yZGVyOiAjNDA0MDQwO1xuICAtLWMtc2hhZG93OiAjNDQ0NDQ0O1xuICAtLWMtdGV4dC1wcmltYXJ5OiAjZmZmZmZmO1xuICAtLWMtdGV4dC1zZWNvbmRhcnk6ICNmZmZmZmY7XG4gIC0tYy1wbGFjZWhvbGRlcjogIzdhN2E3YTtcbn1cblxuLyogVVNFOiBAaW5jbHVkZSBicC1tYXgoc20pLi4uIGJwLW1pbi4uLiBicC1vbmx5Li4uICovXG46aG9zdCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnctdGFibGUtdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi53LXRhYmxlLXVzZXJfX2ltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnctdGFibGUtdXNlcl9faW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWItcmFkaXVzLWltZyk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjlweCkge1xuICAudy10YWJsZS11c2VyX19pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45cHgpIHtcbiAgLnctdGFibGUgLmVtYWlsLFxuICAudy10YWJsZSAucm9sZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnctdGFibGUgLmNoZWNrYm94IHtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXgtaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53LXRhYmxlIC5jaGVja2JveF9fYm9keSB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLnVzZXJzLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4udXNlcnMtZmllbGQgLnctYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnVzZXJzLWZpZWxkIC5mb3JtcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45cHgpIHtcbiAgLnVzZXJzLWZpZWxkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnVzZXJzLWZpZWxkIC53LWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udy10YWJsZV9fdGQuYWN0aW9ucyAubWF0ZXJpYWwtaWNvbnMge1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi53LXRhYmxlX190ZC5hY3Rpb25zIC5tYXRlcmlhbC1pY29uczpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jLWVycm9yKTtcbn1cbi53LXRhYmxlX190ZC5hY3Rpb25zIC5tYXRlcmlhbC1pY29ucyBpICsgaSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udXNlcnNfX2hlYWRlciB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tYy10ZXh0LXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWItcmFkaXVzKTtcbn0iLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9052:
/*!***************************************************!*\
  !*** ./src/app/pages/admin/users/users.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 4907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent
}];
class UsersModule {
  static #_ = this.ɵfac = function UsersModule_Factory(t) {
    return new (t || UsersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: UsersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), src_app_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, src_app_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_users_users_module_ts.js.map