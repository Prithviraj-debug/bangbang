import React from 'react';
import { useFetch } from '../useFetch';

// <form onSubmit={submit}>
//                 <input value={user}
//                     type="text"
//                     placeholder="Enter Username..."
//                     onChange={
//                         (e) => setUser(e.target.value)
//                     } />
//                 <button type="submit">Submit</button>
//             </form>


function GithubUsers() {
    const { loading, data, error } = useFetch(
        `https://api.github.com/users`
    );

    if (loading) return <h1>Loading...</h1>

    if (error)
        return (
            <pre>{JSON.stringify(error, null, 2)}</pre>
        )

    return (<ul>
        {data.map((user) => (
            <li key={user.id}>{user.login}</li>
        ))}
    </ul>)
}

export default GithubUsers;