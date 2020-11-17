import {Button, Input} from "semantic-ui-react";
import {useRef} from "react";

export default function Add() {
    const name_ref = useRef(null as Input)
    const url_ref = useRef(null as Input)
    const text_ref = useRef(null as Input)

    function add() {

        // const data = {
        //     name: name_ref.current.state,
        //     url: name_ref.current.state,
        //     text: name_ref.current.state
        // }

        const data = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            url: (document.getElementById('url') as HTMLInputElement).value,
            text: (document.getElementById('text') as HTMLInputElement).value
        }

        console.log(data)
        const params = {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            method: "POST",
        };

        fetch('http://localhost:5000/add', params).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <h1>
                Add recipe
            </h1>
            <form>
                <Input id={"name"} ref={name_ref} type="text" label={"name"}/><br/>
                <Input id={"url"} ref={url_ref} type="url" label={"url"}/><br/>
                <Input id={"text"} ref={text_ref} type="text" label={"text"}/>
            </form>
            <Button onClick={add}> Add </Button>
        </>
    )
}
