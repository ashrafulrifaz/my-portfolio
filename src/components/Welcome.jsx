import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowWelcome(false)
        }, 2500)

        return () => clearTimeout(timeOut)
    }, [])

    return (
        <div id="welcome" style={{top: `${showWelcome ? "0px" : "-10000px"}`}}>
            <TypeAnimation
                sequence={[
                'welcome to my website',
                1000, 
                () => {
                    console.log('Sequence completed');
                },
                ]}
                wrapper="h1"
                speed={150}
            />
        </div>
    );
};

export default Welcome;