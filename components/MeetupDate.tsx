import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "react-native-ui-datepicker";
import DatePicker from "react-native-modern-datepicker";
import dayjs from "dayjs";
import CustomButton from "./CustomButton";
import { AntDesign } from "@expo/vector-icons";

const MeetupDate = ({ show, setShow }: any) => {
  const [date, setDate] = useState(dayjs());

  return (
    <Modal animationType="slide" transparent visible={show}>
      <View style={styles.overlayContainer}>
        <View style={styles.container} className="space-y-5">
            <Pressable
              onPress={() => setShow(!show)}
              className="items-end w-full"
            >
             <AntDesign name="closesquareo" size={30} color="black" />
            </Pressable>
          <DatePicker
            mode="calendar"
            onSelectedChange={(date) => setDate(date)}
          />

          <View className="flex-row justify-between items-center w-full">
            <View />

            <View className="w-[50%]">
              <CustomButton lab="Schedule" bg="#F47D7B" textColor="#fff" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MeetupDate;

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
  },
  container: {
    backgroundColor: "#F5FCFF",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
