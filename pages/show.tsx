import {Button, Header} from "semantic-ui-react";
import {useState} from "react";

export default function Home() {
    const [resp, setResp] = useState([{}] as any)

    function get() {
        fetch("http://localhost:5000/q/all").then((req) => {
            return req.json();
        }).then((data) => {
                setResp(data)
                console.log(data)
        }).catch((err) => {
            console.log(err);
            setResp("Err occurred")
        })
    }

    return (
        <>
            <Header as={'h1'}> All recipes </Header>
            <ol>
                {resp.map((el,itr) => (<li key={itr}>
                        <pre>{JSON.stringify(el)}</pre>
                    </li>)
                )}
            </ol>
            <Button onClick={get}>Get</Button>
        </>
    )
}
