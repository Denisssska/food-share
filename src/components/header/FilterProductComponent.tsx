import * as React from 'react';
import {navigationActions, navigationActionsSVG} from "../../utils/navigationActions";
import {Box, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import {ReactComponent as MyLogo} from '../../assets/mapGray.svg';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box display='flex' pt={8} justifyContent="space-around" alignItems='baseline'>
            {navigationActionsSVG.map((el, id) => {
                return <Box
                    key={id}><Image m="0 auto" alignItems="center" cursor="pointer" src={el.src} boxSize={6}
                />
                    <div >{el.name}</div>
                </Box>
            })}

            {/*<MyLogo fill={"red"}/>*/}
        </Box>
    );
}