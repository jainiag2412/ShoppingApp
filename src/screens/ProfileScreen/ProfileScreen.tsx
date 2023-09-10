import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { useNavigation } from "@react-navigation/native";
import NoScaleText from "../../components/common/NoScaleText";
import Header from "../../components/common/Header";
import { styles } from "./ProfileScreen-style";
import { fonts } from "../../assets/constants/values";
import { moderateScale } from "../../assets/constants/scale";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <Header
        leftIcon={{
          name: "arrow-left",
          bgColor: colours.gray[300],
          onPress: () => navigation.goBack(),
        }}
      />
      <View style={styles.centerView}>
        <View style={[styles.roundView]}>
          <Icon name={"user"} size={moderateScale(100)} color={colours.black} />
        </View>
        <NoScaleText style={styles.userName}>Lotterywest User</NoScaleText>
        <NoScaleText style={styles.userName}>lotterywest@gmail.com</NoScaleText>
      </View>
    </View>
  );
};

export default ProfileScreen;
