import { useRoutes } from "react-router-dom";
import routes from "./router";
import "./styles.css";
const App = () => {
  const content = useRoutes(routes);

  return <>{content}</>;
};
export default App;

// import "./styles.css";
// import Button from '@mui/material/Button';
// export default function App() {
//   return (
//     <div className="App">
//       <Button variant="contained">Hello World</Button>
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
