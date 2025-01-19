import React from 'react'
import Noteitem from './Noteitem'
import '../styles/notes.css'

function Notes() {
    return (
        <>
            <div>
                <button type="button" className="btn addbtn position-absolute top-1 end-0 btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">+ Add
                </button>

                <h4 className='my-3 mx-4'>Hello Manohar</h4>

                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="editModalLabel">Add Note</h1>
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

            <div>
                <Noteitem />
            </div>
        </>
    )
}

export default Notes
