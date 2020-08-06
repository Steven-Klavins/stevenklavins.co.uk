import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Components/GitHubAPI/GitHubAPI.css";
import ProjectCard from "../ProjectCard/ProjectCard";

function ApiData() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Steven-Klavins/starred")
      .then((res) => {
        console.log(res);
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="cardSpacer">
        <div className="cardWidth">
          {repos.map((repos) => (
            <div className="githubRepolistFloat" key={repos.id}>
              <ProjectCard
                link={repos.html_url}
                name={repos.name}
                description={repos.description}
                update={repos.updated_at}
                language={repos.language}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApiData;
