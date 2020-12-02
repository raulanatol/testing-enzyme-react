import React, { FC, FormEvent, useRef } from 'react';

export const NewMovie: FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Enviando...', nameRef.current?.value);
    };

    return <div>
        <form onSubmit={handleOnSubmit}>
            <label>
                Name:
                <input ref={nameRef} type="text"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>;
};
