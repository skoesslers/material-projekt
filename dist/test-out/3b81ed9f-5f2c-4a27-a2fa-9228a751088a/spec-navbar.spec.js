import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-JGVVO2MB.js";

// angular:jit:template:src\app\components\navbar\navbar.html
var navbar_default;
var init_navbar = __esm({
  "angular:jit:template:src\\app\\components\\navbar\\navbar.html"() {
    navbar_default = `<nav class="navbar">\r
	<span>Navbar</span>\r
			<label class="switch">\r
				<input type="checkbox" [checked]="isDarkMode" (change)="toggleDarkMode()">\r
				<span class="slider"></span>\r
				<span class="switch-label">{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>\r
			</label>\r
</nav>\r
`;
  }
});

// angular:jit:style:src\app\components\navbar\navbar.scss
var navbar_default2;
var init_navbar2 = __esm({
  "angular:jit:style:src\\app\\components\\navbar\\navbar.scss"() {
    navbar_default2 = '/* src/app/components/navbar/navbar.scss */\n.switch {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.switch input {\n  display: none;\n}\n.slider {\n  width: 40px;\n  height: 20px;\n  background: #ccc;\n  border-radius: 20px;\n  position: relative;\n  transition: background 0.3s;\n}\n.slider::before {\n  content: "";\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.3s;\n}\ninput:checked + .slider {\n  background: #333;\n}\ninput:checked + .slider::before {\n  transform: translateX(20px);\n  background: #f1f1f1;\n}\n.switch-label {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=navbar.css.map */\n';
  }
});

// src/app/components/navbar/navbar.ts
var Navbar;
var init_navbar3 = __esm({
  "src/app/components/navbar/navbar.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar();
    init_navbar2();
    init_core();
    Navbar = class Navbar2 {
      isDarkMode = false;
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }
    };
    Navbar = __decorate([
      Component({
        selector: "app-navbar",
        template: navbar_default,
        styles: [navbar_default2]
      })
    ], Navbar);
  }
});

// src/app/components/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/components/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar3();
    describe("Navbar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Navbar]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
