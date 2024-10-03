import './App.css'
import { create } from 'zustand'
import { LoaderIcon } from "lucide-react"

import Menu from "./Menu"
import Repos from "./Repos"

export const useStore = create(set => ({
  loading: false,
  repos: {
    daily: [],
    weekly: [],
    monthly: []
  },
  view: 'daily',
  setView: view => set({ view }),
  loadRepos: () => set(async state => {
    set({ loading: true })
    const url = `https://api.gitterapp.com/repositories?since=${state.view}`;
    const resp = await fetch(url);
    const body = await resp.json();
    const newRepos = Object.assign({}, state.repos, {
      [state.view]: body,
    })
    set({ loading: false, repos: newRepos })
  })
}))

function App() {
  const loading = useStore(state => state.loading)
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Zustand Example</h1>
      <h2>
        Example app showing how to use Zustand. <a className="hover:underline text-blue-800" href="https://kristianfreeman.com/just-enough-zustand">Read the blog post.</a>
      </h2>
      <div className="flex flex-col items-center gap-8">
        <Menu />
        {loading && <LoaderIcon className="animate-spin" />}
        <Repos />
      </div>
    </div>
  )
}

export default App
