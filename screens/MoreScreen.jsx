import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  VStack,
  FormControl,
  Input,
  IconButton,
  Flex,
  TextArea,
  Spacer,
  Button,
  Modal,
  HStack,
  Image,
  NativeBaseProvider,
  Radio,
  Divider,
} from "native-base";
import LabelSetting from "../components/LabelSetting";
import Finder from "../assets/user.png";
import LoginScreen from "react-native-login-screen";
const MoreScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (route.params !== undefined) {
      setIsLogin(route.params.isLogin);
    }
  }, [route.params]);
  return (
    <View
      style={{
        paddingTop: 40,
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            height: 250,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLogin ? (
            <View style={{ width: 150, height: 150 }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#f0f0f0",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Image
                    alt="avata"
                    source={Finder}
                    style={{ width: 70, height: 70 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 24,
                    color: "black",
                    fontFamily: "OpenSans-Bold",
                  }}
                >
                  M???nh Ki??n
                </Text>
                <View>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate("ProfileScreen");
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 8,
                        fontSize: 12,
                        color: "gray",
                        fontFamily: "OpenSans-Regular",
                      }}
                    >
                      Ch???nh s???a t??i kho???n
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          ) : (
            <View style={{ width: 150, height: 150 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("LoginScreenn");
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "#f0f0f0",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 50,
                    }}
                  >
                    <Image
                      alt="avata"
                      source={Finder}
                      style={{ width: 70, height: 70 }}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      fontSize: 24,
                      color: "black",
                      fontFamily: "OpenSans-Bold",
                    }}
                  >
                    ????ng nh???p
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>

        <Divider thickness={5} mb={5} />
        <LabelSetting reasonText="?????a ch??? c???a t??i" />
        <LabelSetting reasonText="???? l??u" />
        <Divider thickness={4} mb={5} mt={-4} />
        <LabelSetting reasonText="Li??n h???" />
        <LabelSetting reasonText="Ph???n h???i, b??o c??o" />
        <LabelSetting reasonText="C??u h???i th?????ng g???p" />
        <LabelSetting reasonText="C?? ch??? qu???n l??" />
        <LabelSetting reasonText="Ch??nh s??ch b???o m???t" />
        <LabelSetting reasonText="??i???u kho???n s??? d???ng" />
        <LabelSetting reasonText="Li??n h???" />
        <Flex direction="row">
          <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14 }}>
            Phi??n b???n ???ng d???ng
          </Text>
          <Spacer />
          <Text>1.0.0</Text>
        </Flex>
        <Divider my="4" thickness={5} />
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setShow(true);
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                fontSize: 15,
                paddingBottom: 16,
                color: "red",
              }}
            >
              ????ng xu???t
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>

      <Modal isOpen={show} size="lg" onClose={() => setShow(false)}>
        <Modal.Content maxWidth="250">
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={{ fontSize: 20, fontFamily: "OpenSans-Bold" }}>
              ????ng xu???t
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text>B???n th???c s??? mu???n ????ng xu???t?</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="rgb(2, 178, 185)"
                onPress={() => {
                  setShow(false);
                }}
              >
                H???y
              </Button>

              <Button
                activeOpacity={1}
                bgColor="transparent"
                onPress={() => {
                  setShow(false);
                  navigation.navigate("LoginScreenn");
                }}
              >
                <Text style={{ fontFamily: "OpenSans-Bold", color: "red" }}>
                  ?????ng ??
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default MoreScreen;
