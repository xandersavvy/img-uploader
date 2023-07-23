import axios from "axios"
import { useState } from "react"

export default function ImageComp(this: any) {
    const [file, setFile] = useState<File>()
    const [err, setErr] = useState("")
    const handleChange = (e: { target: any, preventDefault: any }) => {
        if (e.target.files[0] != undefined && e.target.files[0].type.includes("image")) {
            setFile(e.target.files[0])
            setErr("")
            console.log(e.target.files[0])
        } else {
            setFile(undefined)
            setErr(`Error uploading file`)
        }
    }
    const handleUpload = () => {
        if (file == undefined) return;
        const url = "http://localhost:8080/";
        if(file.size>490000){
            setErr("Please upload something less than 400kb");
            setFile(undefined);
            return;
        }
        const formData = new FormData();
        formData.append("image", file);
        axios.post(url, formData).then(({ data }) => {
            if (data) {
                setErr("")
            } else {
                setErr("Something went wrong")
            }
            setFile(undefined)
        }).catch(err => setErr(err))

    }
    return (
        <>
            <div className="container ">
                {file != undefined ?
                    <>
                        <button type="submit" className="hover:bg-violet-100 text-violet-700 bg-fuchsia-50 m-2 p-2" onClick={handleUpload}>Upload</button>
                        <button type="button" className="hover:bg-violet-100 text-violet-700 bg-fuchsia-50 m-2 p-2" onClick={() => setFile(undefined)}>Delete Photo</button>
                        <img src={URL.createObjectURL(file)} className="m-2 p-2 w-auto h-56 drop-shadow-sm" alt="uploaded image" />
                    </> :
                    <input type="file" name="img" id="img" className="block file:bg-fuchsia-50  file:cursor-pointer
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-md file:font-semibold file:text-violet-400
                    hover:file:bg-violet-100" onChange={handleChange} />
                }
                {err.length > 0 && <p className="text-red-400">{err}</p>}
            </div>
        </>
    )
}
