import { memo } from "react";
import { Todo } from "../../App";
import styles from './TodoItem.module.scss';

type Props = Todo & {
    changeTodoStatus: () => void
}

export const TodoItem = memo(({ title, status, changeTodoStatus }: Props) => {
    return <div className={styles.item}>
        <button className={styles.item__checkmark} onClick={changeTodoStatus} data-testid="checkmark">
            {status == 'completed' && "✓"}
        </button>
        <p className={styles.item__title}>
            {title}
        </p>
    </div>
}, (prev, next) => prev.status === next.status)