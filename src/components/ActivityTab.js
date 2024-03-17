import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
const ActivityTab = () => {
  return (
    <>
      {/* <View style={styles.frameView}>
                    <View style={styles.frameChild} />
                    <Image
                        style={[styles.frameItem, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-2.png")}
                    />
                    <View style={styles.frameChild} />
                    <Image
                        style={[styles.frameItem, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-2.png")}
                    />
                    <View style={styles.frameChild} />
                    <Image
                        style={[styles.frameItem, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-2.png")}
                    />
                    <View style={styles.frameChild} />
                    <Image
                        style={[styles.frameItem, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-2.png")}
                    />
                    <View style={styles.frameChild} />
                    <Image
                        style={[styles.frameItem, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-2.png")}
                    />
                </View> */}
      <View style={styles.contentParent}>
        <View style={styles.content}>
          <Text style={[styles.jvnda00532223, styles.jvnda00532223Typo]}>
            #JVNDA0053/22-23
          </Text>
          <Text style={[styles.sharedOnEmail, styles.sharedOnEmailTypo]}>
            shared on email
          </Text>
          <Text style={[styles.amitskyoceancom, styles.sharedOnEmailTypo]}>
            amit@skyocean.com
          </Text>
          <Text style={[styles.sharedOnEmail, styles.sharedOnEmailTypo]}>
            at 11:03AM 12 Feb
          </Text>
        </View>
        <View style={[styles.content1, styles.contentFlexBox]}>
          <Text style={[styles.reminderSentOn, styles.jvnda00532223Typo]}>
            Reminder sent on
          </Text>
          <Text style={[styles.jvnda005322231, styles.at1000am12Typo]}>
            #JVNDA0053/22-23
          </Text>
          <Text style={[styles.at1000am12, styles.at1000am12Typo]}>
            at 10:00AM 12 Feb
          </Text>
        </View>
        <View style={[styles.content1, styles.contentFlexBox]}>
          <Text style={[styles.reminderSentOn, styles.jvnda00532223Typo]}>
            Reminder sent on
          </Text>
          <Text style={[styles.jvnda005322231, styles.at1000am12Typo]}>
            #JVNDA0053/22-23
          </Text>
          <Text style={[styles.at1000am12, styles.at1000am12Typo]}>
            at 10:00AM 9 Feb
          </Text>
        </View>
        <View style={[styles.content3, styles.contentFlexBox]}>
          <Text style={[styles.jvnda00532223, styles.jvnda00532223Typo]}>
            #NDAIN2550/22-23
          </Text>
          <Text style={[styles.sharedOnEmail, styles.sharedOnEmailTypo]}>
            shared on WhatsApp
          </Text>
          <Text style={[styles.amitskyoceancom, styles.sharedOnEmailTypo]}>
            +91-2756567565
          </Text>
          <Text style={[styles.sharedOnEmail, styles.sharedOnEmailTypo]}>
            at 11:03AM 12 Feb
          </Text>
        </View>
        <View style={[styles.content1, styles.contentFlexBox]}>
          <Text style={[styles.reminderSentOn, styles.jvnda00532223Typo]}>
            Reminder sent on
          </Text>
          <Text style={[styles.jvnda005322231, styles.at1000am12Typo]}>
            #JVNDA0053/22-23
          </Text>
          <Text style={[styles.at1000am12, styles.at1000am12Typo]}>
            at 10:00AM 11 Feb
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    top: "0%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  groupChildLayout1: {
    width: "100%",
    right: "0%",
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
  textTypo: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
  },
  groupPosition1: {
    left: 0,
    width: 360,
  },
  frameGroupPosition: {
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  invoicesTypo: {
    opacity: 0.5,
    textAlign: "right",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.header2,
    textTransform: "capitalize",
    fontSize: FontSize.header2_size,
  },
  groupPosition: {
    top: 48,
    maxHeight: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  jvnda00532223Typo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.button2_size,
  },
  sharedOnEmailTypo: {
    marginLeft: 4,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.button2_size,
  },
  contentFlexBox: {
    marginTop: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  at1000am12Typo: {
    marginLeft: 8,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.button2_size,
  },
  text1Position: {
    left: "50%",
    position: "absolute",
  },
  groupPosition2: {
    height: "100%",
    bottom: "0%",
    top: "0%",
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
  time: {
    marginTop: -10,
    width: "120%",
    letterSpacing: 0,
    color: Color.colorDarkslategray_100,
    display: "flex",
    height: 20,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.button2,
    fontWeight: "600",
    lineHeight: 20,
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
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
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
    overflow: "hidden",
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
    height: "4.69%",
    bottom: "95.31%",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  component4Child: {
    height: "97.96%",
    bottom: "2.04%",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
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
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
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
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  activity1: {
    textAlign: "right",
    color: Color.colorDarkslategray_200,
    textTransform: "capitalize",
    fontSize: FontSize.header2_size,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
  },
  activity: {
    marginLeft: 16,
  },
  shipments: {
    marginLeft: 16,
  },
  invoicesParent: {
    top: 13,
    width: 320,
    height: 24,
    alignItems: "center",
  },
  groupChild: {
    left: 0,
    width: 360,
  },
  groupItem: {
    top: 0,
    maxHeight: "100%",
    position: "absolute",
  },
  groupInner: {
    left: 95,
    width: 65,
  },
  frameParent: {
    top: 326,
    height: 48,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  frameItem: {
    height: 48,
  },
  frameView: {
    paddingTop: Padding.p_7xs,
    alignItems: "center",
  },
  jvnda00532223: {
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
  },
  sharedOnEmail: {
    fontFamily: FontFamily.header2,
    lineHeight: 20,
  },
  amitskyoceancom: {
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
  },
  content: {
    flexWrap: "wrap",
    width: 304,
    flexDirection: "row",
    alignItems: "center",
  },
  reminderSentOn: {
    fontFamily: FontFamily.header2,
    lineHeight: 20,
  },
  jvnda005322231: {
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
  },
  at1000am12: {
    fontFamily: FontFamily.header2,
    lineHeight: 20,
  },
  content1: {
    width: 280,
  },
  content3: {
    width: 304,
  },
  contentParent: {
    marginLeft: 12,
    width: 304,
  },
  frameGroup: {
    top: 394,
  },
  groupIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text1: {
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
  groupParent: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupWrapper: {
    width: 127,
    height: 127,
  },
  rectangleView: {
    width: "5.23%",
    right: "94.77%",
    backgroundColor: "#faad14",
    left: "0%",
    position: "absolute",
  },
  unPaid: {
    left: "7.84%",
  },
  text2: {
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
  text3: {
    left: "55.63%",
    letterSpacing: 0.2,
    color: Color.grey,
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
  groupContainer: {
    marginLeft: 25,
  },
  frameParent2: {
    width: 320,
    flexDirection: "row",
    alignItems: "center",
  },
  groupChild2: {
    borderRadius: 4,
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
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
  text4: {
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
  frameParent3: {
    width: 288,
    justifyContent: "space-between",
    marginTop: 12,
    flexDirection: "row",
  },
  groupParent1: {
    marginTop: 26,
    alignItems: "center",
  },
  frameParent1: {
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
  cutomerdetailscreenActivity: {
    height: 640,
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.white,
  },
});

export default ActivityTab;
