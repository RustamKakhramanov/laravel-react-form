import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth';
import useInputValue from '../models/InputValue';
import {sendMessage} from '../models/HomeForm';

function HomeForm () {
    let history = useHistory();
    let textMessage = useInputValue('textMessage');

    const handleSubmit = e => {
        e.preventDefault();

        sendMessage({
            textMessage: textMessage.value
        }).then(({data}) => {
            textMessage.reset();
        }).catch(error => {
            error.json().then(({errors}) => {
                [textMessage].forEach(({parseServerError}) => parseServerError(errors));
            });
        });
    };

    return (
        <div className="flex  items-center w-full flex-col py-4 min-h-screen bg-gray-200">

            <div className="p-8 flex flex-col items-center">
                <div>
                    <Link to="/" >
                        <img width="48" className="align-middle mx-2" alt="laravel" title="laravel" src="/images/icons/laravel.svg" />
                    </Link>
                </div>
            </div>

            <div className="bg-white border rounded border-grey-light w-1/2 sm:w-1/2 lg:w-1/2 xl:w-1/4 px-8 py-4 shadow">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text-message"> Your message </label>
                        <textarea
                            id="text-message"
                            name="text-message"
                            rows={'7'}
                            className={`appearance-none border rounded w-full py-1 px-3 bg-gray-100 ${textMessage.error ? 'border-red-500' : ''}`}
                            required
                            {...textMessage.bind}/>
                    </div>

                    <div className="mb-4">
                        <button className="border rounded p-2 text-white bg-indigo-500 w-full font-bold hover:bg-indigo-500-dark">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HomeForm;
