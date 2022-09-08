import { useState } from "react";
import CounterUnmounts from "./components/Lifecycle/CounterUnmounts";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {/* <User name="Yunus Emre" surname="Topçu" age={24} country={"Bakırköy"} /> 
      <User name="Sude Naz" surname="Topçu" age={15} country={"Zeytinburnu"} /> 
      <User name="Hatice" surname="Topçu" age={46} country={"Keşap"} /> 
      <User name="Namık" surname="Topçu" age={48} country={"Dereli"} />  */}
      {/* <User data={{ name: "Yunus Emre", surname: "Topçu", age: 24, country: "Bakırköy" }} /> */}
      {/* friends={["Sude Naz", "Hatice", "Namık"]} */}
      {
        isVisible && <CounterUnmounts />
      }
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
    </div>
  );
}

export default App;
