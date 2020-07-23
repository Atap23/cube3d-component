(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../cube3d-component/src/lib/cube3d-component.component.ts":
/*!*****************************************************************!*\
  !*** ../cube3d-component/src/lib/cube3d-component.component.ts ***!
  \*****************************************************************/
/*! exports provided: Cube3dComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dComponentComponent", function() { return Cube3dComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube3d-component.types */ "../cube3d-component/src/lib/cube3d-component.types.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _cube3d_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cube3d-component.service */ "../cube3d-component/src/lib/cube3d-component.service.ts");





const _c0 = ["cubeContainer"];
const _c1 = ["front"];
const _c2 = ["back"];
const _c3 = ["left"];
const _c4 = ["right"];
const _c5 = ["top"];
const _c6 = ["bottom"];
const _c7 = [[["", "cube3dFrontFace", ""]], [["", "cube3dBackFace", ""]], [["", "cube3dLeftFace", ""]], [["", "cube3dRightFace", ""]], [["", "cube3dTopFace", ""]], [["", "cube3dBottomFace", ""]]];
const _c8 = function (a0, a1, a2) { return { cubeDeep: a0, cubeWidth: a1, cubeHeight: a2 }; };
const _c9 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c10 = ["[cube3dFrontFace]", "[cube3dBackFace]", "[cube3dLeftFace]", "[cube3dRightFace]", "[cube3dTopFace]", "[cube3dBottomFace]"];
class Cube3dComponentComponent {
    constructor(_renderer, _cd, differs, elRef, _cube3d) {
        this._renderer = _renderer;
        this._cd = _cd;
        this.differs = differs;
        this.elRef = elRef;
        this._cube3d = _cube3d;
        this.showClass = _cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].FRONT;
        this.differ = this.differs.find({}).create();
        this.faceChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cubeHeight = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-height');
        this.cubeWidth = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-width');
        this.cubeDeep = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-deep');
    }
    ngDoCheck() {
        const aux = {
            cubeHeight: getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-height'),
            cubeWidth: getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-width'),
            cubeDeep: getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-deep')
        };
        const change = this.differ.diff(aux);
        if (change) {
            change.forEachChangedItem(item => {
                this[item.key] = item.currentValue;
            });
        }
    }
    showFace(face) {
        this.showClass = face;
        this._cd.markForCheck();
    }
    faceChangeAnimationEnd(event) {
        this.faceChangeEnd.emit({ face: event.toState });
    }
}
Cube3dComponentComponent.ɵfac = function Cube3dComponentComponent_Factory(t) { return new (t || Cube3dComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cube3d_component_service__WEBPACK_IMPORTED_MODULE_3__["Cube3dComponentService"])); };
Cube3dComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cube3dComponentComponent, selectors: [["cube3d-component"]], viewQuery: function Cube3dComponentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cubeContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.front = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.back = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.left = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.right = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.top = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bottom = _t.first);
    } }, outputs: { faceChangeEnd: "faceChangeEnd" }, ngContentSelectors: _c10, decls: 21, vars: 9, consts: [[1, "cube-container"], ["cubeContainer", ""], ["id", "front", 1, "front", "face"], ["front", ""], ["id", "back", 1, "back", "face"], ["back", ""], ["id", "left", 1, "left", "face"], ["left", ""], ["id", "right", 1, "right", "face"], ["right", ""], ["id", "top", 1, "top", "face"], ["top", ""], ["id", "bottom", 1, "bottom", "face"], ["bottom", ""]], template: function Cube3dComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@cube3dRotation.done", function Cube3dComponentComponent_Template_div_animation_cube3dRotation_done_1_listener($event) { return ctx.faceChangeAnimationEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](17, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](20, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cubeWidth, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cube3dRotation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c9, ctx.showClass, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c8, ctx.cubeDeep, ctx.cubeWidth, ctx.cubeHeight)));
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  perspective: 700px;\n  perspective-origin: center;\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: var(--cube3d-margin, 0);\n  transform-origin: center center -50%;\n  height: var(--cube3d-height, 200px);\n  width: var(--cube3d-width, 200px);\n  transform-style: preserve-3d;\n  transition: transform 3.5s;\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border: var(--cube3d-face-border, none);\n  border-radius: var(--cube3d-face-border-radius, 0);\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  height: var(--cube3d-height, 200px);\n  width: var(--cube3d-width, 200px);\n  transform: translate3d(0, 0, calc(var(--cube3d-deep, 200px) / 2));\n  background: var(--cube3d-front-face-background, inherit);\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  height: var(--cube3d-height, 200px);\n  width: var(--cube3d-width, 200px);\n  transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, calc(var(--cube3d-deep, 200px) / 2));\n  background: var(--cube3d-back-face-background, inherit);\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  height: var(--cube3d-height, 200px);\n  width: var(--cube3d-deep, 200px);\n  transform: rotateY(90deg) translate3d(0, 0, calc((var(--cube3d-width, 200px) / 2)));\n  background: var(--cube3d-right-face-background, inherit);\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  height: var(--cube3d-height, 200px);\n  width: var(--cube3d-deep, 200px);\n  transform: rotateY(-90deg) translate3d(0, 0, calc((var(--cube3d-width, 200px) / 2)));\n  background: var(--cube3d-left-face-background, inherit);\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: var(--cube3d-deep, 200px);\n  width: var(--cube3d-width, 200px);\n  transform: rotateX(90deg) translate3d(0, 0, calc(var(--cube3d-height, 200px) / 2));\n  background: var(--cube3d-top-face-background, inherit);\n}\n[_nghost-%COMP%]   .cube-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: var(--cube3d-deep, 200px);\n  width: var(--cube3d-width, 200px);\n  transform: rotateX(-90deg) translate3d(0, 0, calc(var(--cube3d-height, 200px) / 2));\n  background: var(--cube3d-bottom-face-background, inherit);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2N1YmUzZC1jb21wb25lbnQvc3JjL2xpYi9jdWJlM2QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLDBCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrREFBQTtBQUFOO0FBS0k7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUVBQUE7RUFDQSx3REFBQTtBQUhOO0FBS0k7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNEZBQUE7RUFDQSx1REFBQTtBQUhOO0FBS0k7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUZBQUE7RUFDQSx3REFBQTtBQUhOO0FBS0k7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0ZBQUE7RUFDQSx1REFBQTtBQUhOO0FBS0k7RUFDRSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0ZBQUE7RUFDQSxzREFBQTtBQUhOO0FBS0k7RUFDRSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUZBQUE7RUFDQSx5REFBQTtBQUhOIiwiZmlsZSI6InByb2plY3RzL2N1YmUzZC1jb21wb25lbnQvc3JjL2xpYi9jdWJlM2QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwZXJzcGVjdGl2ZTogNzAwcHg7XHJcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiBjZW50ZXI7XHJcblxyXG4gIC5jdWJlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jdWJlM2QtbWFyZ2luLCAwKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXIgLTUwJTtcclxuICAgIGhlaWdodDogdmFyKC0tY3ViZTNkLWhlaWdodCwgMjAwcHgpO1xyXG4gICAgd2lkdGg6IHZhcigtLWN1YmUzZC13aWR0aCwgMjAwcHgpO1xyXG5cclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMy41cztcclxuXHJcbiAgICAuZmFjZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyOiB2YXIoLS1jdWJlM2QtZmFjZS1ib3JkZXIsICN7bm9uZX0pO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jdWJlM2QtZmFjZS1ib3JkZXItcmFkaXVzLCAwKTtcclxuXHJcbiAgICAgIC8vYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTsgLy8gVE9ETzogUG9uZXJsbyBjb21vIHZhcmlhYmxlIENTU1xyXG4gICAgfVxyXG5cclxuICAgIC5mcm9udCB7XHJcbiAgICAgIGhlaWdodDogdmFyKC0tY3ViZTNkLWhlaWdodCwgMjAwcHgpO1xyXG4gICAgICB3aWR0aDogdmFyKC0tY3ViZTNkLXdpZHRoLCAyMDBweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygje3ZhcigtLWN1YmUzZC1kZWVwLCAyMDBweCl9IC8gMikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdWJlM2QtZnJvbnQtZmFjZS1iYWNrZ3JvdW5kLCAje2luaGVyaXR9KTtcclxuICAgIH1cclxuICAgIC5iYWNrIHtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1jdWJlM2QtaGVpZ2h0LCAyMDBweCk7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jdWJlM2Qtd2lkdGgsIDIwMHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAxLCAwLCAtMTgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCN7dmFyKC0tY3ViZTNkLWRlZXAsIDIwMHB4KX0gLyAyKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1YmUzZC1iYWNrLWZhY2UtYmFja2dyb3VuZCwgI3tpbmhlcml0fSk7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWN1YmUzZC1oZWlnaHQsIDIwMHB4KTtcclxuICAgICAgd2lkdGg6IHZhcigtLWN1YmUzZC1kZWVwLCAyMDBweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygoI3t2YXIoLS1jdWJlM2Qtd2lkdGgsIDIwMHB4KX0gLyAyKSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdWJlM2QtcmlnaHQtZmFjZS1iYWNrZ3JvdW5kLCAje2luaGVyaXR9KTtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1jdWJlM2QtaGVpZ2h0LCAyMDBweCk7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jdWJlM2QtZGVlcCwgMjAwcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCgje3ZhcigtLWN1YmUzZC13aWR0aCwgMjAwcHgpfSAvIDIpKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1YmUzZC1sZWZ0LWZhY2UtYmFja2dyb3VuZCwgI3tpbmhlcml0fSk7XHJcbiAgICB9XHJcbiAgICAudG9wIHtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1jdWJlM2QtZGVlcCwgMjAwcHgpO1xyXG4gICAgICB3aWR0aDogdmFyKC0tY3ViZTNkLXdpZHRoLCAyMDBweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygje3ZhcigtLWN1YmUzZC1oZWlnaHQsIDIwMHB4KX0gLyAyKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1YmUzZC10b3AtZmFjZS1iYWNrZ3JvdW5kLCAje2luaGVyaXR9KTtcclxuICAgIH1cclxuICAgIC5ib3R0b20ge1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWN1YmUzZC1kZWVwLCAyMDBweCk7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jdWJlM2Qtd2lkdGgsIDIwMHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygje3ZhcigtLWN1YmUzZC1oZWlnaHQsIDIwMHB4KX0gLyAyKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1YmUzZC1ib3R0b20tZmFjZS1iYWNrZ3JvdW5kLCAje2luaGVyaXR9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cube3dRotation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].FRONT, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate3d(0, 0, calc(({{cubeDeep}} / 2) * -1) )'
                }), { params: { cubeDeep: '200px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].BACK, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'rotate3d(0, 1, 0, 180deg) translate3d(0, 0, calc({{cubeDeep}} / 2) )'
                }), { params: { cubeDeep: '200px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].LEFT, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'rotate3d(0, 1, 0, 90deg) translate3d(calc(({{cubeWidth}} / 2)), 0, 0)'
                }), { params: { cubeWidth: '200px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].RIGHT, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'rotate3d(0, 1, 0, -90deg) translate3d(calc(({{cubeWidth}} / 2) * -1), 0, 0)'
                }), { params: { cubeWidth: '200px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].TOP, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'rotate3d(1, 0, 0, -90deg) translate3d(0, calc(({{cubeHeight}} / 2)), 0)'
                }), { params: { cubeHeight: '200px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].BOTTOM, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'rotate3d(1, 0, 0, 90deg) translate3d(0, calc(({{cubeHeight}} / 2) * -1), 0)'
                }), { params: { cubeHeight: '200px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2000ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'cube3d-component',
                templateUrl: 'cube3d-component.component.html',
                styleUrls: ['cube3d-component.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cube3dRotation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].FRONT, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translate3d(0, 0, calc(({{cubeDeep}} / 2) * -1) )'
                        }), { params: { cubeDeep: '200px' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].BACK, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'rotate3d(0, 1, 0, 180deg) translate3d(0, 0, calc({{cubeDeep}} / 2) )'
                        }), { params: { cubeDeep: '200px' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].LEFT, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'rotate3d(0, 1, 0, 90deg) translate3d(calc(({{cubeWidth}} / 2)), 0, 0)'
                        }), { params: { cubeWidth: '200px' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].RIGHT, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'rotate3d(0, 1, 0, -90deg) translate3d(calc(({{cubeWidth}} / 2) * -1), 0, 0)'
                        }), { params: { cubeWidth: '200px' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].TOP, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'rotate3d(1, 0, 0, -90deg) translate3d(0, calc(({{cubeHeight}} / 2)), 0)'
                        }), { params: { cubeHeight: '200px' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])(_cube3d_component_types__WEBPACK_IMPORTED_MODULE_1__["Cube3dShowFaces"].BOTTOM, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'rotate3d(1, 0, 0, 90deg) translate3d(0, calc(({{cubeHeight}} / 2) * -1), 0)'
                        }), { params: { cubeHeight: '200px' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2000ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _cube3d_component_service__WEBPACK_IMPORTED_MODULE_3__["Cube3dComponentService"] }]; }, { cubeContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cubeContainer']
        }], front: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['front']
        }], back: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['back']
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['left']
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['right']
        }], top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['top']
        }], bottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bottom']
        }], faceChangeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['faceChangeEnd']
        }] }); })();


