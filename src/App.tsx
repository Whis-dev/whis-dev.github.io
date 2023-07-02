import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'github-markdown-css/github-markdown-dark.css';

import Wrapper from './container/wrapper';

const theme = extendTheme({
	config: {
		initialColorMode: 'dark',
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Wrapper />
		</ChakraProvider>
	);
}

export default App;
