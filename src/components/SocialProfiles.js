import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles.js";

const SocialProfile = props => {
  const { link, image } = props.SocialProfile;

  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt="Social-profile"
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h2> Connect With Me </h2>
    <div>
      {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
        return (
          <SocialProfile
            key={SOCIAL_PROFILE.id}
            SocialProfile={SOCIAL_PROFILE}
          />
        );
      })}
    </div>
  </div>
);

export default SocialProfiles;
