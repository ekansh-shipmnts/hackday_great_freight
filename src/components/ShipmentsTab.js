import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Pressable, Dimensions, ScrollView, Linking } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";
// import { TouchableOpacity } from "react-native-gesture-handler";



const ShipmentsTab = () => {

    const shipmentsData = [
        {
            jobNumber: 'JFL/AMD/J23-24/01655',
            status: 'Pending',
            type: 'Ocean Export'
        },
        {
            jobNumber: 'JFL/AMD/J53-74/090',
            status: 'Closed',
            type: 'Ocean Import'
        }, {
            jobNumber: 'JFL/AMD/J23-24/01655',
            status: 'Pending',
            type: 'Ocean Export'
        },
        {
            jobNumber: 'JFL/AMD/J53-74/090',
            status: 'Closed',
            type: 'Ocean Import'
        },];

    const statusStyle = (status) => {
        switch (status) {
            case 'Pending':
                return styles.pending;
            case 'Paid':
                return styles.pending;
        }
    }

    const handleLinkPress = (link) => {
        Linkinglink.openURL(link);
    };

    return (
        <>
            <View style={styles.shipmentCardParent}>
                {
                    shipmentsData.map((shipment) => (
                        <View style={styles.shipmentCardBorder}>
                            <View>
                                <Text style={[styles.jflamdj232401655, styles.pendingTypo]}>
                                    {shipment.jobNumber}
                                </Text>
                                <View style={styles.frameGroup}>
                                    <View style={styles.wrapperBorder}>
                                        <Text style={[statusStyle(shipment.status), styles.pendingTypo]}>
                                            {shipment.status}
                                        </Text>
                                    </View>
                                    <View style={[styles.oceanExportWrapper, styles.wrapperBorder]}>
                                        <Text style={[styles.oceanExport, styles.text2Typo]}>
                                            {shipment.type}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue', // Link color
        textDecorationLine: 'underline', // Underline the link
    },
    statusBarPosition: {
        left: "0%",
        position: "absolute",
    },
    iconGroupLayout: {
        maxHeight: "100%",
        position: "absolute",
    },
    groupPosition1: {
        bottom: "0%",
        left: "0%",
        width: "100%",
    },
    arrowLeftParentPosition: {
        top: "50%",
        position: "absolute",
    },
    arrowLeftIconLayout: {
        width: 24,
        height: 24,
    },
    textClr: {
        color: Color.blacks,
        textTransform: "capitalize",
    },
    pendingTypo: {
        fontFamily: FontFamily.bodyTiny,
        fontWeight: "500",
    },
    invoicesTypo: {
        opacity: 0.5,
        fontFamily: FontFamily.header2,
    },
    activity1Typo: {
        textAlign: "right",
        color: Color.colorDarkslategray_200,
        textTransform: "capitalize",
        fontSize: FontSize.header2_size,
    },
    groupPosition: {
        top: 48,
        maxHeight: "100%",
        position: "absolute",
    },
    wrapperBorder: {
        paddingVertical: Padding.p_11xs,
        paddingHorizontal: Padding.p_5xs,
        justifyContent: "center",
        borderColor: Color.colorGainsboro_200,
        borderRadius: Border.br_11xs,
        height: 24,
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.white,
    },
    text2Typo: {
        color: Color.grey,
        fontSize: FontSize.bodySmall_size,
        textAlign: "left",
    },
    shipmentCardBorder: {
        padding: Padding.p_xs,
        borderColor: Color.colorGainsboro_100,
        borderRadius: Border.br_9xs,
        width: 320,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: Color.white,
    },
    textPosition: {
        left: "50%",
        position: "absolute",
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
    textTypo: {
        fontSize: FontSize.bodySmall_size,
        textAlign: "left",
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
    time: {
        marginTop: -10,
        width: "120%",
        letterSpacing: 0,
        lineHeight: 20,
        color: Color.colorDarkslategray_100,
        display: "flex",
        height: 20,
        alignItems: "center",
        textAlign: "left",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        fontSize: FontSize.button2_size,
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
        borderColor: Color.colorDarkslategray_100,
        opacity: 0.35,
        borderWidth: 1,
        borderStyle: "solid",
        bottom: "0%",
        height: "100%",
        left: "0%",
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
        height: "4.69%",
        bottom: "95.31%",
        right: "0%",
        top: "0%",
        width: "100%",
        left: "0%",
        backgroundColor: Color.white,
    },
    component4Child: {
        height: "97.96%",
        bottom: "2.04%",
        right: "0%",
        top: "0%",
        width: "100%",
        left: "0%",
        backgroundColor: Color.white,
    },
    component4Item: {
        height: "2.04%",
        top: "97.96%",
        backgroundColor: Color.backgroundGrey,
        right: "0%",
        position: "absolute",
    },
    arrowLeftIcon: {
        height: 24,
        overflow: "hidden",
    },
    accountDetails: {
        opacity: 0.9,
        marginLeft: 10,
        fontFamily: FontFamily.header2,
        color: Color.blacks,
        textTransform: "capitalize",
        fontSize: FontSize.header2_size,
        textAlign: "left",
    },
    approved: {
        color: "#0bb144",
        lineHeight: 16,
        fontWeight: "500",
        fontSize: FontSize.bodySmall_size,
        textAlign: "left",
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
    },
    component4Inner: {
        marginTop: -11.5,
        left: 320,
        height: 24,
        top: "50%",
        position: "absolute",
    },
    component4: {
        height: "7.66%",
        top: "4.69%",
        bottom: "87.66%",
        right: "0%",
        width: "100%",
        left: "0%",
    },
    invoices: {
        color: Color.colorDarkslategray_200,
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
    shipments: {
        marginLeft: 16,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
    },
    contactInfo: {
        marginLeft: 16,
        opacity: 0.5,
        fontFamily: FontFamily.header2,
    },
    invoicesParent: {
        top: 13,
        left: 20,
        width: 320,
        height: 24,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
    },
    groupChild: {
        left: 0,
        width: 360,
    },
    groupItem: {
        top: 0,
        left: 0,
        width: 360,
    },
    groupInner: {
        left: 171,
        width: 82,
    },
    frameParent: {
        height: 48,
        width: 360,
    },
    jflamdj232401655: {
        color: Color.colorRoyalblue_100,
        fontWeight: "500",
        fontSize: FontSize.header2_size,
        textAlign: "left",
    },
    pending: {
        color: Color.colorOrange,
        lineHeight: 16,
        fontWeight: "500",
        fontSize: FontSize.bodySmall_size,
        textAlign: "left",
    },
    oceanExport: {
        fontFamily: FontFamily.bodyTiny,
        fontWeight: "500",
        lineHeight: 16,
    },
    oceanExportWrapper: {
        marginLeft: 6,
    },
    frameGroup: {
        marginTop: 4,
        flexDirection: "row",
    },
    shipmentCard1: {
        marginTop: 12,
    },
    shipmentCardParent: {
        marginTop: 16,
    },
    groupParent: {
        top: 326,
        left: 0,
        alignItems: "center",
        position: "absolute",
    },
    groupIcon: {
        maxWidth: "100%",
        maxHeight: "100%",
        right: "0%",
        overflow: "hidden",
        bottom: "0%",
        left: "0%",
        width: "100%",
        height: "100%",
        top: "0%",
    },
    text: {
        marginTop: -10.5,
        marginLeft: -43.5,
        textAlign: "center",
        color: Color.blacks,
        textTransform: "capitalize",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        left: "50%",
        fontSize: FontSize.button2_size,
        top: "50%",
    },
    groupContainer: {
        height: "100%",
        bottom: "0%",
        top: "0%",
        right: "0%",
        position: "absolute",
    },
    groupWrapper: {
        width: 127,
        height: 127,
    },
    rectangleView: {
        width: "5.23%",
        right: "94.77%",
        backgroundColor: Color.colorOrange,
        left: "0%",
        position: "absolute",
    },
    unPaid: {
        left: "7.84%",
    },
    text1: {
        left: "51.63%",
        color: Color.blacks,
        textTransform: "capitalize",
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "0%",
        position: "absolute",
    },
    rectangleParent: {
        width: 153,
        height: 15,
    },
    groupChild1: {
        width: "5.63%",
        top: "20%",
        right: "94.37%",
        bottom: "26.67%",
        backgroundColor: "#ff4d4f",
        height: "53.33%",
        left: "0%",
        position: "absolute",
    },
    overDue: {
        left: "8.45%",
    },
    text2: {
        left: "55.63%",
        letterSpacing: 0.2,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "0%",
        position: "absolute",
    },
    rectangleGroup: {
        width: 142,
        marginTop: 8,
        height: 15,
    },
    groupParent1: {
        marginLeft: 25,
    },
    frameParent5: {
        width: 320,
        flexDirection: "row",
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
    frameParent6: {
        width: 288,
        justifyContent: "space-between",
        marginTop: 12,
        flexDirection: "row",
    },
    groupParent2: {
        marginTop: 26,
        alignItems: "center",
    },
    frameParent4: {
        marginLeft: -160,
        left: "50%",
        top: 0,
        alignItems: "center",
    },
    customerChart: {
        top: 99,
        height: 207,
        marginLeft: -160,
        left: "50%",
        width: 320,
    },
    cutomerdetailscreenShipments: {
        height: 640,
        overflow: "hidden",
        width: 360,
        backgroundColor: Color.white,
    },
});

export default ShipmentsTab;