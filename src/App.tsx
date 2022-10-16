import { useMultistepForm } from "./useMultistepForm";
import PersonalInfo from "./personalInfo";
import ContactInfo from "./contactInfo";
import AccountInfo from "./accountInfo";
function App() {
  const {
    isLastStep,
    isFirstStep,
    currentStepIndex,
    step,
    next,
    back,
    totalSteps,
  } = useMultistepForm([<PersonalInfo />, <ContactInfo />, <AccountInfo />]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        style={{
          border: "2px solid blue",
          position: "relative",
          background: "white",
          padding: "1rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ position: "absolute", top: "2px", right: "2px" }}>
            {currentStepIndex + 1}/{totalSteps}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type={"submit"} onClick={back}>
                Back
              </button>
            )}

            <button type={"submit"} onClick={next}>
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
