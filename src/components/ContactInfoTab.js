import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Linking,
} from "react-native";
import {
    Color,
    FontSize,
    FontFamily,
    Padding,
    Border,
} from "../../GlobalStyles";

const ContactInfoTab = ({ contectDetail }) => {
    // const contactInfoData = [
    //     {
    //         name: "Abhijeet Sethi",
    //         email_id: "raxitpatel553@gmail.com",
    //         mobile_no: "+91-2878647888",
    //     },
    //     {
    //         name: "Pankaj Sethi",
    //         email_id: "PS@goldee.com",
    //         mobile_no: "+91-8320595618",
    //     },
    //     {
    //         name: "Abhijeet Sethi",
    //         email_id: "abhijeet.s@goldee.com",
    //         mobile_no: "+91-2878647888",
    //     },
    //     {
    //         name: "Pankaj Sethi",
    //         email_id: "PS@goldee.com",
    //         mobile_no: "+91-2878647938",
    //     },
    // ];

    const handleEmailPress = async (email_id) => {
        Linking.openURL(`mailto:${email_id}`);
    };

    const handleMobilePress = (mobile_no) => {
        Linking.openURL(`sms:${mobile_no}`);
    };

    return (
        <>
            <View style={styles.contactCardParent}>
                {contectDetail.map((contact, index) => (
                    <View
                        style={[
                            index != 0 && styles.contactCard1,
                            styles.contactCardBorder,
                        ]}
                    >
                        <Text style={[styles.defaultBold, styles.defaultTypo]}>
                            {contact.name}
                        </Text>
                        <View style={styles.frameContainer}>
                            <View>
                                <Text style={[styles.eMailId, styles.defaultTypo]}>
                                    E-mail ID
                                </Text>
                                <Text
                                    style={[styles.eMailId, styles.defaultTypo]}
                                >{`Mob. `}</Text>
                            </View>
                            <View style={styles.defaultBoldParent}>
                                <View style={styles.defaultBold1FlexBox}>
                                    <TouchableOpacity
                                        onPress={() => handleEmailPress(contact.email_id)}
                                    >
                                        <Text style={[styles.defaultBold2, styles.defaultTypo]}>
                                            {contact.email_id}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.defaultBold1FlexBox}>
                                    <TouchableOpacity
                                        onPress={() => handleMobilePress(contact.mobile_no)}
                                    >
                                        <Text style={[styles.defaultBold2, styles.defaultTypo]}>
                                            {contact.mobile_no}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            {/* <View>
                {
                    users.map((user) => (
                        <Text>{user}</Text>
                    ))
                }
            </View> */}
        </>
    );
};

const styles = StyleSheet.create({
    customerCard1: {
        marginTop: 12,
    },
    statusBarPosition: {
        left: "0%",
        position: "absolute",
    },
    timeFlexBox: {
        display: "flex",
        alignItems: "center",
    },
    borderBorder: {
        borderWidth: 1,
        borderStyle: "solid",
    },
    iconGroupLayout: {
        maxHeight: "100%",
        position: "absolute",
    },
    groupPosition1: {
        bottom: "0%",
        left: "0%",
    },
    arrowLeftIconLayout: {
        width: 24,
        height: 24,
    },
    textClr: {
        color: Color.blacks,
        textTransform: "capitalize",
    },
    defaultBold1FlexBox: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    textTypo: {
        fontSize: FontSize.bodySmall_size,
        textAlign: "left",
    },
    invoicesParentPosition: {
        left: 0,
        alignItems: "center",
        position: "absolute",
    },
    invoicesTypo: {
        opacity: 0.5,
        fontFamily: FontFamily.header2,
    },
    activity1Typo: {
        textAlign: "right",
        color: Color.colorDarkslategray_300,
        textTransform: "capitalize",
        fontSize: FontSize.header2_size,
    },
    groupPosition: {
        left: 9,
        maxHeight: "100%",
        position: "absolute",
        width: 360,
    },
    textPosition: {
        left: "50%",
        position: "absolute",
    },
    frameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    groupChildPosition3: {
        bottom: "20%",
        top: "26.67%",
        height: "53.33%",
    },
    billedTypo: {
        opacity: 0.6,
        fontSize: FontSize.bodySmall_size,
        color: Color.blacks,
        fontFamily: FontFamily.header2,
        textTransform: "capitalize",
        textAlign: "left",
        top: "0%",
        position: "absolute",
    },
    groupChildPosition2: {
        backgroundColor: Color.colorLavender_100,
        left: "0%",
        position: "absolute",
    },
    groupChildPosition1: {
        backgroundColor: Color.colorCornflowerblue_100,
        left: "0%",
        position: "absolute",
    },
    groupChildPosition: {
        backgroundColor: Color.colorMediumslateblue,
        left: "0%",
        position: "absolute",
    },
    defaultTypo: {
        lineHeight: 24,
        textAlign: "left",
        fontSize: FontSize.button2_size,
    },
    contactCardBorder: {
        paddingVertical: Padding.p_5xs,
        paddingHorizontal: Padding.p_xs,
        borderColor: Color.colorGainsboro_100,
        borderRadius: Border.br_9xs,
        width: 320,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    time: {
        marginTop: -10,
        width: "120%",
        letterSpacing: 0,
        lineHeight: 20,
        color: Color.colorDarkslategray_200,
        height: 20,
        alignItems: "center",
        textAlign: "left",
        fontSize: FontSize.button2_size,
        display: "flex",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "50%",
        left: "0%",
        position: "absolute",
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
        width: 16,
        height: 15,
    },
    wifiIcon: {
        width: 15,
        height: 11,
        marginLeft: 6,
    },
    border: {
        width: "90.41%",
        right: "9.59%",
        borderRadius: 3,
        borderColor: Color.colorDarkslategray_200,
        opacity: 0.35,
        bottom: "0%",
        left: "0%",
        height: "100%",
        top: "0%",
        position: "absolute",
    },
    capIcon: {
        height: "35.64%",
        width: "5.48%",
        top: "32.67%",
        bottom: "31.68%",
        left: "94.52%",
        opacity: 0.4,
        maxWidth: "100%",
        maxHeight: "100%",
        right: "0%",
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
        backgroundColor: Color.colorDarkslategray_200,
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
        height: "4.69%",
        bottom: "95.31%",
        right: "0%",
        width: "100%",
        top: "0%",
        backgroundColor: Color.white,
    },
    component5Child: {
        height: "97.96%",
        bottom: "2.04%",
        right: "0%",
        width: "100%",
        top: "0%",
        backgroundColor: Color.white,
    },
    component5Item: {
        height: "2.04%",
        top: "97.96%",
        backgroundColor: Color.backgroundGrey,
        right: "0%",
        width: "100%",
        position: "absolute",
    },
    arrowLeftIcon: {
        height: 24,
        overflow: "hidden",
    },
    goldeePvtLtd: {
        opacity: 0.9,
        marginLeft: 10,
        fontFamily: FontFamily.header2,
        fontSize: FontSize.header2_size,
        textTransform: "capitalize",
        textAlign: "left",
    },
    approved: {
        lineHeight: 16,
        fontWeight: "500",
        fontFamily: FontFamily.bodyTiny,
        color: "#0bb144",
    },
    approvedWrapper: {
        borderRadius: Border.br_11xs,
        borderColor: "#d9d9d9",
        paddingHorizontal: Padding.p_5xs,
        paddingVertical: 2,
        height: 24,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    frameContainer: {
        flexDirection: "row",
    },
    frameWrapper: {
        marginLeft: 10,
        flexDirection: "row",
    },
    arrowLeftParent: {
        marginTop: -12.5,
        left: 18,
        flexDirection: "row",
        alignItems: "center",
        top: "50%",
        position: "absolute",
    },
    component5Inner: {
        marginTop: -11.5,
        left: 320,
        height: 24,
        top: "50%",
        position: "absolute",
    },
    component5: {
        height: "7.66%",
        top: "4.69%",
        bottom: "87.66%",
        right: "0%",
        width: "100%",
    },
    invoices: {
        color: Color.colorDarkslategray_300,
        opacity: 0.5,
        textTransform: "capitalize",
        fontSize: FontSize.header2_size,
        textAlign: "left",
    },
    activity1: {
        opacity: 0.5,
        fontFamily: FontFamily.header2,
    },
    activity: {
        marginLeft: 16,
    },
    contactInfo: {
        marginLeft: 16,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
    },
    invoicesParent: {
        top: 13,
        width: 363,
        height: 24,
        flexDirection: "row",
    },
    groupChild: {
        top: 48,
    },
    groupItem: {
        top: 0,
    },
    groupInner: {
        left: 247,
        width: 96,
        top: 48,
    },
    frameParent: {
        left: -9,
        width: 369,
        top: 0,
        height: 48,
        position: "absolute",
    },
    groupWrapper: {
        height: 48,
        width: 360,
    },
    cutomerdetailscreenContactinfInner: {
        top: 326,
    },
    groupIcon: {
        maxWidth: "100%",
        maxHeight: "100%",
        right: "0%",
        overflow: "hidden",
        bottom: "0%",
        left: "0%",
        height: "100%",
        top: "0%",
        width: "100%",
    },
    text: {
        marginTop: -10.5,
        marginLeft: -44.5,
        fontSize: FontSize.header21_size,
        textAlign: "center",
        color: Color.blacks,
        textTransform: "capitalize",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "50%",
    },
    groupParent: {
        height: "100%",
        bottom: "0%",
        top: "0%",
        right: "0%",
        width: "100%",
        position: "absolute",
    },
    groupContainer: {
        height: 127,
        width: 127,
    },
    rectangleView: {
        width: "6.3%",
        right: "93.7%",
        backgroundColor: "#faad14",
        left: "0%",
        position: "absolute",
    },
    unPaid: {
        left: "9.45%",
    },
    text1: {
        left: "62.2%",
        color: Color.blacks,
        textTransform: "capitalize",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "0%",
        position: "absolute",
    },
    rectangleParent: {
        width: 127,
        height: 15,
    },
    groupChild1: {
        width: "5.8%",
        top: "20%",
        right: "94.2%",
        bottom: "26.67%",
        backgroundColor: "#ff4d4f",
        height: "53.33%",
        left: "0%",
        position: "absolute",
    },
    overDue: {
        left: "8.7%",
    },
    text2: {
        left: "57.25%",
        color: Color.blacks,
        textTransform: "capitalize",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "0%",
        position: "absolute",
    },
    rectangleGroup: {
        width: 138,
        marginTop: 8,
        height: 15,
    },
    frameView: {
        width: 286,
        alignItems: "center",
    },
    groupChild2: {
        borderRadius: Border.br_9xs,
        backgroundColor: Color.colorLavender_100,
        bottom: "0%",
        height: "100%",
        right: "0%",
        top: "0%",
        width: "100%",
    },
    groupChild3: {
        width: "68.75%",
        right: "31.25%",
        borderRadius: Border.br_5xs,
        bottom: "0%",
        height: "100%",
        top: "0%",
    },
    groupChild4: {
        width: "30.63%",
        right: "69.38%",
        borderRadius: Border.br_5xs,
        bottom: "0%",
        height: "100%",
        top: "0%",
    },
    rectangleContainer: {
        height: 8,
        width: 320,
    },
    groupChild5: {
        width: "18.6%",
        right: "81.4%",
        bottom: "20%",
        top: "26.67%",
        height: "53.33%",
    },
    billed: {
        left: "27.91%",
    },
    groupView: {
        width: 43,
        height: 15,
    },
    text3: {
        marginTop: 4,
        color: Color.blacks,
        textTransform: "capitalize",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
    },
    groupChild6: {
        width: "12.31%",
        right: "87.69%",
        bottom: "20%",
        top: "26.67%",
        height: "53.33%",
    },
    unBilled: {
        left: "18.46%",
    },
    rectangleParent1: {
        width: 65,
        height: 15,
    },
    groupChild7: {
        width: "12.5%",
        right: "87.5%",
        bottom: "20%",
        top: "26.67%",
        height: "53.33%",
    },
    totalOs: {
        left: "18.75%",
    },
    rectangleParent2: {
        width: 64,
        height: 15,
    },
    frameParent1: {
        width: 288,
        marginTop: 12,
    },
    groupParent2: {
        marginTop: 26,
        alignItems: "center",
    },
    frameGroup: {
        marginLeft: -160,
        left: "50%",
        top: 0,
        alignItems: "center",
    },
    customerChart: {
        top: 99,
        height: 207,
        width: 320,
        marginLeft: -160,
        left: "50%",
    },
    defaultBold: {
        color: Color.colorDarkslategray_400,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
    },
    eMailId: {
        color: Color.colorDarkslategray_100,
        width: 70,
        fontFamily: FontFamily.header2,
        alignItems: "center",
        display: "flex",
    },
    defaultBold2: {
        color: Color.colorRoyalblue_100,
        fontFamily: FontFamily.header2,
    },
    launchIcon: {
        width: 18,
        height: 18,
        display: "none",
        marginLeft: 4,
        overflow: "hidden",
    },
    defaultBoldParent: {
        marginLeft: 20,
    },
    contactCard1: {
        backgroundColor: Color.grey,
        marginTop: 15,
    },
    contactCardParent: {
        top: 60,
        left: 20,
        position: "absolute",
    },
    cutomerdetailscreenContactinf: {
        height: 640,
        overflow: "hidden",
        width: 360,
        backgroundColor: Color.white,
    },
});

export default ContactInfoTab;
