import './App.css'
import { create } from 'zustand'
import { LoaderIcon } from "lucide-react"

import Menu from "./Menu"
import Repos from "./Repos"

export type ViewOption = 'daily' | 'weekly' | 'monthly'

type Store = {
  loading: boolean
  repos: {
    daily: any[]
    weekly: any[]
    monthly: any[]
  }
  view: ViewOption
  setView: (view: ViewOption) => void
  loadRepos: () => void
}

export const useStore = create<Store>((set, get) => ({
  loading: false,
  repos: {
    daily: [],
    weekly: [],
    monthly: []
  },
  view: 'daily',
  setView: view => set({ view }),
  loadRepos: async () => {
    const { view, repos } = get()
    set({ loading: true })
    const url = `https://api.gitterapp.com/repositories?since=${view}`;
    const resp = await fetch(url);
    const body = await resp.json();
    set({
      loading: false,
      repos: { ...repos, [view]: body }
    })
  }
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
