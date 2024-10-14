import { useShallow } from "zustand/react/shallow"
import { useEffect } from "react";
import { useStore } from "./App"
import Repo from "./Repo";

const Repos = () => {
  const [loadRepos, repos, view] = useStore(
    useShallow(state => [state.loadRepos, state.repos, state.view])
  )

  useEffect(() => {
    loadRepos()
  }, [view]);

  return repos[view] ? (
    <div className="mx-auto w-full lg:w-1/2 flex flex-col gap-4">
      {repos[view].map((repo) => (
        <Repo key={repo.url} repo={repo} />
      ))}
    </div>
  ) : (
    <span>No repos found</span>
  );
};

export default Repos;
