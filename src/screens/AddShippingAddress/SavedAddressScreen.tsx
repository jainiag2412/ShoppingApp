import React from "react";
import { FlatList, View } from "react-native";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./SavedScreen-style";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/common/Header";
import NoScaleText from "../../components/common/NoScaleText";
import BottomButton from "../../components/common/BottomButton";
import { useDispatch, useSelector } from "react-redux";
import { getSavedAddresses } from "../../redux/selectors/checkoutSelector";
import { ShippingAddressBox } from "../../components/checkout/ShippingAddressBox";
import { setSelectedAddress } from "../../redux/slices/checkoutSlice";
import { IAddress } from "../../types/CheckoutTypes";

type SavedAddressScreenNavType = StackNavigationProp<
  RootStackParamList,
  "SavedAddressScreen"
>;

const SavedAddressScreen = () => {
  const navigation = useNavigation<SavedAddressScreenNavType>();
  const savedAddresses = useSelector(getSavedAddresses);
  const dispatch = useDispatch();

  const handleAddressSelect = (item: IAddress) => {
    dispatch(setSelectedAddress(item));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <Header
        leftIcon={{
          name: "arrow-left",
          bgColor: colours.gray[300],
          onPress: () => navigation.goBack(),
        }}
        headingTitle="Address"
      />
      <NoScaleText style={styles.chooseAddressHeading}>
        Select Address:
      </NoScaleText>
      <FlatList
        data={savedAddresses}
        renderItem={({ item, index }) => (
          <ShippingAddressBox
            item={item}
            index={index}
            onPress={(item) => handleAddressSelect(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.flatLst}
      />
      <BottomButton
        disabled={false}
        style={{ justifyContent: "center" }}
        onPress={() => navigation.navigate("AddShippingAddress")}
      >
        <NoScaleText style={styles.saveBtnTxt}>Add new address</NoScaleText>
      </BottomButton>
    </View>
  );
};

export default SavedAddressScreen;
