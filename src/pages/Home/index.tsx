import {useState} from "react";
import {Button} from "@nextui-org/react";
function Home(){

    const [color, setColor] = useState('black');

    function changeBackgroundColor(color){
        setColor(color)
    }

    return (
        <>
            <body className="absolute w-full h-full flex items-center justify-center" style={{ backgroundColor: color }}>

            <h1 className="text-8xl text-center uppercase font-bold">{color}</h1>

            <div className="absolute bottom-5 right-5">

                <Button color="primary" variant="shadow" className="m-2 border-3 border-black font-bold text-black" onClick={() => changeBackgroundColor('blue')}>Blue</Button>
                <Button color="warning" variant="shadow" className="m-2 border-3 border-black font-bold text-black" onClick={() => changeBackgroundColor('yellow')}>Yellow</Button>
                <Button color="danger" variant="shadow" className="m-2 border-3 border-black font-bold text-black" onClick={() => changeBackgroundColor('red')}>Red</Button>

            </div>


            {/*<div className="absolute bottom-5 right-5">*/}
            {/*        <Buttons name="Blue" color="primary" action="changeBackgroundColor('red')"/>*/}
            {/*        <Buttons name="Red" color="danger"/>*/}
            {/*        <Buttons name="Yellow" color="warning"/>*/}
            {/*    </div>*/}

            </body>
        </>
    )
}
export default Home