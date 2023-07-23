import axios, { Axios, AxiosResponse } from "axios"
import { useEffect, useState } from "react";

type Image = {
    id: String,
    image: String
}
export default function ImageList() {
    const [data, setData] = useState<Image[]>([])
    useEffect(() => {
        const url = "http://localhost:8080/images";
        axios.get<Image[]>(url).then(res => { if (res.data != null) setData(res.data) }).catch(err => console.error(err))
    }, [])

    return (<div className="grid grid-cols-4">{
        data.map((item,key) => <img src={`http://localhost:8081/${item.image}`} key={key} className="w-42 h-36 p-2 m-2"/>)
    }</div>)
}