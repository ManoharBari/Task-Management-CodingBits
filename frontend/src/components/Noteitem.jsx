import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import '../styles/notes.css'

function Noteitem() {
    const note = {
        title: "Note Title",
        description: "Note Description",
        tag: "Note Tag",
        date: "10.10.2021"
    }
    return (
        <div className="container">
            <div className="noteItem">
                <div className="noteContent">
                    <div className="note-title">
                        <h3 className="noteTitle">{note.title}</h3>
                        <div className="action">
                            <span className='editbtn'> <Pencil size={16} /> </span>
                            <span className='delbtn'> <Trash2 size={16} /> </span>
                        </div>
                    </div>
                    <p className="notePreview">{note.description}</p>
                    <div className="noteMeta">
                        <div className="tags">
                            <span className="tag">{note.tag}</span>
                        </div>
                        <time className="timestamp">{`Created At ${note.date}`}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
