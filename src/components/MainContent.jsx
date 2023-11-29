import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Divider, TextField, IconButton, InputAdornment } from "@mui/material";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";

import Lodaer from "./Lodaer";
function MainContent() {
  const [InputeState, setInputeState] = useState("قنا");
  const [isLoadding, SetisLoadding] = useState(false);
  const [data, SetData] = useState();
  const [date, SetDate] = useState();
  const [cityName, SetCityName] = useState();
  const slahName = {
    fajr: "الفجر",
    dohr: "الضهر",
    asr: "العصر",
    maghrap: "المغرب",
    asha: "العشاء",
  };
  useEffect(() => {
    axios
      .get(
        `http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=EG&city=${InputeState}`
      )
      .then((response) => {
        SetDate(response.data.data.date.gregorian.date);
        SetData(response.data.data.timings);
        console.log(data);
        console.log(date);
        SetCityName(InputeState);
      })
      .catch((e) => console.log(e));
  }, []);

  const cityTimings = async () => {
    try {
      console.log(InputeState);
      SetisLoadding(true);
      const response = await axios.get(
        `http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=EG&city=${InputeState}`
      );

      SetDate(response.data.data.date.gregorian.date);
      SetData(response.data.data.timings);
      console.log(data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        SetisLoadding(false);
      }, 1000);
    }
    SetCityName(InputeState);
    setInputeState("");
  };
  return (
    <>
      {isLoadding && <Lodaer />}
      <Container maxWidth="lg" sx={{ margin: "100px auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <h4>{date}</h4>
              <h4>{cityName}</h4>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h4>باقي من الوقت علي الصلاه القادمه</h4>
              <h4>1:12:12</h4>
            </div>
          </Grid>
        </Grid>
        <Divider
          sx={{ borderColor: "white", opacity: "0.2", margin: "10px" }}
        />
        {data && (
          <Stack
            width="100%"
            flexWrap="wrap"
            my="0px"
            minHeight="300px"
            gap="20px"
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
          >
            <Card
              time={data.Fajr}
              name={slahName.fajr}
              image="src/assets/image/fajr-prayer.png"
              style={{ flex: "1 0 100%" }}
            />
            <Card
              time={data.Dhuhr}
              name={slahName.dohr}
              image="./src/assets/image/dhhr-prayer-mosque.png"
              style={{ flex: "1 0 100%" }}
            />
            <Card
              time={data.Asr}
              name={slahName.asr}
              image="./src/assets/image/asr-prayer-mosque.png"
              style={{ flex: "1 0 100%" }}
            />
            <Card
              time={data.Maghrib}
              name={slahName.maghrap}
              image="./src/assets/image/sunset-prayer-mosque.png"
              style={{ flex: "1 0 100%" }}
            />
            <Card
              time={data.Isha}
              name={slahName.asha}
              image="./src/assets/image/night-prayer-mosque.png"
              style={{ flex: "1 0 100%" }}
            />
          </Stack>
        )}
        <Container
          maxWidth="lg"
          sx={{
            marginTop: "4px",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TextField
            sx={{ width: "80%", marginTop: "50px", fontSize: "20px" }}
            onChange={(e) => {
              setInputeState(e.target.value);
            }}
            value={InputeState}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white",
              },
              startAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="search" onClick={cityTimings}>
                    <FindReplaceIcon sx={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Container>
    </>
  );
}

export default MainContent;