/***/ }),

/***/ "../cube3d-component/src/lib/cube3d-component.module.ts":
/*!**************************************************************!*\
  !*** ../cube3d-component/src/lib/cube3d-component.module.ts ***!
  \**************************************************************/
/*! exports provided: Cube3dComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dComponentModule", function() { return Cube3dComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube3d-component.component */ "../cube3d-component/src/lib/cube3d-component.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_cube3d_front_face_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/cube3d-front-face.directive */ "../cube3d-component/src/lib/directives/cube3d-front-face.directive.ts");
/* harmony import */ var _directives_cube3d_back_face_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/cube3d-back-face.directive */ "../cube3d-component/src/lib/directives/cube3d-back-face.directive.ts");
/* harmony import */ var _directives_cube3d_left_face_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/cube3d-left-face.directive */ "../cube3d-component/src/lib/directives/cube3d-left-face.directive.ts");
/* harmony import */ var _directives_cube3d_right_face_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/cube3d-right-face.directive */ "../cube3d-component/src/lib/directives/cube3d-right-face.directive.ts");
/* harmony import */ var _directives_cube3d_top_face_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/cube3d-top-face.directive */ "../cube3d-component/src/lib/directives/cube3d-top-face.directive.ts");
/* harmony import */ var _directives_cube3d_bottom_face_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/cube3d-bottom-face.directive */ "../cube3d-component/src/lib/directives/cube3d-bottom-face.directive.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");











