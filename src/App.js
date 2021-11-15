import React, { useState } from "react";

const seriesData = {
  fiction: [
    {
      name: "Stranger Things",
      description:
        "Stranger Things is an American science fiction horror drama television series",
      rating: "imdb 8.8/10",
    },
    {
      name: "Black Mirror",
      description:
        "This sci-fi anthology series explores a twisted, high-tech near-future ",
      rating: "imdb 8.8/10",
    },
    {
      name: "The Walking Dead",
      description:
        "The Walking Dead is an American post-apocalyptic horror television series based on the comic book series",
      rating: "imdb 7.6/10",
    },
    {
      name: "The 100",
      description:
        "Desperately looking for a solution, the ark's leaders send 100 juvenile prisoners back to the planet to test its habitability.",
      rating: "imdb 7.6/10",
    },
  ],

  sitcom: [
    {
      name: "The Office",
      description:
        "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees",
      rating: "imdb 8.9/10",
    },
    {
      name: "Brooklyn 99",
      description:
        "Brooklyn Nine-Nine is an American police procedural comedy television series",
      rating: "imdb 8.4/10",
    },
    {
      name: "Friends",
      description:
        "Friends is an American situation comedy about six 20-30s-year old friends living in the New York City",
      rating: "imdb 8.1/10",
    },
    {
      name: "The Big Bang Theory",
      description:
        "The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny.",
      rating: "imdb 8.1/10",
    },
  ],

  drama: [
    {
      name: "Pretty Little Liars",
      description:
        "The series follows the lives of four teenage girls - Aria, Spencer, Hanna and Emily; four estranged friends whose darkest secrets are about to unravel.",
      rating: "imdb 7.4/10",
    },
    {
      name: "The Vampire Diaries",
      description:
        "The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec",
      rating: "imdb 7.7/10",
    },
    {
      name: "Riverdale",
      description:
        "Riverdale is an American teen drama television series based on the characters of Archie Comics.",
      rating: "imdb 6.9/10",
    },
    {
      name: "Gossip Girl",
      description:
        "Gossip Girl is an American teen drama television series based on the novel series of the same name written by Cecily von Ziegesar.",
      rating: "imdb 7.4/10",
    },
  ],

  horror: [
    {
      name: "Haunting of Hill House",
      description:
        "The Haunting of Hill House is an American supernatural horror drama television series created and directed by Mike Flanagan",
      rating: "imdb 8.6/10",
    },
    {
      name: "Haunting of Bly Manor",
      description:
        "The Haunting of Bly Manor is an American drama-gothic romance streaming television series created by Mike Flanagan",
      rating: "imdb 7.4/10",
    },
    {
      name: "Chilling Adventures of Sabrina",
      description:
        "Chilling Adventures of Sabrina is an American supernatural horror streaming television series developed by Roberto Aguirre-Sacasa for Netflix",
      rating: "imdb 7.5/10",
    },
    {
      name: "Locke and Key",
      description:
        "Locke & Key is a 2020 American supernatural horror drama streaming television series developed by Carlton Cuse, Meredith Averill, and Aron Eli Coleite",
      rating: "imdb 7.4/10",
    },
  ],
};

const containerCenter = { "max-width": "500px", margin: "auto" };

export default function App() {
  const [selectedType, setType] = useState("fiction");

  function onClickHandler(type) {
    setType(type);
  }

  return (
    <div className="">
      <section class="hero">
        <div class="hero-body">
          <div class="notification is-primary title is-4">
            seriesRecommender 🎬
          </div>
        </div>
      </section>

      <div style={containerCenter}>
        <h1
          style={{ margin: "2rem " }}
          className="is-size-4 has-text-weight-semibold"
        >
          What to watch? 🍿
        </h1>

        <div style={{ marginLeft: "1rem" }}>
          {Object.keys(seriesData).map((type) => (
            <button
              className="button is-primary"
              style={{ marginRight: "1rem" }}
              onClick={() => onClickHandler(type)}
            >
              <span>{type}</span>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {seriesData[selectedType].map((type) => (
              <li>
                <div className="box" style={{ marginTop: "1rem" }}>
                  <h2 className="is-size-4 has-text-weight-bold">
                    {type.name}
                  </h2>
                  <p className="is-size-6 has-text-weight-normal">
                    {type.description}
                  </p>
                  <p className="is-size-7 has-text-weight-light">
                    {type.rating}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer
        className="footer has-background-light"
        style={{ marginTop: "1.5rem" }}
      >
        <div className="content has-text-centered">
          <p>
            <strong>Get source code here </strong>
            <a href="">Github</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
