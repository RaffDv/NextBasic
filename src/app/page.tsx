"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [repositories, setRepositories] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/RaffDv/repos")
      .then((res) => res.json())
      .then((data) => {
        const repoNames = data.map((item: any) => item.name);

        setRepositories(repoNames);
      });
  }, []);
  return (
    <ul>
      {repositories.map((repo) => {
        return <li key={repo}>{repo}</li>;
      })}
    </ul>
  );
}
