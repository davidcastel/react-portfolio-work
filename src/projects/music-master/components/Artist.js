import React from "react";

// stateless funcitonal systax to declare the component
const Artist = ({ artist }) => {
  if (!artist) return null;
  // have props input so that the parent component can pass data down to the Artist component
  // relvent artist object is stored in the main app component state
  // This component will display the artist data
  // want the app component to pass the artist object through props
  const { images, name, followers, genres } = artist;

  return (
    <div>
      {/* Diplay the name of the artist */}
      <h3> {name} </h3>
      {/* Display the # of followers the artist has */}
      <p> {followers.total} followers </p>
      {/* Display the genre of music by using the join() to put the string into one, split each genre with a comma */}
      <p> {genres.join(",")} </p>
      {/* Gets the first image(.url connects to the actual image)*/}
      {/* !Good Practice to add an Alt tag if the img does not show up! */}
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: "cover"
        }}
      />
    </div>
  );
};

export default Artist;
