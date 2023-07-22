import { useState } from "react"

export default function ImageComp(this: any) {
    const [file, setFile] = useState<File>()
    const [err, setErr] = useState("")
    const handleChange = (e: { target: any, preventDefault: any }) => {
        if (e.target.files[0] != undefined && e.target.files[0].type.includes("image")) {
            setFile(e.target.files[0])
            setErr("")
        } else {
            setFile(undefined)
            e.target.files = undefined
            setErr(`Error uploading file`)
        }
    }
    const handleUpload = () => {
        console.log(file)
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
                    file:text-md file:font-semibold file:text-violet-700
                    hover:file:bg-violet-100" onChange={handleChange} />
                }
                {err.length > 0 && <p className="text-red-400">{err}</p>}
            </div>
        </>
    )
}
