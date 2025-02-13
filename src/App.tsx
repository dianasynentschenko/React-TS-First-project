import Goal from "./components/Goal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goal.jpg";

export default function App()
{
  return (
  <main>
    <Header image = {{ src: goalsImg, alt: 'A list of goals'}}>
      <h1>Your goals</h1>
    </Header>
    <Goal title="Some Title" descriptin="Some Description"/>
    
  </main>
  );
}