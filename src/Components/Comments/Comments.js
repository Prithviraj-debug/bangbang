import React, { useState } from 'react'
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


export default function Comments() {
    const [user, setUser] = useState("");
    const submit = (e) => {
        e.preventDefault();
        alert(`${user}`);
    }

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Raj"
                    text="good"
                    time="Today at 11:02AM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Yash"
                    text="Nice"
                    time="Today at 1:22PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Elon"
                    text="greatttt"
                    time="Today at 3:13PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>


        </div>
    )
}
