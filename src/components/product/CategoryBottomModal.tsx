import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { fonts, values } from "../../assets/constants/values";
import colours from "../../assets/constants/colours";
import NoScaleText from "../common/NoScaleText";
import { moderateScale } from "../../assets/constants/scale";

interface IBottomModal {
  visible: boolean;
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  attributeValues: string[];
  attributeType: "COLOR" | "SIZE";
  selectedAttribute?: string;
  onSelectAttribute?: (string) => void;
}

function CategoryBottomModal(props: IBottomModal) {
  return (
    <Modal isVisible={props.visible}>
      <View style={[styles.bottomSheet, { height: values.deviceHeight * 0.4 }]}>
        <View style={styles.modalMain}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => props.setModalVisible(false)}
          >
            <Icon
              name={"close"}
              size={fonts.mediumSmallFont}
              color={colours.black}
            />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            {props.attributeValues.map((value, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => props.onSelectAttribute(value)}
                >
                  <View style={styles.attributesValueView}>
                    <NoScaleText>{value}</NoScaleText>

                    {props.selectedAttribute === value && (
                      <Icon
                        name={"check"}
                        size={fonts.mediumSmallFont}
                        color={colours.black}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default CategoryBottomModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: colours.purple,
    width: "100%",
  },
  modalMain: {
    flex: 0,
    width: "100%",
    justifyContent: "space-between",
  },
  attributesValueView: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: moderateScale(50),
    backgroundColor: colours.gray[200],
    borderRadius: moderateScale(25),
    alignItems: "center",
    paddingHorizontal: moderateScale(15),
    marginTop: moderateScale(15),
  },
  closeIcon: {
    alignItems: "flex-end",
  },
});
