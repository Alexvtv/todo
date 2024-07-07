import { FilterStatus } from "../../App";
import styles from './Filter.module.scss';

type Props = {
    status: FilterStatus,
    activeTodos: number,
    setStatus: (status: FilterStatus) => void,
    clear: () => void,
}

export const Filter = ({ status: filterStatus, activeTodos, setStatus, clear }: Props) => {
    const statusList: FilterStatus[] = ['all', 'active', 'completed']
    return <div className={styles.filter}>
        <p className={styles.filter__number}>{activeTodos} items left</p>
        {
            statusList.map((status, index) =>
                <button
                    key={index}
                    className={`${styles.filter__status} ${status === filterStatus ? styles.filter__activeStatus : ''}`}
                    onClick={() => setStatus(status)}>
                    {status}
                </button>)
        }
        <button className={styles.filter__clear} onClick={clear}>Clear completed</button>
    </div>
};