import React from 'react'
import "./Keyhits.css"

export default function Block({ keys, cName }) {
    return (
        <div className={`block ${cName}`}>
            {
                keys.map(
                    (key) =>
                        <kbd id={key.key}
                            data-key={key.datakey}
                            className="keys">
                            {
                                key.key.toUpperCase()
                            }
                        </kbd>
                )
            }
        </div>
    )
}
