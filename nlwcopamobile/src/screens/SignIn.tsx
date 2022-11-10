import { Center, Icon, Text } from "native-base";

import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";

import Logo from "../assets/logo.svg";
import GoogleLogo from "../assets/google-logo.svg";

export const SignIn = () => {
  const { signIn, user } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" px={7}>
      <Logo width={212} height={40} />

      <Button
        title="Entrar com Google"
        leftIcon={
          <Icon color="white" size={5}>
            <GoogleLogo width={20} height={20} />
          </Icon>
        }
        type="SECONDARY"
        mt={12}
        onPress={signIn}
        // isLoading
      />

      <Text mt={4} color="gray.200" fontSize="sm" textAlign="center">
        Não utilizamos nenhuma informação além{"\n"} do seu e-mail para criação
        de sua conta.
      </Text>
    </Center>
  );
};
