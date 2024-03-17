import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
} from "../../GlobalStyles";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const Dashboard = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Home");
  console.log("data ", data);
  return (
    <>
      <ScrollView style={styles.dashboard}>
        <View style={styles.frameParent}>
          <View style={styles.helloKaranWrapper}>
            <Text style={styles.helloKaranTypo}>Hello, Karan!</Text>
          </View>
          <View
            style={[styles.businessAnalysis, styles.businessAnalysisLayout]}
          >
            <View style={[styles.labelHeaderParent, styles.parentFlexBox]}>
              <Text style={[styles.labelHeader, styles.overDue19Typo]}>
                Business Analysis
              </Text>
              <Image
                style={[styles.arrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../../assets/arrowleft.png")}
              />
            </View>
            <View style={styles.labelHeaderGroup}>
              <Text style={styles.labelHeader1}>
                Your net profit for this year is
              </Text>
              <Text style={[styles.labelHeader2, styles.item01Typo]}>
                ₹2,01,51,183
              </Text>
            </View>
            <View style={[styles.button33, styles.button33FlexBox]}>
              <View style={styles.content}>
                <Text
                  style={[styles.viewPl, styles.viewPlTypo]}
                >{`View P&L`}</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.businessAnalysis, styles.businessAnalysisLayout]}
          >
            <View style={[styles.labelHeaderParent, styles.parentFlexBox]}>
              <Text style={[styles.labelHeader, styles.overDue19Typo]}>
                Customer wise O/s Amount
              </Text>
              <Image
                style={[styles.arrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../../assets/arrowleft.png")}
              />
            </View>
            <View style={styles.depositInner}>
              <View style={styles.ellipseParent}>
                <Text style={[styles.text, styles.textPosition]}>
                  ₹7,92,46,000
                </Text>
                <Text style={[styles.totalOs, styles.paidTypo]}>Total O/S</Text>
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <View style={[styles.goldeePvtLtdParent, styles.parentFlexBox]}>
                  <Text style={[styles.goldeePvtLtd, styles.paidTypo]}>
                    Goldee Pvt Ltd
                  </Text>
                  <Text style={[styles.text1, styles.textTypo]}>
                    ₹2,01,51,183
                  </Text>
                </View>
                <View style={styles.rectangleParent}>
                  <View
                    style={[styles.rectangleView, styles.groupChildPosition1]}
                  />
                  <View style={styles.groupChild2} />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.goldeePvtLtdParent, styles.parentFlexBox]}>
                  <Text style={[styles.goldeePvtLtd, styles.paidTypo]}>
                    RLabs Pvt Ltd
                  </Text>
                  <Text style={[styles.text1, styles.textTypo]}>
                    ₹1,18,11,030
                  </Text>
                </View>
                <View style={styles.rectangleParent}>
                  <View
                    style={[styles.rectangleView, styles.groupChildPosition1]}
                  />
                  <View
                    style={[styles.groupChild4, styles.groupChildPosition1]}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.goldeePvtLtdParent, styles.parentFlexBox]}>
                  <Text style={[styles.goldeePvtLtd, styles.paidTypo]}>
                    Exco Tradings
                  </Text>
                  <Text style={[styles.text1, styles.textTypo]}>
                    ₹93,14,357
                  </Text>
                </View>
                <View style={styles.rectangleParent}>
                  <View
                    style={[styles.rectangleView, styles.groupChildPosition1]}
                  />
                  <View
                    style={[styles.groupChild6, styles.groupChildPosition1]}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.goldeePvtLtdParent, styles.parentFlexBox]}>
                  <Text style={[styles.goldeePvtLtd, styles.paidTypo]}>
                    Falcon Pvt Ltd
                  </Text>
                  <Text style={[styles.text1, styles.textTypo]}>
                    ₹78,67,036
                  </Text>
                </View>
                <View style={styles.rectangleParent}>
                  <View
                    style={[styles.rectangleView, styles.groupChildPosition1]}
                  />
                  <View
                    style={[styles.groupChild8, styles.groupChildPosition1]}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.goldeePvtLtdParent, styles.parentFlexBox]}>
                  <Text style={[styles.goldeePvtLtd, styles.paidTypo]}>
                    Others
                  </Text>
                  <Text style={[styles.text5, styles.textTypo]}>
                    ₹3,306,039
                  </Text>
                </View>
                <View style={styles.rectangleParent}>
                  <View
                    style={[styles.rectangleView, styles.groupChildPosition1]}
                  />
                  <View
                    style={[styles.groupChild10, styles.groupChildPosition1]}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.businessAnalysis, styles.businessAnalysisLayout]}
          >
            <View style={[styles.labelHeaderParent, styles.parentFlexBox]}>
              <Text style={[styles.labelHeader, styles.overDue19Typo]}>
                Total Invoices
              </Text>
              <Image
                style={[styles.arrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../../assets/arrowleft.png")}
              />
            </View>
            <View style={styles.labelHeaderGroup}>
              <View style={styles.groupWrapper}>
                <View style={[styles.groupParent, styles.statusBarPosition]}>
                  <Image
                    style={[styles.groupChild, styles.capIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/group-607.png")}
                  />
                  <Text style={[styles.text6, styles.textPosition]}>139</Text>
                </View>
              </View>
              <View style={styles.groupContainer}>
                <View style={styles.rectangleParentLayout}>
                  <View
                    style={[styles.groupChild11, styles.groupChildPosition]}
                  />
                  <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
                  <Text style={[styles.text7, styles.textTypo1]}>29</Text>
                </View>
                <View
                  style={[
                    styles.rectangleParent3,
                    styles.rectangleParentLayout,
                  ]}
                >
                  <View
                    style={[styles.groupChild12, styles.groupChildPosition]}
                  />
                  <Text style={[styles.paid, styles.paidTypo]}>Un Paid</Text>
                  <Text style={[styles.text7, styles.textTypo1]}>80</Text>
                </View>
                <View
                  style={[
                    styles.rectangleParent3,
                    styles.rectangleParentLayout,
                  ]}
                >
                  <View style={styles.groupChild13} />
                  <Text style={[styles.paid, styles.paidTypo]}>Over due</Text>
                  <Text style={[styles.text7, styles.textTypo1]}>30</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "Receivable" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Receivable")}
        >
          <Icon
            name="plus"
            size={30}
            color={
              activeTab == "Receivable" ? Color.colorRoyalblue_100 : "#123"
            }
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "Receivable" && styles.activeTab,
            ]}
          >
            Receivable
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Home" && styles.activeTab]}
          onPress={() => setActiveTab("Home")}
        >
          <Icon
            name="home"
            size={30}
            color={activeTab == "Home" ? Color.colorRoyalblue_100 : "#123"}
          />
          <Text
            style={[styles.tabText, activeTab === "Home" && styles.activeTab]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Payable" && styles.activeTab]}
          onPress={() => setActiveTab("Payable")}
        >
          <Icon
            name="minus"
            size={30}
            color={activeTab == "Payable" ? Color.colorRoyalblue_100 : "#123"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "Payable" && styles.activeTab,
            ]}
          >
            Payable
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    right: "0%",
    width: "100%",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  businessAnalysisLayout: {
    width: 320,
    marginTop: 16,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  overDue19Typo: {
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  item01Typo: {
    marginLeft: 4,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
  },
  button33FlexBox: {
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  viewPlTypo: {
    lineHeight: 16,
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
  },
  textPosition: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  paidTypo: {
    opacity: 0.6,
    fontSize: FontSize.bodySmall_size,
    color: Color.blacks,
    fontFamily: FontFamily.header2,
    textTransform: "capitalize",
  },
  textTypo: {
    color: Color.grey,
    fontFamily: FontFamily.bodyBold,
    fontWeight: "600",
  },
  groupChildPosition1: {
    borderRadius: Border.br_9xs,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "20%",
    top: "26.67%",
    right: "91.58%",
    width: "8.42%",
    height: "53.33%",
    left: "0%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
  },
  rectangleParentLayout: {
    width: 95,
    height: 15,
  },
  component5Position: {
    backgroundColor: Color.backgroundGrey,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChildLayout: {
    width: 24,
    height: 24,
  },
  helloKaranTypo: {
    opacity: 0.9,
    color: Color.blacks,
    fontFamily: FontFamily.header2,
    textTransform: "capitalize",
    fontSize: FontSize.header2_size,
    textAlign: "left",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  bg1Border: {
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_11xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  customerCardBorder: {
    padding: Padding.p_xs,
    width: 320,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
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
    textAlign: "left",
    fontFamily: FontFamily.bodyBold,
    fontWeight: "600",
    fontSize: FontSize.bodyBold_size,
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
    position: "absolute",
  },
  capIcon: {
    height: "35.64%",
    width: "5.48%",
    top: "32.67%",
    bottom: "31.68%",
    left: "94.52%",
    opacity: 0.4,
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
    height: "1.95%",
    bottom: "98.05%",
    left: "0%",
    top: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  helloKaranWrapper: {
    width: 319,
    justifyContent: "center",
  },
  labelHeader: {
    textTransform: "uppercase",
    color: Color.primarySecondaryGrey500,
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
  },
  arrowLeftIcon: {
    overflow: "hidden",
  },
  labelHeaderParent: {
    width: 296,
    alignItems: "center",
  },
  labelHeader1: {
    color: Color.primarySecondaryGrey500,
    fontFamily: FontFamily.header2,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
  },
  labelHeader2: {
    color: Color.grey,
    fontFamily: FontFamily.bodyBold,
    fontWeight: "600",
  },
  labelHeaderGroup: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  iconOutlinedSearch: {
    display: "none",
    overflow: "hidden",
  },
  viewPl: {
    marginLeft: 8,
    color: Color.primarySecondaryGrey500,
    fontFamily: FontFamily.header2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  button33: {
    borderColor: "#9ba5b8",
    paddingVertical: 4,
    borderRadius: Border.br_11xs,
    marginTop: 16,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  businessAnalysis: {
    padding: Padding.p_base,
    marginTop: 16,
    borderColor: Color.colorGainsboro_100,
    width: 320,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  groupChild: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  text: {
    marginTop: -13.5,
    marginLeft: -44.9,
    color: Color.grey,
    fontFamily: FontFamily.bodyBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.bodyBold_size,
  },
  totalOs: {
    marginTop: 9,
    marginLeft: -26.4,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ellipseParent: {
    width: "54.61%",
    right: "22.87%",
    left: "22.53%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  depositInner: {
    height: 160,
    width: 293,
    marginTop: 16,
  },
  goldeePvtLtd: {
    textAlign: "left",
  },
  text1: {
    letterSpacing: 0.2,
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
  },
  goldeePvtLtdParent: {
    width: 293,
  },
  rectangleView: {
    backgroundColor: Color.colorWhitesmoke_100,
    right: "0%",
    width: "100%",
  },
  groupChild2: {
    width: "75.09%",
    right: "24.91%",
    borderRadius: 8,
    backgroundColor: "#1e4dd9",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 6,
    height: 8,
    width: 293,
  },
  groupChild4: {
    width: "55.63%",
    right: "44.37%",
    backgroundColor: "#40a9ff",
  },
  frameView: {
    marginTop: 16,
  },
  groupChild6: {
    width: "43.34%",
    right: "56.66%",
    backgroundColor: "#f759ab",
  },
  groupChild8: {
    width: "31.4%",
    right: "68.6%",
    backgroundColor: "#9254de",
  },
  text5: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
    textTransform: "capitalize",
    color: Color.grey,
  },
  groupChild10: {
    width: "24.23%",
    right: "75.77%",
    backgroundColor: "#ffec3d",
  },
  frameGroup: {
    width: 293,
    marginTop: 16,
  },
  text6: {
    marginTop: -10.5,
    marginLeft: -16.5,
    fontSize: 18,
    color: Color.blacks,
    textTransform: "capitalize",
    fontFamily: FontFamily.bodyBold,
    fontWeight: "600",
  },
  groupParent: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupWrapper: {
    width: 127,
    height: 127,
  },
  groupChild11: {
    backgroundColor: "#52c41a",
  },
  paid: {
    left: "12.63%",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  text7: {
    left: "83.16%",
    color: Color.blacks,
    textTransform: "capitalize",
    fontFamily: FontFamily.bodyBold,
    fontWeight: "600",
    top: "0%",
    position: "absolute",
  },
  groupChild12: {
    backgroundColor: "#faad14",
  },
  rectangleParent3: {
    marginTop: 8,
  },
  groupChild13: {
    top: "20%",
    bottom: "26.67%",
    backgroundColor: Color.colorTomato,
    right: "91.58%",
    width: "8.42%",
    height: "53.33%",
    left: "0%",
    position: "absolute",
  },
  groupContainer: {
    marginLeft: 40,
  },
  frameParent: {
    // top: 87,
    // left: 20,
    alignItems: "center",
    // position: "absolute",
  },
  component5Child: {
    top: "-2.08%",
    bottom: "2.08%",
    height: "100%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component5Item: {
    height: "2.08%",
    top: "97.92%",
    bottom: "0%",
  },
  component5Inner: {
    top: 0,
    height: 1,
  },
  arrowLeftIcon3: {
    height: 24,
    overflow: "hidden",
  },
  allCustomers: {
    marginLeft: 10,
  },
  arrowLeftParent: {
    marginTop: -13,
    left: 18,
    flexDirection: "row",
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  component5: {
    height: 48,
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
    position: "absolute",
  },
  checkIcon: {
    marginTop: -3,
    marginLeft: -5.3,
    width: 11,
    zIndex: 2,
    height: 8,
    top: "50%",
  },
  checkboxInput: {
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  item01: {
    color: Color.characterTitle85,
    fontFamily: FontFamily.header2,
  },
  bg1: {
    height: 16,
    width: 16,
  },
  checkboxInput1: {
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignItems: "center",
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
    width: 320,
    alignItems: "center",
  },
  goldeePvtLtd1: {
    color: Color.colorRoyalblue,
    fontSize: FontSize.header2_size,
    fontWeight: "500",
    textAlign: "left",
  },
  overDue19: {
    color: Color.colorTomato,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
  },
  overDue19Wrapper: {
    paddingVertical: Padding.p_11xs,
    height: 24,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: 4,
    flexDirection: "row",
  },
  frameParent6: {
    width: 296,
  },
  text10: {
    letterSpacing: 0.3,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
  },
  totalOsAmount: {
    color: Color.grey2,
    marginTop: 4,
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
  },
  group: {
    marginLeft: 51,
  },
  frameParent7: {
    width: 296,
    marginTop: 16,
    flexDirection: "row",
  },
  frameParent5: {
    alignSelf: "stretch",
  },
  customerCard1: {
    marginTop: 12,
  },
  component5Parent: {
    top: 935,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  component4Icon: {
    marginLeft: -180,
    top: 30,
    height: 49,
    width: 360,
  },
  dashboard: {
    flex: 1,
    marginTop: 45,
    height: 1542,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    marginBottom: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: 60,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 5,
    paddingTop: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
  },
  activeTab: {
    color: Color.colorRoyalblue_100,
  },
});

export default Dashboard;
