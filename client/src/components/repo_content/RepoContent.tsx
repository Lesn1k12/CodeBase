import React, { useEffect, useState } from 'react';
import { getRepo } from '../../api/repoApi';

interface RepoContentProps {
  repoId: number;
}

function RepoContent({ repoId }: RepoContentProps) {
  const [repo, setRepo] = useState<any>(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const repoData = await getRepo(repoId);
      setRepo(repoData);
    };

    fetchRepo();
  }, [repoId]);

  return (
    <div>
      <h1>Repository ID:</h1>
      <p>{repoId}</p>
      {repo && (
        <div>
          <h2>Repository Data:</h2>
          <pre>{JSON.stringify(repo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default RepoContent;