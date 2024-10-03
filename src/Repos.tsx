import React, { useEffect } from "react";
import { useStore } from "./App"
import Repo from "./Repo";

const Repos = () => {
  const {repos, loadRepos, view} = useStore();

  useEffect(() => {
    loadRepos()
  }, [view]);

  return repos[view] ? (
    <div className="mx-auto w-full lg:w-1/2 flex flex-col gap-4">
      {repos[view].map((repo) => (
        <Repo repo={repo} />
      ))}
    </div>
  ) : (
    <span>No repos found</span>
  );
};

export default Repos;
