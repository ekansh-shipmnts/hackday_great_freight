import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    Pressable,
    Dimensions,
    ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
    FontFamily,
    Color,
    FontSize,
    Border,
    Padding,
} from "../../GlobalStyles";
import PieChart from "react-native-pie-chart";
import { CheckBox } from "react-native-elements";

const InvoicesTab = ({ data }) => {
    console.log('================== Data', data);

    const [overDueData, setOverDueData] = React.useState([]);
    const [paidData, setPaidData] = React.useState([]);
    const [selectedData, setSelectedData] = React.useState([]);

    React.useEffect(() => {
        const overDue = [];
        const paid = [];
        data.map((entry) => {
            if (entry.status == 'Unpaid') {
                paid.push({
                    name: entry.name,
                    outstanding_amount: entry.outstanding_amount,
                    status: entry.status,
                    due_date: entry.due_date
                });
            } else if (entry.status == 'Overdue') {
                overDue.push({
                    name: entry.name,
                    outstanding_amount: entry.outstanding_amount,
                    status: entry.status,
                    due_date: entry.due_date
                });
            }
            return;
        })
        const sortedOverDueData = overDue.sort((a, b) => b.outstanding_amount - a.outstanding_amount);
        setOverDueData(sortedOverDueData);
        setPaidData(paid);
        setSelectedData(overDue);
        console.log('-----> overDueData', overDueData);
        console.log('-----> paidData', paidData);
    }, [data])

    const [isOuerDueChecked, setIsOuerDueChecked] = React.useState(true)
    const [isOnTimeChecked, setIsOnTimeChecked] = React.useState(false)
    const handleOuerDueChecked = () => {
        if (!isOuerDueChecked && isOnTimeChecked) setSelectedData([...overDueData, ...paidData]);
        else if (isOuerDueChecked && isOnTimeChecked) setSelectedData(paidData);
        else if (!isOuerDueChecked && !isOnTimeChecked) setSelectedData(overDueData);
        else if (isOuerDueChecked && !isOnTimeChecked) setSelectedData([]);
        setIsOuerDueChecked(!isOuerDueChecked)
    };
    const handleOnTimeChecked = () => {
        if (isOuerDueChecked && !isOnTimeChecked) setSelectedData([...overDueData, ...paidData]);
        else if (!isOuerDueChecked && !isOnTimeChecked) setSelectedData(paidData);
        else if (isOuerDueChecked && isOnTimeChecked) setSelectedData(overDueData);
        else if (!isOuerDueChecked && isOnTimeChecked) setSelectedData([]);
        setIsOnTimeChecked(!isOnTimeChecked)
    };

    return (
        <>
            {/* <ScrollView> */}
            <View style={styles.checkboxGroupParent}>
                <View style={styles.checkboxGroup}>
                    <View style={{ color: 'red' }}>
                        <CheckBox
                            title={`Over Due(${overDueData.length})`}
                            checked={isOuerDueChecked}
                            onPress={handleOuerDueChecked}
                        />
                    </View>
                    <View>
                        <CheckBox
                            title={`Unpaid(${paidData.length})`}
                            checked={isOnTimeChecked}
                            onPress={handleOnTimeChecked}
                        />
                    </View>
                </View>
            </View>
            {(selectedData || []).map((row, index) => {
                return (
                    <View style={[index != 0 && styles.customerCard1, styles.depositBorder]}>
                        <View style={styles.frameGroup}>
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View>
                                    <Text style={[styles.shcep23120010, styles.dueDateTypo]}>
                                        {row.name}
                                    </Text>
                                    <View style={styles.frameParent1}>
                                        <View style={styles.wrapperBorder}>
                                            <Text style={[styles.overDue, row.status == 'Unpaid' ? { color: 'green' } : { color: 'red' }, styles.overDueTypo]}>
                                                {row.status}
                                            </Text>
                                        </View>
                                        <View
                                            style={[styles.bomMumbaiWrapper, styles.wrapperBorder]}
                                        >
                                            <Text style={[styles.bomMumbai, styles.feb2023Clr]}>
                                                BOM-Mumbai
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    style={styles.bgLayout}
                                    contentFit="cover"
                                    source={require("../../assets/frame-1171276717.png")}
                                />
                            </View>
                            <View style={[styles.frameParent2, styles.frameLayout]}>
                                <View>
                                    <Text style={[styles.feb2023, styles.feb2023Clr]}>
                                        {row.due_date}
                                    </Text>
                                    <Text style={[styles.dueDate, styles.dueDateTypo]}>
                                        Due Date
                                    </Text>
                                </View>
                                <View style={styles.parent}>
                                    <Text style={[styles.feb2023, styles.feb2023Clr]}>
                                        ₹ {row.outstanding_amount}
                                    </Text>
                                    <Text style={[styles.dueDate, styles.dueDateTypo]}>
                                        Amount
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}
            {/* </ScrollView> */}
        </>
    );
};

const styles = StyleSheet.create({
    customerCard1: {
        marginTop: 12,
    },
    component4Layout: {
        width: "100%",
        right: "0%",
    },
    textTypo: {
        fontFamily: FontFamily.button2,
        fontWeight: "600",
    },
    borderBorder: {
        borderWidth: 1,
        borderStyle: "solid",
        position: "absolute",
    },
    capIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    timePosition: {
        top: "50%",
        position: "absolute",
    },
    frameChildLayout: {
        width: 24,
        height: 24,
    },
    textText: {
        color: Color.blacks,
        textTransform: "capitalize",
        textAlign: "left",
    },
    rectanglePosition: {
        height: "37.5%",
        left: "0%",
        position: "absolute",
    },
    groupPosition: {
        height: "53.33%",
        left: "0%",
        position: "absolute",
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
    groupChildPosition1: {
        height: 13,
        top: 0,
        position: "absolute",
    },
    groupWrapperPosition: {
        top: "44.93%",
        height: "55.07%",
        bottom: "0%",
        position: "absolute",
    },
    borderPosition: {
        height: "100%",
        bottom: "0%",
        left: "0%",
        top: "0%",
    },
    groupChildPosition: {
        bottom: "68.42%",
        top: "10.53%",
        height: "21.05%",
        backgroundColor: Color.colorGray_100,
        left: "0%",
        position: "absolute",
    },
    parentFlexBox: {
        width: 320,
        flexDirection: "row",
        alignItems: "center",
    },
    invoicesTypo: {
        textAlign: "right",
        color: Color.colorDarkslategray_200,
        textTransform: "capitalize",
        fontSize: FontSize.header2_size,
    },
    vectorIconPosition: {
        top: 41,
        maxHeight: "100%",
        position: "absolute",
    },
    checkboxFlexBox: {
        justifyContent: "center",
        borderRadius: Border.br_11xs,
        alignItems: "center",
        backgroundColor: Color.neutral1,
    },
    bgLayout: {
        height: 16,
        width: 16,
    },
    frameLayout: {
        width: 296,
        flexDirection: "row",
    },
    dueDateTypo: {
        fontFamily: FontFamily.bodyTiny,
        fontWeight: "500",
        textAlign: "left",
    },
    overDueTypo: {
        lineHeight: 16,
        fontFamily: FontFamily.bodyTiny,
        fontWeight: "500",
        fontSize: FontSize.bodySmall_size,
    },
    wrapperBorder: {
        paddingVertical: Padding.p_11xs,
        paddingHorizontal: Padding.p_5xs,
        borderColor: Color.colorGainsboro_200,
        justifyContent: "center",
        borderRadius: Border.br_11xs,
        height: 24,
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.neutral1,
    },
    feb2023Clr: {
        color: Color.grey,
        textAlign: "left",
    },
    depositBorder: {
        padding: Padding.p_xs,
        marginLeft: 20,
        marginTop: 10,
        borderColor: Color.colorGainsboro_100,
        borderRadius: Border.br_9xs,
        width: 320,
        borderWidth: 1,
        borderStyle: "solid",
        alignItems: "center",
        backgroundColor: Color.neutral1,
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
        fontSize: FontSize.button2_size,
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
        width: "90.41%",
        right: "9.59%",
        borderRadius: 3,
        borderColor: Color.colorDarkslategray_100,
        opacity: 0.35,
        bottom: "0%",
        height: "100%",
        left: "0%",
        top: "0%",
    },
    capIcon: {
        height: "35.64%",
        width: "5.48%",
        top: "32.67%",
        bottom: "31.68%",
        left: "94.52%",
        opacity: 0.4,
        right: "0%",
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
        height: "3.05%",
        bottom: "96.95%",
        left: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        backgroundColor: Color.neutral1,
    },
    component4Child: {
        height: "97.96%",
        bottom: "2.04%",
        left: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        backgroundColor: Color.neutral1,
    },
    component4Item: {
        height: "2.04%",
        top: "97.96%",
        backgroundColor: Color.backgroundGrey,
        bottom: "0%",
        left: "0%",
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
        fontSize: FontSize.header2_size,
    },
    arrowLeftParent: {
        marginTop: -12.5,
        left: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    component4: {
        height: "4.98%",
        top: "3.05%",
        bottom: "91.97%",
        left: "0%",
        right: "0%",
        position: "absolute",
    },
    groupChild: {
        width: "35.89%",
        right: "64.11%",
        bottom: "0%",
        height: "100%",
        left: "0%",
        top: "0%",
    },
    groupItem: {
        width: "5.3%",
        top: "20%",
        right: "94.7%",
        bottom: "26.67%",
        backgroundColor: Color.colorLightcoral,
    },
    overdue: {
        left: "7.95%",
    },
    text: {
        left: "68.21%",
        fontSize: FontSize.bodySmall_size,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "0%",
        position: "absolute",
    },
    rectangleParent: {
        width: "93.21%",
        right: "6.79%",
        bottom: "62.5%",
        top: "0%",
    },
    groupInner: {
        width: "4.94%",
        top: "26.67%",
        right: "95.06%",
        bottom: "20%",
        backgroundColor: Color.colorGray_100,
    },
    unpaid: {
        left: "7.41%",
    },
    text1: {
        left: "63.58%",
        fontSize: FontSize.bodySmall_size,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        top: "0%",
        position: "absolute",
    },
    rectangleGroup: {
        top: "62.5%",
        bottom: "0%",
        right: "0%",
        width: "100%",
    },
    groupContainer: {
        height: "38.83%",
        width: "56.45%",
        top: "31.07%",
        bottom: "30.1%",
        left: "43.55%",
        right: "0%",
        position: "absolute",
    },
    groupParent: {
        height: "10.47%",
        width: "79.72%",
        top: "10.26%",
        right: "10.28%",
        bottom: "79.27%",
        left: "10%",
        position: "absolute",
    },
    rectangleView: {
        width: 240,
        left: 0,
        backgroundColor: Color.colorGray_100,
    },
    groupChild1: {
        left: 162,
        backgroundColor: Color.colorDarkgray,
        width: 78,
    },
    groupChild2: {
        left: 240,
        backgroundColor: "#d5d5d5",
        width: 47,
    },
    rectangleContainer: {
        left: 0,
        width: 287,
    },
    groupChild3: {
        width: "13.56%",
        right: "86.44%",
    },
    billed: {
        left: "20.34%",
    },
    text2: {
        top: "60.53%",
        fontSize: FontSize.bodySmall_size,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        left: "0%",
        position: "absolute",
    },
    rectangleParent1: {
        bottom: "0%",
        right: "0%",
        width: "100%",
        position: "absolute",
    },
    groupWrapper: {
        width: "20.56%",
        right: "79.44%",
        left: "0%",
    },
    groupChild4: {
        width: "12.7%",
        right: "87.3%",
    },
    unBilled: {
        left: "19.05%",
    },
    groupFrame: {
        width: "21.95%",
        right: "42.68%",
        left: "35.37%",
    },
    groupChild5: {
        width: "12.5%",
        right: "87.5%",
    },
    totalOs: {
        left: "18.75%",
    },
    groupWrapper1: {
        width: "22.3%",
        left: "77.7%",
        right: "0%",
    },
    groupView: {
        top: 226,
        left: 37,
        height: 69,
        width: 287,
        position: "absolute",
    },
    invoices: {
        fontFamily: FontFamily.button2,
        fontWeight: "600",
    },
    activity1: {
        fontFamily: FontFamily.header2,
    },
    activity: {
        marginLeft: 16,
    },
    shipments: {
        marginLeft: 16,
        fontFamily: FontFamily.header2,
    },
    invoicesParent: {
        top: 9,
        left: 20,
        height: 24,
        position: "absolute",
    },
    vectorIcon: {
        left: 0,
        width: 360,
    },
    groupChild6: {
        left: 0,
        top: 0,
        maxHeight: "100%",
        position: "absolute",
        width: 360,
    },
    groupChild7: {
        width: 65,
        left: 20,
    },
    frameParent: {
        height: 41,
        width: 360,
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
        flexDirection: "row",
    },
    item01: {
        color: Color.characterTitle85,
        marginLeft: 4,
        fontFamily: FontFamily.header2,
        textAlign: "left",
        fontSize: FontSize.button2_size,
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "center",
    },
    bg1: {
        borderColor: Color.colorGainsboro_200,
        height: 16,
        borderRadius: Border.br_11xs,
        borderWidth: 1,
        borderStyle: "solid",
        width: 16,
        backgroundColor: Color.neutral1,
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
        marginTop: 10,
        justifyContent: "space-between",
        width: '320',
        flexDirection: "row",
        alignItems: "center",
    },
    shcep23120010: {
        color: Color.colorRoyalblue_100,
        fontSize: FontSize.header2_size,
    },
    overDue: {
        color: "#ff4d4f",
        textAlign: "left",
    },
    bomMumbai: {
        lineHeight: 16,
        fontFamily: FontFamily.bodyTiny,
        fontWeight: "500",
        fontSize: FontSize.bodySmall_size,
    },
    bomMumbaiWrapper: {
        marginLeft: 6,
    },
    frameParent1: {
        marginTop: 4,
        flexDirection: "row",
    },
    frameContainer: {
        justifyContent: "space-between",
    },
    feb2023: {
        letterSpacing: 0.3,
        fontFamily: FontFamily.button2,
        fontWeight: "600",
        fontSize: FontSize.button2_size,
    },
    dueDate: {
        color: Color.grey2,
        marginTop: 4,
        fontSize: FontSize.bodySmall_size,
    },
    parent: {
        marginLeft: 51,
    },
    frameParent2: {
        marginTop: 16,
    },
    frameGroup: {
        alignSelf: "stretch",
    },
    unpaid1: {
        color: "#faad14",
        textAlign: "left",
    },
    deposit1: {
        marginTop: 12,
    },
    depositParent: {
        marginTop: 16,
    },
    frameView: {
        top: 320,
        left: 0,
        alignItems: "center",
        position: "absolute",
    },
    cutomerdetailscreen: {
        height: 984,
        overflow: "hidden",
        width: 360,
        backgroundColor: Color.neutral1,
    },
});

export default InvoicesTab;
