type GoalProps = {
  title: string;
  descriptin: string;
};

export default function Goal({ title, descriptin }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{descriptin}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
