import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import '../styles/notes.css'
import { useRef } from 'react'

function Noteitem() {
    const repOpen = useRef(null)

    const handleClick = () => {
        repOpen.current.click()
    }
    const note = {
        title: "Note Title",
        description: "Note Description",
        tag: "Note Tag",
        date: "10.10.2021"
    }
    return (
        <>
            <div>
                <button type="button" ref={repOpen} className="d-none" data-bs-toggle="modal" data-bs-target="#editModal">+ Add
                </button>

                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="editModalLabel">Edit Note</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="update-editor">
                                        <input
                                            type="text"
                                            placeholder="Note Title"
                                            className="titleInput"
                                            name='title'
                                            required
                                        />
                                        <textarea
                                            placeholder="Start typing your note here..."
                                            className="contentInput"
                                            name='description'

                                            required
                                        />
                                        <div className="tagsSection">
                                            <input
                                                type="text"
                                                placeholder="Add a tag"
                                                className="tagInput"
                                                name='tag'

                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="action-btn upbtn-close" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="action-btn upbtn-save">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="noteItem">
                    <div className="noteContent">
                        <div className="tags">
                            <span className="tag">{note.tag}</span>
                        </div>
                        <div className="note-title">
                            <h3 className="noteTitle">{note.title}</h3>
                            <div className="action">
                                <span className='editbtn' onClick={handleClick}> <Pencil size={16} /> </span>
                                <span className='delbtn'> <Trash2 size={16} /> </span>
                            </div>
                        </div>
                        <p className="notePreview">{note.description}</p>
                        <div className="noteMeta">

                            <time className="timestamp">{`Created At ${note.date}`}</time>
                        </div>
                    </div>
                </div>
           

            </div>
        </>
    )
}

export default Noteitem
