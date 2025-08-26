import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  XhrFactory,
  getDOM,
  init_common,
  init_dom_renderer,
  init_xhr,
  isPlatformBrowser,
  parseCookieValue
} from "./chunk-ZTADUJSE.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  Component,
  Console,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PendingTasks,
  QueryList,
  RendererFactory2,
  ResourceImpl,
  RuntimeError,
  SecurityContext,
  SkipSelf,
  Subject,
  Subscription,
  Version,
  ViewEncapsulation,
  XSS_SECURITY_URL,
  __async,
  __decorate,
  __esm,
  __spreadValues,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allowSanitizationBypassAndThrow,
  assertInInjectionContext,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  core_exports,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  effect,
  encapsulateResourceError,
  filter,
  finalize,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  isSignal,
  linkedSignal,
  makeEnvironmentProviders,
  map,
  of,
  runInInjectionContext,
  share,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  unwrapSafeValue,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-JGVVO2MB.js";

// angular:jit:template:src\app\header\header.html
var header_default;
var init_header = __esm({
  "angular:jit:template:src\\app\\header\\header.html"() {
    header_default = '<mat-toolbar color="primary" class="mat-elevation-z0 custom-header">\r\n  <span class="logo">MyApp</span>\r\n  <span class="spacer"></span>\r\n  <button class="mat-mdc-icon-button" mat-icon-button aria-label="Home">\r\n    <mat-icon>home</mat-icon>\r\n  </button>\r\n  <button class="mat-mdc-icon-button" mat-icon-button aria-label="Settings">\r\n    <mat-icon>settings</mat-icon>\r\n  </button>\r\n</mat-toolbar>';
  }
});

// angular:jit:style:src\app\header\header.scss
var header_default2;
var init_header2 = __esm({
  "angular:jit:style:src\\app\\header\\header.scss"() {
    header_default2 = "/* src/app/header/header.scss */\n.custom-header {\n  border-radius: var(--mat-sys-corner-medium);\n  color: var(--mat-sys-on-primary);\n  padding: 0 1rem;\n}\n.logo {\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=header.css.map */\n";
  }
});

