
type Disentangle = () => void;

export default class SignalBrowserRouter<S> {

  disentangles: Set<Disentangle>;
  root?: Element;
  routes?: S;
  previous?: string;
  next?: string;

  constructor(routes: S) {
    this.disentangles = new Set();
    this.routes = routes;
  }
}