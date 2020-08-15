import React from 'react'
import axios from 'axios'

/**
 * Return percent of value / total
 * @param {int} value 
 * @param {int} total 
 */
const calculatePercent = (value, total) => Math.round(value / total * 100)

export default class FileUpload extends React.Component{
    state = {
        file: null,
        percent: 0,

        loading: false,
        submitted: false
    }

    handleChange = (event) => {
        console.log("FileUpload.handleChange event.target.files", event.target.files)

        this.setState({file: event.target.files[0], submitted: false})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({loading: true, submitted: true})
        console.log("FileUpload.handleSubmit this.state.file", this.state.file)

        const data = new FormData()
        data.append('files', this.state.file)

        const upload_res = await axios({
            method: 'POST',
            url: 'http://localhost:1337/upload',
            data,
            onUploadProgress: (progress) => this.setState({percent: calculatePercent(progress.loaded, progress.total)})
        })
        this.setState({loading: false})

        console.log("FileUpload.handleSubmit upload_res", upload_res)
    }

    render(){
        const {percent, loading, submitted} = this.state
        console.log("FileUpload.render percent", percent)
        return(
            <div className="FileUpload">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="file" />
                    <button>Submit</button>
                </form>
                {submitted &&
                     <div className="Progress">
                        <div className="Progress__Seek" style={{width: `${percent}%`}}></div>
                    </div>
                }
               
                {loading &&
                    <p>Uploading...</p>
                }
            </div>
        )
    }
}