// node_modules/@angular/common/fesm2022/module.mjs
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
function paramParser(rawParams, codec) {
  const map2 = /* @__PURE__ */ new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, "").split("&");
    params.forEach((param) => {
      const eqIdx = param.indexOf("=");
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map2.get(key) || [];
      list.push(val);
      map2.set(key, list);
    });
  }
  return map2;
}
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
function mightHaveBody(method) {
  switch (method) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    credentials: options.credentials,
    transferCache: options.transferCache,
    timeout: options.timeout,
    keepalive: options.keepalive,
    priority: options.priority,
    cache: options.cache,
    mode: options.mode,
    redirect: options.redirect,
    integrity: options.integrity,
    referrer: options.referrer
  };
}
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  const xRequestUrl = X_REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
function noop() {
}
function warningOptionsMessage(req) {
  if (req.credentials && req.withCredentials) {
    console.warn(formatRuntimeError(2819, `Angular detected that a \`HttpClient\` request has both \`withCredentials: true\` and \`credentials: '${req.credentials}'\` options. The \`withCredentials\` option is overriding the explicit \`credentials\` setting to 'include'. Consider removing \`withCredentials\` and using \`credentials: '${req.credentials}'\` directly for clarity.`));
  }
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = inject(HTTP_INTERCEPTORS, { optional: true }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = inject(PendingTasks);
    const contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if (contributeToStability) {
      const removeTask = pendingTasks.add();
      return chain(req, handler).pipe(finalize(removeTask));
    } else {
      return chain(req, handler);
    }
  };
}
function jsonpCallbackContext() {
  if (typeof window === "object") {
    return window;
  }
  return {};
}
function jsonpInterceptorFn(req, next) {
  if (req.method === "JSONP") {
    return inject(JsonpClientBackend).handle(req);
  }
  return next(req);
}
function getResponseUrl(xhr) {
  if ("responseURL" in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (X_REQUEST_URL_REGEXP.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader(X_REQUEST_URL_HEADER);
  }
  return null;
}
function validateXhrCompatibility(req) {
  const unsupportedOptions = [
    {
      property: "keepalive",
      errorCode: 2813
    },
    {
      property: "cache",
      errorCode: 2814
    },
    {
      property: "priority",
      errorCode: 2815
    },
    {
      property: "mode",
      errorCode: 2816
    },
    {
      property: "redirect",
      errorCode: 2817
    },
    {
      property: "credentials",
      errorCode: 2818
    },
    {
      property: "integrity",
      errorCode: 2820
    },
    {
      property: "referrer",
      errorCode: 2821
    }
  ];
  for (const { property, errorCode } of unsupportedOptions) {
    if (req[property]) {
      console.warn(formatRuntimeError(errorCode, `Angular detected that a \`HttpClient\` request with the \`${property}\` option was sent using XHR, which does not support it. To use the \`${property}\` option, enable Fetch API support by passing \`withFetch()\` as an argument to \`provideHttpClient()\`.`));
    }
  }
}
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
    return next(req);
  }
  const token = inject(HttpXsrfTokenExtractor).getToken();
  const headerName = inject(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({ headers: req.headers.set(headerName, token) });
  }
  return next(req);
}
function makeHttpFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map((f) => f.\u0275kind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : "");
    }
  }
  const providers = [
    HttpClient,
    HttpXhrBackend,
    HttpInterceptorHandler,
    { provide: HttpHandler, useExisting: HttpInterceptorHandler },
    {
      provide: HttpBackend,
      useFactory: () => {
        return inject(FETCH_BACKEND, { optional: true }) ?? inject(HttpXhrBackend);
      }
    },
    {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: xsrfInterceptorFn,
      multi: true
    },
    { provide: XSRF_ENABLED, useValue: true },
    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor }
  ];
  for (const feature of features) {
    providers.push(...feature.\u0275providers);
  }
  return makeEnvironmentProviders(providers);
}
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [
    {
      provide: LEGACY_INTERCEPTOR_FN,
      useFactory: legacyInterceptorFnFactory
    },
    {
      provide: HTTP_INTERCEPTOR_FNS,
      useExisting: LEGACY_INTERCEPTOR_FN,
      multi: true
    }
  ]);
}
function withXsrfConfiguration({ cookieName, headerName }) {
  const providers = [];
  if (cookieName !== void 0) {
    providers.push({ provide: XSRF_COOKIE_NAME, useValue: cookieName });
  }
  if (headerName !== void 0) {
    providers.push({ provide: XSRF_HEADER_NAME, useValue: headerName });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [
    {
      provide: XSRF_ENABLED,
      useValue: false
    }
  ]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [
    JsonpClientBackend,
    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
    { provide: HTTP_INTERCEPTOR_FNS, useValue: jsonpInterceptorFn, multi: true }
  ]);
}
var HttpHandler, HttpBackend, HttpHeaders, HttpUrlEncodingCodec, STANDARD_ENCODING_REGEX, STANDARD_ENCODING_REPLACEMENTS, HttpParams, HttpContext, CONTENT_TYPE_HEADER, ACCEPT_HEADER, X_REQUEST_URL_HEADER, TEXT_CONTENT_TYPE, JSON_CONTENT_TYPE, ACCEPT_HEADER_VALUE, HttpRequest, HttpEventType, HttpResponseBase, HttpHeaderResponse, HttpResponse, HttpErrorResponse, HTTP_STATUS_CODE_OK, HTTP_STATUS_CODE_NO_CONTENT, HttpStatusCode, HttpClient, XSSI_PREFIX$1, FETCH_BACKEND, FetchBackend, FetchFactory, HTTP_INTERCEPTORS, HTTP_INTERCEPTOR_FNS, HTTP_ROOT_INTERCEPTOR_FNS, REQUESTS_CONTRIBUTE_TO_STABILITY, fetchBackendWarningDisplayed, HttpInterceptorHandler, nextRequestId, foreignDocument, JSONP_ERR_NO_CALLBACK, JSONP_ERR_WRONG_METHOD, JSONP_ERR_WRONG_RESPONSE_TYPE, JSONP_ERR_HEADERS_NOT_SUPPORTED, JsonpCallbackContext, JsonpClientBackend, JsonpInterceptor, XSSI_PREFIX, X_REQUEST_URL_REGEXP, HttpXhrBackend, XSRF_ENABLED, XSRF_DEFAULT_COOKIE_NAME, XSRF_COOKIE_NAME, XSRF_DEFAULT_HEADER_NAME, XSRF_HEADER_NAME, HttpXsrfTokenExtractor, HttpXsrfCookieExtractor, HttpXsrfInterceptor, HttpFeatureKind, LEGACY_INTERCEPTOR_FN, HttpClientXsrfModule, HttpClientModule, HttpClientJsonpModule;
var init_module = __esm({
  "node_modules/@angular/common/fesm2022/module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_operators();
    init_esm();
    init_xhr();
    HttpHandler = class {
    };
    HttpBackend = class {
    };
    HttpHeaders = class _HttpHeaders {
      /**
       * Internal map of lowercase header names to values.
       */
      headers;
      /**
       * Internal map of lowercased header names to the normalized
       * form of the name (the form seen first).
       */
      normalizedNames = /* @__PURE__ */ new Map();
      /**
       * Complete the lazy initialization of this object (needed before reading).
       */
      lazyInit;
      /**
       * Queued updates to be materialized the next initialization.
       */
      lazyUpdate = null;
      /**  Constructs a new HTTP header object with the given values.*/
      constructor(headers) {
        if (!headers) {
          this.headers = /* @__PURE__ */ new Map();
        } else if (typeof headers === "string") {
          this.lazyInit = () => {
            this.headers = /* @__PURE__ */ new Map();
            headers.split("\n").forEach((line) => {
              const index = line.indexOf(":");
              if (index > 0) {
                const name = line.slice(0, index);
                const value = line.slice(index + 1).trim();
                this.addHeaderEntry(name, value);
              }
            });
          };
        } else if (typeof Headers !== "undefined" && headers instanceof Headers) {
          this.headers = /* @__PURE__ */ new Map();
          headers.forEach((value, name) => {
            this.addHeaderEntry(name, value);
          });
        } else {
          this.lazyInit = () => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              assertValidHeaders(headers);
            }
            this.headers = /* @__PURE__ */ new Map();
            Object.entries(headers).forEach(([name, values]) => {
              this.setHeaderEntries(name, values);
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param name The header name to check for existence.
       *
       * @returns True if the header exists, false otherwise.
       */
      has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
      }
      /**
       * Retrieves the first value of a given header.
       *
       * @param name The header name.
       *
       * @returns The value string if the header exists, null otherwise
       */
      get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
      }
      /**
       * Retrieves the names of the headers.
       *
       * @returns A list of header names.
       */
      keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
      }
      /**
       * Retrieves a list of values for a given header.
       *
       * @param name The header name from which to retrieve values.
       *
       * @returns A string of values if the header exists, null otherwise.
       */
      getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
      }
      /**
       * Appends a new value to the existing set of values for a header
       * and returns them in a clone of the original instance.
       *
       * @param name The header name for which to append the values.
       * @param value The value to append.
       *
       * @returns A clone of the HTTP headers object with the value appended to the given header.
       */
      append(name, value) {
        return this.clone({ name, value, op: "a" });
      }
      /**
       * Sets or modifies a value for a given header in a clone of the original instance.
       * If the header already exists, its value is replaced with the given value
       * in the returned object.
       *
       * @param name The header name.
       * @param value The value or values to set or override for the given header.
       *
       * @returns A clone of the HTTP headers object with the newly set header value.
       */
      set(name, value) {
        return this.clone({ name, value, op: "s" });
      }
      /**
       * Deletes values for a given header in a clone of the original instance.
       *
       * @param name The header name.
       * @param value The value or values to delete for the given header.
       *
       * @returns A clone of the HTTP headers object with the given value deleted.
       */
      delete(name, value) {
        return this.clone({ name, value, op: "d" });
      }
      maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
          this.normalizedNames.set(lcName, name);
        }
      }
      init() {
        if (!!this.lazyInit) {
          if (this.lazyInit instanceof _HttpHeaders) {
            this.copyFrom(this.lazyInit);
          } else {
            this.lazyInit();
          }
          this.lazyInit = null;
          if (!!this.lazyUpdate) {
            this.lazyUpdate.forEach((update) => this.applyUpdate(update));
            this.lazyUpdate = null;
          }
        }
      }
      copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((key) => {
          this.headers.set(key, other.headers.get(key));
          this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
      }
      clone(update) {
        const clone = new _HttpHeaders();
        clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
      }
      applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
          case "a":
          case "s":
            let value = update.value;
            if (typeof value === "string") {
              value = [value];
            }
            if (value.length === 0) {
              return;
            }
            this.maybeSetNormalizedName(update.name, key);
            const base = (update.op === "a" ? this.headers.get(key) : void 0) || [];
            base.push(...value);
            this.headers.set(key, base);
            break;
          case "d":
            const toDelete = update.value;
            if (!toDelete) {
              this.headers.delete(key);
              this.normalizedNames.delete(key);
            } else {
              let existing = this.headers.get(key);
              if (!existing) {
                return;
              }
              existing = existing.filter((value2) => toDelete.indexOf(value2) === -1);
              if (existing.length === 0) {
                this.headers.delete(key);
                this.normalizedNames.delete(key);
              } else {
                this.headers.set(key, existing);
              }
            }
            break;
        }
      }
      addHeaderEntry(name, value) {
        const key = name.toLowerCase();
        this.maybeSetNormalizedName(name, key);
        if (this.headers.has(key)) {
          this.headers.get(key).push(value);
        } else {
          this.headers.set(key, [value]);
        }
      }
      setHeaderEntries(name, values) {
        const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
        const key = name.toLowerCase();
        this.headers.set(key, headerValues);
        this.maybeSetNormalizedName(name, key);
      }
      /**
       * @internal
       */
      forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
      }
    };
    HttpUrlEncodingCodec = class {
      /**
       * Encodes a key name for a URL parameter or query-string.
       * @param key The key name.
       * @returns The encoded key name.
       */
      encodeKey(key) {
        return standardEncoding(key);
      }
      /**
       * Encodes the value of a URL parameter or query-string.
       * @param value The value.
       * @returns The encoded value.
       */
      encodeValue(value) {
        return standardEncoding(value);
      }
      /**
       * Decodes an encoded URL parameter or query-string key.
       * @param key The encoded key name.
       * @returns The decoded key name.
       */
      decodeKey(key) {
        return decodeURIComponent(key);
      }
      /**
       * Decodes an encoded URL parameter or query-string value.
       * @param value The encoded value.
       * @returns The decoded value.
       */
      decodeValue(value) {
        return decodeURIComponent(value);
      }
    };
    STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
    STANDARD_ENCODING_REPLACEMENTS = {
      "40": "@",
      "3A": ":",
      "24": "$",
      "2C": ",",
      "3B": ";",
      "3D": "=",
      "3F": "?",
      "2F": "/"
    };
    HttpParams = class _HttpParams {
      map;
      encoder;
      updates = null;
      cloneFrom = null;
      constructor(options = {}) {
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (options.fromString) {
          if (options.fromObject) {
            throw new RuntimeError(2805, ngDevMode && "Cannot specify both fromString and fromObject.");
          }
          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = /* @__PURE__ */ new Map();
          Object.keys(options.fromObject).forEach((key) => {
            const value = options.fromObject[key];
            const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
            this.map.set(key, values);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param param The parameter name.
       * @returns True if the parameter has one or more values,
       * false if it has no value or is not present.
       */
      has(param) {
        this.init();
        return this.map.has(param);
      }
      /**
       * Retrieves the first value for a parameter.
       * @param param The parameter name.
       * @returns The first value of the given parameter,
       * or `null` if the parameter is not present.
       */
      get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
      }
      /**
       * Retrieves all values for a  parameter.
       * @param param The parameter name.
       * @returns All values in a string array,
       * or `null` if the parameter not present.
       */
      getAll(param) {
        this.init();
        return this.map.get(param) || null;
      }
      /**
       * Retrieves all the parameters for this body.
       * @returns The parameter names in a string array.
       */
      keys() {
        this.init();
        return Array.from(this.map.keys());
      }
      /**
       * Appends a new value to existing values for a parameter.
       * @param param The parameter name.
       * @param value The new value to add.
       * @return A new body with the appended value.
       */
      append(param, value) {
        return this.clone({ param, value, op: "a" });
      }
      /**
       * Constructs a new body with appended values for the given parameter name.
       * @param params parameters and values
       * @return A new body with the new value.
       */
      appendAll(params) {
        const updates = [];
        Object.keys(params).forEach((param) => {
          const value = params[param];
          if (Array.isArray(value)) {
            value.forEach((_value) => {
              updates.push({ param, value: _value, op: "a" });
            });
          } else {
            updates.push({ param, value, op: "a" });
          }
        });
        return this.clone(updates);
      }
      /**
       * Replaces the value for a parameter.
       * @param param The parameter name.
       * @param value The new value.
       * @return A new body with the new value.
       */
      set(param, value) {
        return this.clone({ param, value, op: "s" });
      }
      /**
       * Removes a given value or all values from a parameter.
       * @param param The parameter name.
       * @param value The value to remove, if provided.
       * @return A new body with the given value removed, or with all values
       * removed if no value is specified.
       */
      delete(param, value) {
        return this.clone({ param, value, op: "d" });
      }
      /**
       * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
       * separated by `&`s.
       */
      toString() {
        this.init();
        return this.keys().map((key) => {
          const eKey = this.encoder.encodeKey(key);
          return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
        }).filter((param) => param !== "").join("&");
      }
      clone(update) {
        const clone = new _HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
      }
      init() {
        if (this.map === null) {
          this.map = /* @__PURE__ */ new Map();
        }
        if (this.cloneFrom !== null) {
          this.cloneFrom.init();
          this.cloneFrom.keys().forEach((key) => this.map.set(key, this.cloneFrom.map.get(key)));
          this.updates.forEach((update) => {
            switch (update.op) {
              case "a":
              case "s":
                const base = (update.op === "a" ? this.map.get(update.param) : void 0) || [];
                base.push(valueToString(update.value));
                this.map.set(update.param, base);
                break;
              case "d":
                if (update.value !== void 0) {
                  let base2 = this.map.get(update.param) || [];
                  const idx = base2.indexOf(valueToString(update.value));
                  if (idx !== -1) {
                    base2.splice(idx, 1);
                  }
                  if (base2.length > 0) {
                    this.map.set(update.param, base2);
                  } else {
                    this.map.delete(update.param);
                  }
                } else {
                  this.map.delete(update.param);
                  break;
                }
            }
          });
          this.cloneFrom = this.updates = null;
        }
      }
    };
    HttpContext = class {
      map = /* @__PURE__ */ new Map();
      /**
       * Store a value in the context. If a value is already present it will be overwritten.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       * @param value The value to store.
       *
       * @returns A reference to itself for easy chaining.
       */
      set(token, value) {
        this.map.set(token, value);
        return this;
      }
      /**
       * Retrieve the value associated with the given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns The stored value or default if one is defined.
       */
      get(token) {
        if (!this.map.has(token)) {
          this.map.set(token, token.defaultValue());
        }
        return this.map.get(token);
      }
      /**
       * Delete the value associated with the given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns A reference to itself for easy chaining.
       */
      delete(token) {
        this.map.delete(token);
        return this;
      }
      /**
       * Checks for existence of a given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns True if the token exists, false otherwise.
       */
      has(token) {
        return this.map.has(token);
      }
      /**
       * @returns a list of tokens currently stored in the context.
       */
      keys() {
        return this.map.keys();
      }
    };
    CONTENT_TYPE_HEADER = "Content-Type";
    ACCEPT_HEADER = "Accept";
    X_REQUEST_URL_HEADER = "X-Request-URL";
    TEXT_CONTENT_TYPE = "text/plain";
    JSON_CONTENT_TYPE = "application/json";
    ACCEPT_HEADER_VALUE = `${JSON_CONTENT_TYPE}, ${TEXT_CONTENT_TYPE}, */*`;
    HttpRequest = class _HttpRequest {
      url;
      /**
       * The request body, or `null` if one isn't set.
       *
       * Bodies are not enforced to be immutable, as they can include a reference to any
       * user-defined data type. However, interceptors should take care to preserve
       * idempotence by treating them as such.
       */
      body = null;
      /**
       * Outgoing headers for this request.
       */
      headers;
      /**
       * Shared and mutable context that can be used by interceptors
       */
      context;
      /**
       * Whether this request should be made in a way that exposes progress events.
       *
       * Progress events are expensive (change detection runs on each event) and so
       * they should only be requested if the consumer intends to monitor them.
       *
       * Note: The `FetchBackend` doesn't support progress report on uploads.
       */
      reportProgress = false;
      /**
       * Whether this request should be sent with outgoing credentials (cookies).
       */
      withCredentials = false;
      /**
       *  The credentials mode of the request, which determines how cookies and HTTP authentication are handled.
       *  This can affect whether cookies are sent with the request, and how authentication is handled.
       */
      credentials;
      /**
       * When using the fetch implementation and set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.
       */
      keepalive = false;
      /**
       * Controls how the request will interact with the browser's HTTP cache.
       * This affects whether a response is retrieved from the cache, how it is stored, or if it bypasses the cache altogether.
       */
      cache;
      /**
       * Indicates the relative priority of the request. This may be used by the browser to decide the order in which requests are dispatched and resources fetched.
       */
      priority;
      /**
       * The mode of the request, which determines how the request will interact with the browser's security model.
       * This can affect things like CORS (Cross-Origin Resource Sharing) and same-origin policies.
       */
      mode;
      /**
       * The redirect mode of the request, which determines how redirects are handled.
       * This can affect whether the request follows redirects automatically, or if it fails when a redirect occurs.
       */
      redirect;
      /**
       * The referrer of the request, which can be used to indicate the origin of the request.
       * This is useful for security and analytics purposes.
       * Value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
       */
      referrer;
      /**
       * The integrity metadata of the request, which can be used to ensure the request is made with the expected content.
       * A cryptographic hash of the resource to be fetched by request
       */
      integrity;
      /**
       * The expected response type of the server.
       *
       * This is used to parse the response appropriately before returning it to
       * the requestee.
       */
      responseType = "json";
      /**
       * The outgoing HTTP request method.
       */
      method;
      /**
       * Outgoing URL parameters.
       *
       * To pass a string representation of HTTP parameters in the URL-query-string format,
       * the `HttpParamsOptions`' `fromString` may be used. For example:
       *
       * ```ts
       * new HttpParams({fromString: 'angular=awesome'})
       * ```
       */
      params;
      /**
       * The outgoing URL with all URL parameters set.
       */
      urlWithParams;
      /**
       * The HttpTransferCache option for the request
       */
      transferCache;
      /**
       * The timeout for the backend HTTP request in ms.
       */
      timeout;
      constructor(method, url, third, fourth) {
        this.url = url;
        this.method = method.toUpperCase();
        let options;
        if (mightHaveBody(this.method) || !!fourth) {
          this.body = third !== void 0 ? third : null;
          options = fourth;
        } else {
          options = third;
        }
        if (options) {
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials;
          this.keepalive = !!options.keepalive;
          if (!!options.responseType) {
            this.responseType = options.responseType;
          }
          if (options.headers) {
            this.headers = options.headers;
          }
          if (options.context) {
            this.context = options.context;
          }
          if (options.params) {
            this.params = options.params;
          }
          if (options.priority) {
            this.priority = options.priority;
          }
          if (options.cache) {
            this.cache = options.cache;
          }
          if (options.credentials) {
            this.credentials = options.credentials;
          }
          if (typeof options.timeout === "number") {
            if (options.timeout < 1 || !Number.isInteger(options.timeout)) {
              throw new RuntimeError(2822, ngDevMode ? "`timeout` must be a positive integer value" : "");
            }
            this.timeout = options.timeout;
          }
          if (options.mode) {
            this.mode = options.mode;
          }
          if (options.redirect) {
            this.redirect = options.redirect;
          }
          if (options.integrity) {
            this.integrity = options.integrity;
          }
          if (options.referrer) {
            this.referrer = options.referrer;
          }
          this.transferCache = options.transferCache;
        }
        this.headers ??= new HttpHeaders();
        this.context ??= new HttpContext();
        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          const params = this.params.toString();
          if (params.length === 0) {
            this.urlWithParams = url;
          } else {
            const qIdx = url.indexOf("?");
            const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       */
      serializeBody() {
        if (this.body === null) {
          return null;
        }
        if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
          return this.body;
        }
        if (this.body instanceof HttpParams) {
          return this.body.toString();
        }
        if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) {
          return JSON.stringify(this.body);
        }
        return this.body.toString();
      }
      /**
       * Examine the body and attempt to infer an appropriate MIME type
       * for it.
       *
       * If no such type can be inferred, this method will return `null`.
       */
      detectContentTypeHeader() {
        if (this.body === null) {
          return null;
        }
        if (isFormData(this.body)) {
          return null;
        }
        if (isBlob(this.body)) {
          return this.body.type || null;
        }
        if (isArrayBuffer(this.body)) {
          return null;
        }
        if (typeof this.body === "string") {
          return TEXT_CONTENT_TYPE;
        }
        if (this.body instanceof HttpParams) {
          return "application/x-www-form-urlencoded;charset=UTF-8";
        }
        if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") {
          return JSON_CONTENT_TYPE;
        }
        return null;
      }
      clone(update = {}) {
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        const keepalive = update.keepalive ?? this.keepalive;
        const priority = update.priority || this.priority;
        const cache = update.cache || this.cache;
        const mode = update.mode || this.mode;
        const redirect = update.redirect || this.redirect;
        const credentials = update.credentials || this.credentials;
        const referrer = update.referrer || this.referrer;
        const integrity = update.integrity || this.integrity;
        const transferCache = update.transferCache ?? this.transferCache;
        const timeout = update.timeout ?? this.timeout;
        const body = update.body !== void 0 ? update.body : this.body;
        const withCredentials = update.withCredentials ?? this.withCredentials;
        const reportProgress = update.reportProgress ?? this.reportProgress;
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        const context = update.context ?? this.context;
        if (update.setHeaders !== void 0) {
          headers = Object.keys(update.setHeaders).reduce((headers2, name) => headers2.set(name, update.setHeaders[name]), headers);
        }
        if (update.setParams) {
          params = Object.keys(update.setParams).reduce((params2, param) => params2.set(param, update.setParams[param]), params);
        }
        return new _HttpRequest(method, url, body, {
          params,
          headers,
          context,
          reportProgress,
          responseType,
          withCredentials,
          transferCache,
          keepalive,
          cache,
          priority,
          timeout,
          mode,
          redirect,
          credentials,
          referrer,
          integrity
        });
      }
    };
    (function(HttpEventType2) {
      HttpEventType2[HttpEventType2["Sent"] = 0] = "Sent";
      HttpEventType2[HttpEventType2["UploadProgress"] = 1] = "UploadProgress";
      HttpEventType2[HttpEventType2["ResponseHeader"] = 2] = "ResponseHeader";
      HttpEventType2[HttpEventType2["DownloadProgress"] = 3] = "DownloadProgress";
      HttpEventType2[HttpEventType2["Response"] = 4] = "Response";
      HttpEventType2[HttpEventType2["User"] = 5] = "User";
    })(HttpEventType || (HttpEventType = {}));
    HttpResponseBase = class {
      /**
       * All response headers.
       */
      headers;
      /**
       * Response status code.
       */
      status;
      /**
       * Textual description of response status code, defaults to OK.
       *
       * Do not depend on this.
       */
      statusText;
      /**
       * URL of the resource retrieved, or null if not available.
       */
      url;
      /**
       * Whether the status code falls in the 2xx range.
       */
      ok;
      /**
       * Type of the response, narrowed to either the full response or the header.
       */
      type;
      /**
       * Indicates whether the HTTP response was redirected during the request.
       * This property is only available when using the Fetch API using `withFetch()`
       * When using the default XHR Request this property will be `undefined`
       */
      redirected;
      /**
       * Super-constructor for all responses.
       *
       * The single parameter accepted is an initialization hash. Any properties
       * of the response passed there will override the default values.
       */
      constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== void 0 ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        this.redirected = init.redirected;
        this.ok = this.status >= 200 && this.status < 300;
      }
    };
    HttpHeaderResponse = class _HttpHeaderResponse extends HttpResponseBase {
      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       */
      constructor(init = {}) {
        super(init);
      }
      type = HttpEventType.ResponseHeader;
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       */
      clone(update = {}) {
        return new _HttpHeaderResponse({
          headers: update.headers || this.headers,
          status: update.status !== void 0 ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || void 0
        });
      }
    };
    HttpResponse = class _HttpResponse extends HttpResponseBase {
      /**
       * The response body, or `null` if one was not returned.
       */
      body;
      /**
       * Construct a new `HttpResponse`.
       */
      constructor(init = {}) {
        super(init);
        this.body = init.body !== void 0 ? init.body : null;
      }
      type = HttpEventType.Response;
      clone(update = {}) {
        return new _HttpResponse({
          body: update.body !== void 0 ? update.body : this.body,
          headers: update.headers || this.headers,
          status: update.status !== void 0 ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || void 0,
          redirected: update.redirected ?? this.redirected
        });
      }
    };
    HttpErrorResponse = class extends HttpResponseBase {
      name = "HttpErrorResponse";
      message;
      error;
      /**
       * Errors are never okay, even when the status code is in the 2xx success range.
       */
      ok = false;
      constructor(init) {
        super(init, 0, "Unknown Error");
        if (this.status >= 200 && this.status < 300) {
          this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
        } else {
          this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
      }
    };
    HTTP_STATUS_CODE_OK = 200;
    HTTP_STATUS_CODE_NO_CONTENT = 204;
    (function(HttpStatusCode2) {
      HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
      HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
      HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
      HttpStatusCode2[HttpStatusCode2["EarlyHints"] = 103] = "EarlyHints";
      HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
      HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
      HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
      HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
      HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
      HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
      HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
      HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
      HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
      HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
      HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
      HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
      HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
      HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
      HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
      HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
      HttpStatusCode2[HttpStatusCode2["Unused"] = 306] = "Unused";
      HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
      HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
      HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
      HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
      HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
      HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
      HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
      HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
      HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
      HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
      HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
      HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
      HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
      HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
      HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
      HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
      HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
      HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
      HttpStatusCode2[HttpStatusCode2["ImATeapot"] = 418] = "ImATeapot";
      HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
      HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
      HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
      HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
      HttpStatusCode2[HttpStatusCode2["TooEarly"] = 425] = "TooEarly";
      HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
      HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
      HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
      HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
      HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
      HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
      HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
      HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
      HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
      HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
      HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
      HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
      HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
      HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
      HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
      HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
    })(HttpStatusCode || (HttpStatusCode = {}));
    HttpClient = class _HttpClient {
      handler;
      constructor(handler) {
        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       */
      request(first, url, options = {}) {
        let req;
        if (first instanceof HttpRequest) {
          req = first;
        } else {
          let headers = void 0;
          if (options.headers instanceof HttpHeaders) {
            headers = options.headers;
          } else {
            headers = new HttpHeaders(options.headers);
          }
          let params = void 0;
          if (!!options.params) {
            if (options.params instanceof HttpParams) {
              params = options.params;
            } else {
              params = new HttpParams({ fromObject: options.params });
            }
          }
          req = new HttpRequest(first, url, options.body !== void 0 ? options.body : null, {
            headers,
            context: options.context,
            params,
            reportProgress: options.reportProgress,
            // By default, JSON is assumed to be returned for all calls.
            responseType: options.responseType || "json",
            withCredentials: options.withCredentials,
            transferCache: options.transferCache,
            keepalive: options.keepalive,
            priority: options.priority,
            cache: options.cache,
            mode: options.mode,
            redirect: options.redirect,
            credentials: options.credentials,
            referrer: options.referrer,
            integrity: options.integrity,
            timeout: options.timeout
          });
        }
        const events$ = of(req).pipe(concatMap((req2) => this.handler.handle(req2)));
        if (first instanceof HttpRequest || options.observe === "events") {
          return events$;
        }
        const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
        switch (options.observe || "body") {
          case "body":
            switch (req.responseType) {
              case "arraybuffer":
                return res$.pipe(map((res) => {
                  if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                    throw new RuntimeError(2806, ngDevMode && "Response is not an ArrayBuffer.");
                  }
                  return res.body;
                }));
              case "blob":
                return res$.pipe(map((res) => {
                  if (res.body !== null && !(res.body instanceof Blob)) {
                    throw new RuntimeError(2807, ngDevMode && "Response is not a Blob.");
                  }
                  return res.body;
                }));
              case "text":
                return res$.pipe(map((res) => {
                  if (res.body !== null && typeof res.body !== "string") {
                    throw new RuntimeError(2808, ngDevMode && "Response is not a string.");
                  }
                  return res.body;
                }));
              case "json":
              default:
                return res$.pipe(map((res) => res.body));
            }
          case "response":
            return res$;
          default:
            throw new RuntimeError(2809, ngDevMode && `Unreachable: unhandled observe type ${options.observe}}`);
        }
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `DELETE` request to execute on the server. See the individual overloads for
       * details on the return type.
       *
       * @param url     The endpoint URL.
       * @param options The HTTP options to send with the request.
       *
       */
      delete(url, options = {}) {
        return this.request("DELETE", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `GET` request to execute on the server. See the individual overloads for
       * details on the return type.
       */
      get(url, options = {}) {
        return this.request("GET", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `HEAD` request to execute on the server. The `HEAD` method returns
       * meta information about the resource without transferring the
       * resource itself. See the individual overloads for
       * details on the return type.
       */
      head(url, options = {}) {
        return this.request("HEAD", url, options);
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes a request with the special method
       * `JSONP` to be dispatched via the interceptor pipeline.
       * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
       * API endpoints that don't support newer,
       * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
       * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
       * requests even if the API endpoint is not located on the same domain (origin) as the client-side
       * application making the request.
       * The endpoint API must support JSONP callback for JSONP requests to work.
       * The resource API returns the JSON response wrapped in a callback function.
       * You can pass the callback function name as one of the query parameters.
       * Note that JSONP requests can only be used with `GET` requests.
       *
       * @param url The resource URL.
       * @param callbackParam The callback function name.
       *
       */
      jsonp(url, callbackParam) {
        return this.request("JSONP", url, {
          params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json"
        });
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes the configured
       * `OPTIONS` request to execute on the server. This method allows the client
       * to determine the supported HTTP methods and other capabilities of an endpoint,
       * without implying a resource action. See the individual overloads for
       * details on the return type.
       */
      options(url, options = {}) {
        return this.request("OPTIONS", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PATCH` request to execute on the server. See the individual overloads for
       * details on the return type.
       */
      patch(url, body, options = {}) {
        return this.request("PATCH", url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `POST` request to execute on the server. The server responds with the location of
       * the replaced resource. See the individual overloads for
       * details on the return type.
       */
      post(url, body, options = {}) {
        return this.request("POST", url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
       * with a new set of values.
       * See the individual overloads for details on the return type.
       */
      put(url, body, options = {}) {
        return this.request("PUT", url, addBody(options, body));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClient, deps: [{ token: HttpHandler }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClient });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpClient, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: HttpHandler }] });
    XSSI_PREFIX$1 = /^\)\]\}',?\n/;
    FETCH_BACKEND = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "FETCH_BACKEND" : "");
    FetchBackend = class _FetchBackend {
      // We use an arrow function to always reference the current global implementation of `fetch`.
      // This is helpful for cases when the global `fetch` implementation is modified by external code,
      // see https://github.com/angular/angular/issues/57527.
      fetchImpl = inject(FetchFactory, { optional: true })?.fetch ?? ((...args) => globalThis.fetch(...args));
      ngZone = inject(NgZone);
      destroyRef = inject(DestroyRef);
      destroyed = false;
      constructor() {
        this.destroyRef.onDestroy(() => {
          this.destroyed = true;
        });
      }
      handle(request) {
        return new Observable((observer) => {
          const aborter = new AbortController();
          this.doRequest(request, aborter.signal, observer).then(noop, (error) => observer.error(new HttpErrorResponse({ error })));
          let timeoutId;
          if (request.timeout) {
            timeoutId = this.ngZone.runOutsideAngular(() => setTimeout(() => {
              if (!aborter.signal.aborted) {
                aborter.abort(new DOMException("signal timed out", "TimeoutError"));
              }
            }, request.timeout));
          }
          return () => {
            if (timeoutId !== void 0) {
              clearTimeout(timeoutId);
            }
            aborter.abort();
          };
        });
      }
      doRequest(request, signal2, observer) {
        return __async(this, null, function* () {
          const init = this.createRequestInit(request);
          let response;
          try {
            const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, __spreadValues({ signal: signal2 }, init)));
            silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
            observer.next({ type: HttpEventType.Sent });
            response = yield fetchPromise;
          } catch (error) {
            observer.error(new HttpErrorResponse({
              error,
              status: error.status ?? 0,
              statusText: error.statusText,
              url: request.urlWithParams,
              headers: error.headers
            }));
            return;
          }
          const headers = new HttpHeaders(response.headers);
          const statusText = response.statusText;
          const url = getResponseUrl$1(response) ?? request.urlWithParams;
          let status = response.status;
          let body = null;
          if (request.reportProgress) {
            observer.next(new HttpHeaderResponse({ headers, status, statusText, url }));
          }
          if (response.body) {
            const contentLength = response.headers.get("content-length");
            const chunks = [];
            const reader = response.body.getReader();
            let receivedLength = 0;
            let decoder;
            let partialText;
            const reqZone = typeof Zone !== "undefined" && Zone.current;
            let canceled = false;
            yield this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
              while (true) {
                if (this.destroyed) {
                  yield reader.cancel();
                  canceled = true;
                  break;
                }
                const { done, value } = yield reader.read();
                if (done) {
                  break;
                }
                chunks.push(value);
                receivedLength += value.length;
                if (request.reportProgress) {
                  partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, { stream: true }) : void 0;
                  const reportProgress = () => observer.next({
                    type: HttpEventType.DownloadProgress,
                    total: contentLength ? +contentLength : void 0,
                    loaded: receivedLength,
                    partialText
                  });
                  reqZone ? reqZone.run(reportProgress) : reportProgress();
                }
              }
            }));
            if (canceled) {
              observer.complete();
              return;
            }
            const chunksAll = this.concatChunks(chunks, receivedLength);
            try {
              const contentType = response.headers.get(CONTENT_TYPE_HEADER) ?? "";
              body = this.parseBody(request, chunksAll, contentType, status);
            } catch (error) {
              observer.error(new HttpErrorResponse({
                error,
                headers: new HttpHeaders(response.headers),
                status: response.status,
                statusText: response.statusText,
                url: getResponseUrl$1(response) ?? request.urlWithParams
              }));
              return;
            }
          }
          if (status === 0) {
            status = body ? HTTP_STATUS_CODE_OK : 0;
          }
          const ok = status >= 200 && status < 300;
          const redirected = response.redirected;
          if (ok) {
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url,
              redirected
            }));
            observer.complete();
          } else {
            observer.error(new HttpErrorResponse({
              error: body,
              headers,
              status,
              statusText,
              url,
              redirected
            }));
          }
        });
      }
      parseBody(request, binContent, contentType, status) {
        switch (request.responseType) {
          case "json":
            const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
            if (text === "") {
              return null;
            }
            try {
              return JSON.parse(text);
            } catch (e) {
              if (status < 200 || status >= 300) {
                return text;
              }
              throw e;
            }
          case "text":
            return new TextDecoder().decode(binContent);
          case "blob":
            return new Blob([binContent], { type: contentType });
          case "arraybuffer":
            return binContent.buffer;
        }
      }
      createRequestInit(req) {
        const headers = {};
        let credentials;
        credentials = req.credentials;
        if (req.withCredentials) {
          (typeof ngDevMode === "undefined" || ngDevMode) && warningOptionsMessage(req);
          credentials = "include";
        }
        req.headers.forEach((name, values) => headers[name] = values.join(","));
        if (!req.headers.has(ACCEPT_HEADER)) {
          headers[ACCEPT_HEADER] = ACCEPT_HEADER_VALUE;
        }
        if (!req.headers.has(CONTENT_TYPE_HEADER)) {
          const detectedType = req.detectContentTypeHeader();
          if (detectedType !== null) {
            headers[CONTENT_TYPE_HEADER] = detectedType;
          }
        }
        return {
          body: req.serializeBody(),
          method: req.method,
          headers,
          credentials,
          keepalive: req.keepalive,
          cache: req.cache,
          priority: req.priority,
          mode: req.mode,
          redirect: req.redirect,
          referrer: req.referrer,
          integrity: req.integrity
        };
      }
      concatChunks(chunks, totalLength) {
        const chunksAll = new Uint8Array(totalLength);
        let position = 0;
        for (const chunk of chunks) {
          chunksAll.set(chunk, position);
          position += chunk.length;
        }
        return chunksAll;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FetchBackend, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FetchBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: FetchBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [] });
    FetchFactory = class {
    };
    HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
    HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
    HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
    REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", { providedIn: "root", factory: () => true });
    fetchBackendWarningDisplayed = false;
    HttpInterceptorHandler = class _HttpInterceptorHandler extends HttpHandler {
      backend;
      injector;
      chain = null;
      pendingTasks = inject(PendingTasks);
      contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
      constructor(backend, injector) {
        super();
        this.backend = backend;
        this.injector = injector;
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
          const isTestingBackend = this.backend.isTestingBackend;
          if (false) {
            fetchBackendWarningDisplayed = true;
            injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application."));
          }
        }
      }
      handle(initialRequest) {
        if (this.chain === null) {
          const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([
            ...this.injector.get(HTTP_INTERCEPTOR_FNS),
            ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])
          ]));
          this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
        }
        if (this.contributeToStability) {
          const removeTask = this.pendingTasks.add();
          return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(removeTask));
        } else {
          return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpInterceptorHandler, deps: [{ token: HttpBackend }, { token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpInterceptorHandler });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpInterceptorHandler, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: HttpBackend }, { type: EnvironmentInjector }] });
    nextRequestId = 0;
    JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
    JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
    JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
    JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
    JsonpCallbackContext = class {
    };
    JsonpClientBackend = class _JsonpClientBackend {
      callbackMap;
      document;
      /**
       * A resolved promise that can be used to schedule microtasks in the event handlers.
       */
      resolvedPromise = Promise.resolve();
      constructor(callbackMap, document2) {
        this.callbackMap = callbackMap;
        this.document = document2;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       */
      nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
      }
      /**
       * Processes a JSONP request and returns an event stream of the results.
       * @param req The request object.
       * @returns An observable of the response events.
       *
       */
      handle(req) {
        if (req.method !== "JSONP") {
          throw new RuntimeError(2810, ngDevMode && JSONP_ERR_WRONG_METHOD);
        } else if (req.responseType !== "json") {
          throw new RuntimeError(2811, ngDevMode && JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        if (req.headers.keys().length > 0) {
          throw new RuntimeError(2812, ngDevMode && JSONP_ERR_HEADERS_NOT_SUPPORTED);
        }
        return new Observable((observer) => {
          const callback = this.nextCallback();
          const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
          const node = this.document.createElement("script");
          node.src = url;
          let body = null;
          let finished = false;
          this.callbackMap[callback] = (data) => {
            delete this.callbackMap[callback];
            body = data;
            finished = true;
          };
          const cleanup = () => {
            node.removeEventListener("load", onLoad);
            node.removeEventListener("error", onError);
            node.remove();
            delete this.callbackMap[callback];
          };
          const onLoad = () => {
            this.resolvedPromise.then(() => {
              cleanup();
              if (!finished) {
                observer.error(new HttpErrorResponse({
                  url,
                  status: 0,
                  statusText: "JSONP Error",
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              }
              observer.next(new HttpResponse({
                body,
                status: HTTP_STATUS_CODE_OK,
                statusText: "OK",
                url
              }));
              observer.complete();
            });
          };
          const onError = (error) => {
            cleanup();
            observer.error(new HttpErrorResponse({
              error,
              status: 0,
              statusText: "JSONP Error",
              url
            }));
          };
          node.addEventListener("load", onLoad);
          node.addEventListener("error", onError);
          this.document.body.appendChild(node);
          observer.next({ type: HttpEventType.Sent });
          return () => {
            if (!finished) {
              this.removeListeners(node);
            }
            cleanup();
          };
        });
      }
      removeListeners(script) {
        foreignDocument ??= this.document.implementation.createHTMLDocument();
        foreignDocument.adoptNode(script);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _JsonpClientBackend, deps: [{ token: JsonpCallbackContext }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _JsonpClientBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: JsonpClientBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: JsonpCallbackContext }, { type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    JsonpInterceptor = class _JsonpInterceptor {
      injector;
      constructor(injector) {
        this.injector = injector;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param initialRequest The outgoing request object to handle.
       * @param next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @returns An observable of the event stream.
       */
      intercept(initialRequest, next) {
        return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _JsonpInterceptor, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _JsonpInterceptor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: JsonpInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    XSSI_PREFIX = /^\)\]\}',?\n/;
    X_REQUEST_URL_REGEXP = RegExp(`^${X_REQUEST_URL_HEADER}:`, "m");
    HttpXhrBackend = class _HttpXhrBackend {
      xhrFactory;
      constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param req The request object.
       * @returns An observable of the response events.
       */
      handle(req) {
        if (req.method === "JSONP") {
          throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
        }
        ngDevMode && validateXhrCompatibility(req);
        const xhrFactory = this.xhrFactory;
        const source = (
          // Note that `ɵloadImpl` is never defined in client bundles and can be
          // safely dropped whenever we're running in the browser.
          // This branching is redundant.
          // The `ngServerMode` guard also enables tree-shaking of the `from()`
          // function from the common bundle, as it's only used in server code.
          false ? from(xhrFactory.\u0275loadImpl()) : of(null)
        );
        return source.pipe(switchMap(() => {
          return new Observable((observer) => {
            const xhr = xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (req.withCredentials) {
              xhr.withCredentials = true;
            }
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
            if (!req.headers.has(ACCEPT_HEADER)) {
              xhr.setRequestHeader(ACCEPT_HEADER, ACCEPT_HEADER_VALUE);
            }
            if (!req.headers.has(CONTENT_TYPE_HEADER)) {
              const detectedType = req.detectContentTypeHeader();
              if (detectedType !== null) {
                xhr.setRequestHeader(CONTENT_TYPE_HEADER, detectedType);
              }
            }
            if (req.timeout) {
              xhr.timeout = req.timeout;
            }
            if (req.responseType) {
              const responseType = req.responseType.toLowerCase();
              xhr.responseType = responseType !== "json" ? responseType : "text";
            }
            const reqBody = req.serializeBody();
            let headerResponse = null;
            const partialFromXhr = () => {
              if (headerResponse !== null) {
                return headerResponse;
              }
              const statusText = xhr.statusText || "OK";
              const headers = new HttpHeaders(xhr.getAllResponseHeaders());
              const url = getResponseUrl(xhr) || req.url;
              headerResponse = new HttpHeaderResponse({ headers, status: xhr.status, statusText, url });
              return headerResponse;
            };
            const onLoad = () => {
              let { headers, status, statusText, url } = partialFromXhr();
              let body = null;
              if (status !== HTTP_STATUS_CODE_NO_CONTENT) {
                body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
              }
              if (status === 0) {
                status = !!body ? HTTP_STATUS_CODE_OK : 0;
              }
              let ok = status >= 200 && status < 300;
              if (req.responseType === "json" && typeof body === "string") {
                const originalBody = body;
                body = body.replace(XSSI_PREFIX, "");
                try {
                  body = body !== "" ? JSON.parse(body) : null;
                } catch (error) {
                  body = originalBody;
                  if (ok) {
                    ok = false;
                    body = { error, text: body };
                  }
                }
              }
              if (ok) {
                observer.next(new HttpResponse({
                  body,
                  headers,
                  status,
                  statusText,
                  url: url || void 0
                }));
                observer.complete();
              } else {
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers,
                  status,
                  statusText,
                  url: url || void 0
                }));
              }
            };
            const onError = (error) => {
              const { url } = partialFromXhr();
              const res = new HttpErrorResponse({
                error,
                status: xhr.status || 0,
                statusText: xhr.statusText || "Unknown Error",
                url: url || void 0
              });
              observer.error(res);
            };
            let onTimeout = onError;
            if (req.timeout) {
              onTimeout = (_) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                  error: new DOMException("Request timed out", "TimeoutError"),
                  status: xhr.status || 0,
                  statusText: xhr.statusText || "Request timeout",
                  url: url || void 0
                });
                observer.error(res);
              };
            }
            let sentHeaders = false;
            const onDownProgress = (event) => {
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              }
              let progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              };
              if (event.lengthComputable) {
                progressEvent.total = event.total;
              }
              if (req.responseType === "text" && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              }
              observer.next(progressEvent);
            };
            const onUpProgress = (event) => {
              let progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              };
              if (event.lengthComputable) {
                progress.total = event.total;
              }
              observer.next(progress);
            };
            xhr.addEventListener("load", onLoad);
            xhr.addEventListener("error", onError);
            xhr.addEventListener("timeout", onTimeout);
            xhr.addEventListener("abort", onError);
            if (req.reportProgress) {
              xhr.addEventListener("progress", onDownProgress);
              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener("progress", onUpProgress);
              }
            }
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            return () => {
              xhr.removeEventListener("error", onError);
              xhr.removeEventListener("abort", onError);
              xhr.removeEventListener("load", onLoad);
              xhr.removeEventListener("timeout", onTimeout);
              if (req.reportProgress) {
                xhr.removeEventListener("progress", onDownProgress);
                if (reqBody !== null && xhr.upload) {
                  xhr.upload.removeEventListener("progress", onUpProgress);
                }
              }
              if (xhr.readyState !== xhr.DONE) {
                xhr.abort();
              }
            };
          });
        }));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpXhrBackend, deps: [{ token: XhrFactory }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpXhrBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpXhrBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: XhrFactory }] });
    XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
    XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
    XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
      providedIn: "root",
      factory: () => XSRF_DEFAULT_COOKIE_NAME
    });
    XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
    XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
      providedIn: "root",
      factory: () => XSRF_DEFAULT_HEADER_NAME
    });
    HttpXsrfTokenExtractor = class {
    };
    HttpXsrfCookieExtractor = class _HttpXsrfCookieExtractor {
      doc;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      /**
       * @internal for testing
       */
      parseCount = 0;
      constructor(doc, cookieName) {
        this.doc = doc;
        this.cookieName = cookieName;
      }
      getToken() {
        if (false) {
          return null;
        }
        const cookieString = this.doc.cookie || "";
        if (cookieString !== this.lastCookieString) {
          this.parseCount++;
          this.lastToken = parseCookieValue(cookieString, this.cookieName);
          this.lastCookieString = cookieString;
        }
        return this.lastToken;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpXsrfCookieExtractor, deps: [{ token: DOCUMENT }, { token: XSRF_COOKIE_NAME }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpXsrfCookieExtractor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpXsrfCookieExtractor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [XSRF_COOKIE_NAME]
    }] }] });
    HttpXsrfInterceptor = class _HttpXsrfInterceptor {
      injector;
      constructor(injector) {
        this.injector = injector;
      }
      intercept(initialRequest, next) {
        return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpXsrfInterceptor, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpXsrfInterceptor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpXsrfInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    (function(HttpFeatureKind2) {
      HttpFeatureKind2[HttpFeatureKind2["Interceptors"] = 0] = "Interceptors";
      HttpFeatureKind2[HttpFeatureKind2["LegacyInterceptors"] = 1] = "LegacyInterceptors";
      HttpFeatureKind2[HttpFeatureKind2["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
      HttpFeatureKind2[HttpFeatureKind2["NoXsrfProtection"] = 3] = "NoXsrfProtection";
      HttpFeatureKind2[HttpFeatureKind2["JsonpSupport"] = 4] = "JsonpSupport";
      HttpFeatureKind2[HttpFeatureKind2["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
      HttpFeatureKind2[HttpFeatureKind2["Fetch"] = 6] = "Fetch";
    })(HttpFeatureKind || (HttpFeatureKind = {}));
    LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
    HttpClientXsrfModule = class _HttpClientXsrfModule {
      /**
       * Disable the default XSRF protection.
       */
      static disable() {
        return {
          ngModule: _HttpClientXsrfModule,
          providers: [withNoXsrfProtection().\u0275providers]
        };
      }
      /**
       * Configure XSRF protection.
       * @param options An object that can specify either or both
       * cookie name or header name.
       * - Cookie name default is `XSRF-TOKEN`.
       * - Header name default is `X-XSRF-TOKEN`.
       *
       */
      static withOptions(options = {}) {
        return {
          ngModule: _HttpClientXsrfModule,
          providers: withXsrfConfiguration(options).\u0275providers
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientXsrfModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientXsrfModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientXsrfModule, providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        withXsrfConfiguration({
          cookieName: XSRF_DEFAULT_COOKIE_NAME,
          headerName: XSRF_DEFAULT_HEADER_NAME
        }).\u0275providers,
        { provide: XSRF_ENABLED, useValue: true }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpClientXsrfModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          HttpXsrfInterceptor,
          { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
          { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
          withXsrfConfiguration({
            cookieName: XSRF_DEFAULT_COOKIE_NAME,
            headerName: XSRF_DEFAULT_HEADER_NAME
          }).\u0275providers,
          { provide: XSRF_ENABLED, useValue: true }
        ]
      }]
    }] });
    HttpClientModule = class _HttpClientModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientModule, providers: [provideHttpClient(withInterceptorsFromDi())] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpClientModule, decorators: [{
      type: NgModule,
      args: [{
        /**
         * Configures the dependency injector where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [provideHttpClient(withInterceptorsFromDi())]
      }]
    }] });
    HttpClientJsonpModule = class _HttpClientJsonpModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientJsonpModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientJsonpModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HttpClientJsonpModule, providers: [withJsonpSupport().\u0275providers] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HttpClientJsonpModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [withJsonpSupport().\u0275providers]
      }]
    }] });
  }
});

// node_modules/@angular/common/fesm2022/http.mjs
function makeHttpResourceFn(responseType) {
  return function httpResource2(request, options) {
    if (ngDevMode && !options?.injector) {
      assertInInjectionContext(httpResource2);
    }
    const injector = options?.injector ?? inject(Injector);
    return new HttpResourceImpl(injector, () => normalizeRequest(request, responseType), options?.defaultValue, options?.parse, options?.equal);
  };
}
function normalizeRequest(request, responseType) {
  let unwrappedRequest = typeof request === "function" ? request() : request;
  if (unwrappedRequest === void 0) {
    return void 0;
  } else if (typeof unwrappedRequest === "string") {
    unwrappedRequest = { url: unwrappedRequest };
  }
  const headers = unwrappedRequest.headers instanceof HttpHeaders ? unwrappedRequest.headers : new HttpHeaders(unwrappedRequest.headers);
  const params = unwrappedRequest.params instanceof HttpParams ? unwrappedRequest.params : new HttpParams({ fromObject: unwrappedRequest.params });
  return new HttpRequest(unwrappedRequest.method ?? "GET", unwrappedRequest.url, unwrappedRequest.body ?? null, {
    headers,
    params,
    reportProgress: unwrappedRequest.reportProgress,
    withCredentials: unwrappedRequest.withCredentials,
    keepalive: unwrappedRequest.keepalive,
    cache: unwrappedRequest.cache,
    priority: unwrappedRequest.priority,
    mode: unwrappedRequest.mode,
    redirect: unwrappedRequest.redirect,
    responseType,
    context: unwrappedRequest.context,
    transferCache: unwrappedRequest.transferCache,
    credentials: unwrappedRequest.credentials,
    referrer: unwrappedRequest.referrer,
    integrity: unwrappedRequest.integrity,
    timeout: unwrappedRequest.timeout
  });
}
var httpResource, HttpResourceImpl, HTTP_TRANSFER_CACHE_ORIGIN_MAP, CACHE_OPTIONS;
var init_http = __esm({
  "node_modules/@angular/common/fesm2022/http.mjs"() {
    "use strict";
    init_module();
    init_core();
    httpResource = (() => {
      const jsonFn = makeHttpResourceFn("json");
      jsonFn.arrayBuffer = makeHttpResourceFn("arraybuffer");
      jsonFn.blob = makeHttpResourceFn("blob");
      jsonFn.text = makeHttpResourceFn("text");
      return jsonFn;
    })();
    HttpResourceImpl = class extends ResourceImpl {
      client;
      _headers = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _progress = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _statusCode = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      headers = computed(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0, ...ngDevMode ? [{ debugName: "headers" }] : []);
      progress = this._progress.asReadonly();
      statusCode = this._statusCode.asReadonly();
      constructor(injector, request, defaultValue, parse, equal) {
        super(request, ({ params: request2, abortSignal }) => {
          let sub;
          const onAbort = () => sub.unsubscribe();
          abortSignal.addEventListener("abort", onAbort);
          const stream = signal({ value: void 0 }, ...ngDevMode ? [{ debugName: "stream" }] : []);
          let resolve;
          const promise = new Promise((r) => resolve = r);
          const send = (value) => {
            stream.set(value);
            resolve?.(stream);
            resolve = void 0;
          };
          sub = this.client.request(request2).subscribe({
            next: (event) => {
              switch (event.type) {
                case HttpEventType.Response:
                  this._headers.set(event.headers);
                  this._statusCode.set(event.status);
                  try {
                    send({ value: parse ? parse(event.body) : event.body });
                  } catch (error) {
                    send({ error: encapsulateResourceError(error) });
                  }
                  break;
                case HttpEventType.DownloadProgress:
                  this._progress.set(event);
                  break;
              }
            },
            error: (error) => {
              if (error instanceof HttpErrorResponse) {
                this._headers.set(error.headers);
                this._statusCode.set(error.status);
              }
              send({ error });
              abortSignal.removeEventListener("abort", onAbort);
            },
            complete: () => {
              if (resolve) {
                send({
                  error: new RuntimeError(991, ngDevMode && "Resource completed before producing a value")
                });
              }
              abortSignal.removeEventListener("abort", onAbort);
            }
          });
          return promise;
        }, defaultValue, equal, injector);
        this.client = injector.get(HttpClient);
      }
      set(value) {
        super.set(value);
        this._headers.set(void 0);
        this._progress.set(void 0);
        this._statusCode.set(void 0);
      }
    };
    HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
    CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
  }
});

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var Meta, META_KEYS_MAP, Title, EVENT_NAMES, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerGesturesPlugin, HammerModule, DomSanitizer, DomSanitizerImpl, HydrationFeatureKind, VERSION;
var init_platform_browser = __esm({
  "node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dom_renderer();
    Meta = class _Meta {
      _doc;
      _dom;
      constructor(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
      }
      /**
       * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * If an existing element is found, it is returned and is not modified in any way.
       * @param tag The definition of a `<meta>` element to match or create.
       * @param forceCreation True to create a new element without checking whether one already exists.
       * @returns The existing element with the same attributes and values if found,
       * the new element if no match is found, or `null` if the tag parameter is not defined.
       */
      addTag(tag, forceCreation = false) {
        if (!tag)
          return null;
        return this._getOrCreateElement(tag, forceCreation);
      }
      /**
       * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * @param tags An array of tag definitions to match or create.
       * @param forceCreation True to create new elements without checking whether they already exist.
       * @returns The matching elements if found, or the new elements.
       */
      addTags(tags, forceCreation = false) {
        if (!tags)
          return [];
        return tags.reduce((result, tag) => {
          if (tag) {
            result.push(this._getOrCreateElement(tag, forceCreation));
          }
          return result;
        }, []);
      }
      /**
       * Retrieves a `<meta>` tag element in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching element, if any.
       */
      getTag(attrSelector) {
        if (!attrSelector)
          return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
      }
      /**
       * Retrieves a set of `<meta>` tag elements in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching elements, if any.
       */
      getTags(attrSelector) {
        if (!attrSelector)
          return [];
        const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
      }
      /**
       * Modifies an existing `<meta>` tag element in the current HTML document.
       * @param tag The tag description with which to replace the existing tag content.
       * @param selector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       * If not supplied, matches a tag with the same `name` or `property` attribute value as the
       * replacement tag.
       * @return The modified element.
       */
      updateTag(tag, selector) {
        if (!tag)
          return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
          return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param attrSelector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       */
      removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param meta The tag definition to match against to identify an existing tag.
       */
      removeTagElement(meta) {
        if (meta) {
          this._dom.remove(meta);
        }
      }
      _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
          const selector = this._parseSelector(meta);
          const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
          if (elem !== void 0)
            return elem;
        }
        const element = this._dom.createElement("meta");
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName("head")[0];
        head.appendChild(element);
        return element;
      }
      _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
      }
      _parseSelector(tag) {
        const attr = tag.name ? "name" : "property";
        return `${attr}="${tag[attr]}"`;
      }
      _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
      }
      _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Meta, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Meta, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Meta, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    META_KEYS_MAP = {
      httpEquiv: "http-equiv"
    };
    Title = class _Title {
      _doc;
      constructor(_doc) {
        this._doc = _doc;
      }
      /**
       * Get the title of the current HTML document.
       */
      getTitle() {
        return this._doc.title;
      }
      /**
       * Set the title of the current HTML document.
       * @param newTitle
       */
      setTitle(newTitle) {
        this._doc.title = newTitle || "";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Title, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Title, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Title, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    EVENT_NAMES = {
      // pan
      "pan": true,
      "panstart": true,
      "panmove": true,
      "panend": true,
      "pancancel": true,
      "panleft": true,
      "panright": true,
      "panup": true,
      "pandown": true,
      // pinch
      "pinch": true,
      "pinchstart": true,
      "pinchmove": true,
      "pinchend": true,
      "pinchcancel": true,
      "pinchin": true,
      "pinchout": true,
      // press
      "press": true,
      "pressup": true,
      // rotate
      "rotate": true,
      "rotatestart": true,
      "rotatemove": true,
      "rotateend": true,
      "rotatecancel": true,
      // swipe
      "swipe": true,
      "swipeleft": true,
      "swiperight": true,
      "swipeup": true,
      "swipedown": true,
      // tap
      "tap": true,
      "doubletap": true
    };
    HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
    HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
    HammerGestureConfig = class _HammerGestureConfig {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      events = [];
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      overrides = {};
      /**
       * Properties whose default values can be overridden for a given event.
       * Different sets of properties apply to different events.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      options;
      /**
       * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
       * and attaches it to a given HTML element.
       * @param element The element that will recognize gestures.
       * @returns A HammerJS event-manager object.
       */
      buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get("pinch").set({ enable: true });
        mc.get("rotate").set({ enable: true });
        for (const eventName in this.overrides) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerGestureConfig, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerGestureConfig });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HammerGestureConfig, decorators: [{
      type: Injectable
    }] });
    HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
      _config;
      _injector;
      loader;
      _loaderPromise = null;
      constructor(doc, _config, _injector, loader) {
        super(doc);
        this._config = _config;
        this._injector = _injector;
        this.loader = loader;
      }
      supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
          return false;
        }
        if (!window.Hammer && !this.loader) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
          }
          return false;
        }
        return true;
      }
      addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        if (!window.Hammer && this.loader) {
          this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
          let cancelRegistration = false;
          let deregister = () => {
            cancelRegistration = true;
          };
          zone.runOutsideAngular(() => this._loaderPromise.then(() => {
            if (!window.Hammer) {
              if (typeof ngDevMode === "undefined" || ngDevMode) {
                const _console = this._injector.get(Console);
                _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
              }
              deregister = () => {
              };
              return;
            }
            if (!cancelRegistration) {
              deregister = this.addEventListener(element, eventName, handler);
            }
          }).catch(() => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              const _console = this._injector.get(Console);
              _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
            }
            deregister = () => {
            };
          }));
          return () => {
            deregister();
          };
        }
        return zone.runOutsideAngular(() => {
          const mc = this._config.buildHammer(element);
          const callback = function(eventObj) {
            zone.runGuarded(function() {
              handler(eventObj);
            });
          };
          mc.on(eventName, callback);
          return () => {
            mc.off(eventName, callback);
            if (typeof mc.destroy === "function") {
              mc.destroy();
            }
          };
        });
      }
      isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerGesturesPlugin, deps: [{ token: DOCUMENT }, { token: HAMMER_GESTURE_CONFIG }, { token: Injector }, { token: HAMMER_LOADER, optional: true }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerGesturesPlugin });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HammerGesturesPlugin, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: HammerGestureConfig, decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }] }, { type: Injector }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }] }] });
    HammerModule = class _HammerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HammerModule, providers: [
        {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: HammerGesturesPlugin,
          multi: true,
          deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HammerModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
          },
          { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
        ]
      }]
    }] });
    DomSanitizer = class _DomSanitizer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DomSanitizer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DomSanitizer, providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: DomSanitizer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) }]
    }] });
    DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
      _doc;
      constructor(_doc) {
        super();
        this._doc = _doc;
      }
      sanitize(ctx, value) {
        if (value == null)
          return null;
        switch (ctx) {
          case SecurityContext.NONE:
            return value;
          case SecurityContext.HTML:
            if (allowSanitizationBypassAndThrow(
              value,
              "HTML"
              /* BypassType.Html */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeHtml(this._doc, String(value)).toString();
          case SecurityContext.STYLE:
            if (allowSanitizationBypassAndThrow(
              value,
              "Style"
              /* BypassType.Style */
            )) {
              return unwrapSafeValue(value);
            }
            return value;
          case SecurityContext.SCRIPT:
            if (allowSanitizationBypassAndThrow(
              value,
              "Script"
              /* BypassType.Script */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
          case SecurityContext.URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "URL"
              /* BypassType.Url */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeUrl(String(value));
          case SecurityContext.RESOURCE_URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "ResourceURL"
              /* BypassType.ResourceUrl */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
          default:
            throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
        }
      }
      bypassSecurityTrustHtml(value) {
        return bypassSanitizationTrustHtml(value);
      }
      bypassSecurityTrustStyle(value) {
        return bypassSanitizationTrustStyle(value);
      }
      bypassSecurityTrustScript(value) {
        return bypassSanitizationTrustScript(value);
      }
      bypassSecurityTrustUrl(value) {
        return bypassSanitizationTrustUrl(value);
      }
      bypassSecurityTrustResourceUrl(value) {
        return bypassSanitizationTrustResourceUrl(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DomSanitizerImpl, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DomSanitizerImpl, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: DomSanitizerImpl, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    (function(HydrationFeatureKind2) {
      HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
      HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
      HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
      HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
      HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
    })(HydrationFeatureKind || (HydrationFeatureKind = {}));
    VERSION = new Version("20.2.1");
  }
});

// node_modules/@angular/material/fesm2022/icon-registry.mjs
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.");
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document2) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document2, errorHandler);
}
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ":" + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
var policy, SvgIconConfig, MatIconRegistry, ICON_REGISTRY_PROVIDER;
var init_icon_registry = __esm({
  "node_modules/@angular/material/fesm2022/icon-registry.mjs"() {
    "use strict";
    init_http();
    init_http();
    init_core();
    init_core();
    init_platform_browser();
    init_platform_browser();
    init_esm();
    init_operators();
    SvgIconConfig = class {
      url;
      svgText;
      options;
      svgElement;
      constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
      }
    };
    MatIconRegistry = class _MatIconRegistry {
      _httpClient;
      _sanitizer;
      _errorHandler;
      _document;
      /**
       * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
       */
      _svgIconConfigs = /* @__PURE__ */ new Map();
      /**
       * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
       * Multiple icon sets can be registered under the same namespace.
       */
      _iconSetConfigs = /* @__PURE__ */ new Map();
      /** Cache for icons loaded by direct URLs. */
      _cachedIconsByUrl = /* @__PURE__ */ new Map();
      /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
      _inProgressUrlFetches = /* @__PURE__ */ new Map();
      /** Map from font identifiers to their CSS class names. Used for icon fonts. */
      _fontCssClassesByAlias = /* @__PURE__ */ new Map();
      /** Registered icon resolver functions. */
      _resolvers = [];
      /**
       * The CSS classes to apply when an `<mat-icon>` component has no icon name, url, or font
       * specified. The default 'material-icons' value assumes that the material icon font has been
       * loaded as described at https://google.github.io/material-design-icons/#icon-font-for-the-web
       */
      _defaultFontSetClass = ["material-icons", "mat-ligature-font"];
      constructor(_httpClient, _sanitizer, document2, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        this._document = document2;
      }
      /**
       * Registers an icon by URL in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */
      addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace("", iconName, url, options);
      }
      /**
       * Registers an icon using an HTML string in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */
      addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace("", iconName, literal, options);
      }
      /**
       * Registers an icon by URL in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */
      addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon resolver function with the registry. The function will be invoked with the
       * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
       * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
       * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
       * will be invoked in the order in which they have been registered.
       * @param resolver Resolver function to be registered.
       */
      addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
      }
      /**
       * Registers an icon using an HTML string in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */
      addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        const trustedLiteral = trustedHTMLFromString(cleanLiteral);
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig("", trustedLiteral, options));
      }
      /**
       * Registers an icon set by URL in the default namespace.
       * @param url
       */
      addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace("", url, options);
      }
      /**
       * Registers an icon set using an HTML string in the default namespace.
       * @param literal SVG source of the icon set.
       */
      addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace("", literal, options);
      }
      /**
       * Registers an icon set by URL in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param url
       */
      addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon set using an HTML string in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param literal SVG source of the icon set.
       */
      addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        const trustedLiteral = trustedHTMLFromString(cleanLiteral);
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig("", trustedLiteral, options));
      }
      /**
       * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
       * component with the alias as the fontSet input will cause the class name to be applied
       * to the `<mat-icon>` element.
       *
       * If the registered font is a ligature font, then don't forget to also include the special
       * class `mat-ligature-font` to allow the usage via attribute. So register like this:
       *
       * ```ts
       * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
       * ```
       *
       * And use like this:
       *
       * ```html
       * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
       * ```
       *
       * @param alias Alias for the font.
       * @param classNames Class names override to be used instead of the alias.
       */
      registerFontClassAlias(alias, classNames = alias) {
        this._fontCssClassesByAlias.set(alias, classNames);
        return this;
      }
      /**
       * Returns the CSS class name associated with the alias by a previous call to
       * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
       */
      classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
      }
      /**
       * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */
      setDefaultFontSetClass(...classNames) {
        this._defaultFontSetClass = classNames;
        return this;
      }
      /**
       * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
       * The response from the URL may be cached so this will not always cause an HTTP request, but
       * the produced element will always be a new copy of the originally fetched icon. (That is,
       * it will not contain any modifications made to elements previously returned).
       *
       * @param safeUrl URL from which to fetch the SVG icon.
       */
      getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
          return of(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap((svg) => this._cachedIconsByUrl.set(url, svg)), map((svg) => cloneSvg(svg)));
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
       * and namespace. The icon must have been previously registered with addIcon or addIconSet;
       * if not, the Observable will throw an error.
       *
       * @param name Name of the icon to be retrieved.
       * @param namespace Namespace in which to look for the icon.
       */
      getNamedSvgIcon(name, namespace = "") {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        if (config) {
          return this._getSvgFromConfig(config);
        }
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
          this._svgIconConfigs.set(key, config);
          return this._getSvgFromConfig(config);
        }
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
          return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return throwError(getMatIconNameNotFoundError(key));
      }
      ngOnDestroy() {
        this._resolvers = [];
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
      }
      /**
       * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
       */
      _getSvgFromConfig(config) {
        if (config.svgText) {
          return of(cloneSvg(this._svgElementFromConfig(config)));
        } else {
          return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
        }
      }
      /**
       * Attempts to find an icon with the specified name in any of the SVG icon sets.
       * First searches the available cached icons for a nested element with a matching name, and
       * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
       * that have not been cached, and searches again after all fetches are completed.
       * The returned Observable produces the SVG element if possible, and throws
       * an error if no icon with the specified name can be found.
       */
      _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
          return of(namedIcon);
        }
        const iconSetFetchRequests = iconSetConfigs.filter((iconSetConfig) => !iconSetConfig.svgText).map((iconSetConfig) => {
          return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError((err) => {
            const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
            const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
            this._errorHandler.handleError(new Error(errorMessage));
            return of(null);
          }));
        });
        return forkJoin(iconSetFetchRequests).pipe(map(() => {
          const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
          if (!foundIcon) {
            throw getMatIconNameNotFoundError(name);
          }
          return foundIcon;
        }));
      }
      /**
       * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */
      _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
          const config = iconSetConfigs[i];
          if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
            const svg = this._svgElementFromConfig(config);
            const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
            if (foundIcon) {
              return foundIcon;
            }
          }
        }
        return null;
      }
      /**
       * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
       * from it.
       */
      _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText), map(() => this._svgElementFromConfig(config)));
      }
      /**
       * Loads the content of the icon set URL specified in the
       * SvgIconConfig and attaches it to the config.
       */
      _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
          return of(null);
        }
        return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText));
      }
      /**
       * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */
      _extractSvgIconFromSet(iconSet, iconName, options) {
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
          return null;
        }
        const iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute("id");
        if (iconElement.nodeName.toLowerCase() === "svg") {
          return this._setSvgAttributes(iconElement, options);
        }
        if (iconElement.nodeName.toLowerCase() === "symbol") {
          return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
      }
      /**
       * Creates a DOM element from the given SVG string.
       */
      _svgElementFromString(str) {
        const div = this._document.createElement("DIV");
        div.innerHTML = str;
        const svg = div.querySelector("svg");
        if (!svg) {
          throw Error("<svg> tag not found");
        }
        return svg;
      }
      /**
       * Converts an element into an SVG node by cloning all of its children.
       */
      _toSvgElement(element) {
        const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const { name, value } = attributes[i];
          if (name !== "id") {
            svg.setAttribute(name, value);
          }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
          if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
            svg.appendChild(element.childNodes[i].cloneNode(true));
          }
        }
        return svg;
      }
      /**
       * Sets the default attributes for an SVG element to be used as an icon.
       */
      _setSvgAttributes(svg, options) {
        svg.setAttribute("fit", "");
        svg.setAttribute("height", "100%");
        svg.setAttribute("width", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("focusable", "false");
        if (options && options.viewBox) {
          svg.setAttribute("viewBox", options.viewBox);
        }
        return svg;
      }
      /**
       * Returns an Observable which produces the string contents of the given icon. Results may be
       * cached, so future calls with the same URL may not cause another HTTP request.
       */
      _fetchIcon(iconConfig) {
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = options?.withCredentials ?? false;
        if (!this._httpClient) {
          throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
          throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
          return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: "text", withCredentials }).pipe(map((svg) => {
          return trustedHTMLFromString(svg);
        }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
        this._inProgressUrlFetches.set(url, req);
        return req;
      }
      /**
       * Registers an icon config by name in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param iconName Name under which to register the config.
       * @param config Config to be registered.
       */
      _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
      }
      /**
       * Registers an icon set config in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param config Config to be registered.
       */
      _addSvgIconSetConfig(namespace, config) {
        const configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
          configNamespace.push(config);
        } else {
          this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
      }
      /** Parses a config's text into an SVG element. */
      _svgElementFromConfig(config) {
        if (!config.svgElement) {
          const svg = this._svgElementFromString(config.svgText);
          this._setSvgAttributes(svg, config.options);
          config.svgElement = svg;
        }
        return config.svgElement;
      }
      /** Tries to create an icon config through the registered resolver functions. */
      _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
          const result = this._resolvers[i](name, namespace);
          if (result) {
            return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
          }
        }
        return void 0;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatIconRegistry, deps: [{ token: HttpClient, optional: true }, { token: DomSanitizer }, { token: DOCUMENT, optional: true }, { token: ErrorHandler }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatIconRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatIconRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: HttpClient, decorators: [{
      type: Optional
    }] }, { type: DomSanitizer }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: ErrorHandler }] });
    ICON_REGISTRY_PROVIDER = {
      // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
      provide: MatIconRegistry,
      deps: [
        [new Optional(), new SkipSelf(), MatIconRegistry],
        [new Optional(), HttpClient],
        DomSanitizer,
        ErrorHandler,
        [new Optional(), DOCUMENT]
      ],
      useFactory: ICON_REGISTRY_PROVIDER_FACTORY
    };
  }
});

// node_modules/@angular/cdk/fesm2022/fake-event-detection.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var init_fake_event_detection = __esm({
  "node_modules/@angular/cdk/fesm2022/fake-event-detection.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes2.mjs
var BACKSPACE, TAB, ENTER, SHIFT, CONTROL, ALT, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, DELETE, ZERO, NINE, A, Z, META, MAC_META;
var init_keycodes2 = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes2.mjs"() {
    "use strict";
    BACKSPACE = 8;
    TAB = 9;
    ENTER = 13;
    SHIFT = 16;
    CONTROL = 17;
    ALT = 18;
    ESCAPE = 27;
    SPACE = 32;
    PAGE_UP = 33;
    PAGE_DOWN = 34;
    END = 35;
    HOME = 36;
    LEFT_ARROW = 37;
    UP_ARROW = 38;
    RIGHT_ARROW = 39;
    DOWN_ARROW = 40;
    DELETE = 46;
    ZERO = 48;
    NINE = 57;
    A = 65;
    Z = 90;
    META = 91;
    MAC_META = 224;
  }
});

// node_modules/@angular/cdk/fesm2022/shadow-dom.mjs
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
var shadowDomIsSupported;
var init_shadow_dom = __esm({
  "node_modules/@angular/cdk/fesm2022/shadow-dom.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform2.mjs
var hasV8BreakIterator, Platform;
var init_platform2 = __esm({
  "node_modules/@angular/cdk/fesm2022/platform2.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    try {
      hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
    } catch {
      hasV8BreakIterator = false;
    }
    Platform = class _Platform {
      _platformId = inject(PLATFORM_ID);
      // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention
      /** Whether the Angular application is being rendered in the browser. */
      isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
      /** Whether the current browser is Microsoft Edge. */
      EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */
      TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
      /** Whether the current rendering engine is Blink. */
      BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.
      /** Whether the current rendering engine is WebKit. */
      WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */
      IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.
      /** Whether the current browser is Firefox. */
      FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.
      ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.
      /** Whether the current browser is Safari. */
      SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _Platform, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _Platform, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: Platform, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/passive-listeners.mjs
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var supportsPassiveEvents;
var init_passive_listeners = __esm({
  "node_modules/@angular/cdk/fesm2022/passive-listeners.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/element.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
var init_element = __esm({
  "node_modules/@angular/cdk/fesm2022/element.mjs"() {
    "use strict";
    init_core();
  }
});

// node_modules/@angular/cdk/fesm2022/focus-monitor.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, TOUCH_BUFFER_MS, modalityEventListenerOptions, InputModalityDetector, FocusMonitorDetectionMode, FOCUS_MONITOR_DEFAULT_OPTIONS, captureEventListenerOptions, FocusMonitor, CdkMonitorFocus;
var init_focus_monitor = __esm({
  "node_modules/@angular/cdk/fesm2022/focus-monitor.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_fake_event_detection();
    init_keycodes2();
    init_shadow_dom();
    init_platform2();
    init_passive_listeners();
    init_element();
    INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
    INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
      ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
    };
    TOUCH_BUFFER_MS = 650;
    modalityEventListenerOptions = {
      passive: true,
      capture: true
    };
    InputModalityDetector = class _InputModalityDetector {
      _platform = inject(Platform);
      _listenerCleanups;
      /** Emits whenever an input modality is detected. */
      modalityDetected;
      /** Emits when the input modality changes. */
      modalityChanged;
      /** The most recently detected input modality. */
      get mostRecentModality() {
        return this._modality.value;
      }
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */
      _mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
      _modality = new BehaviorSubject(null);
      /** Options for this InputModalityDetector. */
      _options;
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */
      _lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */
      _onKeydown = (event) => {
        if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
          return;
        }
        this._modality.next("keyboard");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onMousedown = (event) => {
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        }
        this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onTouchstart = (event) => {
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next("keyboard");
          return;
        }
        this._lastTouchMs = Date.now();
        this._modality.next("touch");
        this._mostRecentTarget = _getEventTarget(event);
      };
      constructor() {
        const ngZone = inject(NgZone);
        const document2 = inject(DOCUMENT);
        const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, { optional: true });
        this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
        this.modalityDetected = this._modality.pipe(skip(1));
        this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
        if (this._platform.isBrowser) {
          const renderer = inject(RendererFactory2).createRenderer(null, null);
          this._listenerCleanups = ngZone.runOutsideAngular(() => {
            return [
              renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions),
              renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions),
              renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)
            ];
          });
        }
      }
      ngOnDestroy() {
        this._modality.complete();
        this._listenerCleanups?.forEach((cleanup) => cleanup());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _InputModalityDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _InputModalityDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: InputModalityDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    (function(FocusMonitorDetectionMode2) {
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
    })(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
    FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
    captureEventListenerOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    FocusMonitor = class _FocusMonitor {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _inputModalityDetector = inject(InputModalityDetector);
      /** The focus origin that the next focus event is a result of. */
      _origin = null;
      /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
      _lastFocusOrigin;
      /** Whether the window has just been focused. */
      _windowFocused = false;
      /** The timeout id of the window focus timeout. */
      _windowFocusTimeoutId;
      /** The timeout id of the origin clearing timeout. */
      _originTimeoutId;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */
      _originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */
      _elementInfo = /* @__PURE__ */ new Map();
      /** The number of elements currently being monitored. */
      _monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */
      _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
      /**
       * The specified detection mode, used for attributing the origin of a focus
       * event.
       */
      _detectionMode;
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _windowFocusListener = () => {
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
      };
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      /** Subject for stopping our InputModalityDetector subscription. */
      _stopInputModalityDetector = new Subject();
      constructor() {
        const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
          optional: true
        });
        this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
      }
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _rootNodeFocusAndBlurListener = (event) => {
        const target = _getEventTarget(event);
        for (let element = target; element; element = element.parentElement) {
          if (event.type === "focus") {
            this._onFocus(event, element);
          } else {
            this._onBlur(event, element);
          }
        }
      };
      monitor(element, checkChildren = false) {
        const nativeElement = coerceElement(element);
        if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
          return of();
        }
        const rootNode = _getShadowRoot(nativeElement) || this._document;
        const cachedInfo = this._elementInfo.get(nativeElement);
        if (cachedInfo) {
          if (checkChildren) {
            cachedInfo.checkChildren = true;
          }
          return cachedInfo.subject;
        }
        const info = {
          checkChildren,
          subject: new Subject(),
          rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject;
      }
      stopMonitoring(element) {
        const nativeElement = coerceElement(element);
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
          elementInfo.subject.complete();
          this._setClasses(nativeElement);
          this._elementInfo.delete(nativeElement);
          this._removeGlobalListeners(elementInfo);
        }
      }
      focusVia(element, origin, options) {
        const nativeElement = coerceElement(element);
        const focusedElement = this._document.activeElement;
        if (nativeElement === focusedElement) {
          this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
        } else {
          this._setOrigin(origin);
          if (typeof nativeElement.focus === "function") {
            nativeElement.focus(options);
          }
        }
      }
      ngOnDestroy() {
        this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      _getFocusOrigin(focusEventTarget) {
        if (this._origin) {
          if (this._originFromTouchInteraction) {
            return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
          } else {
            return this._origin;
          }
        }
        if (this._windowFocused && this._lastFocusOrigin) {
          return this._lastFocusOrigin;
        }
        if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
          return "mouse";
        }
        return "program";
      }
      /**
       * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
       * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
       * handle a focus event following a touch interaction, we need to determine whether (1) the focus
       * event was directly caused by the touch interaction or (2) the focus event was caused by a
       * subsequent programmatic focus call triggered by the touch interaction.
       * @param focusEventTarget The target of the focus event under examination.
       */
      _shouldBeAttributedToTouch(focusEventTarget) {
        return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
      }
      /**
       * Sets the focus classes on the element based on the given focus origin.
       * @param element The element to update the classes on.
       * @param origin The focus origin.
       */
      _setClasses(element, origin) {
        element.classList.toggle("cdk-focused", !!origin);
        element.classList.toggle("cdk-touch-focused", origin === "touch");
        element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
        element.classList.toggle("cdk-mouse-focused", origin === "mouse");
        element.classList.toggle("cdk-program-focused", origin === "program");
      }
      /**
       * Updates the focus origin. If we're using immediate detection mode, we schedule an async
       * function to clear the origin at the end of a timeout. The duration of the timeout depends on
       * the origin being set.
       * @param origin The origin to set.
       * @param isFromInteraction Whether we are setting the origin from an interaction event.
       */
      _setOrigin(origin, isFromInteraction = false) {
        this._ngZone.runOutsideAngular(() => {
          this._origin = origin;
          this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
          if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
            clearTimeout(this._originTimeoutId);
            const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
            this._originTimeoutId = setTimeout(() => this._origin = null, ms);
          }
        });
      }
      /**
       * Handles focus events on a registered element.
       * @param event The focus event.
       * @param element The monitored element.
       */
      _onFocus(event, element) {
        const elementInfo = this._elementInfo.get(element);
        const focusEventTarget = _getEventTarget(event);
        if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
          return;
        }
        this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
      }
      /**
       * Handles blur events on a registered element.
       * @param event The blur event.
       * @param element The monitored element.
       */
      _onBlur(event, element) {
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
          return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo, null);
      }
      _emitOrigin(info, origin) {
        if (info.subject.observers.length) {
          this._ngZone.run(() => info.subject.next(origin));
        }
      }
      _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
          return;
        }
        const rootNode = elementInfo.rootNode;
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
          this._ngZone.runOutsideAngular(() => {
            rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          });
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        if (++this._monitoredElementCount === 1) {
          this._ngZone.runOutsideAngular(() => {
            const window2 = this._getWindow();
            window2.addEventListener("focus", this._windowFocusListener);
          });
          this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
            this._setOrigin(
              modality,
              true
              /* isFromInteraction */
            );
          });
        }
      }
      _removeGlobalListeners(elementInfo) {
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
          const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
          if (rootNodeFocusListeners > 1) {
            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
          } else {
            rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            this._rootNodeFocusListenerCount.delete(rootNode);
          }
        }
        if (!--this._monitoredElementCount) {
          const window2 = this._getWindow();
          window2.removeEventListener("focus", this._windowFocusListener);
          this._stopInputModalityDetector.next();
          clearTimeout(this._windowFocusTimeoutId);
          clearTimeout(this._originTimeoutId);
        }
      }
      /** Updates all the state on an element once its focus origin has changed. */
      _originChanged(element, origin, elementInfo) {
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo, origin);
        this._lastFocusOrigin = origin;
      }
      /**
       * Collects the `MonitoredElementInfo` of a particular element and
       * all of its ancestors that have enabled `checkChildren`.
       * @param element Element from which to start the search.
       */
      _getClosestElementsInfo(element) {
        const results = [];
        this._elementInfo.forEach((info, currentElement) => {
          if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
            results.push([currentElement, info]);
          }
        });
        return results;
      }
      /**
       * Returns whether an interaction is likely to have come from the user clicking the `label` of
       * an `input` or `textarea` in order to focus it.
       * @param focusEventTarget Target currently receiving focus.
       */
      _isLastInteractionFromInputLabel(focusEventTarget) {
        const { _mostRecentTarget: mostRecentTarget, mostRecentModality } = this._inputModalityDetector;
        if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
          return false;
        }
        const labels = focusEventTarget.labels;
        if (labels) {
          for (let i = 0; i < labels.length; i++) {
            if (labels[i].contains(mostRecentTarget)) {
              return true;
            }
          }
        }
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _FocusMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _FocusMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: FocusMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkMonitorFocus = class _CdkMonitorFocus {
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _monitorSubscription;
      _focusOrigin = null;
      cdkFocusChange = new EventEmitter();
      constructor() {
      }
      get focusOrigin() {
        return this._focusOrigin;
      }
      ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
          this._focusOrigin = origin;
          this.cdkFocusChange.emit(origin);
        });
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (this._monitorSubscription) {
          this._monitorSubscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _CdkMonitorFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: _CdkMonitorFocus, isStandalone: true, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: CdkMonitorFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
        exportAs: "cdkMonitorFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkFocusChange: [{
      type: Output
    }] } });
  }
});

// node_modules/@angular/cdk/fesm2022/style-loader.mjs
var appsWithLoaders, _CdkPrivateStyleLoader;
var init_style_loader = __esm({
  "node_modules/@angular/cdk/fesm2022/style-loader.mjs"() {
    "use strict";
    init_core();
    init_core();
    appsWithLoaders = /* @__PURE__ */ new WeakMap();
    _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
      _appRef;
      _injector = inject(Injector);
      _environmentInjector = inject(EnvironmentInjector);
      /**
       * Loads a set of styles.
       * @param loader Component which will be instantiated to load the styles.
       */
      load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
          data = { loaders: /* @__PURE__ */ new Set(), refs: [] };
          appsWithLoaders.set(appRef, data);
          appRef.onDestroy(() => {
            appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
            appsWithLoaders.delete(appRef);
          });
        }
        if (!data.loaders.has(loader)) {
          data.loaders.add(loader);
          data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: __CdkPrivateStyleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: __CdkPrivateStyleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _CdkPrivateStyleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/private.mjs
var _VisuallyHiddenLoader;
var init_private = __esm({
  "node_modules/@angular/cdk/fesm2022/private.mjs"() {
    "use strict";
    init_style_loader();
    init_core();
    init_core();
    _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: __VisuallyHiddenLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: __VisuallyHiddenLoader, isStandalone: true, selector: "ng-component", exportAs: ["cdkVisuallyHidden"], ngImport: core_exports, template: "", isInline: true, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _VisuallyHiddenLoader, decorators: [{
      type: Component,
      args: [{ exportAs: "cdkVisuallyHidden", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"] }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/array.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
var init_array = __esm({
  "node_modules/@angular/cdk/fesm2022/array.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/breakpoints-observer.mjs
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
var mediaQueriesForWebkitCompatibility, mediaQueryStyleNode, MediaMatcher, BreakpointObserver;
var init_breakpoints_observer = __esm({
  "node_modules/@angular/cdk/fesm2022/breakpoints-observer.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform2();
    init_array();
    mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
    MediaMatcher = class _MediaMatcher {
      _platform = inject(Platform);
      _nonce = inject(CSP_NONCE, { optional: true });
      /** The internal matchMedia method to return back a MediaQueryList like object. */
      _matchMedia;
      constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
          // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window)
        ) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       */
      matchMedia(query) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
          createEmptyStyleRule(query, this._nonce);
        }
        return this._matchMedia(query);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MediaMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MediaMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MediaMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BreakpointObserver = class _BreakpointObserver {
      _mediaMatcher = inject(MediaMatcher);
      _zone = inject(NgZone);
      /**  A map of all media queries currently being listened for. */
      _queries = /* @__PURE__ */ new Map();
      /** A subject for all other observables to takeUntil based on. */
      _destroySubject = new Subject();
      constructor() {
      }
      /** Completes the active subject, signalling to all other observables to complete. */
      ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
      }
      /**
       * Whether one or more media queries match the current viewport size.
       * @param value One or more media queries to check.
       * @returns Whether any of the media queries match.
       */
      isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
      }
      /**
       * Gets an observable of results for the given queries that will emit new results for any changes
       * in matching of the given queries.
       * @param value One or more media queries to check.
       * @returns A stream of matches for the given queries.
       */
      observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map((query) => this._registerQuery(query).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((breakpointStates) => {
          const response = {
            matches: false,
            breakpoints: {}
          };
          breakpointStates.forEach(({ matches, query }) => {
            response.matches = response.matches || matches;
            response.breakpoints[query] = matches;
          });
          return response;
        }));
      }
      /** Registers a specific query to be listened for. */
      _registerQuery(query) {
        if (this._queries.has(query)) {
          return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        const queryObservable = new Observable((observer) => {
          const handler = (e) => this._zone.run(() => observer.next(e));
          mql.addListener(handler);
          return () => {
            mql.removeListener(handler);
          };
        }).pipe(startWith(mql), map(({ matches }) => ({ query, matches })), takeUntil(this._destroySubject));
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _BreakpointObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _BreakpointObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: BreakpointObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule;
var init_observers = __esm({
  "node_modules/@angular/cdk/fesm2022/observers.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element();
    MutationObserverFactory = class _MutationObserverFactory {
      create(callback) {
        return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MutationObserverFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MutationObserverFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MutationObserverFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ContentObserver = class _ContentObserver {
      _mutationObserverFactory = inject(MutationObserverFactory);
      /** Keeps track of the existing MutationObservers so they can be reused. */
      _observedElements = /* @__PURE__ */ new Map();
      _ngZone = inject(NgZone);
      constructor() {
      }
      ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
      }
      observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
          const stream = this._observeElement(element);
          const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
            this._ngZone.run(() => {
              observer.next(records);
            });
          });
          return () => {
            subscription.unsubscribe();
            this._unobserveElement(element);
          };
        });
      }
      /**
       * Observes the given element by using the existing MutationObserver if available, or creating a
       * new one if not.
       */
      _observeElement(element) {
        return this._ngZone.runOutsideAngular(() => {
          if (!this._observedElements.has(element)) {
            const stream = new Subject();
            const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
          } else {
            this._observedElements.get(element).count++;
          }
          return this._observedElements.get(element).stream;
        });
      }
      /**
       * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
       * observing this element.
       */
      _unobserveElement(element) {
        if (this._observedElements.has(element)) {
          this._observedElements.get(element).count--;
          if (!this._observedElements.get(element).count) {
            this._cleanupObserver(element);
          }
        }
      }
      /** Clean up the underlying MutationObserver for the specified element. */
      _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
          const { observer, stream } = this._observedElements.get(element);
          if (observer) {
            observer.disconnect();
          }
          stream.complete();
          this._observedElements.delete(element);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ContentObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ContentObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: ContentObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkObserveContent = class _CdkObserveContent {
      _contentObserver = inject(ContentObserver);
      _elementRef = inject(ElementRef);
      /** Event emitted for each change in the element's content. */
      event = new EventEmitter();
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._disabled ? this._unsubscribe() : this._subscribe();
      }
      _disabled = false;
      /** Debounce interval for emitting the changes. */
      get debounce() {
        return this._debounce;
      }
      set debounce(value) {
        this._debounce = coerceNumberProperty(value);
        this._subscribe();
      }
      _debounce;
      _currentSubscription = null;
      constructor() {
      }
      ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
          this._subscribe();
        }
      }
      ngOnDestroy() {
        this._unsubscribe();
      }
      _subscribe() {
        this._unsubscribe();
        const stream = this._contentObserver.observe(this._elementRef);
        this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
      }
      _unsubscribe() {
        this._currentSubscription?.unsubscribe();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _CdkObserveContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-rc.1", type: _CdkObserveContent, isStandalone: true, selector: "[cdkObserveContent]", inputs: { disabled: ["cdkObserveContentDisabled", "disabled", booleanAttribute], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: CdkObserveContent, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkObserveContent]",
        exportAs: "cdkObserveContent"
      }]
    }], ctorParameters: () => [], propDecorators: { event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }], disabled: [{
      type: Input,
      args: [{ alias: "cdkObserveContentDisabled", transform: booleanAttribute }]
    }], debounce: [{
      type: Input
    }] } });
    ObserversModule = class _ObserversModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ObserversModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ObserversModule, imports: [CdkObserveContent], exports: [CdkObserveContent] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ObserversModule, providers: [MutationObserverFactory] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: ObserversModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkObserveContent],
        exports: [CdkObserveContent],
        providers: [MutationObserverFactory]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/a11y-module.mjs
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var InteractivityChecker, FocusTrap, FocusTrapFactory, CdkTrapFocus, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, uniqueIds, LiveAnnouncer, CdkAriaLive, HighContrastMode, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS, HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, HighContrastModeDetector, A11yModule;
var init_a11y_module = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_focus_monitor();
    init_platform2();
    init_shadow_dom();
    init_style_loader();
    init_private();
    init_breakpoints_observer();
    init_observers();
    InteractivityChecker = class _InteractivityChecker {
      _platform = inject(Platform);
      constructor() {
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param element Element to be checked.
       * @returns Whether the element is disabled.
       */
      isDisabled(element) {
        return element.hasAttribute("disabled");
      }
      /**
       * Gets whether an element is visible for the purposes of interactivity.
       *
       * This will capture states like `display: none` and `visibility: hidden`, but not things like
       * being clipped by an `overflow: hidden` parent or being outside the viewport.
       *
       * @returns Whether the element is visible.
       */
      isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
      }
      /**
       * Gets whether an element can be reached via Tab key.
       * Assumes that the element has already been checked with isFocusable.
       *
       * @param element Element to be checked.
       * @returns Whether the element is tabbable.
       */
      isTabbable(element) {
        if (!this._platform.isBrowser) {
          return false;
        }
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
          if (getTabIndexValue(frameElement) === -1) {
            return false;
          }
          if (!this.isVisible(frameElement)) {
            return false;
          }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute("contenteditable")) {
          return tabIndexValue !== -1;
        }
        if (nodeName === "iframe" || nodeName === "object") {
          return false;
        }
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
          return false;
        }
        if (nodeName === "audio") {
          if (!element.hasAttribute("controls")) {
            return false;
          }
          return tabIndexValue !== -1;
        }
        if (nodeName === "video") {
          if (tabIndexValue === -1) {
            return false;
          }
          if (tabIndexValue !== null) {
            return true;
          }
          return this._platform.FIREFOX || element.hasAttribute("controls");
        }
        return element.tabIndex >= 0;
      }
      /**
       * Gets whether an element can be focused by the user.
       *
       * @param element Element to be checked.
       * @param config The config object with options to customize this method's behavior
       * @returns Whether the element is focusable.
       */
      isFocusable(element, config) {
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _InteractivityChecker, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _InteractivityChecker, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: InteractivityChecker, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    FocusTrap = class {
      _element;
      _checker;
      _ngZone;
      _document;
      _injector;
      _startAnchor;
      _endAnchor;
      _hasAttached = false;
      // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
      startAnchorListener = () => this.focusLastTabbableElement();
      endAnchorListener = () => this.focusFirstTabbableElement();
      /** Whether the focus trap is active. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(value, this._startAnchor);
          this._toggleAnchorTabIndex(value, this._endAnchor);
        }
      }
      _enabled = true;
      constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._injector = _injector;
        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /** Destroys the focus trap by cleaning up the anchors. */
      destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
          startAnchor.removeEventListener("focus", this.startAnchorListener);
          startAnchor.remove();
        }
        if (endAnchor) {
          endAnchor.removeEventListener("focus", this.endAnchorListener);
          endAnchor.remove();
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
      }
      /**
       * Inserts the anchors into the DOM. This is usually done automatically
       * in the constructor, but can be deferred for cases like directives with `*ngIf`.
       * @returns Whether the focus trap managed to attach successfully. This may not be the case
       * if the target element isn't currently in the DOM.
       */
      attachAnchors() {
        if (this._hasAttached) {
          return true;
        }
        this._ngZone.runOutsideAngular(() => {
          if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
            this._startAnchor.addEventListener("focus", this.startAnchorListener);
          }
          if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
            this._endAnchor.addEventListener("focus", this.endAnchorListener);
          }
        });
        if (this._element.parentNode) {
          this._element.parentNode.insertBefore(this._startAnchor, this._element);
          this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
          this._hasAttached = true;
        }
        return this._hasAttached;
      }
      /**
       * Waits for the zone to stabilize, then focuses the first tabbable element.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusInitialElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusInitialElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the first tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusFirstTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the last tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusLastTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
        });
      }
      /**
       * Get the specified boundary element of the trapped region.
       * @param bound The boundary to get (start or end of trapped region).
       * @returns The boundary element.
       */
      _getRegionBoundary(bound) {
        const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          for (let i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            }
          }
        }
        if (bound == "start") {
          return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
      }
      /**
       * Focuses the element that should be focused when the focus trap is initialized.
       * @returns Whether focus was moved successfully.
       */
      focusInitialElement(options) {
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
        if (redirectToElement) {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
            console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
          }
          if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
            console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
          }
          if (!this._checker.isFocusable(redirectToElement)) {
            const focusableChild = this._getFirstTabbableElement(redirectToElement);
            focusableChild?.focus(options);
            return !!focusableChild;
          }
          redirectToElement.focus(options);
          return true;
        }
        return this.focusFirstTabbableElement(options);
      }
      /**
       * Focuses the first tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusFirstTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("start");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Focuses the last tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusLastTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("end");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Checks whether the focus trap has successfully been attached.
       */
      hasAttached() {
        return this._hasAttached;
      }
      /** Get the first tabbable element from a DOM subtree (inclusive). */
      _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Get the last tabbable element from a DOM subtree (inclusive). */
      _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = children.length - 1; i >= 0; i--) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Creates an anchor element. */
      _createAnchor() {
        const anchor = this._document.createElement("div");
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add("cdk-visually-hidden");
        anchor.classList.add("cdk-focus-trap-anchor");
        anchor.setAttribute("aria-hidden", "true");
        return anchor;
      }
      /**
       * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
       * @param isEnabled Whether the focus trap is enabled.
       * @param anchor Anchor on which to toggle the tabindex.
       */
      _toggleAnchorTabIndex(isEnabled, anchor) {
        isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
      }
      /**
       * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
       * @param enabled: Whether the anchors should trap Tab.
       */
      toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(enabled, this._startAnchor);
          this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
      }
      /** Executes a function when the zone is stable. */
      _executeOnStable(fn) {
        if (this._injector) {
          afterNextRender(fn, { injector: this._injector });
        } else {
          setTimeout(fn);
        }
      }
    };
    FocusTrapFactory = class _FocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _document = inject(DOCUMENT);
      _injector = inject(Injector);
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param element The element around which focus will be trapped.
       * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @returns The created focus trap instance.
       */
      create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _FocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _FocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: FocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkTrapFocus = class _CdkTrapFocus {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      /** Underlying FocusTrap instance. */
      focusTrap;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */
      _previouslyFocusedElement = null;
      /** Whether the focus trap is active. */
      get enabled() {
        return this.focusTrap?.enabled || false;
      }
      set enabled(value) {
        if (this.focusTrap) {
          this.focusTrap.enabled = value;
        }
      }
      /**
       * Whether the directive should automatically move focus into the trapped region upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
      autoCapture;
      constructor() {
        const platform = inject(Platform);
        if (platform.isBrowser) {
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
      }
      ngOnDestroy() {
        this.focusTrap?.destroy();
        if (this._previouslyFocusedElement) {
          this._previouslyFocusedElement.focus();
          this._previouslyFocusedElement = null;
        }
      }
      ngAfterContentInit() {
        this.focusTrap?.attachAnchors();
        if (this.autoCapture) {
          this._captureFocus();
        }
      }
      ngDoCheck() {
        if (this.focusTrap && !this.focusTrap.hasAttached()) {
          this.focusTrap.attachAnchors();
        }
      }
      ngOnChanges(changes) {
        const autoCaptureChange = changes["autoCapture"];
        if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
          this._captureFocus();
        }
      }
      _captureFocus() {
        this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
        this.focusTrap?.focusInitialElementWhenReady();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _CdkTrapFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-rc.1", type: _CdkTrapFocus, isStandalone: true, selector: "[cdkTrapFocus]", inputs: { enabled: ["cdkTrapFocus", "enabled", booleanAttribute], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute] }, exportAs: ["cdkTrapFocus"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: CdkTrapFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTrapFocus]",
        exportAs: "cdkTrapFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { enabled: [{
      type: Input,
      args: [{ alias: "cdkTrapFocus", transform: booleanAttribute }]
    }], autoCapture: [{
      type: Input,
      args: [{ alias: "cdkTrapFocusAutoCapture", transform: booleanAttribute }]
    }] } });
    LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
      providedIn: "root",
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
    uniqueIds = 0;
    LiveAnnouncer = class _LiveAnnouncer {
      _ngZone = inject(NgZone);
      _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
        optional: true
      });
      _liveElement;
      _document = inject(DOCUMENT);
      _previousTimeout;
      _currentPromise;
      _currentResolve;
      constructor() {
        const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, { optional: true });
        this._liveElement = elementToken || this._createLiveElement();
      }
      announce(message, ...args) {
        const defaultOptions = this._defaultOptions;
        let politeness;
        let duration;
        if (args.length === 1 && typeof args[0] === "number") {
          duration = args[0];
        } else {
          [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
          politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
        }
        if (duration == null && defaultOptions) {
          duration = defaultOptions.duration;
        }
        this._liveElement.setAttribute("aria-live", politeness);
        if (this._liveElement.id) {
          this._exposeAnnouncerToModals(this._liveElement.id);
        }
        return this._ngZone.runOutsideAngular(() => {
          if (!this._currentPromise) {
            this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
          }
          clearTimeout(this._previousTimeout);
          this._previousTimeout = setTimeout(() => {
            this._liveElement.textContent = message;
            if (typeof duration === "number") {
              this._previousTimeout = setTimeout(() => this.clear(), duration);
            }
            this._currentResolve?.();
            this._currentPromise = this._currentResolve = void 0;
          }, 100);
          return this._currentPromise;
        });
      }
      /**
       * Clears the current text from the announcer element. Can be used to prevent
       * screen readers from reading the text out again while the user is going
       * through the page landmarks.
       */
      clear() {
        if (this._liveElement) {
          this._liveElement.textContent = "";
        }
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        this._liveElement?.remove();
        this._liveElement = null;
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }
      _createLiveElement() {
        const elementClass = "cdk-live-announcer-element";
        const previousElements = this._document.getElementsByClassName(elementClass);
        const liveEl = this._document.createElement("div");
        for (let i = 0; i < previousElements.length; i++) {
          previousElements[i].remove();
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add("cdk-visually-hidden");
        liveEl.setAttribute("aria-atomic", "true");
        liveEl.setAttribute("aria-live", "polite");
        liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
        this._document.body.appendChild(liveEl);
        return liveEl;
      }
      /**
       * Some browsers won't expose the accessibility node of the live announcer element if there is an
       * `aria-modal` and the live announcer is outside of it. This method works around the issue by
       * pointing the `aria-owns` of all modals to the live announcer element.
       */
      _exposeAnnouncerToModals(id) {
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
          const modal = modals[i];
          const ariaOwns = modal.getAttribute("aria-owns");
          if (!ariaOwns) {
            modal.setAttribute("aria-owns", id);
          } else if (ariaOwns.indexOf(id) === -1) {
            modal.setAttribute("aria-owns", ariaOwns + " " + id);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _LiveAnnouncer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _LiveAnnouncer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: LiveAnnouncer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAriaLive = class _CdkAriaLive {
      _elementRef = inject(ElementRef);
      _liveAnnouncer = inject(LiveAnnouncer);
      _contentObserver = inject(ContentObserver);
      _ngZone = inject(NgZone);
      /** The aria-live politeness level to use when announcing messages. */
      get politeness() {
        return this._politeness;
      }
      set politeness(value) {
        this._politeness = value === "off" || value === "assertive" ? value : "polite";
        if (this._politeness === "off") {
          if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
          }
        } else if (!this._subscription) {
          this._subscription = this._ngZone.runOutsideAngular(() => {
            return this._contentObserver.observe(this._elementRef).subscribe(() => {
              const elementText = this._elementRef.nativeElement.textContent;
              if (elementText !== this._previousAnnouncedText) {
                this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
                this._previousAnnouncedText = elementText;
              }
            });
          });
        }
      }
      _politeness = "polite";
      /** Time in milliseconds after which to clear out the announcer element. */
      duration;
      _previousAnnouncedText;
      _subscription;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      ngOnDestroy() {
        if (this._subscription) {
          this._subscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _CdkAriaLive, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: _CdkAriaLive, isStandalone: true, selector: "[cdkAriaLive]", inputs: { politeness: ["cdkAriaLive", "politeness"], duration: ["cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: CdkAriaLive, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAriaLive]",
        exportAs: "cdkAriaLive"
      }]
    }], ctorParameters: () => [], propDecorators: { politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }], duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }] } });
    (function(HighContrastMode2) {
      HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
      HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
      HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
    })(HighContrastMode || (HighContrastMode = {}));
    BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
    WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
    HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
    HighContrastModeDetector = class _HighContrastModeDetector {
      _platform = inject(Platform);
      /**
       * Figuring out the high contrast mode and adding the body classes can cause
       * some expensive layouts. This flag is used to ensure that we only do it once.
       */
      _hasCheckedHighContrastMode;
      _document = inject(DOCUMENT);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
          if (this._hasCheckedHighContrastMode) {
            this._hasCheckedHighContrastMode = false;
            this._applyBodyHighContrastModeCssClasses();
          }
        });
      }
      /** Gets the current high-contrast-mode for the page. */
      getHighContrastMode() {
        if (!this._platform.isBrowser) {
          return HighContrastMode.NONE;
        }
        const testElement = this._document.createElement("div");
        testElement.style.backgroundColor = "rgb(1,2,3)";
        testElement.style.position = "absolute";
        this._document.body.appendChild(testElement);
        const documentWindow = this._document.defaultView || window;
        const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
        const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
        testElement.remove();
        switch (computedColor) {
          // Pre Windows 11 dark theme.
          case "rgb(0,0,0)":
          // Windows 11 dark themes.
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return HighContrastMode.WHITE_ON_BLACK;
          // Pre Windows 11 light theme.
          case "rgb(255,255,255)":
          // Windows 11 light theme.
          case "rgb(255,250,239)":
            return HighContrastMode.BLACK_ON_WHITE;
        }
        return HighContrastMode.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
      _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
          const bodyClasses = this._document.body.classList;
          bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          this._hasCheckedHighContrastMode = true;
          const mode = this.getHighContrastMode();
          if (mode === HighContrastMode.BLACK_ON_WHITE) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
          } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _HighContrastModeDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _HighContrastModeDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: HighContrastModeDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    A11yModule = class _A11yModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _A11yModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus], exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: A11yModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
        exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/id-generator.mjs
var counters, _IdGenerator;
var init_id_generator = __esm({
  "node_modules/@angular/cdk/fesm2022/id-generator.mjs"() {
    "use strict";
    init_core();
    init_core();
    counters = {};
    _IdGenerator = class __IdGenerator {
      _appId = inject(APP_ID);
      /**
       * Generates a unique ID with a specific prefix.
       * @param prefix Prefix to add to the ID.
       */
      getId(prefix) {
        if (this._appId !== "ng") {
          prefix += this._appId;
        }
        if (!counters.hasOwnProperty(prefix)) {
          counters[prefix] = 0;
        }
        return `${prefix}${counters[prefix]++}`;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: __IdGenerator, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: __IdGenerator, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _IdGenerator, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/typeahead.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS, Typeahead;
var init_typeahead = __esm({
  "node_modules/@angular/cdk/fesm2022/typeahead.mjs"() {
    "use strict";
    init_esm();
    init_operators();
    init_keycodes2();
    DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
    Typeahead = class {
      _letterKeyStream = new Subject();
      _items = [];
      _selectedItemIndex = -1;
      /** Buffer for the letters that the user has pressed */
      _pressedLetters = [];
      _skipPredicateFn;
      _selectedItem = new Subject();
      selectedItem = this._selectedItem;
      constructor(initialItems, config) {
        const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
        if (config?.skipPredicate) {
          this._skipPredicateFn = config.skipPredicate;
        }
        if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
          throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
        }
        this.setItems(initialItems);
        this._setupKeyHandler(typeAheadInterval);
      }
      destroy() {
        this._pressedLetters = [];
        this._letterKeyStream.complete();
        this._selectedItem.complete();
      }
      setCurrentSelectedItemIndex(index) {
        this._selectedItemIndex = index;
      }
      setItems(items) {
        this._items = items;
      }
      handleKey(event) {
        const keyCode = event.keyCode;
        if (event.key && event.key.length === 1) {
          this._letterKeyStream.next(event.key.toLocaleUpperCase());
        } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
          this._letterKeyStream.next(String.fromCharCode(keyCode));
        }
      }
      /** Gets whether the user is currently typing into the manager using the typeahead feature. */
      isTyping() {
        return this._pressedLetters.length > 0;
      }
      /** Resets the currently stored sequence of typed letters. */
      reset() {
        this._pressedLetters = [];
      }
      _setupKeyHandler(typeAheadInterval) {
        this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
          for (let i = 1; i < this._items.length + 1; i++) {
            const index = (this._selectedItemIndex + i) % this._items.length;
            const item = this._items[index];
            if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
              this._selectedItem.next(item);
              break;
            }
          }
          this._pressedLetters = [];
        });
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
var init_keycodes = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes.mjs"() {
    "use strict";
    init_keycodes2();
  }
});

// node_modules/@angular/cdk/fesm2022/list-key-manager.mjs
var ListKeyManager;
var init_list_key_manager = __esm({
  "node_modules/@angular/cdk/fesm2022/list-key-manager.mjs"() {
    "use strict";
    init_core();
    init_esm();
    init_typeahead();
    init_keycodes();
    init_keycodes2();
    ListKeyManager = class {
      _items;
      _activeItemIndex = signal(-1, ...ngDevMode ? [{ debugName: "_activeItemIndex" }] : []);
      _activeItem = signal(null, ...ngDevMode ? [{ debugName: "_activeItem" }] : []);
      _wrap = false;
      _typeaheadSubscription = Subscription.EMPTY;
      _itemChangesSubscription;
      _vertical = true;
      _horizontal;
      _allowedModifierKeys = [];
      _homeAndEnd = false;
      _pageUpAndDown = { enabled: false, delta: 10 };
      _effectRef;
      _typeahead;
      /**
       * Predicate function that can be used to check whether an item should be skipped
       * by the key manager. By default, disabled items are skipped.
       */
      _skipPredicateFn = (item) => item.disabled;
      constructor(_items, injector) {
        this._items = _items;
        if (_items instanceof QueryList) {
          this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
        } else if (isSignal(_items)) {
          if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw new Error("ListKeyManager constructed with a signal must receive an injector");
          }
          this._effectRef = effect(() => this._itemsChanged(_items()), ...ngDevMode ? [{ debugName: "_effectRef", injector }] : [{ injector }]);
        }
      }
      /**
       * Stream that emits any time the TAB key is pressed, so components can react
       * when focus is shifted off of the list.
       */
      tabOut = new Subject();
      /** Stream that emits whenever the active item of the list manager changes. */
      change = new Subject();
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @param predicate Function that determines whether the given item should be skipped.
       */
      skipPredicate(predicate) {
        this._skipPredicateFn = predicate;
        return this;
      }
      /**
       * Configures wrapping mode, which determines whether the active item will wrap to
       * the other end of list when there are no more items in the given direction.
       * @param shouldWrap Whether the list should wrap when reaching the end.
       */
      withWrap(shouldWrap = true) {
        this._wrap = shouldWrap;
        return this;
      }
      /**
       * Configures whether the key manager should be able to move the selection vertically.
       * @param enabled Whether vertical selection should be enabled.
       */
      withVerticalOrientation(enabled = true) {
        this._vertical = enabled;
        return this;
      }
      /**
       * Configures the key manager to move the selection horizontally.
       * Passing in `null` will disable horizontal movement.
       * @param direction Direction in which the selection can be moved.
       */
      withHorizontalOrientation(direction) {
        this._horizontal = direction;
        return this;
      }
      /**
       * Modifier keys which are allowed to be held down and whose default actions will be prevented
       * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
       */
      withAllowedModifierKeys(keys) {
        this._allowedModifierKeys = keys;
        return this;
      }
      /**
       * Turns on typeahead mode which allows users to set the active item by typing.
       * @param debounceInterval Time to wait after the last keystroke before setting the active item.
       */
      withTypeAhead(debounceInterval = 200) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const items2 = this._getItemsArray();
          if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
            throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
          }
        }
        this._typeaheadSubscription.unsubscribe();
        const items = this._getItemsArray();
        this._typeahead = new Typeahead(items, {
          debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
          skipPredicate: (item) => this._skipPredicateFn(item)
        });
        this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
          this.setActiveItem(item);
        });
        return this;
      }
      /** Cancels the current typeahead sequence. */
      cancelTypeahead() {
        this._typeahead?.reset();
        return this;
      }
      /**
       * Configures the key manager to activate the first and last items
       * respectively when the Home or End key is pressed.
       * @param enabled Whether pressing the Home or End key activates the first/last item.
       */
      withHomeAndEnd(enabled = true) {
        this._homeAndEnd = enabled;
        return this;
      }
      /**
       * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
       * respectively when the Page-Up or Page-Down key is pressed.
       * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
       * @param delta Whether pressing the Home or End key activates the first/last item.
       */
      withPageUpDown(enabled = true, delta = 10) {
        this._pageUpAndDown = { enabled, delta };
        return this;
      }
      setActiveItem(item) {
        const previousActiveItem = this._activeItem();
        this.updateActiveItem(item);
        if (this._activeItem() !== previousActiveItem) {
          this.change.next(this._activeItemIndex());
        }
      }
      /**
       * Sets the active item depending on the key event passed in.
       * @param event Keyboard event to be used for determining which element should be active.
       */
      onKeydown(event) {
        const keyCode = event.keyCode;
        const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
        const isModifierAllowed = modifiers.every((modifier) => {
          return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
          case TAB:
            this.tabOut.next();
            return;
          case DOWN_ARROW:
            if (this._vertical && isModifierAllowed) {
              this.setNextItemActive();
              break;
            } else {
              return;
            }
          case UP_ARROW:
            if (this._vertical && isModifierAllowed) {
              this.setPreviousItemActive();
              break;
            } else {
              return;
            }
          case RIGHT_ARROW:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
              break;
            } else {
              return;
            }
          case LEFT_ARROW:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
              break;
            } else {
              return;
            }
          case HOME:
            if (this._homeAndEnd && isModifierAllowed) {
              this.setFirstItemActive();
              break;
            } else {
              return;
            }
          case END:
            if (this._homeAndEnd && isModifierAllowed) {
              this.setLastItemActive();
              break;
            } else {
              return;
            }
          case PAGE_UP:
            if (this._pageUpAndDown.enabled && isModifierAllowed) {
              const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
              this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
              break;
            } else {
              return;
            }
          case PAGE_DOWN:
            if (this._pageUpAndDown.enabled && isModifierAllowed) {
              const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
              const itemsLength = this._getItemsArray().length;
              this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
              break;
            } else {
              return;
            }
          default:
            if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
              this._typeahead?.handleKey(event);
            }
            return;
        }
        this._typeahead?.reset();
        event.preventDefault();
      }
      /** Index of the currently active item. */
      get activeItemIndex() {
        return this._activeItemIndex();
      }
      /** The active item. */
      get activeItem() {
        return this._activeItem();
      }
      /** Gets whether the user is currently typing into the manager using the typeahead feature. */
      isTyping() {
        return !!this._typeahead && this._typeahead.isTyping();
      }
      /** Sets the active item to the first enabled item in the list. */
      setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
      }
      /** Sets the active item to the last enabled item in the list. */
      setLastItemActive() {
        this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
      }
      /** Sets the active item to the next enabled item in the list. */
      setNextItemActive() {
        this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
      }
      /** Sets the active item to a previous enabled item in the list. */
      setPreviousItemActive() {
        this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
      }
      updateActiveItem(item) {
        const itemArray = this._getItemsArray();
        const index = typeof item === "number" ? item : itemArray.indexOf(item);
        const activeItem = itemArray[index];
        this._activeItem.set(activeItem == null ? null : activeItem);
        this._activeItemIndex.set(index);
        this._typeahead?.setCurrentSelectedItemIndex(index);
      }
      /** Cleans up the key manager. */
      destroy() {
        this._typeaheadSubscription.unsubscribe();
        this._itemChangesSubscription?.unsubscribe();
        this._effectRef?.destroy();
        this._typeahead?.destroy();
        this.tabOut.complete();
        this.change.complete();
      }
      /**
       * This method sets the active item, given a list of items and the delta between the
       * currently active item and the new active item. It will calculate differently
       * depending on whether wrap mode is turned on.
       */
      _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
      }
      /**
       * Sets the active item properly given "wrap" mode. In other words, it will continue to move
       * down the list until it finds an item that is not disabled, and it will wrap if it
       * encounters either end of the list.
       */
      _setActiveInWrapMode(delta) {
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
          const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
          const item = items[index];
          if (!this._skipPredicateFn(item)) {
            this.setActiveItem(index);
            return;
          }
        }
      }
      /**
       * Sets the active item properly given the default mode. In other words, it will
       * continue to move down the list until it finds an item that is not disabled. If
       * it encounters either end of the list, it will stop and not wrap.
       */
      _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
      }
      /**
       * Sets the active item to the first enabled item starting at the index specified. If the
       * item is disabled, it will move in the fallbackDelta direction until it either
       * finds an enabled item or encounters the end of the list.
       */
      _setActiveItemByIndex(index, fallbackDelta) {
        const items = this._getItemsArray();
        if (!items[index]) {
          return;
        }
        while (this._skipPredicateFn(items[index])) {
          index += fallbackDelta;
          if (!items[index]) {
            return;
          }
        }
        this.setActiveItem(index);
      }
      /** Returns the items as an array. */
      _getItemsArray() {
        if (isSignal(this._items)) {
          return this._items();
        }
        return this._items instanceof QueryList ? this._items.toArray() : this._items;
      }
      /** Callback for when the items have changed. */
      _itemsChanged(newItems) {
        this._typeahead?.setItems(newItems);
        const activeItem = this._activeItem();
        if (activeItem) {
          const newIndex = newItems.indexOf(activeItem);
          if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
            this._activeItemIndex.set(newIndex);
            this._typeahead?.setCurrentSelectedItemIndex(newIndex);
          }
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs
var ActiveDescendantKeyManager;
var init_activedescendant_key_manager = __esm({
  "node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs"() {
    "use strict";
    init_list_key_manager();
    ActiveDescendantKeyManager = class extends ListKeyManager {
      setActiveItem(index) {
        if (this.activeItem) {
          this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
          this.activeItem.setActiveStyles();
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/focus-key-manager.mjs
var FocusKeyManager;
var init_focus_key_manager = __esm({
  "node_modules/@angular/cdk/fesm2022/focus-key-manager.mjs"() {
    "use strict";
    init_list_key_manager();
    FocusKeyManager = class extends ListKeyManager {
      _origin = "program";
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @param origin Focus origin to be used when focusing items.
       */
      setFocusOrigin(origin) {
        this._origin = origin;
        return this;
      }
      setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
          this.activeItem.focus(this._origin);
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/a11y.mjs
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ID_DELIMITER, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, nextId, AriaDescriber, ConfigurableFocusTrap, EventListenerFocusTrapInertStrategy, FOCUS_TRAP_INERT_STRATEGY, FocusTrapManager, ConfigurableFocusTrapFactory;
var init_a11y = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y.mjs"() {
    "use strict";
    init_focus_monitor();
    init_a11y_module();
    init_a11y_module();
    init_id_generator();
    init_core();
    init_core();
    init_platform2();
    init_style_loader();
    init_private();
    init_activedescendant_key_manager();
    init_focus_key_manager();
    init_fake_event_detection();
    ID_DELIMITER = " ";
    CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
    CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
    nextId = 0;
    AriaDescriber = class _AriaDescriber {
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      /** Map of all registered message elements that have been placed into the document. */
      _messageRegistry = /* @__PURE__ */ new Map();
      /** Container for all registered messages. */
      _messagesContainer = null;
      /** Unique ID for the service. */
      _id = `${nextId++}`;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
        this._id = inject(APP_ID) + "-" + nextId++;
      }
      describe(hostElement, message, role) {
        if (!this._canBeDescribed(hostElement, message)) {
          return;
        }
        const key = getKey(message, role);
        if (typeof message !== "string") {
          setMessageId(message, this._id);
          this._messageRegistry.set(key, { messageElement: message, referenceCount: 0 });
        } else if (!this._messageRegistry.has(key)) {
          this._createMessageElement(message, role);
        }
        if (!this._isElementDescribedByMessage(hostElement, key)) {
          this._addMessageReference(hostElement, key);
        }
      }
      removeDescription(hostElement, message, role) {
        if (!message || !this._isElementNode(hostElement)) {
          return;
        }
        const key = getKey(message, role);
        if (this._isElementDescribedByMessage(hostElement, key)) {
          this._removeMessageReference(hostElement, key);
        }
        if (typeof message === "string") {
          const registeredMessage = this._messageRegistry.get(key);
          if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(key);
          }
        }
        if (this._messagesContainer?.childNodes.length === 0) {
          this._messagesContainer.remove();
          this._messagesContainer = null;
        }
      }
      /** Unregisters all created message elements and removes the message container. */
      ngOnDestroy() {
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
        for (let i = 0; i < describedElements.length; i++) {
          this._removeCdkDescribedByReferenceIds(describedElements[i]);
          describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        this._messagesContainer?.remove();
        this._messagesContainer = null;
        this._messageRegistry.clear();
      }
      /**
       * Creates a new element in the visually hidden message container element with the message
       * as its content and adds it to the message registry.
       */
      _createMessageElement(message, role) {
        const messageElement = this._document.createElement("div");
        setMessageId(messageElement, this._id);
        messageElement.textContent = message;
        if (role) {
          messageElement.setAttribute("role", role);
        }
        this._createMessagesContainer();
        this._messagesContainer.appendChild(messageElement);
        this._messageRegistry.set(getKey(message, role), { messageElement, referenceCount: 0 });
      }
      /** Deletes the message element from the global messages container. */
      _deleteMessageElement(key) {
        this._messageRegistry.get(key)?.messageElement?.remove();
        this._messageRegistry.delete(key);
      }
      /** Creates the global container for all aria-describedby messages. */
      _createMessagesContainer() {
        if (this._messagesContainer) {
          return;
        }
        const containerClassName = "cdk-describedby-message-container";
        const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
        for (let i = 0; i < serverContainers.length; i++) {
          serverContainers[i].remove();
        }
        const messagesContainer = this._document.createElement("div");
        messagesContainer.style.visibility = "hidden";
        messagesContainer.classList.add(containerClassName);
        messagesContainer.classList.add("cdk-visually-hidden");
        if (!this._platform.isBrowser) {
          messagesContainer.setAttribute("platform", "server");
        }
        this._document.body.appendChild(messagesContainer);
        this._messagesContainer = messagesContainer;
      }
      /** Removes all cdk-describedby messages that are hosted through the element. */
      _removeCdkDescribedByReferenceIds(element) {
        const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
      }
      /**
       * Adds a message reference to the element using aria-describedby and increments the registered
       * message's reference count.
       */
      _addMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
        registeredMessage.referenceCount++;
      }
      /**
       * Removes a message reference from the element using aria-describedby
       * and decrements the registered message's reference count.
       */
      _removeMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      /** Returns true if the element has been described by the provided message ID. */
      _isElementDescribedByMessage(element, key) {
        const referenceIds = getAriaReferenceIds(element, "aria-describedby");
        const registeredMessage = this._messageRegistry.get(key);
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
      }
      /** Determines whether a message can be described on a particular element. */
      _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
          return false;
        }
        if (message && typeof message === "object") {
          return true;
        }
        const trimmedMessage = message == null ? "" : `${message}`.trim();
        const ariaLabel = element.getAttribute("aria-label");
        return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
      }
      /** Checks whether a node is an Element node. */
      _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _AriaDescriber, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _AriaDescriber, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: AriaDescriber, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    ConfigurableFocusTrap = class extends FocusTrap {
      _focusTrapManager;
      _inertStrategy;
      /** Whether the FocusTrap is enabled. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
          this._focusTrapManager.register(this);
        } else {
          this._focusTrapManager.deregister(this);
        }
      }
      constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
        super(_element, _checker, _ngZone, _document, config.defer, injector);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
      }
      /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
      destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
      }
    };
    EventListenerFocusTrapInertStrategy = class {
      /** Focus event handler. */
      _listener = null;
      /** Adds a document event listener that keeps focus inside the FocusTrap. */
      preventFocus(focusTrap) {
        if (this._listener) {
          focusTrap._document.removeEventListener("focus", this._listener, true);
        }
        this._listener = (e) => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
          focusTrap._document.addEventListener("focus", this._listener, true);
        });
      }
      /** Removes the event listener added in preventFocus. */
      allowFocus(focusTrap) {
        if (!this._listener) {
          return;
        }
        focusTrap._document.removeEventListener("focus", this._listener, true);
        this._listener = null;
      }
      /**
       * Refocuses the first element in the FocusTrap if the focus event target was outside
       * the FocusTrap.
       *
       * This is an event listener callback. The event listener is added in runOutsideAngular,
       * so all this code runs outside Angular as well.
       */
      _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
          setTimeout(() => {
            if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
              focusTrap.focusFirstTabbableElement();
            }
          });
        }
      }
    };
    FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
    FocusTrapManager = class _FocusTrapManager {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      _focusTrapStack = [];
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       */
      register(focusTrap) {
        this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
        let stack = this._focusTrapStack;
        if (stack.length) {
          stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
      }
      /**
       * Removes the FocusTrap from the stack, and activates the
       * FocusTrap that is the new top of the stack.
       */
      deregister(focusTrap) {
        focusTrap._disable();
        const stack = this._focusTrapStack;
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
          stack.splice(i, 1);
          if (stack.length) {
            stack[stack.length - 1]._enable();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _FocusTrapManager, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _FocusTrapManager, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: FocusTrapManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusTrapManager = inject(FocusTrapManager);
      _document = inject(DOCUMENT);
      _inertStrategy;
      _injector = inject(Injector);
      constructor() {
        const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, { optional: true });
        this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      create(element, config = { defer: false }) {
        let configObject;
        if (typeof config === "boolean") {
          configObject = { defer: config };
        } else {
          configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: ConfigurableFocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/directionality.mjs
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var DIR_DOCUMENT, RTL_LOCALE_PATTERN, Directionality;
var init_directionality = __esm({
  "node_modules/@angular/cdk/fesm2022/directionality.mjs"() {
    "use strict";
    init_core();
    init_core();
    DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
      providedIn: "root",
      factory: DIR_DOCUMENT_FACTORY
    });
    RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    Directionality = class _Directionality {
      /** The current 'ltr' or 'rtl' value. */
      get value() {
        return this.valueSignal();
      }
      /**
       * The current 'ltr' or 'rtl' value.
       */
      valueSignal = signal("ltr", ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
      /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
      change = new EventEmitter();
      constructor() {
        const _document = inject(DIR_DOCUMENT, { optional: true });
        if (_document) {
          const bodyDir = _document.body ? _document.body.dir : null;
          const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
        }
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _Directionality, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _Directionality, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: Directionality, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir, BidiModule;
var init_bidi = __esm({
  "node_modules/@angular/cdk/fesm2022/bidi.mjs"() {
    "use strict";
    init_directionality();
    init_core();
    init_core();
    Dir = class _Dir {
      /** Whether the `value` has been set to its initial value. */
      _isInitialized = false;
      /** Direction as passed in by the consumer. */
      _rawDir;
      /** Event emitted when the direction changes. */
      change = new EventEmitter();
      /** @docs-private */
      get dir() {
        return this.valueSignal();
      }
      set dir(value) {
        const previousValue = this.valueSignal();
        this.valueSignal.set(_resolveDirectionality(value));
        this._rawDir = value;
        if (previousValue !== this.valueSignal() && this._isInitialized) {
          this.change.emit(this.valueSignal());
        }
      }
      /** Current layout direction of the element. */
      get value() {
        return this.dir;
      }
      valueSignal = signal("ltr", ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
      /** Initialize once default value has been set. */
      ngAfterContentInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _Dir, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: _Dir, isStandalone: true, selector: "[dir]", inputs: { dir: "dir" }, outputs: { change: "dirChange" }, host: { properties: { "attr.dir": "_rawDir" } }, providers: [{ provide: Directionality, useExisting: _Dir }], exportAs: ["dir"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: Dir, decorators: [{
      type: Directive,
      args: [{
        selector: "[dir]",
        providers: [{ provide: Directionality, useExisting: Dir }],
        host: { "[attr.dir]": "_rawDir" },
        exportAs: "dir"
      }]
    }], propDecorators: { change: [{
      type: Output,
      args: ["dirChange"]
    }], dir: [{
      type: Input
    }] } });
    BidiModule = class _BidiModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _BidiModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _BidiModule, imports: [Dir], exports: [Dir] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _BidiModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: BidiModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Dir],
        exports: [Dir]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/common-module.mjs
var MATERIAL_SANITY_CHECKS, MatCommonModule;
var init_common_module = __esm({
  "node_modules/@angular/material/fesm2022/common-module.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_core();
    init_core();
    MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
      providedIn: "root",
      factory: () => true
    });
    MatCommonModule = class _MatCommonModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatCommonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule], exports: [BidiModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule, BidiModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatCommonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule],
        exports: [BidiModule]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/icon.mjs
function MAT_ICON_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MAT_ICON_DEFAULT_OPTIONS, MAT_ICON_LOCATION, funcIriAttributes, funcIriAttributeSelector, funcIriPattern, MatIcon, MatIconModule;
var init_icon = __esm({
  "node_modules/@angular/material/fesm2022/icon.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_icon_registry();
    init_common_module();
    MAT_ICON_DEFAULT_OPTIONS = new InjectionToken("MAT_ICON_DEFAULT_OPTIONS");
    MAT_ICON_LOCATION = new InjectionToken("mat-icon-location", {
      providedIn: "root",
      factory: MAT_ICON_LOCATION_FACTORY
    });
    funcIriAttributes = [
      "clip-path",
      "color-profile",
      "src",
      "cursor",
      "fill",
      "filter",
      "marker",
      "marker-start",
      "marker-mid",
      "marker-end",
      "mask",
      "stroke"
    ];
    funcIriAttributeSelector = funcIriAttributes.map((attr) => `[${attr}]`).join(", ");
    funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
    MatIcon = class _MatIcon {
      _elementRef = inject(ElementRef);
      _iconRegistry = inject(MatIconRegistry);
      _location = inject(MAT_ICON_LOCATION);
      _errorHandler = inject(ErrorHandler);
      _defaultColor;
      /**
       * Theme color of the icon. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/icon/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get color() {
        return this._color || this._defaultColor;
      }
      set color(value) {
        this._color = value;
      }
      _color;
      /**
       * Whether the icon should be inlined, automatically sizing the icon to match the font size of
       * the element the icon is contained in.
       */
      inline = false;
      /** Name of the icon in the SVG icon set. */
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(value) {
        if (value !== this._svgIcon) {
          if (value) {
            this._updateSvgIcon(value);
          } else if (this._svgIcon) {
            this._clearSvgElement();
          }
          this._svgIcon = value;
        }
      }
      _svgIcon;
      /** Font set that the icon is a part of. */
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontSet) {
          this._fontSet = newValue;
          this._updateFontIconClasses();
        }
      }
      _fontSet;
      /** Name of an icon within a font set. */
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontIcon) {
          this._fontIcon = newValue;
          this._updateFontIconClasses();
        }
      }
      _fontIcon;
      _previousFontSetClass = [];
      _previousFontIconClass;
      _svgName;
      _svgNamespace;
      /** Keeps track of the current page path. */
      _previousPath;
      /** Keeps track of the elements and attributes that we've prefixed with the current path. */
      _elementsWithExternalReferences;
      /** Subscription to the current in-progress SVG icon request. */
      _currentIconFetch = Subscription.EMPTY;
      constructor() {
        const ariaHidden = inject(new HostAttributeToken("aria-hidden"), { optional: true });
        const defaults = inject(MAT_ICON_DEFAULT_OPTIONS, { optional: true });
        if (defaults) {
          if (defaults.color) {
            this.color = this._defaultColor = defaults.color;
          }
          if (defaults.fontSet) {
            this.fontSet = defaults.fontSet;
          }
        }
        if (!ariaHidden) {
          this._elementRef.nativeElement.setAttribute("aria-hidden", "true");
        }
      }
      /**
       * Splits an svgIcon binding value into its icon set and icon name components.
       * Returns a 2-element array of [(icon set), (icon name)].
       * The separator for the two fields is ':'. If there is no separator, an empty
       * string is returned for the icon set and the entire value is returned for
       * the icon name. If the argument is falsy, returns an array of two empty strings.
       * Throws an error if the name contains two or more ':' separators.
       * Examples:
       *   `'social:cake' -> ['social', 'cake']
       *   'penguin' -> ['', 'penguin']
       *   null -> ['', '']
       *   'a:b:c' -> (throws Error)`
       */
      _splitIconName(iconName) {
        if (!iconName) {
          return ["", ""];
        }
        const parts = iconName.split(":");
        switch (parts.length) {
          case 1:
            return ["", parts[0]];
          // Use default namespace.
          case 2:
            return parts;
          default:
            throw Error(`Invalid icon name: "${iconName}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && cachedElements.size) {
          const newPath = this._location.getPathname();
          if (newPath !== this._previousPath) {
            this._previousPath = newPath;
            this._prependPathToReferences(newPath);
          }
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe();
        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(svg) {
        this._clearSvgElement();
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
      }
      _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
        while (childCount--) {
          const child = layoutElement.childNodes[childCount];
          if (child.nodeType !== 1 || child.nodeName.toLowerCase() === "svg") {
            child.remove();
          }
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
          return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter((className) => className.length > 0);
        this._previousFontSetClass.forEach((className) => elem.classList.remove(className));
        fontSetClasses.forEach((className) => elem.classList.add(className));
        this._previousFontSetClass = fontSetClasses;
        if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes("mat-ligature-font")) {
          if (this._previousFontIconClass) {
            elem.classList.remove(this._previousFontIconClass);
          }
          if (this.fontIcon) {
            elem.classList.add(this.fontIcon);
          }
          this._previousFontIconClass = this.fontIcon;
        }
      }
      /**
       * Cleans up a value to be used as a fontIcon or fontSet.
       * Since the value ends up being assigned as a CSS class, we
       * have to trim the value and omit space-separated values.
       */
      _cleanupFontValue(value) {
        return typeof value === "string" ? value.trim().split(" ")[0] : value;
      }
      /**
       * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
       * reference. This is required because WebKit browsers require references to be prefixed with
       * the current path, if the page has a `base` tag.
       */
      _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
          elements.forEach((attrs, element) => {
            attrs.forEach((attr) => {
              element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
            });
          });
        }
      }
      /**
       * Caches the children of an SVG element that have `url()`
       * references that we need to prefix with the current path.
       */
      _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || /* @__PURE__ */ new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
          funcIriAttributes.forEach((attr) => {
            const elementWithReference = elementsWithFuncIri[i];
            const value = elementWithReference.getAttribute(attr);
            const match = value ? value.match(funcIriPattern) : null;
            if (match) {
              let attributes = elements.get(elementWithReference);
              if (!attributes) {
                attributes = [];
                elements.set(elementWithReference, attributes);
              }
              attributes.push({ name: attr, value: match[1] });
            }
          });
        }
      }
      /** Sets a new SVG icon with a particular name. */
      _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
          const [namespace, iconName] = this._splitIconName(rawName);
          if (namespace) {
            this._svgNamespace = namespace;
          }
          if (iconName) {
            this._svgName = iconName;
          }
          this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe((svg) => this._setSvgElement(svg), (err) => {
            const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
            this._errorHandler.handleError(new Error(errorMessage));
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatIcon, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-rc.1", type: _MatIcon, isStandalone: true, selector: "mat-icon", inputs: { color: "color", inline: ["inline", "inline", booleanAttribute], svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, host: { attributes: { "role": "img" }, properties: { "class": 'color ? "mat-" + color : ""', "attr.data-mat-icon-type": '_usingFontIcon() ? "font" : "svg"', "attr.data-mat-icon-name": "_svgName || fontIcon", "attr.data-mat-icon-namespace": "_svgNamespace || fontSet", "attr.fontIcon": "_usingFontIcon() ? fontIcon : null", "class.mat-icon-inline": "inline", "class.mat-icon-no-color": 'color !== "primary" && color !== "accent" && color !== "warn"' }, classAttribute: "mat-icon notranslate" }, exportAs: ["matIcon"], ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatIcon, decorators: [{
      type: Component,
      args: [{ template: "<ng-content></ng-content>", selector: "mat-icon", exportAs: "matIcon", host: {
        "role": "img",
        "class": "mat-icon notranslate",
        "[class]": 'color ? "mat-" + color : ""',
        "[attr.data-mat-icon-type]": '_usingFontIcon() ? "font" : "svg"',
        "[attr.data-mat-icon-name]": "_svgName || fontIcon",
        "[attr.data-mat-icon-namespace]": "_svgNamespace || fontSet",
        "[attr.fontIcon]": "_usingFontIcon() ? fontIcon : null",
        "[class.mat-icon-inline]": "inline",
        "[class.mat-icon-no-color]": 'color !== "primary" && color !== "accent" && color !== "warn"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], inline: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], svgIcon: [{
      type: Input
    }], fontSet: [{
      type: Input
    }], fontIcon: [{
      type: Input
    }] } });
    MatIconModule = class _MatIconModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatIconModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatIconModule, imports: [MatCommonModule, MatIcon], exports: [MatIcon, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatIconModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatIconModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatIcon],
        exports: [MatIcon, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling2.mjs
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var RtlScrollAxisType, rtlScrollAxisType, scrollBehaviorSupported;
var init_scrolling2 = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling2.mjs"() {
    "use strict";
    (function(RtlScrollAxisType2) {
      RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
      RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
      RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
    })(RtlScrollAxisType || (RtlScrollAxisType = {}));
  }
});

// node_modules/@angular/cdk/fesm2022/test-environment.mjs
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}
var init_test_environment = __esm({
  "node_modules/@angular/cdk/fesm2022/test-environment.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule;
var init_platform = __esm({
  "node_modules/@angular/cdk/fesm2022/platform.mjs"() {
    "use strict";
    init_platform2();
    init_core();
    init_core();
    init_passive_listeners();
    init_shadow_dom();
    PlatformModule = class _PlatformModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _PlatformModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _PlatformModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _PlatformModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: PlatformModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/toolbar.mjs
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarRow, MatToolbar, MatToolbarModule;
var init_toolbar = __esm({
  "node_modules/@angular/material/fesm2022/toolbar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_platform();
    init_common_module();
    MatToolbarRow = class _MatToolbarRow {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatToolbarRow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: _MatToolbarRow, isStandalone: true, selector: "mat-toolbar-row", host: { classAttribute: "mat-toolbar-row" }, exportAs: ["matToolbarRow"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatToolbarRow, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-toolbar-row",
        exportAs: "matToolbarRow",
        host: { "class": "mat-toolbar-row" }
      }]
    }] });
    MatToolbar = class _MatToolbar {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the toolbar. This API is supported in M2 themes only, it has
       * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Reference to all toolbar row elements that have been projected. */
      _toolbarRows;
      constructor() {
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._checkToolbarMixedModes();
          this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
        }
      }
      /**
       * Throws an exception when developers are attempting to combine the different toolbar row modes.
       */
      _checkToolbarMixedModes() {
        if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
          const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatToolbar, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: _MatToolbar, isStandalone: true, selector: "mat-toolbar", inputs: { color: "color" }, host: { properties: { "class": 'color ? "mat-" + color : ""', "class.mat-toolbar-multiple-rows": "_toolbarRows.length > 0", "class.mat-toolbar-single-row": "_toolbarRows.length === 0" }, classAttribute: "mat-toolbar" }, queries: [{ propertyName: "_toolbarRows", predicate: MatToolbarRow, descendants: true }], exportAs: ["matToolbar"], ngImport: core_exports, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatToolbar, decorators: [{
      type: Component,
      args: [{ selector: "mat-toolbar", exportAs: "matToolbar", host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, { descendants: true }]
    }] } });
    MatToolbarModule = class _MatToolbarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatToolbarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatToolbar, MatToolbarRow], exports: [MatToolbar, MatToolbarRow, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: core_exports, type: MatToolbarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatToolbar, MatToolbarRow],
        exports: [MatToolbar, MatToolbarRow, MatCommonModule]
      }]
    }] });
  }
});

