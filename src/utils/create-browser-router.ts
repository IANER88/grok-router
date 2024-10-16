import { JSX } from "soften-js/jsx-runtime";


export type BrowserRouter = {
  path: string;
  component: JSX.Element;
  children?: BrowserRouter[];
}

type BrowserRouters = BrowserRouter[]

export default function createBrowserRouter(routes: BrowserRouters) {

  const browser = Object.fromEntries(
    routes.map((item) => [item.path, item.component])
  )

  return browser;
}