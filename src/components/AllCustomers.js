import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions, ScrollView } from "react-native";
import {
    FontFamily,
    Color,
    FontSize,
    Border,
    Padding,
} from "../../GlobalStyles";

const AllCustomers = () => {

    return (
        <>
            <View style={styles.component4Parent}>
                <View style={styles.component4}>
                    <View style={[styles.component4Child, styles.component4Position]} />
                    <View style={[styles.component4Item, styles.component4Position]} />
                    <View style={[styles.arrowLeftParent, styles.timePosition]}>
                        {/* <Image
                            style={[styles.arrowLeftIcon, styles.frameChildLayout]}
                            contentFit="cover"
                            source={require("../assets/arrowleft.png")}
                        /> */}
                        <Text style={[styles.allCustomers, styles.item01Typo]}>
                            All Customers
                        </Text>
                    </View>
                </View>
                <View style={styles.checkboxGroupParent}>
                    <View style={styles.checkboxGroup}>
                        <View style={styles.checkbox}>
                            <View style={[styles.checkboxInput, styles.checkboxFlexBox]}>
                                <View style={[styles.bg, styles.bgLayout]} />
                                <View style={[styles.border1, styles.borderBorder]} />
                                {/* <Image
                                    style={[styles.checkIcon, styles.timePosition]}
                                    contentFit="cover"
                                    source={require("../assets/check.png")}
                                /> */}
                            </View>
                            <Text style={[styles.item01, styles.item01Typo]}>
                                Over Due(20)
                            </Text>
                        </View>
                        <View style={styles.checkbox1}>
                            <View style={[styles.checkboxInput1, styles.checkboxFlexBox]}>
                                <View style={[styles.bg1, styles.bg1Border]} />
                            </View>
                            <Text style={[styles.item01, styles.item01Typo]}>
                                On Time(10)
                            </Text>
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.frameChild, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-323.png")}
                    /> */}
                </View>
                <View style={styles.customerCardParent}>
                    <View style={styles.customerCardBorder}>
                        <View style={styles.frameParent}>
                            <View style={[styles.frameGroup, styles.frameLayout]}>
                                <View>
                                    <Text style={styles.goldeePvtLtd}>Goldee Pvt Ltd</Text>
                                    <View style={styles.frameWrapper}>
                                        <View style={[styles.overDue19Wrapper, styles.bg1Border]}>
                                            <Text
                                                style={[styles.overDue19, styles.overDue19Typo]}
                                            >{`Over Due (19) `}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <Image
                                    style={styles.bgLayout}
                                    contentFit="cover"
                                    source={require("../assets/frame-1171276717.png")}
                                /> */}
                            </View>
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View>
                                    <Text style={[styles.text, styles.timeTypo]}>
                                        ₹ 2,01,51,183
                                    </Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Total O/S Amount
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={[styles.text, styles.timeTypo]}>₹ 7,50,230</Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Overdue Amount
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.customerCard1, styles.customerCardBorder]}>
                        <View style={styles.frameParent}>
                            <View style={[styles.frameGroup, styles.frameLayout]}>
                                <View>
                                    <Text style={styles.goldeePvtLtd}>RLabs Pvt Ltd</Text>
                                    <View style={styles.frameWrapper}>
                                        <View style={[styles.overDue19Wrapper, styles.bg1Border]}>
                                            <Text
                                                style={[styles.overDue19, styles.overDue19Typo]}
                                            >{`Over Due (12) `}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <Image
                                    style={styles.bgLayout}
                                    contentFit="cover"
                                    source={require("../assets/frame-1171276717.png")}
                                /> */}
                            </View>
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View>
                                    <Text style={[styles.text, styles.timeTypo]}>
                                        ₹ 1,18,11,030
                                    </Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Total O/S Amount
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={[styles.text, styles.timeTypo]}>₹ 2,47,020</Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Overdue Amount
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.customerCard1, styles.customerCardBorder]}>
                        <View style={styles.frameParent}>
                            <View style={[styles.frameGroup, styles.frameLayout]}>
                                <View>
                                    <Text style={styles.goldeePvtLtd}>Exco Tradings</Text>
                                    <View style={styles.frameWrapper}>
                                        <View style={[styles.overDue19Wrapper, styles.bg1Border]}>
                                            <Text
                                                style={[styles.overDue19, styles.overDue19Typo]}
                                            >{`Over Due (9) `}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <Image
                                    style={styles.bgLayout}
                                    contentFit="cover"
                                    source={require("../assets/frame-1171276717.png")}
                                /> */}
                            </View>
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View>
                                    <Text style={[styles.text, styles.timeTypo]}>
                                        ₹ 93,14,357
                                    </Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Total O/S Amount
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={[styles.text, styles.timeTypo]}>₹ 2,30,290</Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Overdue Amount
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.customerCard1, styles.customerCardBorder]}>
                        <View style={styles.frameParent}>
                            <View style={[styles.frameGroup, styles.frameLayout]}>
                                <View>
                                    <Text style={styles.goldeePvtLtd}>Falcon Pvt Ltd</Text>
                                    <View style={styles.frameWrapper}>
                                        <View style={[styles.overDue19Wrapper, styles.bg1Border]}>
                                            <Text
                                                style={[styles.overDue19, styles.overDue19Typo]}
                                            >{`Over Due (8) `}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <Image
                                    style={styles.bgLayout}
                                    contentFit="cover"
                                    source={require("../assets/frame-1171276717.png")}
                                /> */}
                            </View>
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View>
                                    <Text style={[styles.text, styles.timeTypo]}>
                                        ₹ 78,67,036
                                    </Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Total O/S Amount
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={[styles.text, styles.timeTypo]}>₹ 1,98,928</Text>
                                    <Text style={[styles.totalOsAmount, styles.overDue19Typo]}>
                                        Overdue Amount
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    timeTypo: {
        textAlign: "left",
        fontFamily: FontFamily.bodyBold,
        fontWeight: "600",
        fontSize: FontSize.bodyBold_size,
    },
    borderBorder: {
        borderWidth: 1,
        position: "absolute",
        borderStyle: "solid",
    },
    component4Position: {
        width: "100%",
        right: "0%",
        left: "0%",
        position: "absolute",
    },
    timePosition: {
        top: "50%",
        position: "absolute",
    },
    frameChildLayout: {
        width: 24,
        height: 24,
    },
    item01Typo: {
        fontFamily: FontFamily.header2,
        textAlign: "left",
    },
    checkboxFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    bgLayout: {
        height: 16,
        width: 16,
    },
    bg1Border: {
        borderColor: Color.colorGainsboro_200,
        borderRadius: Border.br_11xs,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    frameLayout: {
        width: 296,
        flexDirection: "row",
    },
    overDue19Typo: {
        fontSize: FontSize.bodySmall_size,
        fontFamily: FontFamily.bodySmall,
        fontWeight: "500",
        textAlign: "left",
    },
    customerCardBorder: {
        padding: Padding.p_xs,
        borderColor: Color.colorGainsboro_100,
        borderRadius: Border.br_9xs,
        width: 320,
        borderWidth: 1,
        alignItems: "center",
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    time: {
        marginTop: -10,
        width: "120%",
        letterSpacing: 0,
        lineHeight: 20,
        color: Color.colorDarkslategray_100,
        display: "flex",
        height: 20,
        alignItems: "center",
        top: "50%",
        position: "absolute",
        left: "0%",
    },
    timeStyle: {
        height: "33.33%",
        width: "8.33%",
        top: "43.33%",
        right: "86.67%",
        bottom: "23.33%",
        left: "5%",
        position: "absolute",
    },
    cellularConnectionIcon: {
        height: 15,
        width: 16,
    },
    wifiIcon: {
        width: 15,
        height: 11,
        marginLeft: 6,
    },
    border: {
        height: "100%",
        width: "90.41%",
        right: "9.59%",
        borderRadius: 3,
        borderColor: Color.colorDarkslategray_100,
        opacity: 0.35,
        bottom: "0%",
        left: "0%",
        top: "0%",
    },
    capIcon: {
        height: "35.64%",
        width: "5.48%",
        top: "32.67%",
        bottom: "31.68%",
        left: "94.52%",
        maxWidth: "100%",
        maxHeight: "100%",
        opacity: 0.4,
        right: "0%",
        position: "absolute",
        overflow: "hidden",
    },
    capacity: {
        height: "65.35%",
        width: "73.97%",
        top: "17.82%",
        right: "17.81%",
        bottom: "16.83%",
        left: "8.22%",
        borderRadius: 1,
        backgroundColor: Color.colorDarkslategray_100,
        position: "absolute",
    },
    battery: {
        width: 22,
        height: 10,
        marginLeft: 6,
    },
    cellularConnectionParent: {
        top: 8,
        left: 277,
        alignItems: "flex-end",
        flexDirection: "row",
        position: "absolute",
    },
    statusBar: {
        height: "4.57%",
        width: "95.74%",
        right: "4.26%",
        bottom: "95.43%",
        left: "0%",
        top: "0%",
        position: "absolute",
        backgroundColor: Color.white,
    },
    component4Child: {
        height: "97.96%",
        bottom: "2.04%",
        top: "0%",
        backgroundColor: Color.white,
    },
    component4Item: {
        height: "2.04%",
        top: "97.96%",
        backgroundColor: Color.backgroundGrey,
        bottom: "0%",
    },
    arrowLeftIcon: {
        height: 24,
        overflow: "hidden",
    },
    allCustomers: {
        textTransform: "capitalize",
        color: Color.blacks,
        opacity: 0.9,
        marginLeft: 10,
        fontSize: FontSize.header2_size,
        fontFamily: FontFamily.header2,
    },
    arrowLeftParent: {
        marginTop: -12.5,
        left: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    component4: {
        width: 360,
        height: 49,
    },
    bg: {
        backgroundColor: Color.primary6,
        zIndex: 0,
        borderRadius: Border.br_11xs,
    },
    border1: {
        top: -4,
        right: -4,
        bottom: -4,
        left: -4,
        borderColor: "rgba(24, 144, 255, 0)",
        zIndex: 1,
        borderRadius: Border.br_11xs,
    },
    checkIcon: {
        marginTop: -3,
        marginLeft: -5.3,
        left: "50%",
        width: 11,
        height: 8,
        zIndex: 2,
    },
    checkboxInput: {
        borderRadius: Border.br_11xs,
        flexDirection: "row",
        backgroundColor: Color.white,
    },
    item01: {
        color: Color.characterTitle85,
        marginLeft: 4,
        fontFamily: FontFamily.header2,
        fontSize: FontSize.bodyBold_size,
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "center",
    },
    bg1: {
        height: 16,
        width: 16,
    },
    checkboxInput1: {
        borderRadius: Border.br_11xs,
        backgroundColor: Color.white,
    },
    checkbox1: {
        marginLeft: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxGroup: {
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    frameChild: {
        height: 24,
    },
    checkboxGroupParent: {
        marginTop: 16,
        justifyContent: "space-between",
        width: 320,
        flexDirection: "row",
        alignItems: "center",
    },
    goldeePvtLtd: {
        color: Color.colorRoyalblue,
        fontFamily: FontFamily.bodySmall,
        fontWeight: "500",
        fontSize: FontSize.header2_size,
        textAlign: "left",
    },
    overDue19: {
        lineHeight: 16,
        color: Color.colorTomato,
    },
    overDue19Wrapper: {
        paddingHorizontal: Padding.p_5xs,
        paddingVertical: Padding.p_11xs,
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        flexDirection: "row",
    },
    frameWrapper: {
        marginTop: 4,
        flexDirection: "row",
    },
    frameGroup: {
        justifyContent: "space-between",
    },
    text: {
        letterSpacing: 0.3,
        color: Color.grey,
    },
    totalOsAmount: {
        color: Color.grey2,
        marginTop: 4,
    },
    group: {
        marginLeft: 51,
    },
    frameContainer: {
        marginTop: 16,
    },
    frameParent: {
        alignSelf: "stretch",
    },
    customerCard1: {
        marginTop: 12,
    },
    customerCardParent: {
        marginTop: 16,
    },
    component4Parent: {
        top: 30,
        left: 0,
        alignItems: "center",
        position: "absolute",
    },
    cutomerlistscreen: {
        borderRadius: 10,
        borderColor: "#3a3a3a",
        borderWidth: 8,
        width: 376,
        height: 656,
        overflow: "hidden",
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
});

export default AllCustomers;