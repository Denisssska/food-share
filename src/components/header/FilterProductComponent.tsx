import * as React from 'react';
import {navigationActions} from "../../utils/navigationActions";
import {Box} from "@chakra-ui/react";


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{width: "auto", height: "50%"}}>
            {/*<Simple*/}
            {/*    sx={{paddingTop: "2%"}}*/}
            {/*    showLabels*/}
            {/*    value={value}*/}
            {/*    onChange={(event: any, newValue: React.SetStateAction<number>) => {*/}
            {/*        setValue(newValue);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {navigationActions.map(el => {*/}
            {/*        return <SimpleBottomNavigation*/}
            {/*            key={el.name}*/}
            {/*            label={el.name}*/}
            {/*            icon={<img src={el.src} alt={el.src}*/}
            {/*            />}/>*/}
            {/*    })}*/}
            {/*</Simple>*/}
        </Box>
    );
}