// src/app/header/header.ts
var Header;
var init_header3 = __esm({
  "src/app/header/header.ts"() {
    "use strict";
    init_tslib_es6();
    init_header();
    init_header2();
    init_core();
    init_icon();
    init_toolbar();
    Header = class Header2 {
    };
    Header = __decorate([
      Component({
        selector: "app-header",
        imports: [MatIconModule, MatToolbarModule],
        template: header_default,
        styles: [header_default2]
      })
    ], Header);
  }
});

export {
  Title,
  init_platform_browser,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  BACKSPACE,
  TAB,
  ENTER,
  ESCAPE,
  SPACE,
  LEFT_ARROW,
  UP_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
  DELETE,
  A,
  init_keycodes2,
  _getFocusedElementPierceShadowDom,
  _getEventTarget,
  init_shadow_dom,
  Platform,
  init_platform2,
  normalizePassiveListenerOptions,
  coerceNumberProperty,
  coerceElement,
  init_element,
  FocusMonitor,
  _CdkPrivateStyleLoader,
  init_style_loader,
  _VisuallyHiddenLoader,
  init_private,
  coerceArray,
  init_array,
  MediaMatcher,
  init_breakpoints_observer,
  CdkObserveContent,
  ObserversModule,
  init_observers,
  InteractivityChecker,
  FocusTrapFactory,
  LiveAnnouncer,
  _IdGenerator,
  init_id_generator,
  hasModifierKey,
  init_keycodes,
  ActiveDescendantKeyManager,
  FocusKeyManager,
  addAriaReferencedId,
  removeAriaReferencedId,
  init_a11y,
  Directionality,
  init_directionality,
  BidiModule,
  init_bidi,
  RtlScrollAxisType,
  supportsScrollBehavior,
  getRtlScrollAxisType,
  init_scrolling2,
  _isTestEnvironment,
  init_test_environment,
  init_platform,
  MatCommonModule,
  init_common_module,
  MatToolbarModule,
  init_toolbar,
  MatIconModule,
  init_icon,
  Header,
  init_header3 as init_header
};
/*! Bundled license information:

@angular/common/fesm2022/module.mjs:
@angular/common/fesm2022/http.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v20.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DC5PH5JY.js.map
