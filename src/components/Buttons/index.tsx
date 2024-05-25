import {Button} from "@nextui-org/react";
function Buttons(props){
    return(
        <>
            <Button color={props.color} variant="shadow" className="m-2">{props.name}</Button>
        </>
    )
}

export default Buttons