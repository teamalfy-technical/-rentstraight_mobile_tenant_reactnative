import { Text, TextInput, View } from "react-native";

interface InputProps extends TextInput {
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  type?: string;
}

type compProps = {
  input?: InputProps;
  label?: string;
  textColor?: string
  className?: string
  ph?: string
  bg?: string
};

export const CustomInput = ({ input, textColor, className, ph, bg }: compProps) => {
  return (
      <View className="my-4">
        <TextInput {...input} placeholder={ph} className={`bg-[${bg}] px-3 border-2 border-[#3F3F3F24] rounded-lg py-3 text-lg text-[${textColor}] ${className}`} selectionColor={textColor}/>
      </View>
  );
};
