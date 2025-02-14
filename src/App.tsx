import Header from "./components/Header.tsx";
import goalsImg from "./assets/goal.jpg";
import Card from "./components/Card.tsx";
import { CardPriority } from "./components/Card.tsx";
import CardList from "./components/CardList.tsx";


export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your goals</h1>
      </Header>
     
      <Card
        title="New Card 1"
        description="Card descriprion"
        status={false}
        priority={CardPriority.Low}
        onComplete={() => console.log("Card completed")}
      ></Card>

      <CardList/>

    </main>
  );
}
