import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Flex, IconButton } from "native-base";
import { SearchBar } from "react-native-elements";
const HeaderSearch = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const route = useRoute();
  const navigation = useNavigation();
  const [job, setJob] = useState(route.params.job);
  return (
    <View style={styles.headerView}>
      <Flex direction="row">
        <View style={styles.backIconButton}>
          <IconButton
            onPress={() => navigation.goBack()}
            icon={
              <Ionicons
                name="chevron-back-circle-outline"
                color={"black"}
                size={23}
              />
            }
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.push("SearchScreen")}
        >
          <View>
            <SearchBar
              editable={false}
              inputContainerStyle={{
                height: "auto",
                backgroundColor: "#f0f0f0",
                maxWidth: "100%",
                borderRadius: 20,
              }}
              containerStyle={{
                height: "auto",
                borderBottomWidth: 0,
                borderTopWidth: 0,
                backgroundColor: "transparent",
                borderRadius: 20,
                width: windowWidth - 50,
              }}
              placeholderTextColor={"gray"}
              placeholder={"Tìm từ khóa"}
            />
          </View>
        </TouchableWithoutFeedback>
      </Flex>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center",
  },
  headerView: {
    margin: "auto",
    marginTop: 32,
    marginHorizontal: 8,
  },
  searchBarStyle: {
    maxWidth: "100%",
    backgroundColor: "#f0f0f0",
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
    marginTop: 12,
  },
});
export default HeaderSearch;
