import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminder(props: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState("");

    const submitform = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return; // if title not truthy, then we return // no op
        props.onAddReminder(title);
        setTitle("");
    }

    return (
        <form onSubmit={submitform}>
            <label htmlFor="title"></label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
            <button className="btn btn-primary rounded-pill my-3" type='submit' >Add</button>
        </form>
    );
}

export default NewReminder;
