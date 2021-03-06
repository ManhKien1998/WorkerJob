import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, Icon } from "native-base";
import posterImg from "../assets/posterWJ2.jpg";

const SearchField = (props) => {
  const navigation = useNavigation();
  const [background, setBackground] = useState("#f0f0f0");
  const change = (textCheck) => {
    console.log(textCheck);
  };
  const blur = () => {
    setBackground("#02b2b9");
  };
  return (
    <View style={styles.searchField}>
      <Image style={styles.backgroundShape} source={posterImg}></Image>
      <TouchableWithoutFeedback onPress={() => navigation.push("SearchScreen")}>
        <View style={styles.inputStyle}>
          <Input
            editable={false}
            w={500}
            pt={4}
            pb={4}
            size="lg"
            borderWidth={0}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="search" />}
                size={8}
                ml="2"
                color="#02b2b9"
              />
            }
            placeholder="Tìm từ khóa"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  searchField: {
    flex: 1,
    marginTop: 33,
    backgroundColor: "transparent",
    alignItems: "center",
    width: "100%",
    height: 200,
    paddingLeft: 14,
    paddingRight: 14,
  },
  inputStyle: {
    marginTop: 135,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    maxWidth: "100%",
  },
  backgroundShape: {
    backgroundColor: "#02b2b9",
    width: 500,
    height: 160,
  },
});
export default SearchField;
