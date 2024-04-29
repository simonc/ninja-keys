export interface INinjaAction {
  id: string;
  title: string | Function;
  hotkey?: string;
  handler?: Function;
  matcher?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: string[];
  section?: string;
}
