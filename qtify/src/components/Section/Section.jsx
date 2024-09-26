import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Tabs from "../Tabs/Tabs";

const Section = ({ title, apiUrl, type }) => {
  const [items, setItems] = useState([]);
  const[filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    performApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const performApiCall = async () => {
    setIsLoading(true);
    const url = apiUrl;
    try {
      const response = await axios.get(url);
      setItems(response.data);
      setFilteredItems(response.data);
      setIsLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 500) {
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Could not fetch songs. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
      }
      setIsLoading(false);
    }
  };

  const handleCollapse = () => {
    const currValue = isCollapse;
    setIsCollapse(!currValue);
  };

  const renderCard = (item, type) => <Card data={item} type={type} />;
  return (
    <div className={styles.body}>
      {isLoading ? (
        <Box>
          <CircularProgress color="success" />
        </Box>
      ) : isCollapse ? (
        //Carousel

        <div>
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            {type !== "song" && (
              <p className={styles.collapse} onClick={handleCollapse}>
                Show All
              </p>
            )}
          </div>
          {type === "song" && <Tabs allItems={items} setFilter={setFilteredItems} />}
          <Carousel data={filteredItems} callback={renderCard} type={type} />
        </div>
      ) : (
        //Grid

        <div>
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            <p className={styles.collapse} onClick={handleCollapse}>
              Collapse
            </p>
          </div>
          <div className={styles.container}>
            {filteredItems.map((item) => renderCard(item, type))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Section;
