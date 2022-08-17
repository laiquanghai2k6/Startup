import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { Platform } from "react-native";

export default function useApplyHeaderWorkaround(
    setOptions:(opstions: NativeStackNavigationOptions)=>void
    
){
    const headerHeight = useHeaderHeight();
    const androidHeaderFix = useMemo(
        () => ({
            headerTransparent:true,
            headerStyle:{backgroundColor:'black'},
            contentStyle:{paddingTop: headerHeight},
        }),
        [headerHeight]


    );
    React.useLayoutEffect(()=> {
        Platform.OS === "android" && setOptions(androidHeaderFix);
    },[setOptions,androidHeaderFix]);
}