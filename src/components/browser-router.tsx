
import SignalBrowserRouter from "../signal/signal-browser-router";
import { test } from "../use/use-navigate";
import type { BrowserRouter } from "../utils/create-browser-router"
import createBrowserRouter from "../utils/create-browser-router";

type BrowserRouterProps = {
  routes: ReturnType<typeof createBrowserRouter>
}

export const browser_routers: SignalBrowserRouter<{}>[] = [];

export default function BrowserRouter(props: BrowserRouterProps) {

  const {
    routes
  } = props;

  const browser = new SignalBrowserRouter(routes)
  browser_routers.push(browser);
  const url = location.pathname;

  for (const to in routes) {
    console.log(test(to, url));
    
    if (test(to, url)) {
      browser.root = (routes[to] as any).render();
      return browser.root;
    }
  }

} 