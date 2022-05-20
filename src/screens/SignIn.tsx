import React, { useState } from 'react';
import {
  Center,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
} from 'native-base';

import { CreateAccountModal } from '../components/CreateAccountModal';
import { StatusBar } from 'expo-status-bar';

export function SignIn() {
  const [createAccountModal, setCreateAccountModal] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      height="full"
      _light={{ bg: 'trueGray.100' }}
      _dark={{ bg: 'muted.900' }}
    >
      <StatusBar style={colorMode == 'light' ? 'dark' : 'light'} />

      <Heading _light={{ color: 'muted.800' }} _dark={{ color: 'light.300' }}>
        SigIn
      </Heading>

      <Stack
        w={{ base: '100%', md: '25%' }}
        px="16"
        space="4"
        alignItems="center"
        mt="8"
      >
        <FormControl>
          <FormControl.Label color="muted.600">E-mail</FormControl.Label>
          <Input placeholder="Your E-mail" type="text" mt="2" />
        </FormControl>

        <FormControl>
          <FormControl.Label color="muted.600">Senha</FormControl.Label>
          <Input placeholder="Your password" type="password" mt="2" />
        </FormControl>

        <Button width="80%" bg="info.600" shadow={2}>
          SignIn
        </Button>
        <Button
          width="80%"
          bg="info.900"
          shadow={2}
          onPress={() => setCreateAccountModal(true)}
        >
          Create account
        </Button>
      </Stack>

      <CreateAccountModal
        showModal={createAccountModal}
        closeModal={() => setCreateAccountModal(false)}
      />

      <HStack alignItems="center" mt="10" space="3">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === 'light'}
          onToggle={toggleColorMode}
          aria-accessibilityLabel={
            colorMode === 'light'
              ? 'Troque para o tema escuro'
              : 'troque para o tema claro'
          }
        />
        <Text>Light</Text>
      </HStack>
    </Center>
  );
}
