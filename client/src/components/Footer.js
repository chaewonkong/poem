import React from "react";
import styled from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Navigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </Navigation>
    </div>
  );
};

const Navigation = styled(BottomNavigation)`
  background: ${props => props.theme.lightGreyColor};
`;

export default Footer;
