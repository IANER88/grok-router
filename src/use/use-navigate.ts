import { browser_routers } from '../components/browser-router';

export const test = (path: string, url: string) => {
  const regex = /^:.*$/;
  const split = /[^/]+/g;

  const one = path.match(split);
  const two = url.match(split) ?? [];
  if (path === url) return true;
  if (one?.length !== two?.length) return false;
  
  const hand = one?.filter((path, index) => {
    console.log(regex.test(two[index]) || path === two[index]);
    console.log(two[index], path);

  });

  return hand.length === two.length;
}


export default function useNavigate() {
  const [browser] = browser_routers;

  return {
    push: (to: string) => {

      history.pushState({}, '', to);

      for (const route in browser.routes) {
        if (test(to, route)) {
          const node = (browser.routes as any)[route]?.render();
          browser.root?.replaceWith(node);
          browser.root = node;
        }
      }
    }
  }
}