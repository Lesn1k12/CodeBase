import React from 'react'
import { useParams } from 'react-router-dom'
import './repoPage.css'
import RepoSideBar from '../../components/repo_sidebar/RepoSideBar'
import RepoContent from '../../components/repo_content/RepoContent'


function RepoPage() {

  const { repoId } = useParams();

  return (
    <div className="container">
      <div className="left sidebar">
        <RepoSideBar/>
      </div>
      <main className="center">
        <div className="repo_options">
          
        </div>
        <div className="repo_content">
          <RepoContent repoId={repoId ? parseInt(repoId) : 0}/>
        </div>
      </main>
    </div>
  )
}

export default RepoPage