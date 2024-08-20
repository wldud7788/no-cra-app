import { add } from "./add.js";

const App = () => {
  const apiUrl = process.env.APP_API_URL;
  console.log(apiUrl);

  const sum = add(1, 2);
  return (
    <>
      <p>{sum}</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
