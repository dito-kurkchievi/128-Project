import { $api } from "../../app/config/api";
import classes from "./MainPage.module.css"
import { useEffect } from "react";

const MainPage = (props) => {

  const fetchSomething = async () => {
    const response = await $api.get('/profile');
    console.log(response.data);
  }

  useEffect(() => {
    fetchSomething();
  }, [])

  return (
    <div className={classes.MainPage}>
      <h1>Main Page</h1>
    </div>
  );
};

export { MainPage }