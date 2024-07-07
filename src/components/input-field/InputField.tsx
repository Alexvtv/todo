import { memo, useState } from "react";
import styles from './InputField.module.scss';

type Props = {
    addTodo: (title: string) => void
}

export const InputField = memo(({ addTodo }: Props) => {
    const [value, setValue] = useState<string>('');

    const clickHandler = () => {
        const title = value.trim();

        if (title) {
            addTodo(title)
            setValue('')
        }
    }
    const keyDownHandler = (event: { key: string }) => {
        if (event.key === 'Enter') {
            clickHandler();
        }
    }

    return <div className={styles.field}>
        <input
            type="text"
            value={value} onChange={e => setValue(e.target.value)} placeholder="what needs to be done?"
            className={styles.field__input} onKeyDown={keyDownHandler} />
        <button className={styles.field__button} onClick={clickHandler} data-testid='create'>
            {">"}
        </button>
    </div>
}, () => true);