import { createRoot } from "soften-js";
import { BrowserRouter } from "./components";
import { createBrowserRouter } from "./utils";
import useNavigate from "./use/use-navigate";

function Home (){
  const navigate = useNavigate();
  const onclick = () => navigate.push('/about')

  return (
    <div>
      <button on:click={onclick}>app</button>
    </div>
  )
}

function About(){
  const navigate = useNavigate();
  const onclick = () => navigate.push('/')

  return (
    <div>
      <button on:click={onclick}>home</button>
    </div>
  )
}

const routes = createBrowserRouter([
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/about',
    component: <About />
  }
])

createRoot(<BrowserRouter routes={routes} />).mount('#app')