import React from 'react'

interface RepoContentProps {
  repoId: number; 
}

function RepoContent({ repoId }: RepoContentProps) {
  return (
    <div>
      <h1>Repository ID:</h1>
      <p>{repoId}</p>
    </div>
  );
}


export default RepoContent