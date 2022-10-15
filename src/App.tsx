import { useMultistepForm } from "./useMultistepForm";
function App() {
  const { next } = useMultistepForm([]);
  return (
    <>
      <h1>Hi</h1>
      <button onClick={next}>Click Me</button>
    </>
  );
}

export default App;
