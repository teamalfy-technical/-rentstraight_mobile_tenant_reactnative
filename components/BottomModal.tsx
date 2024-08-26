import { View, Text, Modal, Image, StyleSheet, ModalProps } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { MotiView } from "moti";
// @ts-ignore
import logo from "@/assets/images/logo.png";

type Props = ModalProps & {
  children?: ReactNode;
  loading: boolean;
  text: string;
    open?: boolean
};

const BottomModal = ({
  children,
  text = "is confirming your verification code",
  loading,
  //   onClose,
  open,
  ...modalProps
}: Props) => {
  const [showCheckmark, setShowCheckmark] = useState(false);
  const onClose = () => {
    loading = false;
  };

  useEffect(() => {
    if (!loading) {
      // Show checkmark for 4 seconds after loading is done
      setShowCheckmark(true);
      const timer = setTimeout(() => {
        setShowCheckmark(false);
        onClose(); // Close the modal after showing the checkmark
      }, 4000);

      return () => clearTimeout(timer); // Clear the timer on unmount
    }
  }, [loading, onClose]);

  const renderIcon = () => {
    if (loading) {
      return (
        <View className="flex-1 justify-center items-center">
          <MotiView
            from={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            transition={{
              type: "timing",
              loop: true,
              repeatReverse: false,
              duration: 2000,
            }}
            style={{ width: 50, height: 50 }} // Ensuring MotiView has consistent dimensions
          >
            <Image
              source={require("@/assets/images/loader.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </MotiView>
        </View>
      );
    } else if (showCheckmark) {
      return (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("@/assets/images/check.png")}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
        </View>
      );
    }
    return null;
  };

  return (
    <Modal
      visible={open}
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
      {...modalProps}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={styles.logoContainer}
            className="space-x-5 font-semibold"
          >
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.modalText} className="font-mont">
              RentStraight
            </Text>
          </View>
          {text && (
            <Text className="text-[#111111] text-[36px] font-mont my-5">
              {text}
            </Text>
          )}

          <View className="flex-1 items-end p-5">{renderIcon()}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 65,
  },
  modalText: {
    fontSize: 32,
    color: "#111111",
  },
});

export default BottomModal;
