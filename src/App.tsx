import Header from "./components/Header.tsx";
import goalsImg from "./assets/goal.jpg";
import CardList from "./components/CardList.tsx";
import ApiCardList from "./components/ApiCardList.tsx";


export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your goals</h1>
      </Header>    
      

      <CardList/>

      <ApiCardList/>

    </main>
  );
}
