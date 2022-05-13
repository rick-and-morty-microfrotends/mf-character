import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";

export default function Root(props) {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
