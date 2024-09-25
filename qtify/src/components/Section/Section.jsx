import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({title}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    performApiCall();
  }, []);

  const performApiCall = async () => {
    setIsLoading(true);
    const url = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      const response = await axios.get(url);
      setItems(response.data);
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
  return (
    <div className={styles.body}>
      {isLoading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            <p className={styles.collapse} >Show All</p>
          </div>
          <div className={styles.container}>
            {items.map((item) => (
              <div>
                <Card data={item} type={"album"} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Section;