class Cube3dComponentModule {
}
Cube3dComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Cube3dComponentModule });
Cube3dComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Cube3dComponentModule_Factory(t) { return new (t || Cube3dComponentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Cube3dComponentModule, { declarations: [_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"],
        _directives_cube3d_front_face_directive__WEBPACK_IMPORTED_MODULE_3__["Cube3dFrontFaceDirective"],
        _directives_cube3d_back_face_directive__WEBPACK_IMPORTED_MODULE_4__["Cube3dBackFaceDirective"],
        _directives_cube3d_left_face_directive__WEBPACK_IMPORTED_MODULE_5__["Cube3dLeftFaceDirective"],
        _directives_cube3d_right_face_directive__WEBPACK_IMPORTED_MODULE_6__["Cube3dRightFaceDirective"],
        _directives_cube3d_top_face_directive__WEBPACK_IMPORTED_MODULE_7__["Cube3dTopFaceDirective"],
        _directives_cube3d_bottom_face_directive__WEBPACK_IMPORTED_MODULE_8__["Cube3dBottomFaceDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]], exports: [_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"],
                    _directives_cube3d_front_face_directive__WEBPACK_IMPORTED_MODULE_3__["Cube3dFrontFaceDirective"],
                    _directives_cube3d_back_face_directive__WEBPACK_IMPORTED_MODULE_4__["Cube3dBackFaceDirective"],
                    _directives_cube3d_left_face_directive__WEBPACK_IMPORTED_MODULE_5__["Cube3dLeftFaceDirective"],
                    _directives_cube3d_right_face_directive__WEBPACK_IMPORTED_MODULE_6__["Cube3dRightFaceDirective"],
                    _directives_cube3d_top_face_directive__WEBPACK_IMPORTED_MODULE_7__["Cube3dTopFaceDirective"],
                    _directives_cube3d_bottom_face_directive__WEBPACK_IMPORTED_MODULE_8__["Cube3dBottomFaceDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
                ],
                exports: [_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/cube3d-component.service.ts":
/*!***************************************************************!*\
  !*** ../cube3d-component/src/lib/cube3d-component.service.ts ***!
  \***************************************************************/
/*! exports provided: Cube3dComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dComponentService", function() { return Cube3dComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dComponentService {
    constructor() { }
}
Cube3dComponentService.ɵfac = function Cube3dComponentService_Factory(t) { return new (t || Cube3dComponentService)(); };
Cube3dComponentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Cube3dComponentService, factory: Cube3dComponentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dComponentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/cube3d-component.types.ts":
/*!*************************************************************!*\
  !*** ../cube3d-component/src/lib/cube3d-component.types.ts ***!
  \*************************************************************/
/*! exports provided: Cube3dShowFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dShowFaces", function() { return Cube3dShowFaces; });
var Cube3dShowFaces;
(function (Cube3dShowFaces) {
    Cube3dShowFaces["TOP"] = "show-top";
    Cube3dShowFaces["BOTTOM"] = "show-bottom";
    Cube3dShowFaces["FRONT"] = "show-front";
    Cube3dShowFaces["BACK"] = "show-back";
    Cube3dShowFaces["LEFT"] = "show-left";
    Cube3dShowFaces["RIGHT"] = "show-right";
})(Cube3dShowFaces || (Cube3dShowFaces = {}));


/***/ }),

/***/ "../cube3d-component/src/lib/directives/cube3d-back-face.directive.ts":
/*!****************************************************************************!*\
  !*** ../cube3d-component/src/lib/directives/cube3d-back-face.directive.ts ***!
  \****************************************************************************/
/*! exports provided: Cube3dBackFaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dBackFaceDirective", function() { return Cube3dBackFaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dBackFaceDirective {
}
Cube3dBackFaceDirective.ɵfac = function Cube3dBackFaceDirective_Factory(t) { return new (t || Cube3dBackFaceDirective)(); };
Cube3dBackFaceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Cube3dBackFaceDirective, selectors: [["", "cube3dBackFace", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dBackFaceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[cube3dBackFace]'
            }]
    }], null, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/directives/cube3d-bottom-face.directive.ts":
/*!******************************************************************************!*\
  !*** ../cube3d-component/src/lib/directives/cube3d-bottom-face.directive.ts ***!
  \******************************************************************************/
/*! exports provided: Cube3dBottomFaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dBottomFaceDirective", function() { return Cube3dBottomFaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dBottomFaceDirective {
}
Cube3dBottomFaceDirective.ɵfac = function Cube3dBottomFaceDirective_Factory(t) { return new (t || Cube3dBottomFaceDirective)(); };
Cube3dBottomFaceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Cube3dBottomFaceDirective, selectors: [["", "cube3dBottomFace", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dBottomFaceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[cube3dBottomFace]'
            }]
    }], null, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/directives/cube3d-front-face.directive.ts":
/*!*****************************************************************************!*\
  !*** ../cube3d-component/src/lib/directives/cube3d-front-face.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: Cube3dFrontFaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dFrontFaceDirective", function() { return Cube3dFrontFaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dFrontFaceDirective {
}
Cube3dFrontFaceDirective.ɵfac = function Cube3dFrontFaceDirective_Factory(t) { return new (t || Cube3dFrontFaceDirective)(); };
Cube3dFrontFaceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Cube3dFrontFaceDirective, selectors: [["", "cube3dFrontFace", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dFrontFaceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[cube3dFrontFace]'
            }]
    }], null, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/directives/cube3d-left-face.directive.ts":
/*!****************************************************************************!*\
  !*** ../cube3d-component/src/lib/directives/cube3d-left-face.directive.ts ***!
  \****************************************************************************/
/*! exports provided: Cube3dLeftFaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dLeftFaceDirective", function() { return Cube3dLeftFaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dLeftFaceDirective {
}
Cube3dLeftFaceDirective.ɵfac = function Cube3dLeftFaceDirective_Factory(t) { return new (t || Cube3dLeftFaceDirective)(); };
Cube3dLeftFaceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Cube3dLeftFaceDirective, selectors: [["", "cube3dLeftFace", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dLeftFaceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[cube3dLeftFace]'
            }]
    }], null, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/directives/cube3d-right-face.directive.ts":
/*!*****************************************************************************!*\
  !*** ../cube3d-component/src/lib/directives/cube3d-right-face.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: Cube3dRightFaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dRightFaceDirective", function() { return Cube3dRightFaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dRightFaceDirective {
}
Cube3dRightFaceDirective.ɵfac = function Cube3dRightFaceDirective_Factory(t) { return new (t || Cube3dRightFaceDirective)(); };
Cube3dRightFaceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Cube3dRightFaceDirective, selectors: [["", "cube3dRightFace", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dRightFaceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[cube3dRightFace]'
            }]
    }], null, null); })();


/***/ }),

/***/ "../cube3d-component/src/lib/directives/cube3d-top-face.directive.ts":
/*!***************************************************************************!*\
  !*** ../cube3d-component/src/lib/directives/cube3d-top-face.directive.ts ***!
  \***************************************************************************/
/*! exports provided: Cube3dTopFaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube3dTopFaceDirective", function() { return Cube3dTopFaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cube3dTopFaceDirective {
}
Cube3dTopFaceDirective.ɵfac = function Cube3dTopFaceDirective_Factory(t) { return new (t || Cube3dTopFaceDirective)(); };
Cube3dTopFaceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Cube3dTopFaceDirective, selectors: [["", "cube3dTopFace", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cube3dTopFaceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[cube3dTopFace]'
            }]
    }], null, null); })();


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cube3d_component_src_lib_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cube3d-component/src/lib/cube3d-component.component */ "../cube3d-component/src/lib/cube3d-component.component.ts");
/* harmony import */ var _cube3d_component_src_lib_cube3d_component_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cube3d-component/src/lib/cube3d-component.types */ "../cube3d-component/src/lib/cube3d-component.types.ts");





