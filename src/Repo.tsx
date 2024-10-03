import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import { FolderGit, Star, GitFork } from "lucide-react"

const numberFormatter = new Intl.NumberFormat();

const Repo = ({ repo }: { repo: any }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center gap-2">
          <FolderGit />
          <a href={repo.url}>
            <strong>
              {repo.author} / {repo.name}
            </strong>
          </a>
        </div>
      </CardHeader>

      <CardContent>
        <div className="py-2 text-sm opacity-75">
          {repo.description}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star size={16} />
            {numberFormatter.format(repo.stars)} stars
          </div>

          <div className="flex items-center gap-1">
            <GitFork size={16} />
            {numberFormatter.format(repo.forks)} forks
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Repo;
