import styles from "./task.module.css";
import buttonDelete from "./bin.svg";
import layer1 from "../Tasks/layer1.svg";

interface ITaskProps {
  id: number;
  title: string;
  isComplete: boolean;
  onChangeCompleteTask: (ev: any, id: number) => void;
  onDeleteTask: (ev: any, id: number) => void;
}

export function Task({
  id,
  title,
  isComplete,
  onChangeCompleteTask,
  onDeleteTask,
}: ITaskProps) {
  return (
    <div className={styles.task}>
      <button
        onClick={(ev) => onChangeCompleteTask(ev, id)}
        className={styles.check}
      >
        {isComplete ? <img src={layer1} /> : <div />}{" "}
      </button>

      <p className={isComplete ? styles.text : undefined}>{title}</p>

      <button
        onClick={(ev) => onDeleteTask(ev, id)}
        className={styles.buttonDelete}
      >
        <img src={buttonDelete} />
      </button>
    </div>
  );
}
