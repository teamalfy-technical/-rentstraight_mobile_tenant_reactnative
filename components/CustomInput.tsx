import { TextInput, View, TextInputProps } from "react-native";
import { ReactNode } from "react";

type compProps = {
  label?: string;
  textColor?: string;
  className?: string;
  ph?: string;
  bg?: string;
  type?: "text" | "numeric" | "decimal" | "email" | "tel" | "url";
  iconLeft?: ReactNode; 
  iconRight?: ReactNode; 
  secureEntry?: boolean;
  change?: (text: string) => void; // Updated to accept text
  blur?: () => void;
  value?: string;
};

export const CustomInput = ({ textColor, className, ph, bg, type, iconLeft, iconRight, secureEntry, change, blur, value }: compProps) => {
  return (
    <View className="my-4 flex flex-row items-center border-2 border-[#3F3F3F24] rounded-lg ">
      {iconLeft && (
        <View className="mr-2">
          {iconLeft}
        </View>
      )}
      <TextInput
        placeholder={ph}
        inputMode={type}
        style={{
          backgroundColor: bg,
          color: textColor,
        }}
        className={`flex-1 px-3 py-3 text-lg ${className}`}
        selectionColor={textColor}
        secureTextEntry={secureEntry}
        onChangeText={change} // Correctly passes the text value
        onBlur={blur}
        value={value}
      />
      {iconRight && (
        <View className="mr-2">
          {iconRight}
        </View>
      )}
    </View>
  );
};