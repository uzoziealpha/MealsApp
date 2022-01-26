// users entry screen to register or login
import React from "react";
import { AccountBackground, AccountContainer, AccountCover, AuthButton  } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Title } from "react-native-paper";




export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
     <AccountCover/>
     <Title>Meals To Go</Title>
     <AccountContainer>
         <AuthButton
           icon="lock-open-outline"
           mode="contained"
           onPress={() => navigation.navigate("Login")}
         >
           Login 
         </AuthButton>
         <Spacer  size="large">
         <AuthButton
           icon="email"
           mode="contained"
           onPress={() => navigation.navigate("Register")}
         >
           Register
         </AuthButton>
         </Spacer>
     </AccountContainer>
  </AccountBackground>
  );
}