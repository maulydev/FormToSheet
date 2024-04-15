import { SyntheticEvent } from "react";

const url =
  "GOOGLE_SHEET_SCRIPT_URL";

const App = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      body: new FormData(e.target as HTMLFormElement),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="Email" />
        <input type="datetime-local" name="CreatedAt" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default App;
