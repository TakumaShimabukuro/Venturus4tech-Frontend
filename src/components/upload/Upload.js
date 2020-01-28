import React, { Fragment, useState } from "react"
import { Grid, Paper, Button, InputBase } from "@material-ui/core"
import { DropzoneArea } from "material-ui-dropzone"

import "./Upload.css"

const Upload = () => {

    const [comment, setComment] = useState("")
    const [image, setImage] = useState([])

    const onUpload = async e => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <Grid item xs={12} className="grid postcard">
                <Paper className="paper">
                    <form className="form" onSubmit={onUpload}>
                        <InputBase
                            fullWidth
                            placeholder="Add a content"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                        <DropzoneArea
                            dropzoneText="Select or drop your image"
                            dropzoneClass="droparea"
                            filesLimit={1}
                            onChange={files => setImage(files)}
                            acceptedFiles={["image/*"]}
                            showAlerts={false}
                        />
                        <Button
                            className="postbutton"
                            type="submit"
                            color="primary"
                            disabled={image.length === 0}
                        >
                            Post
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Fragment>
    )
}
export default Upload