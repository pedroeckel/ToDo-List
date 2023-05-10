import styles from './task.module.css';
import buttonDelete from './bin.svg';
import layer1 from '../Tasks/layer1.svg'
import layer2 from '../Tasks/layer2.svg'

interface ITaskProps{
    id: number;
    title: string;
    isComplete: boolean;
    onChangeCompleteTask: (ev: any, id: number) => void
    onDeleteTask:(ev: any, id: number) => void
}

export function Task({id,title,isComplete, onChangeCompleteTask, onDeleteTask}: ITaskProps) {


    return (
        <div className={styles.task}>  
            <button onClick={ev => onChangeCompleteTask(ev, id)} className={styles.check}> 
              {isComplete ? <img src={layer1} /> : <div />} {/*marca o botão como verificado ou check, cor roxa*/}
            </button>
            
            
            <button onClick={ev => onDeleteTask(ev, id) } className={styles.buttonDelete}>
            <img src={buttonDelete} />
            </button>

            
        </div>
    )
}