class AppComponent {
    constructor() {
        this.cube3dShowFaces = _cube3d_component_src_lib_cube3d_component_types__WEBPACK_IMPORTED_MODULE_2__["Cube3dShowFaces"];
    }
    faceChanged($event) {
        alert($event.face);
        console.log($event.face);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_cube3d_component_src_lib_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cube3d = _t.first);
    } }, decls: 26, vars: 0, consts: [[3, "faceChangeEnd"], ["cube3dFrontFace", ""], ["cube3dBackFace", ""], ["cube3dLeftFace", ""], ["cube3dRightFace", ""], ["cube3dTopFace", ""], ["cube3dBottomFace", ""], [1, "buttons-container"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cube3d-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("faceChangeEnd", function AppComponent_Template_cube3d_component_faceChangeEnd_0_listener($event) { return ctx.faceChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.cube3d.showFace(ctx.cube3dShowFaces.FRONT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show Front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.cube3d.showFace(ctx.cube3dShowFaces.BACK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Show Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { return ctx.cube3d.showFace(ctx.cube3dShowFaces.LEFT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Show Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() { return ctx.cube3d.showFace(ctx.cube3dShowFaces.RIGHT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Show Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() { return ctx.cube3d.showFace(ctx.cube3dShowFaces.TOP); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Show Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() { return ctx.cube3d.showFace(ctx.cube3dShowFaces.BOTTOM); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Show Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cube3d_component_src_lib_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(56, 108, 179, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  --cube3d-front-face-background: red;\n  --cube3d-back-face-background: blue;\n  --cube3d-top-face-background: purple;\n  --cube3d-bottom-face-background: green;\n  --cube3d-left-face-background: olive;\n  --cube3d-right-face-background: gray;\n}\n[_nghost-%COMP%]   cube3d-component[_ngcontent-%COMP%] {\n  --cube3d-height: 200px;\n  --cube3d-width: 400px;\n  --cube3d-deep: 200px;\n}\n[_nghost-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n[_nghost-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2N1YmUzZC1jb21wb25lbnQtc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHlDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUlBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtBQUpGO0FBTUU7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7QUFMTiIsImZpbGUiOiJwcm9qZWN0cy9jdWJlM2QtY29tcG9uZW50LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwxMDgsMTc5LCAwLjUpO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG5cclxuICAtLWN1YmUzZC1mcm9udC1mYWNlLWJhY2tncm91bmQ6IHJlZDtcclxuICAtLWN1YmUzZC1iYWNrLWZhY2UtYmFja2dyb3VuZDogYmx1ZTtcclxuICAtLWN1YmUzZC10b3AtZmFjZS1iYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbiAgLS1jdWJlM2QtYm90dG9tLWZhY2UtYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgLS1jdWJlM2QtbGVmdC1mYWNlLWJhY2tncm91bmQ6IG9saXZlO1xyXG4gIC0tY3ViZTNkLXJpZ2h0LWZhY2UtYmFja2dyb3VuZDogZ3JheTtcclxuXHJcbiAgY3ViZTNkLWNvbXBvbmVudCB7XHJcbiAgICAtLWN1YmUzZC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgLS1jdWJlM2Qtd2lkdGg6IDQwMHB4O1xyXG4gICAgLS1jdWJlM2QtZGVlcDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, { cube3d: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_cube3d_component_src_lib_cube3d_component_component__WEBPACK_IMPORTED_MODULE_1__["Cube3dComponentComponent"]]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cube3d_component_src_lib_cube3d_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../cube3d-component/src/lib/cube3d-component.module */ "../cube3d-component/src/lib/cube3d-component.module.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _cube3d_component_src_lib_cube3d_component_module__WEBPACK_IMPORTED_MODULE_3__["Cube3dComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _cube3d_component_src_lib_cube3d_component_module__WEBPACK_IMPORTED_MODULE_3__["Cube3dComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _cube3d_component_src_lib_cube3d_component_module__WEBPACK_IMPORTED_MODULE_3__["Cube3dComponentModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SERVER\cube3d-component\projects\cube3d-component-showcase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map