import {
  Header,
  init_header
} from "./chunk-DC5PH5JY.js";
import "./chunk-ZTADUJSE.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-JGVVO2MB.js";

// src/app/header/header.spec.ts
var require_header_spec = __commonJS({
  "src/app/header/header.spec.ts"(exports) {
    init_testing();
    init_header();
    describe("Header", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Header]
        }).compileComponents();
        fixture = TestBed.createComponent(Header);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_header_spec();
//# sourceMappingURL=spec-header.spec.js.map
