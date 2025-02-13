import Goal from "./components/Goal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goal.jpg";
import Card from "./components/Card.tsx";
import { CardPriority } from "./components/Card.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your goals</h1>
      </Header>
      <Goal title="Some Title" descriptin="Some Description" />
      <Card
        title="New Card 1"
        description="Card descriprion"
        status={false}
        priority={CardPriority.Low}
      ></Card>
      <Card
        title="New Card 2"
        description="Card descriprion"
        status={false}
        priority={CardPriority.Low}
      ></Card>
      <Card
        title="New Card 3"
        description="Card descriprion"
        status={false}
        priority={CardPriority.Low}
      ></Card>
      <Card
        title="New Card 4"
        description="Card descriprion"
        status={false}
        priority={CardPriority.Low}
      ></Card>
    </main>
  );
}
