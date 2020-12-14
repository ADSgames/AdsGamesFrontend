type CSSModule = Record<string, string>;

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.svg" {
  const module: string;
  export default module;
}

declare module "*.png" {
  const module: string;
  export default module;
}
