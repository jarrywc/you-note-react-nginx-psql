import React from 'react';
import { NoteProps} from "./Note";


// THIS IS HOW THE NOTE WILL BE DISPLAYED
 const NoteInfo: React.FC<{note: NoteProps}> = ({note }) => {
    const {id, videoId, locationIndex, content} = note;// || {};

    return note ? (
        <>
            <li key={id.toString()} about={"id: "+id+" videoId: "+videoId+" locationIndex "+locationIndex}>
                <p style={{overflowWrap: "break-word",
                    wordWrap: "break-word",
                    hyphens: "auto"}}>{content}</p>
            </li>

        </>
    ): <p>Note loading...</p>;
}

export default NoteInfo;